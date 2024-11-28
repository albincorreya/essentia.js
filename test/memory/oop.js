(async function main() {
  const mfccModule = await MFCC_WASM_MODULE();
  let frameGenOO, spectrumOO, mfccOO;
  let initialised = false;

  function initAlgos() {
    mfccModule.bootEssentia();
    console.log('mfccModule::init successfully');
    frameGenOO = new mfccModule.FrameGenerator(FRAME_SIZE, HOP_SIZE);
    spectrumOO = new mfccModule.Spectrum(FRAME_SIZE);
    mfccOO = new mfccModule.MFCC();
    initialised = true;
  }

  const FRAME_SIZE = 2048;
  const HOP_SIZE = 1024;

  const ctx = new AudioContext();
  // flag to clean up memory (or not): should affect the number of HEAP resize msg shown on console
  let deleteObjects = false;
  let noiseArray, noiseTypedArray;
  let results = [];

  function createSourceArray() {
    // create random sound array
    noiseArray = Array(ctx.sampleRate*60*5).fill(0).map( _ => Math.random()*2 - 1);
    noiseTypedArray = Float32Array.from( noiseArray );
  }

  function getMFCC() {
    if (!initialised) initAlgos();

    const framesOO = frameGenOO.compute(noiseTypedArray);

    for (var i = 0; i < framesOO.size(); i++){
      const spectrumVector = spectrumOO.compute( framesOO.get(i) ).spectrum;
      const bandsVector = mfccOO.compute(spectrumVector).bands;
      results.push( mfccModule.vectorToArray(bandsVector) );
      if (deleteObjects) {
        spectrumVector.delete();
        bandsVector.delete()
      }
    }

    console.log("getMFCC done");
    
    if (deleteObjects) {
      framesOO.delete();
      frameGenOO.delete();
      spectrumOO.delete();
      mfccOO.delete();
      noiseArray = [];
      noiseTypedArray = [];
      results = [];
      console.log("getMFCC cleared objects");
      initialised = false;
    }
  }

  // assign button listeners
  const launchButton = document.querySelector("#oop-launch-test");
  launchButton.addEventListener("click", () => {
    createSourceArray();
    getMFCC();
  });

  const clearMemCheckbox = document.querySelector("#oop-clear-objects");
  clearMemCheckbox.addEventListener("change", () => deleteObjects = clearMemCheckbox.checked );

})()