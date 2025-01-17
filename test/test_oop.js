const { expect } = require('chai');
const EssentiaWASM = require('../dist/essentia-wasm.umd.js');
const {
  ready,
  arrayToVector,
  vectorToArray,
  FrameGenerator,
  MonoMixer,
  LoudnessEBUR128,
  AfterMaxToBeforeMaxEnergyRatio,
  AllPass,
  AudioOnsetsMarker,
  AutoCorrelation,
  BFCC,
  BPF,
  BandPass,
  BandReject,
  BarkBands,
  BeatTrackerDegara,
  BeatTrackerMultiFeature,
  Beatogram,
  BeatsLoudness,
  BinaryOperator,
  BinaryOperatorStream,
  BpmHistogramDescriptors,
  BpmRubato,
  CentralMoments,
  Centroid,
  ChordsDescriptors,
  ChordsDetection,
  ChordsDetectionBeats,
  ChromaCrossSimilarity,
  Chromagram,
  ClickDetector,
  Clipper,
  CoverSongSimilarity,
  Crest,
  CrossCorrelation,
  CrossSimilarityMatrix,
  CubicSpline,
  DCRemoval,
  DCT,
  Danceability,
  Decrease,
  Derivative,
  DerivativeSFX,
  DiscontinuityDetector,
  Dissonance,
  DistributionShape,
  Duration,
  DynamicComplexity,
  ERBBands,
  EffectiveDuration,
  Energy,
  EnergyBand,
  EnergyBandRatio,
  Entropy,
  Envelope,
  EqualLoudness,
  Flatness,
  FlatnessDB,
  FlatnessSFX,
  Flux,
  FrameCutter,
  FrameToReal,
  FrequencyBands,
  GFCC,
  GapsDetector,
  GeometricMean,
  HFC,
  HPCP,
  HarmonicBpm,
  HarmonicPeaks,
  HighPass,
  HighResolutionFeatures,
  Histogram,
  HprModelAnal,
  HpsModelAnal,
  IDCT,
  IIR,
  Inharmonicity,
  InstantPower,
  Intensity,
  Key,
  KeyExtractor,
  LPC,
  Larm,
  Leq,
  LevelExtractor,
  LogAttackTime,
  LogSpectrum,
  LoopBpmConfidence,
  LoopBpmEstimator,
  Loudness,
  LoudnessVickers,
  LowLevelSpectralEqloudExtractor,
  LowLevelSpectralExtractor,
  LowPass,
  MFCC,
  MaxFilter,
  MaxMagFreq,
  MaxToTotal,
  Mean,
  Median,
  MedianFilter,
  MelBands,
  Meter,
  MinMax,
  MinToTotal,
  MovingAverage,
  MultiPitchKlapuri,
  MultiPitchMelodia,
  Multiplexer,
  NNLSChroma,
  NoiseAdder,
  NoiseBurstDetector,
  NoveltyCurve,
  NoveltyCurveFixedBpmEstimator,
  OddToEvenHarmonicEnergyRatio,
  OnsetDetection,
  OnsetDetectionGlobal,
  OnsetRate,
  OverlapAdd,
  PeakDetection,
  PercivalBpmEstimator,
  PercivalEnhanceHarmonics,
  PercivalEvaluatePulseTrains,
  PitchContourSegmentation,
  PitchContours,
  PitchContoursMelody,
  PitchContoursMonoMelody,
  PitchContoursMultiMelody,
  PitchFilter,
  PitchMelodia,
  PitchSalience,
  PitchSalienceFunction,
  PitchSalienceFunctionPeaks,
  PitchYin,
  PitchYinFFT,
  PitchYinProbabilistic,
  PitchYinProbabilities,
  PitchYinProbabilitiesHMM,
  PowerMean,
  PowerSpectrum,
  PredominantPitchMelodia,
  RMS,
  RawMoments,
  ReplayGain,
  Resample,
  ResampleFFT,
  RhythmDescriptors,
  RhythmExtractor,
  RhythmExtractor2013,
  RhythmTransform,
  RollOff,
  SNR,
  SaturationDetector,
  Scale,
  SineSubtraction,
  SingleBeatLoudness,
  Slicer,
  SpectralCentroidTime,
  SpectralComplexity,
  SpectralContrast,
  SpectralPeaks,
  SpectralWhitening,
  Spectrum,
  SpectrumCQ,
  SpectrumToCent,
  Spline,
  SprModelAnal,
  SprModelSynth,
  SpsModelAnal,
  SpsModelSynth,
  StartStopCut,
  StartStopSilence,
  StochasticModelAnal,
  StochasticModelSynth,
  StrongDecay,
  StrongPeak,
  SuperFluxExtractor,
  SuperFluxNovelty,
  SuperFluxPeaks,
  TCToTotal,
  TempoScaleBands,
  TempoTap,
  TempoTapDegara,
  TempoTapMaxAgreement,
  TempoTapTicks,
  TensorflowInputFSDSINet,
  TensorflowInputMusiCNN,
  TensorflowInputTempoCNN,
  TensorflowInputVGGish,
  TonalExtractor,
  TonicIndianArtMusic,
  TriangularBands,
  TriangularBarkBands,
  Trimmer,
  Tristimulus,
  TruePeakDetector,
  TuningFrequency,
  TuningFrequencyExtractor,
  UnaryOperator,
  UnaryOperatorStream,
  Variance,
  Vibrato,
  WarpedAutoCorrelation,
  Welch,
  Windowing,
  ZeroCrossingRate,
} = require('../dist/essentia.js-core.umd.js');

ready(EssentiaWASM);

// NOTE: The following code snippets are machine generated. Do not edit.

describe('AfterMaxToBeforeMaxEnergyRatio:instantiation', () => {
	let afterMaxToBeforeMaxEnergyRatioInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		afterMaxToBeforeMaxEnergyRatioInstance = new AfterMaxToBeforeMaxEnergyRatio();
		expect(afterMaxToBeforeMaxEnergyRatioInstance).to.be.instanceOf(AfterMaxToBeforeMaxEnergyRatio);
	});
	it('should delete instance', function () {
		if (!afterMaxToBeforeMaxEnergyRatioInstance) this.skip();
		afterMaxToBeforeMaxEnergyRatioInstance.delete();
	});
});

describe('AfterMaxToBeforeMaxEnergyRatio:functionality', () => {
	let afterMaxToBeforeMaxEnergyRatioInstance;

	before(() => {
		afterMaxToBeforeMaxEnergyRatioInstance = new AfterMaxToBeforeMaxEnergyRatio();
	});
	after(() => {
		afterMaxToBeforeMaxEnergyRatioInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			afterMaxToBeforeMaxEnergyRatioInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = afterMaxToBeforeMaxEnergyRatioInstance.compute()
	}); */
});




describe('AllPass:instantiation', () => {
	let allPassInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		allPassInstance = new AllPass();
		expect(allPassInstance).to.be.instanceOf(AllPass);
	});
	it('should delete instance', function () {
		if (!allPassInstance) this.skip();
		allPassInstance.delete();
	});
});

describe('AllPass:functionality', () => {
	let allPassInstance;

	before(() => {
		allPassInstance = new AllPass();
	});
	after(() => {
		allPassInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			allPassInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = allPassInstance.compute()
	}); */
});




describe('AudioOnsetsMarker:instantiation', () => {
	let audioOnsetsMarkerInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		audioOnsetsMarkerInstance = new AudioOnsetsMarker();
		expect(audioOnsetsMarkerInstance).to.be.instanceOf(AudioOnsetsMarker);
	});
	it('should delete instance', function () {
		if (!audioOnsetsMarkerInstance) this.skip();
		audioOnsetsMarkerInstance.delete();
	});
});

describe('AudioOnsetsMarker:functionality', () => {
	let audioOnsetsMarkerInstance;

	before(() => {
		audioOnsetsMarkerInstance = new AudioOnsetsMarker();
	});
	after(() => {
		audioOnsetsMarkerInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			audioOnsetsMarkerInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = audioOnsetsMarkerInstance.compute()
	}); */
});




describe('AutoCorrelation:instantiation', () => {
	let autoCorrelationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		autoCorrelationInstance = new AutoCorrelation();
		expect(autoCorrelationInstance).to.be.instanceOf(AutoCorrelation);
	});
	it('should delete instance', function () {
		if (!autoCorrelationInstance) this.skip();
		autoCorrelationInstance.delete();
	});
});

describe('AutoCorrelation:functionality', () => {
	let autoCorrelationInstance;

	before(() => {
		autoCorrelationInstance = new AutoCorrelation();
	});
	after(() => {
		autoCorrelationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			autoCorrelationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = autoCorrelationInstance.compute()
	}); */
});




describe('BFCC:instantiation', () => {
	let bFCCInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bFCCInstance = new BFCC();
		expect(bFCCInstance).to.be.instanceOf(BFCC);
	});
	it('should delete instance', function () {
		if (!bFCCInstance) this.skip();
		bFCCInstance.delete();
	});
});

describe('BFCC:functionality', () => {
	let bFCCInstance;

	before(() => {
		bFCCInstance = new BFCC();
	});
	after(() => {
		bFCCInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bFCCInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bFCCInstance.compute()
	}); */
});




describe('BPF:instantiation', () => {
	let bPFInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bPFInstance = new BPF();
		expect(bPFInstance).to.be.instanceOf(BPF);
	});
	it('should delete instance', function () {
		if (!bPFInstance) this.skip();
		bPFInstance.delete();
	});
});

describe('BPF:functionality', () => {
	let bPFInstance;

	before(() => {
		bPFInstance = new BPF();
	});
	after(() => {
		bPFInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bPFInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bPFInstance.compute()
	}); */
});




describe('BandPass:instantiation', () => {
	let bandPassInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bandPassInstance = new BandPass();
		expect(bandPassInstance).to.be.instanceOf(BandPass);
	});
	it('should delete instance', function () {
		if (!bandPassInstance) this.skip();
		bandPassInstance.delete();
	});
});

describe('BandPass:functionality', () => {
	let bandPassInstance;

	before(() => {
		bandPassInstance = new BandPass();
	});
	after(() => {
		bandPassInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bandPassInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bandPassInstance.compute()
	}); */
});




describe('BandReject:instantiation', () => {
	let bandRejectInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bandRejectInstance = new BandReject();
		expect(bandRejectInstance).to.be.instanceOf(BandReject);
	});
	it('should delete instance', function () {
		if (!bandRejectInstance) this.skip();
		bandRejectInstance.delete();
	});
});

describe('BandReject:functionality', () => {
	let bandRejectInstance;

	before(() => {
		bandRejectInstance = new BandReject();
	});
	after(() => {
		bandRejectInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bandRejectInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bandRejectInstance.compute()
	}); */
});




describe('BarkBands:instantiation', () => {
	let barkBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		barkBandsInstance = new BarkBands();
		expect(barkBandsInstance).to.be.instanceOf(BarkBands);
	});
	it('should delete instance', function () {
		if (!barkBandsInstance) this.skip();
		barkBandsInstance.delete();
	});
});

describe('BarkBands:functionality', () => {
	let barkBandsInstance;

	before(() => {
		barkBandsInstance = new BarkBands();
	});
	after(() => {
		barkBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			barkBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = barkBandsInstance.compute()
	}); */
});




describe('BeatTrackerDegara:instantiation', () => {
	let beatTrackerDegaraInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		beatTrackerDegaraInstance = new BeatTrackerDegara();
		expect(beatTrackerDegaraInstance).to.be.instanceOf(BeatTrackerDegara);
	});
	it('should delete instance', function () {
		if (!beatTrackerDegaraInstance) this.skip();
		beatTrackerDegaraInstance.delete();
	});
});

describe('BeatTrackerDegara:functionality', () => {
	let beatTrackerDegaraInstance;

	before(() => {
		beatTrackerDegaraInstance = new BeatTrackerDegara();
	});
	after(() => {
		beatTrackerDegaraInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			beatTrackerDegaraInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = beatTrackerDegaraInstance.compute()
	}); */
});




describe('BeatTrackerMultiFeature:instantiation', () => {
	let beatTrackerMultiFeatureInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		beatTrackerMultiFeatureInstance = new BeatTrackerMultiFeature();
		expect(beatTrackerMultiFeatureInstance).to.be.instanceOf(BeatTrackerMultiFeature);
	});
	it('should delete instance', function () {
		if (!beatTrackerMultiFeatureInstance) this.skip();
		beatTrackerMultiFeatureInstance.delete();
	});
});

describe('BeatTrackerMultiFeature:functionality', () => {
	let beatTrackerMultiFeatureInstance;

	before(() => {
		beatTrackerMultiFeatureInstance = new BeatTrackerMultiFeature();
	});
	after(() => {
		beatTrackerMultiFeatureInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			beatTrackerMultiFeatureInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = beatTrackerMultiFeatureInstance.compute()
	}); */
});




describe('Beatogram:instantiation', () => {
	let beatogramInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		beatogramInstance = new Beatogram();
		expect(beatogramInstance).to.be.instanceOf(Beatogram);
	});
	it('should delete instance', function () {
		if (!beatogramInstance) this.skip();
		beatogramInstance.delete();
	});
});

describe('Beatogram:functionality', () => {
	let beatogramInstance;

	before(() => {
		beatogramInstance = new Beatogram();
	});
	after(() => {
		beatogramInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			beatogramInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = beatogramInstance.compute()
	}); */
});




describe('BeatsLoudness:instantiation', () => {
	let beatsLoudnessInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		beatsLoudnessInstance = new BeatsLoudness();
		expect(beatsLoudnessInstance).to.be.instanceOf(BeatsLoudness);
	});
	it('should delete instance', function () {
		if (!beatsLoudnessInstance) this.skip();
		beatsLoudnessInstance.delete();
	});
});

describe('BeatsLoudness:functionality', () => {
	let beatsLoudnessInstance;

	before(() => {
		beatsLoudnessInstance = new BeatsLoudness();
	});
	after(() => {
		beatsLoudnessInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			beatsLoudnessInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = beatsLoudnessInstance.compute()
	}); */
});




describe('BinaryOperator:instantiation', () => {
	let binaryOperatorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		binaryOperatorInstance = new BinaryOperator();
		expect(binaryOperatorInstance).to.be.instanceOf(BinaryOperator);
	});
	it('should delete instance', function () {
		if (!binaryOperatorInstance) this.skip();
		binaryOperatorInstance.delete();
	});
});

describe('BinaryOperator:functionality', () => {
	let binaryOperatorInstance;

	before(() => {
		binaryOperatorInstance = new BinaryOperator();
	});
	after(() => {
		binaryOperatorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			binaryOperatorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = binaryOperatorInstance.compute()
	}); */
});




describe('BinaryOperatorStream:instantiation', () => {
	let binaryOperatorStreamInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		binaryOperatorStreamInstance = new BinaryOperatorStream();
		expect(binaryOperatorStreamInstance).to.be.instanceOf(BinaryOperatorStream);
	});
	it('should delete instance', function () {
		if (!binaryOperatorStreamInstance) this.skip();
		binaryOperatorStreamInstance.delete();
	});
});

describe('BinaryOperatorStream:functionality', () => {
	let binaryOperatorStreamInstance;

	before(() => {
		binaryOperatorStreamInstance = new BinaryOperatorStream();
	});
	after(() => {
		binaryOperatorStreamInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			binaryOperatorStreamInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = binaryOperatorStreamInstance.compute()
	}); */
});




describe('BpmHistogramDescriptors:instantiation', () => {
	let bpmHistogramDescriptorsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bpmHistogramDescriptorsInstance = new BpmHistogramDescriptors();
		expect(bpmHistogramDescriptorsInstance).to.be.instanceOf(BpmHistogramDescriptors);
	});
	it('should delete instance', function () {
		if (!bpmHistogramDescriptorsInstance) this.skip();
		bpmHistogramDescriptorsInstance.delete();
	});
});

describe('BpmHistogramDescriptors:functionality', () => {
	let bpmHistogramDescriptorsInstance;

	before(() => {
		bpmHistogramDescriptorsInstance = new BpmHistogramDescriptors();
	});
	after(() => {
		bpmHistogramDescriptorsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bpmHistogramDescriptorsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bpmHistogramDescriptorsInstance.compute()
	}); */
});




describe('BpmRubato:instantiation', () => {
	let bpmRubatoInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		bpmRubatoInstance = new BpmRubato();
		expect(bpmRubatoInstance).to.be.instanceOf(BpmRubato);
	});
	it('should delete instance', function () {
		if (!bpmRubatoInstance) this.skip();
		bpmRubatoInstance.delete();
	});
});

describe('BpmRubato:functionality', () => {
	let bpmRubatoInstance;

	before(() => {
		bpmRubatoInstance = new BpmRubato();
	});
	after(() => {
		bpmRubatoInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			bpmRubatoInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = bpmRubatoInstance.compute()
	}); */
});




describe('CentralMoments:instantiation', () => {
	let centralMomentsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		centralMomentsInstance = new CentralMoments();
		expect(centralMomentsInstance).to.be.instanceOf(CentralMoments);
	});
	it('should delete instance', function () {
		if (!centralMomentsInstance) this.skip();
		centralMomentsInstance.delete();
	});
});

describe('CentralMoments:functionality', () => {
	let centralMomentsInstance;

	before(() => {
		centralMomentsInstance = new CentralMoments();
	});
	after(() => {
		centralMomentsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			centralMomentsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = centralMomentsInstance.compute()
	}); */
});




describe('Centroid:instantiation', () => {
	let centroidInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		centroidInstance = new Centroid();
		expect(centroidInstance).to.be.instanceOf(Centroid);
	});
	it('should delete instance', function () {
		if (!centroidInstance) this.skip();
		centroidInstance.delete();
	});
});

describe('Centroid:functionality', () => {
	let centroidInstance;

	before(() => {
		centroidInstance = new Centroid();
	});
	after(() => {
		centroidInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			centroidInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = centroidInstance.compute()
	}); */
});




describe('ChordsDescriptors:instantiation', () => {
	let chordsDescriptorsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		chordsDescriptorsInstance = new ChordsDescriptors();
		expect(chordsDescriptorsInstance).to.be.instanceOf(ChordsDescriptors);
	});
	it('should delete instance', function () {
		if (!chordsDescriptorsInstance) this.skip();
		chordsDescriptorsInstance.delete();
	});
});

describe('ChordsDescriptors:functionality', () => {
	let chordsDescriptorsInstance;

	before(() => {
		chordsDescriptorsInstance = new ChordsDescriptors();
	});
	after(() => {
		chordsDescriptorsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			chordsDescriptorsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = chordsDescriptorsInstance.compute()
	}); */
});




describe('ChordsDetection:instantiation', () => {
	let chordsDetectionInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		chordsDetectionInstance = new ChordsDetection();
		expect(chordsDetectionInstance).to.be.instanceOf(ChordsDetection);
	});
	it('should delete instance', function () {
		if (!chordsDetectionInstance) this.skip();
		chordsDetectionInstance.delete();
	});
});

describe('ChordsDetection:functionality', () => {
	let chordsDetectionInstance;

	before(() => {
		chordsDetectionInstance = new ChordsDetection();
	});
	after(() => {
		chordsDetectionInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			chordsDetectionInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = chordsDetectionInstance.compute()
	}); */
});




describe('ChordsDetectionBeats:instantiation', () => {
	let chordsDetectionBeatsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		chordsDetectionBeatsInstance = new ChordsDetectionBeats();
		expect(chordsDetectionBeatsInstance).to.be.instanceOf(ChordsDetectionBeats);
	});
	it('should delete instance', function () {
		if (!chordsDetectionBeatsInstance) this.skip();
		chordsDetectionBeatsInstance.delete();
	});
});

describe('ChordsDetectionBeats:functionality', () => {
	let chordsDetectionBeatsInstance;

	before(() => {
		chordsDetectionBeatsInstance = new ChordsDetectionBeats();
	});
	after(() => {
		chordsDetectionBeatsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			chordsDetectionBeatsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = chordsDetectionBeatsInstance.compute()
	}); */
});




describe('ChromaCrossSimilarity:instantiation', () => {
	let chromaCrossSimilarityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		chromaCrossSimilarityInstance = new ChromaCrossSimilarity();
		expect(chromaCrossSimilarityInstance).to.be.instanceOf(ChromaCrossSimilarity);
	});
	it('should delete instance', function () {
		if (!chromaCrossSimilarityInstance) this.skip();
		chromaCrossSimilarityInstance.delete();
	});
});

describe('ChromaCrossSimilarity:functionality', () => {
	let chromaCrossSimilarityInstance;

	before(() => {
		chromaCrossSimilarityInstance = new ChromaCrossSimilarity();
	});
	after(() => {
		chromaCrossSimilarityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			chromaCrossSimilarityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = chromaCrossSimilarityInstance.compute()
	}); */
});




describe('Chromagram:instantiation', () => {
	let chromagramInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		chromagramInstance = new Chromagram();
		expect(chromagramInstance).to.be.instanceOf(Chromagram);
	});
	it('should delete instance', function () {
		if (!chromagramInstance) this.skip();
		chromagramInstance.delete();
	});
});

describe('Chromagram:functionality', () => {
	let chromagramInstance;

	before(() => {
		chromagramInstance = new Chromagram();
	});
	after(() => {
		chromagramInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			chromagramInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = chromagramInstance.compute()
	}); */
});




describe('ClickDetector:instantiation', () => {
	let clickDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		clickDetectorInstance = new ClickDetector();
		expect(clickDetectorInstance).to.be.instanceOf(ClickDetector);
	});
	it('should delete instance', function () {
		if (!clickDetectorInstance) this.skip();
		clickDetectorInstance.delete();
	});
});

describe('ClickDetector:functionality', () => {
	let clickDetectorInstance;

	before(() => {
		clickDetectorInstance = new ClickDetector();
	});
	after(() => {
		clickDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			clickDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = clickDetectorInstance.compute()
	}); */
});




describe('Clipper:instantiation', () => {
	let clipperInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		clipperInstance = new Clipper();
		expect(clipperInstance).to.be.instanceOf(Clipper);
	});
	it('should delete instance', function () {
		if (!clipperInstance) this.skip();
		clipperInstance.delete();
	});
});

describe('Clipper:functionality', () => {
	let clipperInstance;

	before(() => {
		clipperInstance = new Clipper();
	});
	after(() => {
		clipperInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			clipperInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = clipperInstance.compute()
	}); */
});




describe('CoverSongSimilarity:instantiation', () => {
	let coverSongSimilarityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		coverSongSimilarityInstance = new CoverSongSimilarity();
		expect(coverSongSimilarityInstance).to.be.instanceOf(CoverSongSimilarity);
	});
	it('should delete instance', function () {
		if (!coverSongSimilarityInstance) this.skip();
		coverSongSimilarityInstance.delete();
	});
});

describe('CoverSongSimilarity:functionality', () => {
	let coverSongSimilarityInstance;

	before(() => {
		coverSongSimilarityInstance = new CoverSongSimilarity();
	});
	after(() => {
		coverSongSimilarityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			coverSongSimilarityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = coverSongSimilarityInstance.compute()
	}); */
});




describe('Crest:instantiation', () => {
	let crestInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		crestInstance = new Crest();
		expect(crestInstance).to.be.instanceOf(Crest);
	});
	it('should delete instance', function () {
		if (!crestInstance) this.skip();
		crestInstance.delete();
	});
});

describe('Crest:functionality', () => {
	let crestInstance;

	before(() => {
		crestInstance = new Crest();
	});
	after(() => {
		crestInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			crestInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = crestInstance.compute()
	}); */
});




describe('CrossCorrelation:instantiation', () => {
	let crossCorrelationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		crossCorrelationInstance = new CrossCorrelation();
		expect(crossCorrelationInstance).to.be.instanceOf(CrossCorrelation);
	});
	it('should delete instance', function () {
		if (!crossCorrelationInstance) this.skip();
		crossCorrelationInstance.delete();
	});
});

describe('CrossCorrelation:functionality', () => {
	let crossCorrelationInstance;

	before(() => {
		crossCorrelationInstance = new CrossCorrelation();
	});
	after(() => {
		crossCorrelationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			crossCorrelationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = crossCorrelationInstance.compute()
	}); */
});




describe('CrossSimilarityMatrix:instantiation', () => {
	let crossSimilarityMatrixInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		crossSimilarityMatrixInstance = new CrossSimilarityMatrix();
		expect(crossSimilarityMatrixInstance).to.be.instanceOf(CrossSimilarityMatrix);
	});
	it('should delete instance', function () {
		if (!crossSimilarityMatrixInstance) this.skip();
		crossSimilarityMatrixInstance.delete();
	});
});

describe('CrossSimilarityMatrix:functionality', () => {
	let crossSimilarityMatrixInstance;

	before(() => {
		crossSimilarityMatrixInstance = new CrossSimilarityMatrix();
	});
	after(() => {
		crossSimilarityMatrixInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			crossSimilarityMatrixInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = crossSimilarityMatrixInstance.compute()
	}); */
});




describe('CubicSpline:instantiation', () => {
	let cubicSplineInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		cubicSplineInstance = new CubicSpline();
		expect(cubicSplineInstance).to.be.instanceOf(CubicSpline);
	});
	it('should delete instance', function () {
		if (!cubicSplineInstance) this.skip();
		cubicSplineInstance.delete();
	});
});

describe('CubicSpline:functionality', () => {
	let cubicSplineInstance;

	before(() => {
		cubicSplineInstance = new CubicSpline();
	});
	after(() => {
		cubicSplineInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			cubicSplineInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = cubicSplineInstance.compute()
	}); */
});




describe('DCRemoval:instantiation', () => {
	let dCRemovalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		dCRemovalInstance = new DCRemoval();
		expect(dCRemovalInstance).to.be.instanceOf(DCRemoval);
	});
	it('should delete instance', function () {
		if (!dCRemovalInstance) this.skip();
		dCRemovalInstance.delete();
	});
});

describe('DCRemoval:functionality', () => {
	let dCRemovalInstance;

	before(() => {
		dCRemovalInstance = new DCRemoval();
	});
	after(() => {
		dCRemovalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			dCRemovalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = dCRemovalInstance.compute()
	}); */
});




describe('DCT:instantiation', () => {
	let dCTInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		dCTInstance = new DCT();
		expect(dCTInstance).to.be.instanceOf(DCT);
	});
	it('should delete instance', function () {
		if (!dCTInstance) this.skip();
		dCTInstance.delete();
	});
});

describe('DCT:functionality', () => {
	let dCTInstance;

	before(() => {
		dCTInstance = new DCT();
	});
	after(() => {
		dCTInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			dCTInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = dCTInstance.compute()
	}); */
});




describe('Danceability:instantiation', () => {
	let danceabilityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		danceabilityInstance = new Danceability();
		expect(danceabilityInstance).to.be.instanceOf(Danceability);
	});
	it('should delete instance', function () {
		if (!danceabilityInstance) this.skip();
		danceabilityInstance.delete();
	});
});

describe('Danceability:functionality', () => {
	let danceabilityInstance;

	before(() => {
		danceabilityInstance = new Danceability();
	});
	after(() => {
		danceabilityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			danceabilityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = danceabilityInstance.compute()
	}); */
});




describe('Decrease:instantiation', () => {
	let decreaseInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		decreaseInstance = new Decrease();
		expect(decreaseInstance).to.be.instanceOf(Decrease);
	});
	it('should delete instance', function () {
		if (!decreaseInstance) this.skip();
		decreaseInstance.delete();
	});
});

describe('Decrease:functionality', () => {
	let decreaseInstance;

	before(() => {
		decreaseInstance = new Decrease();
	});
	after(() => {
		decreaseInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			decreaseInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = decreaseInstance.compute()
	}); */
});




describe('Derivative:instantiation', () => {
	let derivativeInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		derivativeInstance = new Derivative();
		expect(derivativeInstance).to.be.instanceOf(Derivative);
	});
	it('should delete instance', function () {
		if (!derivativeInstance) this.skip();
		derivativeInstance.delete();
	});
});

describe('Derivative:functionality', () => {
	let derivativeInstance;

	before(() => {
		derivativeInstance = new Derivative();
	});
	after(() => {
		derivativeInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			derivativeInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = derivativeInstance.compute()
	}); */
});




describe('DerivativeSFX:instantiation', () => {
	let derivativeSFXInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		derivativeSFXInstance = new DerivativeSFX();
		expect(derivativeSFXInstance).to.be.instanceOf(DerivativeSFX);
	});
	it('should delete instance', function () {
		if (!derivativeSFXInstance) this.skip();
		derivativeSFXInstance.delete();
	});
});

describe('DerivativeSFX:functionality', () => {
	let derivativeSFXInstance;

	before(() => {
		derivativeSFXInstance = new DerivativeSFX();
	});
	after(() => {
		derivativeSFXInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			derivativeSFXInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = derivativeSFXInstance.compute()
	}); */
});




describe('DiscontinuityDetector:instantiation', () => {
	let discontinuityDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		discontinuityDetectorInstance = new DiscontinuityDetector();
		expect(discontinuityDetectorInstance).to.be.instanceOf(DiscontinuityDetector);
	});
	it('should delete instance', function () {
		if (!discontinuityDetectorInstance) this.skip();
		discontinuityDetectorInstance.delete();
	});
});

describe('DiscontinuityDetector:functionality', () => {
	let discontinuityDetectorInstance;

	before(() => {
		discontinuityDetectorInstance = new DiscontinuityDetector();
	});
	after(() => {
		discontinuityDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			discontinuityDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = discontinuityDetectorInstance.compute()
	}); */
});




describe('Dissonance:instantiation', () => {
	let dissonanceInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		dissonanceInstance = new Dissonance();
		expect(dissonanceInstance).to.be.instanceOf(Dissonance);
	});
	it('should delete instance', function () {
		if (!dissonanceInstance) this.skip();
		dissonanceInstance.delete();
	});
});

describe('Dissonance:functionality', () => {
	let dissonanceInstance;

	before(() => {
		dissonanceInstance = new Dissonance();
	});
	after(() => {
		dissonanceInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			dissonanceInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = dissonanceInstance.compute()
	}); */
});




describe('DistributionShape:instantiation', () => {
	let distributionShapeInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		distributionShapeInstance = new DistributionShape();
		expect(distributionShapeInstance).to.be.instanceOf(DistributionShape);
	});
	it('should delete instance', function () {
		if (!distributionShapeInstance) this.skip();
		distributionShapeInstance.delete();
	});
});

describe('DistributionShape:functionality', () => {
	let distributionShapeInstance;

	before(() => {
		distributionShapeInstance = new DistributionShape();
	});
	after(() => {
		distributionShapeInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			distributionShapeInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = distributionShapeInstance.compute()
	}); */
});




describe('Duration:instantiation', () => {
	let durationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		durationInstance = new Duration();
		expect(durationInstance).to.be.instanceOf(Duration);
	});
	it('should delete instance', function () {
		if (!durationInstance) this.skip();
		durationInstance.delete();
	});
});

describe('Duration:functionality', () => {
	let durationInstance;

	before(() => {
		durationInstance = new Duration();
	});
	after(() => {
		durationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			durationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = durationInstance.compute()
	}); */
});




describe('DynamicComplexity:instantiation', () => {
	let dynamicComplexityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		dynamicComplexityInstance = new DynamicComplexity();
		expect(dynamicComplexityInstance).to.be.instanceOf(DynamicComplexity);
	});
	it('should delete instance', function () {
		if (!dynamicComplexityInstance) this.skip();
		dynamicComplexityInstance.delete();
	});
});

describe('DynamicComplexity:functionality', () => {
	let dynamicComplexityInstance;

	before(() => {
		dynamicComplexityInstance = new DynamicComplexity();
	});
	after(() => {
		dynamicComplexityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			dynamicComplexityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = dynamicComplexityInstance.compute()
	}); */
});




describe('ERBBands:instantiation', () => {
	let eRBBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		eRBBandsInstance = new ERBBands();
		expect(eRBBandsInstance).to.be.instanceOf(ERBBands);
	});
	it('should delete instance', function () {
		if (!eRBBandsInstance) this.skip();
		eRBBandsInstance.delete();
	});
});

describe('ERBBands:functionality', () => {
	let eRBBandsInstance;

	before(() => {
		eRBBandsInstance = new ERBBands();
	});
	after(() => {
		eRBBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			eRBBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = eRBBandsInstance.compute()
	}); */
});




describe('EffectiveDuration:instantiation', () => {
	let effectiveDurationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		effectiveDurationInstance = new EffectiveDuration();
		expect(effectiveDurationInstance).to.be.instanceOf(EffectiveDuration);
	});
	it('should delete instance', function () {
		if (!effectiveDurationInstance) this.skip();
		effectiveDurationInstance.delete();
	});
});

describe('EffectiveDuration:functionality', () => {
	let effectiveDurationInstance;

	before(() => {
		effectiveDurationInstance = new EffectiveDuration();
	});
	after(() => {
		effectiveDurationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			effectiveDurationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = effectiveDurationInstance.compute()
	}); */
});




describe('Energy:instantiation', () => {
	let energyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		energyInstance = new Energy();
		expect(energyInstance).to.be.instanceOf(Energy);
	});
	it('should delete instance', function () {
		if (!energyInstance) this.skip();
		energyInstance.delete();
	});
});

describe('Energy:functionality', () => {
	let energyInstance;

	before(() => {
		energyInstance = new Energy();
	});
	after(() => {
		energyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			energyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = energyInstance.compute()
	}); */
});




describe('EnergyBand:instantiation', () => {
	let energyBandInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		energyBandInstance = new EnergyBand();
		expect(energyBandInstance).to.be.instanceOf(EnergyBand);
	});
	it('should delete instance', function () {
		if (!energyBandInstance) this.skip();
		energyBandInstance.delete();
	});
});

describe('EnergyBand:functionality', () => {
	let energyBandInstance;

	before(() => {
		energyBandInstance = new EnergyBand();
	});
	after(() => {
		energyBandInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			energyBandInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = energyBandInstance.compute()
	}); */
});




describe('EnergyBandRatio:instantiation', () => {
	let energyBandRatioInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		energyBandRatioInstance = new EnergyBandRatio();
		expect(energyBandRatioInstance).to.be.instanceOf(EnergyBandRatio);
	});
	it('should delete instance', function () {
		if (!energyBandRatioInstance) this.skip();
		energyBandRatioInstance.delete();
	});
});

describe('EnergyBandRatio:functionality', () => {
	let energyBandRatioInstance;

	before(() => {
		energyBandRatioInstance = new EnergyBandRatio();
	});
	after(() => {
		energyBandRatioInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			energyBandRatioInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = energyBandRatioInstance.compute()
	}); */
});




describe('Entropy:instantiation', () => {
	let entropyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		entropyInstance = new Entropy();
		expect(entropyInstance).to.be.instanceOf(Entropy);
	});
	it('should delete instance', function () {
		if (!entropyInstance) this.skip();
		entropyInstance.delete();
	});
});

describe('Entropy:functionality', () => {
	let entropyInstance;

	before(() => {
		entropyInstance = new Entropy();
	});
	after(() => {
		entropyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			entropyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = entropyInstance.compute()
	}); */
});




describe('Envelope:instantiation', () => {
	let envelopeInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		envelopeInstance = new Envelope();
		expect(envelopeInstance).to.be.instanceOf(Envelope);
	});
	it('should delete instance', function () {
		if (!envelopeInstance) this.skip();
		envelopeInstance.delete();
	});
});

describe('Envelope:functionality', () => {
	let envelopeInstance;

	before(() => {
		envelopeInstance = new Envelope();
	});
	after(() => {
		envelopeInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			envelopeInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = envelopeInstance.compute()
	}); */
});




describe('EqualLoudness:instantiation', () => {
	let equalLoudnessInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		equalLoudnessInstance = new EqualLoudness();
		expect(equalLoudnessInstance).to.be.instanceOf(EqualLoudness);
	});
	it('should delete instance', function () {
		if (!equalLoudnessInstance) this.skip();
		equalLoudnessInstance.delete();
	});
});

describe('EqualLoudness:functionality', () => {
	let equalLoudnessInstance;

	before(() => {
		equalLoudnessInstance = new EqualLoudness();
	});
	after(() => {
		equalLoudnessInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			equalLoudnessInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = equalLoudnessInstance.compute()
	}); */
});




describe('Flatness:instantiation', () => {
	let flatnessInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		flatnessInstance = new Flatness();
		expect(flatnessInstance).to.be.instanceOf(Flatness);
	});
	it('should delete instance', function () {
		if (!flatnessInstance) this.skip();
		flatnessInstance.delete();
	});
});

describe('Flatness:functionality', () => {
	let flatnessInstance;

	before(() => {
		flatnessInstance = new Flatness();
	});
	after(() => {
		flatnessInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			flatnessInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = flatnessInstance.compute()
	}); */
});




describe('FlatnessDB:instantiation', () => {
	let flatnessDBInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		flatnessDBInstance = new FlatnessDB();
		expect(flatnessDBInstance).to.be.instanceOf(FlatnessDB);
	});
	it('should delete instance', function () {
		if (!flatnessDBInstance) this.skip();
		flatnessDBInstance.delete();
	});
});

describe('FlatnessDB:functionality', () => {
	let flatnessDBInstance;

	before(() => {
		flatnessDBInstance = new FlatnessDB();
	});
	after(() => {
		flatnessDBInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			flatnessDBInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = flatnessDBInstance.compute()
	}); */
});




describe('FlatnessSFX:instantiation', () => {
	let flatnessSFXInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		flatnessSFXInstance = new FlatnessSFX();
		expect(flatnessSFXInstance).to.be.instanceOf(FlatnessSFX);
	});
	it('should delete instance', function () {
		if (!flatnessSFXInstance) this.skip();
		flatnessSFXInstance.delete();
	});
});

describe('FlatnessSFX:functionality', () => {
	let flatnessSFXInstance;

	before(() => {
		flatnessSFXInstance = new FlatnessSFX();
	});
	after(() => {
		flatnessSFXInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			flatnessSFXInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = flatnessSFXInstance.compute()
	}); */
});




describe('Flux:instantiation', () => {
	let fluxInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		fluxInstance = new Flux();
		expect(fluxInstance).to.be.instanceOf(Flux);
	});
	it('should delete instance', function () {
		if (!fluxInstance) this.skip();
		fluxInstance.delete();
	});
});

describe('Flux:functionality', () => {
	let fluxInstance;

	before(() => {
		fluxInstance = new Flux();
	});
	after(() => {
		fluxInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			fluxInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = fluxInstance.compute()
	}); */
});




describe('FrameCutter:instantiation', () => {
	let frameCutterInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		frameCutterInstance = new FrameCutter();
		expect(frameCutterInstance).to.be.instanceOf(FrameCutter);
	});
	it('should delete instance', function () {
		if (!frameCutterInstance) this.skip();
		frameCutterInstance.delete();
	});
});

describe('FrameCutter:functionality', () => {
	let frameCutterInstance;

	before(() => {
		frameCutterInstance = new FrameCutter();
	});
	after(() => {
		frameCutterInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			frameCutterInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = frameCutterInstance.compute()
	}); */
});




describe('FrameToReal:instantiation', () => {
	let frameToRealInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		frameToRealInstance = new FrameToReal();
		expect(frameToRealInstance).to.be.instanceOf(FrameToReal);
	});
	it('should delete instance', function () {
		if (!frameToRealInstance) this.skip();
		frameToRealInstance.delete();
	});
});

describe('FrameToReal:functionality', () => {
	let frameToRealInstance;

	before(() => {
		frameToRealInstance = new FrameToReal();
	});
	after(() => {
		frameToRealInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			frameToRealInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = frameToRealInstance.compute()
	}); */
});




describe('FrequencyBands:instantiation', () => {
	let frequencyBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		frequencyBandsInstance = new FrequencyBands();
		expect(frequencyBandsInstance).to.be.instanceOf(FrequencyBands);
	});
	it('should delete instance', function () {
		if (!frequencyBandsInstance) this.skip();
		frequencyBandsInstance.delete();
	});
});

describe('FrequencyBands:functionality', () => {
	let frequencyBandsInstance;

	before(() => {
		frequencyBandsInstance = new FrequencyBands();
	});
	after(() => {
		frequencyBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			frequencyBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = frequencyBandsInstance.compute()
	}); */
});




describe('GFCC:instantiation', () => {
	let gFCCInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		gFCCInstance = new GFCC();
		expect(gFCCInstance).to.be.instanceOf(GFCC);
	});
	it('should delete instance', function () {
		if (!gFCCInstance) this.skip();
		gFCCInstance.delete();
	});
});

describe('GFCC:functionality', () => {
	let gFCCInstance;

	before(() => {
		gFCCInstance = new GFCC();
	});
	after(() => {
		gFCCInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			gFCCInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = gFCCInstance.compute()
	}); */
});




describe('GapsDetector:instantiation', () => {
	let gapsDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		gapsDetectorInstance = new GapsDetector();
		expect(gapsDetectorInstance).to.be.instanceOf(GapsDetector);
	});
	it('should delete instance', function () {
		if (!gapsDetectorInstance) this.skip();
		gapsDetectorInstance.delete();
	});
});

describe('GapsDetector:functionality', () => {
	let gapsDetectorInstance;

	before(() => {
		gapsDetectorInstance = new GapsDetector();
	});
	after(() => {
		gapsDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			gapsDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = gapsDetectorInstance.compute()
	}); */
});




describe('GeometricMean:instantiation', () => {
	let geometricMeanInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		geometricMeanInstance = new GeometricMean();
		expect(geometricMeanInstance).to.be.instanceOf(GeometricMean);
	});
	it('should delete instance', function () {
		if (!geometricMeanInstance) this.skip();
		geometricMeanInstance.delete();
	});
});

describe('GeometricMean:functionality', () => {
	let geometricMeanInstance;

	before(() => {
		geometricMeanInstance = new GeometricMean();
	});
	after(() => {
		geometricMeanInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			geometricMeanInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = geometricMeanInstance.compute()
	}); */
});




describe('HFC:instantiation', () => {
	let hFCInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		hFCInstance = new HFC();
		expect(hFCInstance).to.be.instanceOf(HFC);
	});
	it('should delete instance', function () {
		if (!hFCInstance) this.skip();
		hFCInstance.delete();
	});
});

describe('HFC:functionality', () => {
	let hFCInstance;

	before(() => {
		hFCInstance = new HFC();
	});
	after(() => {
		hFCInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			hFCInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = hFCInstance.compute()
	}); */
});




describe('HPCP:instantiation', () => {
	let hPCPInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		hPCPInstance = new HPCP();
		expect(hPCPInstance).to.be.instanceOf(HPCP);
	});
	it('should delete instance', function () {
		if (!hPCPInstance) this.skip();
		hPCPInstance.delete();
	});
});

describe('HPCP:functionality', () => {
	let hPCPInstance;

	before(() => {
		hPCPInstance = new HPCP();
	});
	after(() => {
		hPCPInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			hPCPInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = hPCPInstance.compute()
	}); */
});




describe('HarmonicBpm:instantiation', () => {
	let harmonicBpmInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		harmonicBpmInstance = new HarmonicBpm();
		expect(harmonicBpmInstance).to.be.instanceOf(HarmonicBpm);
	});
	it('should delete instance', function () {
		if (!harmonicBpmInstance) this.skip();
		harmonicBpmInstance.delete();
	});
});

describe('HarmonicBpm:functionality', () => {
	let harmonicBpmInstance;

	before(() => {
		harmonicBpmInstance = new HarmonicBpm();
	});
	after(() => {
		harmonicBpmInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			harmonicBpmInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = harmonicBpmInstance.compute()
	}); */
});




describe('HarmonicPeaks:instantiation', () => {
	let harmonicPeaksInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		harmonicPeaksInstance = new HarmonicPeaks();
		expect(harmonicPeaksInstance).to.be.instanceOf(HarmonicPeaks);
	});
	it('should delete instance', function () {
		if (!harmonicPeaksInstance) this.skip();
		harmonicPeaksInstance.delete();
	});
});

describe('HarmonicPeaks:functionality', () => {
	let harmonicPeaksInstance;

	before(() => {
		harmonicPeaksInstance = new HarmonicPeaks();
	});
	after(() => {
		harmonicPeaksInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			harmonicPeaksInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = harmonicPeaksInstance.compute()
	}); */
});




describe('HighPass:instantiation', () => {
	let highPassInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		highPassInstance = new HighPass();
		expect(highPassInstance).to.be.instanceOf(HighPass);
	});
	it('should delete instance', function () {
		if (!highPassInstance) this.skip();
		highPassInstance.delete();
	});
});

describe('HighPass:functionality', () => {
	let highPassInstance;

	before(() => {
		highPassInstance = new HighPass();
	});
	after(() => {
		highPassInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			highPassInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = highPassInstance.compute()
	}); */
});




describe('HighResolutionFeatures:instantiation', () => {
	let highResolutionFeaturesInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		highResolutionFeaturesInstance = new HighResolutionFeatures();
		expect(highResolutionFeaturesInstance).to.be.instanceOf(HighResolutionFeatures);
	});
	it('should delete instance', function () {
		if (!highResolutionFeaturesInstance) this.skip();
		highResolutionFeaturesInstance.delete();
	});
});

describe('HighResolutionFeatures:functionality', () => {
	let highResolutionFeaturesInstance;

	before(() => {
		highResolutionFeaturesInstance = new HighResolutionFeatures();
	});
	after(() => {
		highResolutionFeaturesInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			highResolutionFeaturesInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = highResolutionFeaturesInstance.compute()
	}); */
});




describe('Histogram:instantiation', () => {
	let histogramInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		histogramInstance = new Histogram();
		expect(histogramInstance).to.be.instanceOf(Histogram);
	});
	it('should delete instance', function () {
		if (!histogramInstance) this.skip();
		histogramInstance.delete();
	});
});

describe('Histogram:functionality', () => {
	let histogramInstance;

	before(() => {
		histogramInstance = new Histogram();
	});
	after(() => {
		histogramInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			histogramInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = histogramInstance.compute()
	}); */
});




describe('HprModelAnal:instantiation', () => {
	let hprModelAnalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		hprModelAnalInstance = new HprModelAnal();
		expect(hprModelAnalInstance).to.be.instanceOf(HprModelAnal);
	});
	it('should delete instance', function () {
		if (!hprModelAnalInstance) this.skip();
		hprModelAnalInstance.delete();
	});
});

describe('HprModelAnal:functionality', () => {
	let hprModelAnalInstance;

	before(() => {
		hprModelAnalInstance = new HprModelAnal();
	});
	after(() => {
		hprModelAnalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			hprModelAnalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = hprModelAnalInstance.compute()
	}); */
});




describe('HpsModelAnal:instantiation', () => {
	let hpsModelAnalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		hpsModelAnalInstance = new HpsModelAnal();
		expect(hpsModelAnalInstance).to.be.instanceOf(HpsModelAnal);
	});
	it('should delete instance', function () {
		if (!hpsModelAnalInstance) this.skip();
		hpsModelAnalInstance.delete();
	});
});

describe('HpsModelAnal:functionality', () => {
	let hpsModelAnalInstance;

	before(() => {
		hpsModelAnalInstance = new HpsModelAnal();
	});
	after(() => {
		hpsModelAnalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			hpsModelAnalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = hpsModelAnalInstance.compute()
	}); */
});




describe('IDCT:instantiation', () => {
	let iDCTInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		iDCTInstance = new IDCT();
		expect(iDCTInstance).to.be.instanceOf(IDCT);
	});
	it('should delete instance', function () {
		if (!iDCTInstance) this.skip();
		iDCTInstance.delete();
	});
});

describe('IDCT:functionality', () => {
	let iDCTInstance;

	before(() => {
		iDCTInstance = new IDCT();
	});
	after(() => {
		iDCTInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			iDCTInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = iDCTInstance.compute()
	}); */
});




describe('IIR:instantiation', () => {
	let iIRInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		iIRInstance = new IIR();
		expect(iIRInstance).to.be.instanceOf(IIR);
	});
	it('should delete instance', function () {
		if (!iIRInstance) this.skip();
		iIRInstance.delete();
	});
});

describe('IIR:functionality', () => {
	let iIRInstance;

	before(() => {
		iIRInstance = new IIR();
	});
	after(() => {
		iIRInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			iIRInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = iIRInstance.compute()
	}); */
});




describe('Inharmonicity:instantiation', () => {
	let inharmonicityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		inharmonicityInstance = new Inharmonicity();
		expect(inharmonicityInstance).to.be.instanceOf(Inharmonicity);
	});
	it('should delete instance', function () {
		if (!inharmonicityInstance) this.skip();
		inharmonicityInstance.delete();
	});
});

describe('Inharmonicity:functionality', () => {
	let inharmonicityInstance;

	before(() => {
		inharmonicityInstance = new Inharmonicity();
	});
	after(() => {
		inharmonicityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			inharmonicityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = inharmonicityInstance.compute()
	}); */
});




describe('InstantPower:instantiation', () => {
	let instantPowerInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		instantPowerInstance = new InstantPower();
		expect(instantPowerInstance).to.be.instanceOf(InstantPower);
	});
	it('should delete instance', function () {
		if (!instantPowerInstance) this.skip();
		instantPowerInstance.delete();
	});
});

describe('InstantPower:functionality', () => {
	let instantPowerInstance;

	before(() => {
		instantPowerInstance = new InstantPower();
	});
	after(() => {
		instantPowerInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			instantPowerInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = instantPowerInstance.compute()
	}); */
});




describe('Intensity:instantiation', () => {
	let intensityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		intensityInstance = new Intensity();
		expect(intensityInstance).to.be.instanceOf(Intensity);
	});
	it('should delete instance', function () {
		if (!intensityInstance) this.skip();
		intensityInstance.delete();
	});
});

describe('Intensity:functionality', () => {
	let intensityInstance;

	before(() => {
		intensityInstance = new Intensity();
	});
	after(() => {
		intensityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			intensityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = intensityInstance.compute()
	}); */
});




describe('Key:instantiation', () => {
	let keyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		keyInstance = new Key();
		expect(keyInstance).to.be.instanceOf(Key);
	});
	it('should delete instance', function () {
		if (!keyInstance) this.skip();
		keyInstance.delete();
	});
});

describe('Key:functionality', () => {
	let keyInstance;

	before(() => {
		keyInstance = new Key();
	});
	after(() => {
		keyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			keyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = keyInstance.compute()
	}); */
});




describe('KeyExtractor:instantiation', () => {
	let keyExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		keyExtractorInstance = new KeyExtractor();
		expect(keyExtractorInstance).to.be.instanceOf(KeyExtractor);
	});
	it('should delete instance', function () {
		if (!keyExtractorInstance) this.skip();
		keyExtractorInstance.delete();
	});
});

describe('KeyExtractor:functionality', () => {
	let keyExtractorInstance;

	before(() => {
		keyExtractorInstance = new KeyExtractor();
	});
	after(() => {
		keyExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			keyExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = keyExtractorInstance.compute()
	}); */
});




describe('LPC:instantiation', () => {
	let lPCInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		lPCInstance = new LPC();
		expect(lPCInstance).to.be.instanceOf(LPC);
	});
	it('should delete instance', function () {
		if (!lPCInstance) this.skip();
		lPCInstance.delete();
	});
});

describe('LPC:functionality', () => {
	let lPCInstance;

	before(() => {
		lPCInstance = new LPC();
	});
	after(() => {
		lPCInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			lPCInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = lPCInstance.compute()
	}); */
});




describe('Larm:instantiation', () => {
	let larmInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		larmInstance = new Larm();
		expect(larmInstance).to.be.instanceOf(Larm);
	});
	it('should delete instance', function () {
		if (!larmInstance) this.skip();
		larmInstance.delete();
	});
});

describe('Larm:functionality', () => {
	let larmInstance;

	before(() => {
		larmInstance = new Larm();
	});
	after(() => {
		larmInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			larmInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = larmInstance.compute()
	}); */
});




describe('Leq:instantiation', () => {
	let leqInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		leqInstance = new Leq();
		expect(leqInstance).to.be.instanceOf(Leq);
	});
	it('should delete instance', function () {
		if (!leqInstance) this.skip();
		leqInstance.delete();
	});
});

describe('Leq:functionality', () => {
	let leqInstance;

	before(() => {
		leqInstance = new Leq();
	});
	after(() => {
		leqInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			leqInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = leqInstance.compute()
	}); */
});




describe('LevelExtractor:instantiation', () => {
	let levelExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		levelExtractorInstance = new LevelExtractor();
		expect(levelExtractorInstance).to.be.instanceOf(LevelExtractor);
	});
	it('should delete instance', function () {
		if (!levelExtractorInstance) this.skip();
		levelExtractorInstance.delete();
	});
});

describe('LevelExtractor:functionality', () => {
	let levelExtractorInstance;

	before(() => {
		levelExtractorInstance = new LevelExtractor();
	});
	after(() => {
		levelExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			levelExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = levelExtractorInstance.compute()
	}); */
});




describe('LogAttackTime:instantiation', () => {
	let logAttackTimeInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		logAttackTimeInstance = new LogAttackTime();
		expect(logAttackTimeInstance).to.be.instanceOf(LogAttackTime);
	});
	it('should delete instance', function () {
		if (!logAttackTimeInstance) this.skip();
		logAttackTimeInstance.delete();
	});
});

describe('LogAttackTime:functionality', () => {
	let logAttackTimeInstance;

	before(() => {
		logAttackTimeInstance = new LogAttackTime();
	});
	after(() => {
		logAttackTimeInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			logAttackTimeInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = logAttackTimeInstance.compute()
	}); */
});




describe('LogSpectrum:instantiation', () => {
	let logSpectrumInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		logSpectrumInstance = new LogSpectrum();
		expect(logSpectrumInstance).to.be.instanceOf(LogSpectrum);
	});
	it('should delete instance', function () {
		if (!logSpectrumInstance) this.skip();
		logSpectrumInstance.delete();
	});
});

describe('LogSpectrum:functionality', () => {
	let logSpectrumInstance;

	before(() => {
		logSpectrumInstance = new LogSpectrum();
	});
	after(() => {
		logSpectrumInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			logSpectrumInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = logSpectrumInstance.compute()
	}); */
});




describe('LoopBpmConfidence:instantiation', () => {
	let loopBpmConfidenceInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		loopBpmConfidenceInstance = new LoopBpmConfidence();
		expect(loopBpmConfidenceInstance).to.be.instanceOf(LoopBpmConfidence);
	});
	it('should delete instance', function () {
		if (!loopBpmConfidenceInstance) this.skip();
		loopBpmConfidenceInstance.delete();
	});
});

describe('LoopBpmConfidence:functionality', () => {
	let loopBpmConfidenceInstance;

	before(() => {
		loopBpmConfidenceInstance = new LoopBpmConfidence();
	});
	after(() => {
		loopBpmConfidenceInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			loopBpmConfidenceInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = loopBpmConfidenceInstance.compute()
	}); */
});




describe('LoopBpmEstimator:instantiation', () => {
	let loopBpmEstimatorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		loopBpmEstimatorInstance = new LoopBpmEstimator();
		expect(loopBpmEstimatorInstance).to.be.instanceOf(LoopBpmEstimator);
	});
	it('should delete instance', function () {
		if (!loopBpmEstimatorInstance) this.skip();
		loopBpmEstimatorInstance.delete();
	});
});

describe('LoopBpmEstimator:functionality', () => {
	let loopBpmEstimatorInstance;

	before(() => {
		loopBpmEstimatorInstance = new LoopBpmEstimator();
	});
	after(() => {
		loopBpmEstimatorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			loopBpmEstimatorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = loopBpmEstimatorInstance.compute()
	}); */
});




describe('Loudness:instantiation', () => {
	let loudnessInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		loudnessInstance = new Loudness();
		expect(loudnessInstance).to.be.instanceOf(Loudness);
	});
	it('should delete instance', function () {
		if (!loudnessInstance) this.skip();
		loudnessInstance.delete();
	});
});

describe('Loudness:functionality', () => {
	let loudnessInstance;

	before(() => {
		loudnessInstance = new Loudness();
	});
	after(() => {
		loudnessInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			loudnessInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = loudnessInstance.compute()
	}); */
});




describe('LoudnessVickers:instantiation', () => {
	let loudnessVickersInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		loudnessVickersInstance = new LoudnessVickers();
		expect(loudnessVickersInstance).to.be.instanceOf(LoudnessVickers);
	});
	it('should delete instance', function () {
		if (!loudnessVickersInstance) this.skip();
		loudnessVickersInstance.delete();
	});
});

describe('LoudnessVickers:functionality', () => {
	let loudnessVickersInstance;

	before(() => {
		loudnessVickersInstance = new LoudnessVickers();
	});
	after(() => {
		loudnessVickersInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			loudnessVickersInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = loudnessVickersInstance.compute()
	}); */
});




describe('LowLevelSpectralEqloudExtractor:instantiation', () => {
	let lowLevelSpectralEqloudExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		lowLevelSpectralEqloudExtractorInstance = new LowLevelSpectralEqloudExtractor();
		expect(lowLevelSpectralEqloudExtractorInstance).to.be.instanceOf(LowLevelSpectralEqloudExtractor);
	});
	it('should delete instance', function () {
		if (!lowLevelSpectralEqloudExtractorInstance) this.skip();
		lowLevelSpectralEqloudExtractorInstance.delete();
	});
});

describe('LowLevelSpectralEqloudExtractor:functionality', () => {
	let lowLevelSpectralEqloudExtractorInstance;

	before(() => {
		lowLevelSpectralEqloudExtractorInstance = new LowLevelSpectralEqloudExtractor();
	});
	after(() => {
		lowLevelSpectralEqloudExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			lowLevelSpectralEqloudExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = lowLevelSpectralEqloudExtractorInstance.compute()
	}); */
});




describe('LowLevelSpectralExtractor:instantiation', () => {
	let lowLevelSpectralExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		lowLevelSpectralExtractorInstance = new LowLevelSpectralExtractor();
		expect(lowLevelSpectralExtractorInstance).to.be.instanceOf(LowLevelSpectralExtractor);
	});
	it('should delete instance', function () {
		if (!lowLevelSpectralExtractorInstance) this.skip();
		lowLevelSpectralExtractorInstance.delete();
	});
});

describe('LowLevelSpectralExtractor:functionality', () => {
	let lowLevelSpectralExtractorInstance;

	before(() => {
		lowLevelSpectralExtractorInstance = new LowLevelSpectralExtractor();
	});
	after(() => {
		lowLevelSpectralExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			lowLevelSpectralExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = lowLevelSpectralExtractorInstance.compute()
	}); */
});




describe('LowPass:instantiation', () => {
	let lowPassInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		lowPassInstance = new LowPass();
		expect(lowPassInstance).to.be.instanceOf(LowPass);
	});
	it('should delete instance', function () {
		if (!lowPassInstance) this.skip();
		lowPassInstance.delete();
	});
});

describe('LowPass:functionality', () => {
	let lowPassInstance;

	before(() => {
		lowPassInstance = new LowPass();
	});
	after(() => {
		lowPassInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			lowPassInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = lowPassInstance.compute()
	}); */
});




describe('MFCC:instantiation', () => {
	let mFCCInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		mFCCInstance = new MFCC();
		expect(mFCCInstance).to.be.instanceOf(MFCC);
	});
	it('should delete instance', function () {
		if (!mFCCInstance) this.skip();
		mFCCInstance.delete();
	});
});

describe('MFCC:functionality', () => {
	let mFCCInstance;

	before(() => {
		mFCCInstance = new MFCC();
	});
	after(() => {
		mFCCInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			mFCCInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = mFCCInstance.compute()
	}); */
});




describe('MaxFilter:instantiation', () => {
	let maxFilterInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		maxFilterInstance = new MaxFilter();
		expect(maxFilterInstance).to.be.instanceOf(MaxFilter);
	});
	it('should delete instance', function () {
		if (!maxFilterInstance) this.skip();
		maxFilterInstance.delete();
	});
});

describe('MaxFilter:functionality', () => {
	let maxFilterInstance;

	before(() => {
		maxFilterInstance = new MaxFilter();
	});
	after(() => {
		maxFilterInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			maxFilterInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = maxFilterInstance.compute()
	}); */
});




describe('MaxMagFreq:instantiation', () => {
	let maxMagFreqInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		maxMagFreqInstance = new MaxMagFreq();
		expect(maxMagFreqInstance).to.be.instanceOf(MaxMagFreq);
	});
	it('should delete instance', function () {
		if (!maxMagFreqInstance) this.skip();
		maxMagFreqInstance.delete();
	});
});

describe('MaxMagFreq:functionality', () => {
	let maxMagFreqInstance;

	before(() => {
		maxMagFreqInstance = new MaxMagFreq();
	});
	after(() => {
		maxMagFreqInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			maxMagFreqInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = maxMagFreqInstance.compute()
	}); */
});




describe('MaxToTotal:instantiation', () => {
	let maxToTotalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		maxToTotalInstance = new MaxToTotal();
		expect(maxToTotalInstance).to.be.instanceOf(MaxToTotal);
	});
	it('should delete instance', function () {
		if (!maxToTotalInstance) this.skip();
		maxToTotalInstance.delete();
	});
});

describe('MaxToTotal:functionality', () => {
	let maxToTotalInstance;

	before(() => {
		maxToTotalInstance = new MaxToTotal();
	});
	after(() => {
		maxToTotalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			maxToTotalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = maxToTotalInstance.compute()
	}); */
});




describe('Mean:instantiation', () => {
	let meanInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		meanInstance = new Mean();
		expect(meanInstance).to.be.instanceOf(Mean);
	});
	it('should delete instance', function () {
		if (!meanInstance) this.skip();
		meanInstance.delete();
	});
});

describe('Mean:functionality', () => {
	let meanInstance;

	before(() => {
		meanInstance = new Mean();
	});
	after(() => {
		meanInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			meanInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = meanInstance.compute()
	}); */
});




describe('Median:instantiation', () => {
	let medianInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		medianInstance = new Median();
		expect(medianInstance).to.be.instanceOf(Median);
	});
	it('should delete instance', function () {
		if (!medianInstance) this.skip();
		medianInstance.delete();
	});
});

describe('Median:functionality', () => {
	let medianInstance;

	before(() => {
		medianInstance = new Median();
	});
	after(() => {
		medianInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			medianInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = medianInstance.compute()
	}); */
});




describe('MedianFilter:instantiation', () => {
	let medianFilterInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		medianFilterInstance = new MedianFilter();
		expect(medianFilterInstance).to.be.instanceOf(MedianFilter);
	});
	it('should delete instance', function () {
		if (!medianFilterInstance) this.skip();
		medianFilterInstance.delete();
	});
});

describe('MedianFilter:functionality', () => {
	let medianFilterInstance;

	before(() => {
		medianFilterInstance = new MedianFilter();
	});
	after(() => {
		medianFilterInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			medianFilterInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = medianFilterInstance.compute()
	}); */
});




describe('MelBands:instantiation', () => {
	let melBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		melBandsInstance = new MelBands();
		expect(melBandsInstance).to.be.instanceOf(MelBands);
	});
	it('should delete instance', function () {
		if (!melBandsInstance) this.skip();
		melBandsInstance.delete();
	});
});

describe('MelBands:functionality', () => {
	let melBandsInstance;

	before(() => {
		melBandsInstance = new MelBands();
	});
	after(() => {
		melBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			melBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = melBandsInstance.compute()
	}); */
});




describe('Meter:instantiation', () => {
	let meterInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		meterInstance = new Meter();
		expect(meterInstance).to.be.instanceOf(Meter);
	});
	it('should delete instance', function () {
		if (!meterInstance) this.skip();
		meterInstance.delete();
	});
});

describe('Meter:functionality', () => {
	let meterInstance;

	before(() => {
		meterInstance = new Meter();
	});
	after(() => {
		meterInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			meterInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = meterInstance.compute()
	}); */
});




describe('MinMax:instantiation', () => {
	let minMaxInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		minMaxInstance = new MinMax();
		expect(minMaxInstance).to.be.instanceOf(MinMax);
	});
	it('should delete instance', function () {
		if (!minMaxInstance) this.skip();
		minMaxInstance.delete();
	});
});

describe('MinMax:functionality', () => {
	let minMaxInstance;

	before(() => {
		minMaxInstance = new MinMax();
	});
	after(() => {
		minMaxInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			minMaxInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = minMaxInstance.compute()
	}); */
});




describe('MinToTotal:instantiation', () => {
	let minToTotalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		minToTotalInstance = new MinToTotal();
		expect(minToTotalInstance).to.be.instanceOf(MinToTotal);
	});
	it('should delete instance', function () {
		if (!minToTotalInstance) this.skip();
		minToTotalInstance.delete();
	});
});

describe('MinToTotal:functionality', () => {
	let minToTotalInstance;

	before(() => {
		minToTotalInstance = new MinToTotal();
	});
	after(() => {
		minToTotalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			minToTotalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = minToTotalInstance.compute()
	}); */
});




describe('MovingAverage:instantiation', () => {
	let movingAverageInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		movingAverageInstance = new MovingAverage();
		expect(movingAverageInstance).to.be.instanceOf(MovingAverage);
	});
	it('should delete instance', function () {
		if (!movingAverageInstance) this.skip();
		movingAverageInstance.delete();
	});
});

describe('MovingAverage:functionality', () => {
	let movingAverageInstance;

	before(() => {
		movingAverageInstance = new MovingAverage();
	});
	after(() => {
		movingAverageInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			movingAverageInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = movingAverageInstance.compute()
	}); */
});




describe('MultiPitchKlapuri:instantiation', () => {
	let multiPitchKlapuriInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		multiPitchKlapuriInstance = new MultiPitchKlapuri();
		expect(multiPitchKlapuriInstance).to.be.instanceOf(MultiPitchKlapuri);
	});
	it('should delete instance', function () {
		if (!multiPitchKlapuriInstance) this.skip();
		multiPitchKlapuriInstance.delete();
	});
});

describe('MultiPitchKlapuri:functionality', () => {
	let multiPitchKlapuriInstance;

	before(() => {
		multiPitchKlapuriInstance = new MultiPitchKlapuri();
	});
	after(() => {
		multiPitchKlapuriInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			multiPitchKlapuriInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = multiPitchKlapuriInstance.compute()
	}); */
});




describe('MultiPitchMelodia:instantiation', () => {
	let multiPitchMelodiaInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		multiPitchMelodiaInstance = new MultiPitchMelodia();
		expect(multiPitchMelodiaInstance).to.be.instanceOf(MultiPitchMelodia);
	});
	it('should delete instance', function () {
		if (!multiPitchMelodiaInstance) this.skip();
		multiPitchMelodiaInstance.delete();
	});
});

describe('MultiPitchMelodia:functionality', () => {
	let multiPitchMelodiaInstance;

	before(() => {
		multiPitchMelodiaInstance = new MultiPitchMelodia();
	});
	after(() => {
		multiPitchMelodiaInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			multiPitchMelodiaInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = multiPitchMelodiaInstance.compute()
	}); */
});




describe('Multiplexer:instantiation', () => {
	let multiplexerInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		multiplexerInstance = new Multiplexer();
		expect(multiplexerInstance).to.be.instanceOf(Multiplexer);
	});
	it('should delete instance', function () {
		if (!multiplexerInstance) this.skip();
		multiplexerInstance.delete();
	});
});

describe('Multiplexer:functionality', () => {
	let multiplexerInstance;

	before(() => {
		multiplexerInstance = new Multiplexer();
	});
	after(() => {
		multiplexerInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			multiplexerInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = multiplexerInstance.compute()
	}); */
});




describe('NNLSChroma:instantiation', () => {
	let nNLSChromaInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		nNLSChromaInstance = new NNLSChroma();
		expect(nNLSChromaInstance).to.be.instanceOf(NNLSChroma);
	});
	it('should delete instance', function () {
		if (!nNLSChromaInstance) this.skip();
		nNLSChromaInstance.delete();
	});
});

describe('NNLSChroma:functionality', () => {
	let nNLSChromaInstance;

	before(() => {
		nNLSChromaInstance = new NNLSChroma();
	});
	after(() => {
		nNLSChromaInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			nNLSChromaInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = nNLSChromaInstance.compute()
	}); */
});




describe('NoiseAdder:instantiation', () => {
	let noiseAdderInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		noiseAdderInstance = new NoiseAdder();
		expect(noiseAdderInstance).to.be.instanceOf(NoiseAdder);
	});
	it('should delete instance', function () {
		if (!noiseAdderInstance) this.skip();
		noiseAdderInstance.delete();
	});
});

describe('NoiseAdder:functionality', () => {
	let noiseAdderInstance;

	before(() => {
		noiseAdderInstance = new NoiseAdder();
	});
	after(() => {
		noiseAdderInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			noiseAdderInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = noiseAdderInstance.compute()
	}); */
});




describe('NoiseBurstDetector:instantiation', () => {
	let noiseBurstDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		noiseBurstDetectorInstance = new NoiseBurstDetector();
		expect(noiseBurstDetectorInstance).to.be.instanceOf(NoiseBurstDetector);
	});
	it('should delete instance', function () {
		if (!noiseBurstDetectorInstance) this.skip();
		noiseBurstDetectorInstance.delete();
	});
});

describe('NoiseBurstDetector:functionality', () => {
	let noiseBurstDetectorInstance;

	before(() => {
		noiseBurstDetectorInstance = new NoiseBurstDetector();
	});
	after(() => {
		noiseBurstDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			noiseBurstDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = noiseBurstDetectorInstance.compute()
	}); */
});




describe('NoveltyCurve:instantiation', () => {
	let noveltyCurveInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		noveltyCurveInstance = new NoveltyCurve();
		expect(noveltyCurveInstance).to.be.instanceOf(NoveltyCurve);
	});
	it('should delete instance', function () {
		if (!noveltyCurveInstance) this.skip();
		noveltyCurveInstance.delete();
	});
});

describe('NoveltyCurve:functionality', () => {
	let noveltyCurveInstance;

	before(() => {
		noveltyCurveInstance = new NoveltyCurve();
	});
	after(() => {
		noveltyCurveInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			noveltyCurveInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = noveltyCurveInstance.compute()
	}); */
});




describe('NoveltyCurveFixedBpmEstimator:instantiation', () => {
	let noveltyCurveFixedBpmEstimatorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		noveltyCurveFixedBpmEstimatorInstance = new NoveltyCurveFixedBpmEstimator();
		expect(noveltyCurveFixedBpmEstimatorInstance).to.be.instanceOf(NoveltyCurveFixedBpmEstimator);
	});
	it('should delete instance', function () {
		if (!noveltyCurveFixedBpmEstimatorInstance) this.skip();
		noveltyCurveFixedBpmEstimatorInstance.delete();
	});
});

describe('NoveltyCurveFixedBpmEstimator:functionality', () => {
	let noveltyCurveFixedBpmEstimatorInstance;

	before(() => {
		noveltyCurveFixedBpmEstimatorInstance = new NoveltyCurveFixedBpmEstimator();
	});
	after(() => {
		noveltyCurveFixedBpmEstimatorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			noveltyCurveFixedBpmEstimatorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = noveltyCurveFixedBpmEstimatorInstance.compute()
	}); */
});




describe('OddToEvenHarmonicEnergyRatio:instantiation', () => {
	let oddToEvenHarmonicEnergyRatioInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		oddToEvenHarmonicEnergyRatioInstance = new OddToEvenHarmonicEnergyRatio();
		expect(oddToEvenHarmonicEnergyRatioInstance).to.be.instanceOf(OddToEvenHarmonicEnergyRatio);
	});
	it('should delete instance', function () {
		if (!oddToEvenHarmonicEnergyRatioInstance) this.skip();
		oddToEvenHarmonicEnergyRatioInstance.delete();
	});
});

describe('OddToEvenHarmonicEnergyRatio:functionality', () => {
	let oddToEvenHarmonicEnergyRatioInstance;

	before(() => {
		oddToEvenHarmonicEnergyRatioInstance = new OddToEvenHarmonicEnergyRatio();
	});
	after(() => {
		oddToEvenHarmonicEnergyRatioInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			oddToEvenHarmonicEnergyRatioInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = oddToEvenHarmonicEnergyRatioInstance.compute()
	}); */
});




describe('OnsetDetection:instantiation', () => {
	let onsetDetectionInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		onsetDetectionInstance = new OnsetDetection();
		expect(onsetDetectionInstance).to.be.instanceOf(OnsetDetection);
	});
	it('should delete instance', function () {
		if (!onsetDetectionInstance) this.skip();
		onsetDetectionInstance.delete();
	});
});

describe('OnsetDetection:functionality', () => {
	let onsetDetectionInstance;

	before(() => {
		onsetDetectionInstance = new OnsetDetection();
	});
	after(() => {
		onsetDetectionInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			onsetDetectionInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = onsetDetectionInstance.compute()
	}); */
});




describe('OnsetDetectionGlobal:instantiation', () => {
	let onsetDetectionGlobalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		onsetDetectionGlobalInstance = new OnsetDetectionGlobal();
		expect(onsetDetectionGlobalInstance).to.be.instanceOf(OnsetDetectionGlobal);
	});
	it('should delete instance', function () {
		if (!onsetDetectionGlobalInstance) this.skip();
		onsetDetectionGlobalInstance.delete();
	});
});

describe('OnsetDetectionGlobal:functionality', () => {
	let onsetDetectionGlobalInstance;

	before(() => {
		onsetDetectionGlobalInstance = new OnsetDetectionGlobal();
	});
	after(() => {
		onsetDetectionGlobalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			onsetDetectionGlobalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = onsetDetectionGlobalInstance.compute()
	}); */
});




describe('OnsetRate:instantiation', () => {
	let onsetRateInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		onsetRateInstance = new OnsetRate();
		expect(onsetRateInstance).to.be.instanceOf(OnsetRate);
	});
	it('should delete instance', function () {
		if (!onsetRateInstance) this.skip();
		onsetRateInstance.delete();
	});
});

describe('OnsetRate:functionality', () => {
	let onsetRateInstance;

	before(() => {
		onsetRateInstance = new OnsetRate();
	});
	after(() => {
		onsetRateInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			onsetRateInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = onsetRateInstance.compute()
	}); */
});




describe('OverlapAdd:instantiation', () => {
	let overlapAddInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		overlapAddInstance = new OverlapAdd();
		expect(overlapAddInstance).to.be.instanceOf(OverlapAdd);
	});
	it('should delete instance', function () {
		if (!overlapAddInstance) this.skip();
		overlapAddInstance.delete();
	});
});

describe('OverlapAdd:functionality', () => {
	let overlapAddInstance;

	before(() => {
		overlapAddInstance = new OverlapAdd();
	});
	after(() => {
		overlapAddInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			overlapAddInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = overlapAddInstance.compute()
	}); */
});




describe('PeakDetection:instantiation', () => {
	let peakDetectionInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		peakDetectionInstance = new PeakDetection();
		expect(peakDetectionInstance).to.be.instanceOf(PeakDetection);
	});
	it('should delete instance', function () {
		if (!peakDetectionInstance) this.skip();
		peakDetectionInstance.delete();
	});
});

describe('PeakDetection:functionality', () => {
	let peakDetectionInstance;

	before(() => {
		peakDetectionInstance = new PeakDetection();
	});
	after(() => {
		peakDetectionInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			peakDetectionInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = peakDetectionInstance.compute()
	}); */
});




describe('PercivalBpmEstimator:instantiation', () => {
	let percivalBpmEstimatorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		percivalBpmEstimatorInstance = new PercivalBpmEstimator();
		expect(percivalBpmEstimatorInstance).to.be.instanceOf(PercivalBpmEstimator);
	});
	it('should delete instance', function () {
		if (!percivalBpmEstimatorInstance) this.skip();
		percivalBpmEstimatorInstance.delete();
	});
});

describe('PercivalBpmEstimator:functionality', () => {
	let percivalBpmEstimatorInstance;

	before(() => {
		percivalBpmEstimatorInstance = new PercivalBpmEstimator();
	});
	after(() => {
		percivalBpmEstimatorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			percivalBpmEstimatorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = percivalBpmEstimatorInstance.compute()
	}); */
});




describe('PercivalEnhanceHarmonics:instantiation', () => {
	let percivalEnhanceHarmonicsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		percivalEnhanceHarmonicsInstance = new PercivalEnhanceHarmonics();
		expect(percivalEnhanceHarmonicsInstance).to.be.instanceOf(PercivalEnhanceHarmonics);
	});
	it('should delete instance', function () {
		if (!percivalEnhanceHarmonicsInstance) this.skip();
		percivalEnhanceHarmonicsInstance.delete();
	});
});

describe('PercivalEnhanceHarmonics:functionality', () => {
	let percivalEnhanceHarmonicsInstance;

	before(() => {
		percivalEnhanceHarmonicsInstance = new PercivalEnhanceHarmonics();
	});
	after(() => {
		percivalEnhanceHarmonicsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			percivalEnhanceHarmonicsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = percivalEnhanceHarmonicsInstance.compute()
	}); */
});




describe('PercivalEvaluatePulseTrains:instantiation', () => {
	let percivalEvaluatePulseTrainsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		percivalEvaluatePulseTrainsInstance = new PercivalEvaluatePulseTrains();
		expect(percivalEvaluatePulseTrainsInstance).to.be.instanceOf(PercivalEvaluatePulseTrains);
	});
	it('should delete instance', function () {
		if (!percivalEvaluatePulseTrainsInstance) this.skip();
		percivalEvaluatePulseTrainsInstance.delete();
	});
});

describe('PercivalEvaluatePulseTrains:functionality', () => {
	let percivalEvaluatePulseTrainsInstance;

	before(() => {
		percivalEvaluatePulseTrainsInstance = new PercivalEvaluatePulseTrains();
	});
	after(() => {
		percivalEvaluatePulseTrainsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			percivalEvaluatePulseTrainsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = percivalEvaluatePulseTrainsInstance.compute()
	}); */
});




describe('PitchContourSegmentation:instantiation', () => {
	let pitchContourSegmentationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchContourSegmentationInstance = new PitchContourSegmentation();
		expect(pitchContourSegmentationInstance).to.be.instanceOf(PitchContourSegmentation);
	});
	it('should delete instance', function () {
		if (!pitchContourSegmentationInstance) this.skip();
		pitchContourSegmentationInstance.delete();
	});
});

describe('PitchContourSegmentation:functionality', () => {
	let pitchContourSegmentationInstance;

	before(() => {
		pitchContourSegmentationInstance = new PitchContourSegmentation();
	});
	after(() => {
		pitchContourSegmentationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchContourSegmentationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchContourSegmentationInstance.compute()
	}); */
});




describe('PitchContours:instantiation', () => {
	let pitchContoursInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchContoursInstance = new PitchContours();
		expect(pitchContoursInstance).to.be.instanceOf(PitchContours);
	});
	it('should delete instance', function () {
		if (!pitchContoursInstance) this.skip();
		pitchContoursInstance.delete();
	});
});

describe('PitchContours:functionality', () => {
	let pitchContoursInstance;

	before(() => {
		pitchContoursInstance = new PitchContours();
	});
	after(() => {
		pitchContoursInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchContoursInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchContoursInstance.compute()
	}); */
});




describe('PitchContoursMelody:instantiation', () => {
	let pitchContoursMelodyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchContoursMelodyInstance = new PitchContoursMelody();
		expect(pitchContoursMelodyInstance).to.be.instanceOf(PitchContoursMelody);
	});
	it('should delete instance', function () {
		if (!pitchContoursMelodyInstance) this.skip();
		pitchContoursMelodyInstance.delete();
	});
});

describe('PitchContoursMelody:functionality', () => {
	let pitchContoursMelodyInstance;

	before(() => {
		pitchContoursMelodyInstance = new PitchContoursMelody();
	});
	after(() => {
		pitchContoursMelodyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchContoursMelodyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchContoursMelodyInstance.compute()
	}); */
});




describe('PitchContoursMonoMelody:instantiation', () => {
	let pitchContoursMonoMelodyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchContoursMonoMelodyInstance = new PitchContoursMonoMelody();
		expect(pitchContoursMonoMelodyInstance).to.be.instanceOf(PitchContoursMonoMelody);
	});
	it('should delete instance', function () {
		if (!pitchContoursMonoMelodyInstance) this.skip();
		pitchContoursMonoMelodyInstance.delete();
	});
});

describe('PitchContoursMonoMelody:functionality', () => {
	let pitchContoursMonoMelodyInstance;

	before(() => {
		pitchContoursMonoMelodyInstance = new PitchContoursMonoMelody();
	});
	after(() => {
		pitchContoursMonoMelodyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchContoursMonoMelodyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchContoursMonoMelodyInstance.compute()
	}); */
});




describe('PitchContoursMultiMelody:instantiation', () => {
	let pitchContoursMultiMelodyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchContoursMultiMelodyInstance = new PitchContoursMultiMelody();
		expect(pitchContoursMultiMelodyInstance).to.be.instanceOf(PitchContoursMultiMelody);
	});
	it('should delete instance', function () {
		if (!pitchContoursMultiMelodyInstance) this.skip();
		pitchContoursMultiMelodyInstance.delete();
	});
});

describe('PitchContoursMultiMelody:functionality', () => {
	let pitchContoursMultiMelodyInstance;

	before(() => {
		pitchContoursMultiMelodyInstance = new PitchContoursMultiMelody();
	});
	after(() => {
		pitchContoursMultiMelodyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchContoursMultiMelodyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchContoursMultiMelodyInstance.compute()
	}); */
});




describe('PitchFilter:instantiation', () => {
	let pitchFilterInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchFilterInstance = new PitchFilter();
		expect(pitchFilterInstance).to.be.instanceOf(PitchFilter);
	});
	it('should delete instance', function () {
		if (!pitchFilterInstance) this.skip();
		pitchFilterInstance.delete();
	});
});

describe('PitchFilter:functionality', () => {
	let pitchFilterInstance;

	before(() => {
		pitchFilterInstance = new PitchFilter();
	});
	after(() => {
		pitchFilterInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchFilterInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchFilterInstance.compute()
	}); */
});




describe('PitchMelodia:instantiation', () => {
	let pitchMelodiaInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchMelodiaInstance = new PitchMelodia();
		expect(pitchMelodiaInstance).to.be.instanceOf(PitchMelodia);
	});
	it('should delete instance', function () {
		if (!pitchMelodiaInstance) this.skip();
		pitchMelodiaInstance.delete();
	});
});

describe('PitchMelodia:functionality', () => {
	let pitchMelodiaInstance;

	before(() => {
		pitchMelodiaInstance = new PitchMelodia();
	});
	after(() => {
		pitchMelodiaInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchMelodiaInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchMelodiaInstance.compute()
	}); */
});




describe('PitchSalience:instantiation', () => {
	let pitchSalienceInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchSalienceInstance = new PitchSalience();
		expect(pitchSalienceInstance).to.be.instanceOf(PitchSalience);
	});
	it('should delete instance', function () {
		if (!pitchSalienceInstance) this.skip();
		pitchSalienceInstance.delete();
	});
});

describe('PitchSalience:functionality', () => {
	let pitchSalienceInstance;

	before(() => {
		pitchSalienceInstance = new PitchSalience();
	});
	after(() => {
		pitchSalienceInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchSalienceInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchSalienceInstance.compute()
	}); */
});




describe('PitchSalienceFunction:instantiation', () => {
	let pitchSalienceFunctionInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchSalienceFunctionInstance = new PitchSalienceFunction();
		expect(pitchSalienceFunctionInstance).to.be.instanceOf(PitchSalienceFunction);
	});
	it('should delete instance', function () {
		if (!pitchSalienceFunctionInstance) this.skip();
		pitchSalienceFunctionInstance.delete();
	});
});

describe('PitchSalienceFunction:functionality', () => {
	let pitchSalienceFunctionInstance;

	before(() => {
		pitchSalienceFunctionInstance = new PitchSalienceFunction();
	});
	after(() => {
		pitchSalienceFunctionInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchSalienceFunctionInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchSalienceFunctionInstance.compute()
	}); */
});




describe('PitchSalienceFunctionPeaks:instantiation', () => {
	let pitchSalienceFunctionPeaksInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchSalienceFunctionPeaksInstance = new PitchSalienceFunctionPeaks();
		expect(pitchSalienceFunctionPeaksInstance).to.be.instanceOf(PitchSalienceFunctionPeaks);
	});
	it('should delete instance', function () {
		if (!pitchSalienceFunctionPeaksInstance) this.skip();
		pitchSalienceFunctionPeaksInstance.delete();
	});
});

describe('PitchSalienceFunctionPeaks:functionality', () => {
	let pitchSalienceFunctionPeaksInstance;

	before(() => {
		pitchSalienceFunctionPeaksInstance = new PitchSalienceFunctionPeaks();
	});
	after(() => {
		pitchSalienceFunctionPeaksInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchSalienceFunctionPeaksInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchSalienceFunctionPeaksInstance.compute()
	}); */
});




describe('PitchYin:instantiation', () => {
	let pitchYinInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchYinInstance = new PitchYin();
		expect(pitchYinInstance).to.be.instanceOf(PitchYin);
	});
	it('should delete instance', function () {
		if (!pitchYinInstance) this.skip();
		pitchYinInstance.delete();
	});
});

describe('PitchYin:functionality', () => {
	let pitchYinInstance;

	before(() => {
		pitchYinInstance = new PitchYin();
	});
	after(() => {
		pitchYinInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchYinInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchYinInstance.compute()
	}); */
});




describe('PitchYinFFT:instantiation', () => {
	let pitchYinFFTInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchYinFFTInstance = new PitchYinFFT();
		expect(pitchYinFFTInstance).to.be.instanceOf(PitchYinFFT);
	});
	it('should delete instance', function () {
		if (!pitchYinFFTInstance) this.skip();
		pitchYinFFTInstance.delete();
	});
});

describe('PitchYinFFT:functionality', () => {
	let pitchYinFFTInstance;

	before(() => {
		pitchYinFFTInstance = new PitchYinFFT();
	});
	after(() => {
		pitchYinFFTInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchYinFFTInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchYinFFTInstance.compute()
	}); */
});




describe('PitchYinProbabilistic:instantiation', () => {
	let pitchYinProbabilisticInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchYinProbabilisticInstance = new PitchYinProbabilistic();
		expect(pitchYinProbabilisticInstance).to.be.instanceOf(PitchYinProbabilistic);
	});
	it('should delete instance', function () {
		if (!pitchYinProbabilisticInstance) this.skip();
		pitchYinProbabilisticInstance.delete();
	});
});

describe('PitchYinProbabilistic:functionality', () => {
	let pitchYinProbabilisticInstance;

	before(() => {
		pitchYinProbabilisticInstance = new PitchYinProbabilistic();
	});
	after(() => {
		pitchYinProbabilisticInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchYinProbabilisticInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchYinProbabilisticInstance.compute()
	}); */
});




describe('PitchYinProbabilities:instantiation', () => {
	let pitchYinProbabilitiesInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchYinProbabilitiesInstance = new PitchYinProbabilities();
		expect(pitchYinProbabilitiesInstance).to.be.instanceOf(PitchYinProbabilities);
	});
	it('should delete instance', function () {
		if (!pitchYinProbabilitiesInstance) this.skip();
		pitchYinProbabilitiesInstance.delete();
	});
});

describe('PitchYinProbabilities:functionality', () => {
	let pitchYinProbabilitiesInstance;

	before(() => {
		pitchYinProbabilitiesInstance = new PitchYinProbabilities();
	});
	after(() => {
		pitchYinProbabilitiesInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchYinProbabilitiesInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchYinProbabilitiesInstance.compute()
	}); */
});




describe('PitchYinProbabilitiesHMM:instantiation', () => {
	let pitchYinProbabilitiesHMMInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		pitchYinProbabilitiesHMMInstance = new PitchYinProbabilitiesHMM();
		expect(pitchYinProbabilitiesHMMInstance).to.be.instanceOf(PitchYinProbabilitiesHMM);
	});
	it('should delete instance', function () {
		if (!pitchYinProbabilitiesHMMInstance) this.skip();
		pitchYinProbabilitiesHMMInstance.delete();
	});
});

describe('PitchYinProbabilitiesHMM:functionality', () => {
	let pitchYinProbabilitiesHMMInstance;

	before(() => {
		pitchYinProbabilitiesHMMInstance = new PitchYinProbabilitiesHMM();
	});
	after(() => {
		pitchYinProbabilitiesHMMInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			pitchYinProbabilitiesHMMInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = pitchYinProbabilitiesHMMInstance.compute()
	}); */
});




describe('PowerMean:instantiation', () => {
	let powerMeanInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		powerMeanInstance = new PowerMean();
		expect(powerMeanInstance).to.be.instanceOf(PowerMean);
	});
	it('should delete instance', function () {
		if (!powerMeanInstance) this.skip();
		powerMeanInstance.delete();
	});
});

describe('PowerMean:functionality', () => {
	let powerMeanInstance;

	before(() => {
		powerMeanInstance = new PowerMean();
	});
	after(() => {
		powerMeanInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			powerMeanInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = powerMeanInstance.compute()
	}); */
});




describe('PowerSpectrum:instantiation', () => {
	let powerSpectrumInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		powerSpectrumInstance = new PowerSpectrum();
		expect(powerSpectrumInstance).to.be.instanceOf(PowerSpectrum);
	});
	it('should delete instance', function () {
		if (!powerSpectrumInstance) this.skip();
		powerSpectrumInstance.delete();
	});
});

describe('PowerSpectrum:functionality', () => {
	let powerSpectrumInstance;

	before(() => {
		powerSpectrumInstance = new PowerSpectrum();
	});
	after(() => {
		powerSpectrumInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			powerSpectrumInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = powerSpectrumInstance.compute()
	}); */
});




describe('PredominantPitchMelodia:instantiation', () => {
	let predominantPitchMelodiaInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		predominantPitchMelodiaInstance = new PredominantPitchMelodia();
		expect(predominantPitchMelodiaInstance).to.be.instanceOf(PredominantPitchMelodia);
	});
	it('should delete instance', function () {
		if (!predominantPitchMelodiaInstance) this.skip();
		predominantPitchMelodiaInstance.delete();
	});
});

describe('PredominantPitchMelodia:functionality', () => {
	let predominantPitchMelodiaInstance;

	before(() => {
		predominantPitchMelodiaInstance = new PredominantPitchMelodia();
	});
	after(() => {
		predominantPitchMelodiaInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			predominantPitchMelodiaInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = predominantPitchMelodiaInstance.compute()
	}); */
});




describe('RMS:instantiation', () => {
	let rMSInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rMSInstance = new RMS();
		expect(rMSInstance).to.be.instanceOf(RMS);
	});
	it('should delete instance', function () {
		if (!rMSInstance) this.skip();
		rMSInstance.delete();
	});
});

describe('RMS:functionality', () => {
	let rMSInstance;

	before(() => {
		rMSInstance = new RMS();
	});
	after(() => {
		rMSInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rMSInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rMSInstance.compute()
	}); */
});




describe('RawMoments:instantiation', () => {
	let rawMomentsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rawMomentsInstance = new RawMoments();
		expect(rawMomentsInstance).to.be.instanceOf(RawMoments);
	});
	it('should delete instance', function () {
		if (!rawMomentsInstance) this.skip();
		rawMomentsInstance.delete();
	});
});

describe('RawMoments:functionality', () => {
	let rawMomentsInstance;

	before(() => {
		rawMomentsInstance = new RawMoments();
	});
	after(() => {
		rawMomentsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rawMomentsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rawMomentsInstance.compute()
	}); */
});




describe('ReplayGain:instantiation', () => {
	let replayGainInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		replayGainInstance = new ReplayGain();
		expect(replayGainInstance).to.be.instanceOf(ReplayGain);
	});
	it('should delete instance', function () {
		if (!replayGainInstance) this.skip();
		replayGainInstance.delete();
	});
});

describe('ReplayGain:functionality', () => {
	let replayGainInstance;

	before(() => {
		replayGainInstance = new ReplayGain();
	});
	after(() => {
		replayGainInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			replayGainInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = replayGainInstance.compute()
	}); */
});




describe('Resample:instantiation', () => {
	let resampleInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		resampleInstance = new Resample();
		expect(resampleInstance).to.be.instanceOf(Resample);
	});
	it('should delete instance', function () {
		if (!resampleInstance) this.skip();
		resampleInstance.delete();
	});
});

describe('Resample:functionality', () => {
	let resampleInstance;

	before(() => {
		resampleInstance = new Resample();
	});
	after(() => {
		resampleInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			resampleInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = resampleInstance.compute()
	}); */
});




describe('ResampleFFT:instantiation', () => {
	let resampleFFTInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		resampleFFTInstance = new ResampleFFT();
		expect(resampleFFTInstance).to.be.instanceOf(ResampleFFT);
	});
	it('should delete instance', function () {
		if (!resampleFFTInstance) this.skip();
		resampleFFTInstance.delete();
	});
});

describe('ResampleFFT:functionality', () => {
	let resampleFFTInstance;

	before(() => {
		resampleFFTInstance = new ResampleFFT();
	});
	after(() => {
		resampleFFTInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			resampleFFTInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = resampleFFTInstance.compute()
	}); */
});




describe('RhythmDescriptors:instantiation', () => {
	let rhythmDescriptorsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rhythmDescriptorsInstance = new RhythmDescriptors();
		expect(rhythmDescriptorsInstance).to.be.instanceOf(RhythmDescriptors);
	});
	it('should delete instance', function () {
		if (!rhythmDescriptorsInstance) this.skip();
		rhythmDescriptorsInstance.delete();
	});
});

describe('RhythmDescriptors:functionality', () => {
	let rhythmDescriptorsInstance;

	before(() => {
		rhythmDescriptorsInstance = new RhythmDescriptors();
	});
	after(() => {
		rhythmDescriptorsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rhythmDescriptorsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rhythmDescriptorsInstance.compute()
	}); */
});




describe('RhythmExtractor:instantiation', () => {
	let rhythmExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rhythmExtractorInstance = new RhythmExtractor();
		expect(rhythmExtractorInstance).to.be.instanceOf(RhythmExtractor);
	});
	it('should delete instance', function () {
		if (!rhythmExtractorInstance) this.skip();
		rhythmExtractorInstance.delete();
	});
});

describe('RhythmExtractor:functionality', () => {
	let rhythmExtractorInstance;

	before(() => {
		rhythmExtractorInstance = new RhythmExtractor();
	});
	after(() => {
		rhythmExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rhythmExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rhythmExtractorInstance.compute()
	}); */
});




describe('RhythmExtractor2013:instantiation', () => {
	let rhythmExtractor2013Instance;
	it('should instantiate algorithm and initialize with default params', () => {
		rhythmExtractor2013Instance = new RhythmExtractor2013();
		expect(rhythmExtractor2013Instance).to.be.instanceOf(RhythmExtractor2013);
	});
	it('should delete instance', function () {
		if (!rhythmExtractor2013Instance) this.skip();
		rhythmExtractor2013Instance.delete();
	});
});

describe('RhythmExtractor2013:functionality', () => {
	let rhythmExtractor2013Instance;

	before(() => {
		rhythmExtractor2013Instance = new RhythmExtractor2013();
	});
	after(() => {
		rhythmExtractor2013Instance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rhythmExtractor2013Instance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rhythmExtractor2013Instance.compute()
	}); */
});




describe('RhythmTransform:instantiation', () => {
	let rhythmTransformInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rhythmTransformInstance = new RhythmTransform();
		expect(rhythmTransformInstance).to.be.instanceOf(RhythmTransform);
	});
	it('should delete instance', function () {
		if (!rhythmTransformInstance) this.skip();
		rhythmTransformInstance.delete();
	});
});

describe('RhythmTransform:functionality', () => {
	let rhythmTransformInstance;

	before(() => {
		rhythmTransformInstance = new RhythmTransform();
	});
	after(() => {
		rhythmTransformInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rhythmTransformInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rhythmTransformInstance.compute()
	}); */
});




describe('RollOff:instantiation', () => {
	let rollOffInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		rollOffInstance = new RollOff();
		expect(rollOffInstance).to.be.instanceOf(RollOff);
	});
	it('should delete instance', function () {
		if (!rollOffInstance) this.skip();
		rollOffInstance.delete();
	});
});

describe('RollOff:functionality', () => {
	let rollOffInstance;

	before(() => {
		rollOffInstance = new RollOff();
	});
	after(() => {
		rollOffInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			rollOffInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = rollOffInstance.compute()
	}); */
});




describe('SNR:instantiation', () => {
	let sNRInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		sNRInstance = new SNR();
		expect(sNRInstance).to.be.instanceOf(SNR);
	});
	it('should delete instance', function () {
		if (!sNRInstance) this.skip();
		sNRInstance.delete();
	});
});

describe('SNR:functionality', () => {
	let sNRInstance;

	before(() => {
		sNRInstance = new SNR();
	});
	after(() => {
		sNRInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			sNRInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = sNRInstance.compute()
	}); */
});




describe('SaturationDetector:instantiation', () => {
	let saturationDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		saturationDetectorInstance = new SaturationDetector();
		expect(saturationDetectorInstance).to.be.instanceOf(SaturationDetector);
	});
	it('should delete instance', function () {
		if (!saturationDetectorInstance) this.skip();
		saturationDetectorInstance.delete();
	});
});

describe('SaturationDetector:functionality', () => {
	let saturationDetectorInstance;

	before(() => {
		saturationDetectorInstance = new SaturationDetector();
	});
	after(() => {
		saturationDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			saturationDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = saturationDetectorInstance.compute()
	}); */
});




describe('Scale:instantiation', () => {
	let scaleInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		scaleInstance = new Scale();
		expect(scaleInstance).to.be.instanceOf(Scale);
	});
	it('should delete instance', function () {
		if (!scaleInstance) this.skip();
		scaleInstance.delete();
	});
});

describe('Scale:functionality', () => {
	let scaleInstance;

	before(() => {
		scaleInstance = new Scale();
	});
	after(() => {
		scaleInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			scaleInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = scaleInstance.compute()
	}); */
});




describe('SineSubtraction:instantiation', () => {
	let sineSubtractionInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		sineSubtractionInstance = new SineSubtraction();
		expect(sineSubtractionInstance).to.be.instanceOf(SineSubtraction);
	});
	it('should delete instance', function () {
		if (!sineSubtractionInstance) this.skip();
		sineSubtractionInstance.delete();
	});
});

describe('SineSubtraction:functionality', () => {
	let sineSubtractionInstance;

	before(() => {
		sineSubtractionInstance = new SineSubtraction();
	});
	after(() => {
		sineSubtractionInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			sineSubtractionInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = sineSubtractionInstance.compute()
	}); */
});




describe('SingleBeatLoudness:instantiation', () => {
	let singleBeatLoudnessInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		singleBeatLoudnessInstance = new SingleBeatLoudness();
		expect(singleBeatLoudnessInstance).to.be.instanceOf(SingleBeatLoudness);
	});
	it('should delete instance', function () {
		if (!singleBeatLoudnessInstance) this.skip();
		singleBeatLoudnessInstance.delete();
	});
});

describe('SingleBeatLoudness:functionality', () => {
	let singleBeatLoudnessInstance;

	before(() => {
		singleBeatLoudnessInstance = new SingleBeatLoudness();
	});
	after(() => {
		singleBeatLoudnessInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			singleBeatLoudnessInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = singleBeatLoudnessInstance.compute()
	}); */
});




describe('Slicer:instantiation', () => {
	let slicerInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		slicerInstance = new Slicer();
		expect(slicerInstance).to.be.instanceOf(Slicer);
	});
	it('should delete instance', function () {
		if (!slicerInstance) this.skip();
		slicerInstance.delete();
	});
});

describe('Slicer:functionality', () => {
	let slicerInstance;

	before(() => {
		slicerInstance = new Slicer();
	});
	after(() => {
		slicerInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			slicerInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = slicerInstance.compute()
	}); */
});




describe('SpectralCentroidTime:instantiation', () => {
	let spectralCentroidTimeInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectralCentroidTimeInstance = new SpectralCentroidTime();
		expect(spectralCentroidTimeInstance).to.be.instanceOf(SpectralCentroidTime);
	});
	it('should delete instance', function () {
		if (!spectralCentroidTimeInstance) this.skip();
		spectralCentroidTimeInstance.delete();
	});
});

describe('SpectralCentroidTime:functionality', () => {
	let spectralCentroidTimeInstance;

	before(() => {
		spectralCentroidTimeInstance = new SpectralCentroidTime();
	});
	after(() => {
		spectralCentroidTimeInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectralCentroidTimeInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectralCentroidTimeInstance.compute()
	}); */
});




describe('SpectralComplexity:instantiation', () => {
	let spectralComplexityInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectralComplexityInstance = new SpectralComplexity();
		expect(spectralComplexityInstance).to.be.instanceOf(SpectralComplexity);
	});
	it('should delete instance', function () {
		if (!spectralComplexityInstance) this.skip();
		spectralComplexityInstance.delete();
	});
});

describe('SpectralComplexity:functionality', () => {
	let spectralComplexityInstance;

	before(() => {
		spectralComplexityInstance = new SpectralComplexity();
	});
	after(() => {
		spectralComplexityInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectralComplexityInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectralComplexityInstance.compute()
	}); */
});




describe('SpectralContrast:instantiation', () => {
	let spectralContrastInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectralContrastInstance = new SpectralContrast();
		expect(spectralContrastInstance).to.be.instanceOf(SpectralContrast);
	});
	it('should delete instance', function () {
		if (!spectralContrastInstance) this.skip();
		spectralContrastInstance.delete();
	});
});

describe('SpectralContrast:functionality', () => {
	let spectralContrastInstance;

	before(() => {
		spectralContrastInstance = new SpectralContrast();
	});
	after(() => {
		spectralContrastInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectralContrastInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectralContrastInstance.compute()
	}); */
});




describe('SpectralPeaks:instantiation', () => {
	let spectralPeaksInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectralPeaksInstance = new SpectralPeaks();
		expect(spectralPeaksInstance).to.be.instanceOf(SpectralPeaks);
	});
	it('should delete instance', function () {
		if (!spectralPeaksInstance) this.skip();
		spectralPeaksInstance.delete();
	});
});

describe('SpectralPeaks:functionality', () => {
	let spectralPeaksInstance;

	before(() => {
		spectralPeaksInstance = new SpectralPeaks();
	});
	after(() => {
		spectralPeaksInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectralPeaksInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectralPeaksInstance.compute()
	}); */
});




describe('SpectralWhitening:instantiation', () => {
	let spectralWhiteningInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectralWhiteningInstance = new SpectralWhitening();
		expect(spectralWhiteningInstance).to.be.instanceOf(SpectralWhitening);
	});
	it('should delete instance', function () {
		if (!spectralWhiteningInstance) this.skip();
		spectralWhiteningInstance.delete();
	});
});

describe('SpectralWhitening:functionality', () => {
	let spectralWhiteningInstance;

	before(() => {
		spectralWhiteningInstance = new SpectralWhitening();
	});
	after(() => {
		spectralWhiteningInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectralWhiteningInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectralWhiteningInstance.compute()
	}); */
});




describe('Spectrum:instantiation', () => {
	let spectrumInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectrumInstance = new Spectrum();
		expect(spectrumInstance).to.be.instanceOf(Spectrum);
	});
	it('should delete instance', function () {
		if (!spectrumInstance) this.skip();
		spectrumInstance.delete();
	});
});

describe('Spectrum:functionality', () => {
	let spectrumInstance;

	before(() => {
		spectrumInstance = new Spectrum();
	});
	after(() => {
		spectrumInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectrumInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectrumInstance.compute()
	}); */
});




describe('SpectrumCQ:instantiation', () => {
	let spectrumCQInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectrumCQInstance = new SpectrumCQ();
		expect(spectrumCQInstance).to.be.instanceOf(SpectrumCQ);
	});
	it('should delete instance', function () {
		if (!spectrumCQInstance) this.skip();
		spectrumCQInstance.delete();
	});
});

describe('SpectrumCQ:functionality', () => {
	let spectrumCQInstance;

	before(() => {
		spectrumCQInstance = new SpectrumCQ();
	});
	after(() => {
		spectrumCQInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectrumCQInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectrumCQInstance.compute()
	}); */
});




describe('SpectrumToCent:instantiation', () => {
	let spectrumToCentInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spectrumToCentInstance = new SpectrumToCent();
		expect(spectrumToCentInstance).to.be.instanceOf(SpectrumToCent);
	});
	it('should delete instance', function () {
		if (!spectrumToCentInstance) this.skip();
		spectrumToCentInstance.delete();
	});
});

describe('SpectrumToCent:functionality', () => {
	let spectrumToCentInstance;

	before(() => {
		spectrumToCentInstance = new SpectrumToCent();
	});
	after(() => {
		spectrumToCentInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spectrumToCentInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spectrumToCentInstance.compute()
	}); */
});




describe('Spline:instantiation', () => {
	let splineInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		splineInstance = new Spline();
		expect(splineInstance).to.be.instanceOf(Spline);
	});
	it('should delete instance', function () {
		if (!splineInstance) this.skip();
		splineInstance.delete();
	});
});

describe('Spline:functionality', () => {
	let splineInstance;

	before(() => {
		splineInstance = new Spline();
	});
	after(() => {
		splineInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			splineInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = splineInstance.compute()
	}); */
});




describe('SprModelAnal:instantiation', () => {
	let sprModelAnalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		sprModelAnalInstance = new SprModelAnal();
		expect(sprModelAnalInstance).to.be.instanceOf(SprModelAnal);
	});
	it('should delete instance', function () {
		if (!sprModelAnalInstance) this.skip();
		sprModelAnalInstance.delete();
	});
});

describe('SprModelAnal:functionality', () => {
	let sprModelAnalInstance;

	before(() => {
		sprModelAnalInstance = new SprModelAnal();
	});
	after(() => {
		sprModelAnalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			sprModelAnalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = sprModelAnalInstance.compute()
	}); */
});




describe('SprModelSynth:instantiation', () => {
	let sprModelSynthInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		sprModelSynthInstance = new SprModelSynth();
		expect(sprModelSynthInstance).to.be.instanceOf(SprModelSynth);
	});
	it('should delete instance', function () {
		if (!sprModelSynthInstance) this.skip();
		sprModelSynthInstance.delete();
	});
});

describe('SprModelSynth:functionality', () => {
	let sprModelSynthInstance;

	before(() => {
		sprModelSynthInstance = new SprModelSynth();
	});
	after(() => {
		sprModelSynthInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			sprModelSynthInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = sprModelSynthInstance.compute()
	}); */
});




describe('SpsModelAnal:instantiation', () => {
	let spsModelAnalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spsModelAnalInstance = new SpsModelAnal();
		expect(spsModelAnalInstance).to.be.instanceOf(SpsModelAnal);
	});
	it('should delete instance', function () {
		if (!spsModelAnalInstance) this.skip();
		spsModelAnalInstance.delete();
	});
});

describe('SpsModelAnal:functionality', () => {
	let spsModelAnalInstance;

	before(() => {
		spsModelAnalInstance = new SpsModelAnal();
	});
	after(() => {
		spsModelAnalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spsModelAnalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spsModelAnalInstance.compute()
	}); */
});




describe('SpsModelSynth:instantiation', () => {
	let spsModelSynthInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		spsModelSynthInstance = new SpsModelSynth();
		expect(spsModelSynthInstance).to.be.instanceOf(SpsModelSynth);
	});
	it('should delete instance', function () {
		if (!spsModelSynthInstance) this.skip();
		spsModelSynthInstance.delete();
	});
});

describe('SpsModelSynth:functionality', () => {
	let spsModelSynthInstance;

	before(() => {
		spsModelSynthInstance = new SpsModelSynth();
	});
	after(() => {
		spsModelSynthInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			spsModelSynthInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = spsModelSynthInstance.compute()
	}); */
});




describe('StartStopCut:instantiation', () => {
	let startStopCutInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		startStopCutInstance = new StartStopCut();
		expect(startStopCutInstance).to.be.instanceOf(StartStopCut);
	});
	it('should delete instance', function () {
		if (!startStopCutInstance) this.skip();
		startStopCutInstance.delete();
	});
});

describe('StartStopCut:functionality', () => {
	let startStopCutInstance;

	before(() => {
		startStopCutInstance = new StartStopCut();
	});
	after(() => {
		startStopCutInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			startStopCutInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = startStopCutInstance.compute()
	}); */
});




describe('StartStopSilence:instantiation', () => {
	let startStopSilenceInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		startStopSilenceInstance = new StartStopSilence();
		expect(startStopSilenceInstance).to.be.instanceOf(StartStopSilence);
	});
	it('should delete instance', function () {
		if (!startStopSilenceInstance) this.skip();
		startStopSilenceInstance.delete();
	});
});

describe('StartStopSilence:functionality', () => {
	let startStopSilenceInstance;

	before(() => {
		startStopSilenceInstance = new StartStopSilence();
	});
	after(() => {
		startStopSilenceInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			startStopSilenceInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = startStopSilenceInstance.compute()
	}); */
});




describe('StochasticModelAnal:instantiation', () => {
	let stochasticModelAnalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		stochasticModelAnalInstance = new StochasticModelAnal();
		expect(stochasticModelAnalInstance).to.be.instanceOf(StochasticModelAnal);
	});
	it('should delete instance', function () {
		if (!stochasticModelAnalInstance) this.skip();
		stochasticModelAnalInstance.delete();
	});
});

describe('StochasticModelAnal:functionality', () => {
	let stochasticModelAnalInstance;

	before(() => {
		stochasticModelAnalInstance = new StochasticModelAnal();
	});
	after(() => {
		stochasticModelAnalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			stochasticModelAnalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = stochasticModelAnalInstance.compute()
	}); */
});




describe('StochasticModelSynth:instantiation', () => {
	let stochasticModelSynthInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		stochasticModelSynthInstance = new StochasticModelSynth();
		expect(stochasticModelSynthInstance).to.be.instanceOf(StochasticModelSynth);
	});
	it('should delete instance', function () {
		if (!stochasticModelSynthInstance) this.skip();
		stochasticModelSynthInstance.delete();
	});
});

describe('StochasticModelSynth:functionality', () => {
	let stochasticModelSynthInstance;

	before(() => {
		stochasticModelSynthInstance = new StochasticModelSynth();
	});
	after(() => {
		stochasticModelSynthInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			stochasticModelSynthInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = stochasticModelSynthInstance.compute()
	}); */
});




describe('StrongDecay:instantiation', () => {
	let strongDecayInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		strongDecayInstance = new StrongDecay();
		expect(strongDecayInstance).to.be.instanceOf(StrongDecay);
	});
	it('should delete instance', function () {
		if (!strongDecayInstance) this.skip();
		strongDecayInstance.delete();
	});
});

describe('StrongDecay:functionality', () => {
	let strongDecayInstance;

	before(() => {
		strongDecayInstance = new StrongDecay();
	});
	after(() => {
		strongDecayInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			strongDecayInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = strongDecayInstance.compute()
	}); */
});




describe('StrongPeak:instantiation', () => {
	let strongPeakInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		strongPeakInstance = new StrongPeak();
		expect(strongPeakInstance).to.be.instanceOf(StrongPeak);
	});
	it('should delete instance', function () {
		if (!strongPeakInstance) this.skip();
		strongPeakInstance.delete();
	});
});

describe('StrongPeak:functionality', () => {
	let strongPeakInstance;

	before(() => {
		strongPeakInstance = new StrongPeak();
	});
	after(() => {
		strongPeakInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			strongPeakInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = strongPeakInstance.compute()
	}); */
});




describe('SuperFluxExtractor:instantiation', () => {
	let superFluxExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		superFluxExtractorInstance = new SuperFluxExtractor();
		expect(superFluxExtractorInstance).to.be.instanceOf(SuperFluxExtractor);
	});
	it('should delete instance', function () {
		if (!superFluxExtractorInstance) this.skip();
		superFluxExtractorInstance.delete();
	});
});

describe('SuperFluxExtractor:functionality', () => {
	let superFluxExtractorInstance;

	before(() => {
		superFluxExtractorInstance = new SuperFluxExtractor();
	});
	after(() => {
		superFluxExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			superFluxExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = superFluxExtractorInstance.compute()
	}); */
});




describe('SuperFluxNovelty:instantiation', () => {
	let superFluxNoveltyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		superFluxNoveltyInstance = new SuperFluxNovelty();
		expect(superFluxNoveltyInstance).to.be.instanceOf(SuperFluxNovelty);
	});
	it('should delete instance', function () {
		if (!superFluxNoveltyInstance) this.skip();
		superFluxNoveltyInstance.delete();
	});
});

describe('SuperFluxNovelty:functionality', () => {
	let superFluxNoveltyInstance;

	before(() => {
		superFluxNoveltyInstance = new SuperFluxNovelty();
	});
	after(() => {
		superFluxNoveltyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			superFluxNoveltyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = superFluxNoveltyInstance.compute()
	}); */
});




describe('SuperFluxPeaks:instantiation', () => {
	let superFluxPeaksInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		superFluxPeaksInstance = new SuperFluxPeaks();
		expect(superFluxPeaksInstance).to.be.instanceOf(SuperFluxPeaks);
	});
	it('should delete instance', function () {
		if (!superFluxPeaksInstance) this.skip();
		superFluxPeaksInstance.delete();
	});
});

describe('SuperFluxPeaks:functionality', () => {
	let superFluxPeaksInstance;

	before(() => {
		superFluxPeaksInstance = new SuperFluxPeaks();
	});
	after(() => {
		superFluxPeaksInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			superFluxPeaksInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = superFluxPeaksInstance.compute()
	}); */
});




describe('TCToTotal:instantiation', () => {
	let tCToTotalInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tCToTotalInstance = new TCToTotal();
		expect(tCToTotalInstance).to.be.instanceOf(TCToTotal);
	});
	it('should delete instance', function () {
		if (!tCToTotalInstance) this.skip();
		tCToTotalInstance.delete();
	});
});

describe('TCToTotal:functionality', () => {
	let tCToTotalInstance;

	before(() => {
		tCToTotalInstance = new TCToTotal();
	});
	after(() => {
		tCToTotalInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tCToTotalInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tCToTotalInstance.compute()
	}); */
});




describe('TempoScaleBands:instantiation', () => {
	let tempoScaleBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tempoScaleBandsInstance = new TempoScaleBands();
		expect(tempoScaleBandsInstance).to.be.instanceOf(TempoScaleBands);
	});
	it('should delete instance', function () {
		if (!tempoScaleBandsInstance) this.skip();
		tempoScaleBandsInstance.delete();
	});
});

describe('TempoScaleBands:functionality', () => {
	let tempoScaleBandsInstance;

	before(() => {
		tempoScaleBandsInstance = new TempoScaleBands();
	});
	after(() => {
		tempoScaleBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tempoScaleBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tempoScaleBandsInstance.compute()
	}); */
});




describe('TempoTap:instantiation', () => {
	let tempoTapInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tempoTapInstance = new TempoTap();
		expect(tempoTapInstance).to.be.instanceOf(TempoTap);
	});
	it('should delete instance', function () {
		if (!tempoTapInstance) this.skip();
		tempoTapInstance.delete();
	});
});

describe('TempoTap:functionality', () => {
	let tempoTapInstance;

	before(() => {
		tempoTapInstance = new TempoTap();
	});
	after(() => {
		tempoTapInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tempoTapInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tempoTapInstance.compute()
	}); */
});




describe('TempoTapDegara:instantiation', () => {
	let tempoTapDegaraInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tempoTapDegaraInstance = new TempoTapDegara();
		expect(tempoTapDegaraInstance).to.be.instanceOf(TempoTapDegara);
	});
	it('should delete instance', function () {
		if (!tempoTapDegaraInstance) this.skip();
		tempoTapDegaraInstance.delete();
	});
});

describe('TempoTapDegara:functionality', () => {
	let tempoTapDegaraInstance;

	before(() => {
		tempoTapDegaraInstance = new TempoTapDegara();
	});
	after(() => {
		tempoTapDegaraInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tempoTapDegaraInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tempoTapDegaraInstance.compute()
	}); */
});




describe('TempoTapMaxAgreement:instantiation', () => {
	let tempoTapMaxAgreementInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tempoTapMaxAgreementInstance = new TempoTapMaxAgreement();
		expect(tempoTapMaxAgreementInstance).to.be.instanceOf(TempoTapMaxAgreement);
	});
	it('should delete instance', function () {
		if (!tempoTapMaxAgreementInstance) this.skip();
		tempoTapMaxAgreementInstance.delete();
	});
});

describe('TempoTapMaxAgreement:functionality', () => {
	let tempoTapMaxAgreementInstance;

	before(() => {
		tempoTapMaxAgreementInstance = new TempoTapMaxAgreement();
	});
	after(() => {
		tempoTapMaxAgreementInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tempoTapMaxAgreementInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tempoTapMaxAgreementInstance.compute()
	}); */
});




describe('TempoTapTicks:instantiation', () => {
	let tempoTapTicksInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tempoTapTicksInstance = new TempoTapTicks();
		expect(tempoTapTicksInstance).to.be.instanceOf(TempoTapTicks);
	});
	it('should delete instance', function () {
		if (!tempoTapTicksInstance) this.skip();
		tempoTapTicksInstance.delete();
	});
});

describe('TempoTapTicks:functionality', () => {
	let tempoTapTicksInstance;

	before(() => {
		tempoTapTicksInstance = new TempoTapTicks();
	});
	after(() => {
		tempoTapTicksInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tempoTapTicksInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tempoTapTicksInstance.compute()
	}); */
});




describe('TensorflowInputFSDSINet:instantiation', () => {
	let tensorflowInputFSDSINetInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tensorflowInputFSDSINetInstance = new TensorflowInputFSDSINet();
		expect(tensorflowInputFSDSINetInstance).to.be.instanceOf(TensorflowInputFSDSINet);
	});
	it('should delete instance', function () {
		if (!tensorflowInputFSDSINetInstance) this.skip();
		tensorflowInputFSDSINetInstance.delete();
	});
});

describe('TensorflowInputFSDSINet:functionality', () => {
	let tensorflowInputFSDSINetInstance;

	before(() => {
		tensorflowInputFSDSINetInstance = new TensorflowInputFSDSINet();
	});
	after(() => {
		tensorflowInputFSDSINetInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tensorflowInputFSDSINetInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tensorflowInputFSDSINetInstance.compute()
	}); */
});




describe('TensorflowInputMusiCNN:instantiation', () => {
	let tensorflowInputMusiCNNInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tensorflowInputMusiCNNInstance = new TensorflowInputMusiCNN();
		expect(tensorflowInputMusiCNNInstance).to.be.instanceOf(TensorflowInputMusiCNN);
	});
	it('should delete instance', function () {
		if (!tensorflowInputMusiCNNInstance) this.skip();
		tensorflowInputMusiCNNInstance.delete();
	});
});

describe('TensorflowInputMusiCNN:functionality', () => {
	let tensorflowInputMusiCNNInstance;

	before(() => {
		tensorflowInputMusiCNNInstance = new TensorflowInputMusiCNN();
	});
	after(() => {
		tensorflowInputMusiCNNInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tensorflowInputMusiCNNInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tensorflowInputMusiCNNInstance.compute()
	}); */
});




describe('TensorflowInputTempoCNN:instantiation', () => {
	let tensorflowInputTempoCNNInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tensorflowInputTempoCNNInstance = new TensorflowInputTempoCNN();
		expect(tensorflowInputTempoCNNInstance).to.be.instanceOf(TensorflowInputTempoCNN);
	});
	it('should delete instance', function () {
		if (!tensorflowInputTempoCNNInstance) this.skip();
		tensorflowInputTempoCNNInstance.delete();
	});
});

describe('TensorflowInputTempoCNN:functionality', () => {
	let tensorflowInputTempoCNNInstance;

	before(() => {
		tensorflowInputTempoCNNInstance = new TensorflowInputTempoCNN();
	});
	after(() => {
		tensorflowInputTempoCNNInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tensorflowInputTempoCNNInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tensorflowInputTempoCNNInstance.compute()
	}); */
});




describe('TensorflowInputVGGish:instantiation', () => {
	let tensorflowInputVGGishInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tensorflowInputVGGishInstance = new TensorflowInputVGGish();
		expect(tensorflowInputVGGishInstance).to.be.instanceOf(TensorflowInputVGGish);
	});
	it('should delete instance', function () {
		if (!tensorflowInputVGGishInstance) this.skip();
		tensorflowInputVGGishInstance.delete();
	});
});

describe('TensorflowInputVGGish:functionality', () => {
	let tensorflowInputVGGishInstance;

	before(() => {
		tensorflowInputVGGishInstance = new TensorflowInputVGGish();
	});
	after(() => {
		tensorflowInputVGGishInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tensorflowInputVGGishInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tensorflowInputVGGishInstance.compute()
	}); */
});




describe('TonalExtractor:instantiation', () => {
	let tonalExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tonalExtractorInstance = new TonalExtractor();
		expect(tonalExtractorInstance).to.be.instanceOf(TonalExtractor);
	});
	it('should delete instance', function () {
		if (!tonalExtractorInstance) this.skip();
		tonalExtractorInstance.delete();
	});
});

describe('TonalExtractor:functionality', () => {
	let tonalExtractorInstance;

	before(() => {
		tonalExtractorInstance = new TonalExtractor();
	});
	after(() => {
		tonalExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tonalExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tonalExtractorInstance.compute()
	}); */
});




describe('TonicIndianArtMusic:instantiation', () => {
	let tonicIndianArtMusicInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tonicIndianArtMusicInstance = new TonicIndianArtMusic();
		expect(tonicIndianArtMusicInstance).to.be.instanceOf(TonicIndianArtMusic);
	});
	it('should delete instance', function () {
		if (!tonicIndianArtMusicInstance) this.skip();
		tonicIndianArtMusicInstance.delete();
	});
});

describe('TonicIndianArtMusic:functionality', () => {
	let tonicIndianArtMusicInstance;

	before(() => {
		tonicIndianArtMusicInstance = new TonicIndianArtMusic();
	});
	after(() => {
		tonicIndianArtMusicInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tonicIndianArtMusicInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tonicIndianArtMusicInstance.compute()
	}); */
});




describe('TriangularBands:instantiation', () => {
	let triangularBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		triangularBandsInstance = new TriangularBands();
		expect(triangularBandsInstance).to.be.instanceOf(TriangularBands);
	});
	it('should delete instance', function () {
		if (!triangularBandsInstance) this.skip();
		triangularBandsInstance.delete();
	});
});

describe('TriangularBands:functionality', () => {
	let triangularBandsInstance;

	before(() => {
		triangularBandsInstance = new TriangularBands();
	});
	after(() => {
		triangularBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			triangularBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = triangularBandsInstance.compute()
	}); */
});




describe('TriangularBarkBands:instantiation', () => {
	let triangularBarkBandsInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		triangularBarkBandsInstance = new TriangularBarkBands();
		expect(triangularBarkBandsInstance).to.be.instanceOf(TriangularBarkBands);
	});
	it('should delete instance', function () {
		if (!triangularBarkBandsInstance) this.skip();
		triangularBarkBandsInstance.delete();
	});
});

describe('TriangularBarkBands:functionality', () => {
	let triangularBarkBandsInstance;

	before(() => {
		triangularBarkBandsInstance = new TriangularBarkBands();
	});
	after(() => {
		triangularBarkBandsInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			triangularBarkBandsInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = triangularBarkBandsInstance.compute()
	}); */
});




describe('Trimmer:instantiation', () => {
	let trimmerInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		trimmerInstance = new Trimmer();
		expect(trimmerInstance).to.be.instanceOf(Trimmer);
	});
	it('should delete instance', function () {
		if (!trimmerInstance) this.skip();
		trimmerInstance.delete();
	});
});

describe('Trimmer:functionality', () => {
	let trimmerInstance;

	before(() => {
		trimmerInstance = new Trimmer();
	});
	after(() => {
		trimmerInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			trimmerInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = trimmerInstance.compute()
	}); */
});




describe('Tristimulus:instantiation', () => {
	let tristimulusInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tristimulusInstance = new Tristimulus();
		expect(tristimulusInstance).to.be.instanceOf(Tristimulus);
	});
	it('should delete instance', function () {
		if (!tristimulusInstance) this.skip();
		tristimulusInstance.delete();
	});
});

describe('Tristimulus:functionality', () => {
	let tristimulusInstance;

	before(() => {
		tristimulusInstance = new Tristimulus();
	});
	after(() => {
		tristimulusInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tristimulusInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tristimulusInstance.compute()
	}); */
});




describe('TruePeakDetector:instantiation', () => {
	let truePeakDetectorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		truePeakDetectorInstance = new TruePeakDetector();
		expect(truePeakDetectorInstance).to.be.instanceOf(TruePeakDetector);
	});
	it('should delete instance', function () {
		if (!truePeakDetectorInstance) this.skip();
		truePeakDetectorInstance.delete();
	});
});

describe('TruePeakDetector:functionality', () => {
	let truePeakDetectorInstance;

	before(() => {
		truePeakDetectorInstance = new TruePeakDetector();
	});
	after(() => {
		truePeakDetectorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			truePeakDetectorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = truePeakDetectorInstance.compute()
	}); */
});




describe('TuningFrequency:instantiation', () => {
	let tuningFrequencyInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tuningFrequencyInstance = new TuningFrequency();
		expect(tuningFrequencyInstance).to.be.instanceOf(TuningFrequency);
	});
	it('should delete instance', function () {
		if (!tuningFrequencyInstance) this.skip();
		tuningFrequencyInstance.delete();
	});
});

describe('TuningFrequency:functionality', () => {
	let tuningFrequencyInstance;

	before(() => {
		tuningFrequencyInstance = new TuningFrequency();
	});
	after(() => {
		tuningFrequencyInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tuningFrequencyInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tuningFrequencyInstance.compute()
	}); */
});




describe('TuningFrequencyExtractor:instantiation', () => {
	let tuningFrequencyExtractorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		tuningFrequencyExtractorInstance = new TuningFrequencyExtractor();
		expect(tuningFrequencyExtractorInstance).to.be.instanceOf(TuningFrequencyExtractor);
	});
	it('should delete instance', function () {
		if (!tuningFrequencyExtractorInstance) this.skip();
		tuningFrequencyExtractorInstance.delete();
	});
});

describe('TuningFrequencyExtractor:functionality', () => {
	let tuningFrequencyExtractorInstance;

	before(() => {
		tuningFrequencyExtractorInstance = new TuningFrequencyExtractor();
	});
	after(() => {
		tuningFrequencyExtractorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			tuningFrequencyExtractorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = tuningFrequencyExtractorInstance.compute()
	}); */
});




describe('UnaryOperator:instantiation', () => {
	let unaryOperatorInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		unaryOperatorInstance = new UnaryOperator();
		expect(unaryOperatorInstance).to.be.instanceOf(UnaryOperator);
	});
	it('should delete instance', function () {
		if (!unaryOperatorInstance) this.skip();
		unaryOperatorInstance.delete();
	});
});

describe('UnaryOperator:functionality', () => {
	let unaryOperatorInstance;

	before(() => {
		unaryOperatorInstance = new UnaryOperator();
	});
	after(() => {
		unaryOperatorInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			unaryOperatorInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = unaryOperatorInstance.compute()
	}); */
});




describe('UnaryOperatorStream:instantiation', () => {
	let unaryOperatorStreamInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		unaryOperatorStreamInstance = new UnaryOperatorStream();
		expect(unaryOperatorStreamInstance).to.be.instanceOf(UnaryOperatorStream);
	});
	it('should delete instance', function () {
		if (!unaryOperatorStreamInstance) this.skip();
		unaryOperatorStreamInstance.delete();
	});
});

describe('UnaryOperatorStream:functionality', () => {
	let unaryOperatorStreamInstance;

	before(() => {
		unaryOperatorStreamInstance = new UnaryOperatorStream();
	});
	after(() => {
		unaryOperatorStreamInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			unaryOperatorStreamInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = unaryOperatorStreamInstance.compute()
	}); */
});




describe('Variance:instantiation', () => {
	let varianceInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		varianceInstance = new Variance();
		expect(varianceInstance).to.be.instanceOf(Variance);
	});
	it('should delete instance', function () {
		if (!varianceInstance) this.skip();
		varianceInstance.delete();
	});
});

describe('Variance:functionality', () => {
	let varianceInstance;

	before(() => {
		varianceInstance = new Variance();
	});
	after(() => {
		varianceInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			varianceInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = varianceInstance.compute()
	}); */
});




describe('Vibrato:instantiation', () => {
	let vibratoInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		vibratoInstance = new Vibrato();
		expect(vibratoInstance).to.be.instanceOf(Vibrato);
	});
	it('should delete instance', function () {
		if (!vibratoInstance) this.skip();
		vibratoInstance.delete();
	});
});

describe('Vibrato:functionality', () => {
	let vibratoInstance;

	before(() => {
		vibratoInstance = new Vibrato();
	});
	after(() => {
		vibratoInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			vibratoInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = vibratoInstance.compute()
	}); */
});




describe('WarpedAutoCorrelation:instantiation', () => {
	let warpedAutoCorrelationInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		warpedAutoCorrelationInstance = new WarpedAutoCorrelation();
		expect(warpedAutoCorrelationInstance).to.be.instanceOf(WarpedAutoCorrelation);
	});
	it('should delete instance', function () {
		if (!warpedAutoCorrelationInstance) this.skip();
		warpedAutoCorrelationInstance.delete();
	});
});

describe('WarpedAutoCorrelation:functionality', () => {
	let warpedAutoCorrelationInstance;

	before(() => {
		warpedAutoCorrelationInstance = new WarpedAutoCorrelation();
	});
	after(() => {
		warpedAutoCorrelationInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			warpedAutoCorrelationInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = warpedAutoCorrelationInstance.compute()
	}); */
});




describe('Welch:instantiation', () => {
	let welchInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		welchInstance = new Welch();
		expect(welchInstance).to.be.instanceOf(Welch);
	});
	it('should delete instance', function () {
		if (!welchInstance) this.skip();
		welchInstance.delete();
	});
});

describe('Welch:functionality', () => {
	let welchInstance;

	before(() => {
		welchInstance = new Welch();
	});
	after(() => {
		welchInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			welchInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = welchInstance.compute()
	}); */
});




describe('Windowing:instantiation', () => {
	let windowingInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		windowingInstance = new Windowing();
		expect(windowingInstance).to.be.instanceOf(Windowing);
	});
	it('should delete instance', function () {
		if (!windowingInstance) this.skip();
		windowingInstance.delete();
	});
});

describe('Windowing:functionality', () => {
	let windowingInstance;

	before(() => {
		windowingInstance = new Windowing();
	});
	after(() => {
		windowingInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			windowingInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = windowingInstance.compute()
	}); */
});




describe('ZeroCrossingRate:instantiation', () => {
	let zeroCrossingRateInstance;
	it('should instantiate algorithm and initialize with default params', () => {
		zeroCrossingRateInstance = new ZeroCrossingRate();
		expect(zeroCrossingRateInstance).to.be.instanceOf(ZeroCrossingRate);
	});
	it('should delete instance', function () {
		if (!zeroCrossingRateInstance) this.skip();
		zeroCrossingRateInstance.delete();
	});
});

describe('ZeroCrossingRate:functionality', () => {
	let zeroCrossingRateInstance;

	before(() => {
		zeroCrossingRateInstance = new ZeroCrossingRate();
	});
	after(() => {
		zeroCrossingRateInstance.delete();
	});

	it('should configure with valid parameters', () => {
		expect(() => {
			zeroCrossingRateInstance.configure({});
		}).to.not.throw();
	});

	// invalid param cases

	/*
	it('should compute with valid input', () => {
		const result = zeroCrossingRateInstance.compute()
	}); */
});



