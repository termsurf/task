import { z } from 'zod'
import { LOAD, MAKE, TEST } from '@termsurf/form'
import * as code from '~/code/type/code'

import {
  AddAudioToVideoWithFfmpeg,
  AnonymousSymbolSet,
  AnonymousWordSet,
  Archive,
  ArchiveFormat,
  AssemblySyntax,
  BackendCompilationOutput,
  BuildBaseFileInput,
  BuildBaseInputDirectoryOrFileOutputFile,
  BuildBaseInputFileOutputDirectory,
  BuildCommandToOptimizeGifWithGifsicle,
  BuildFormatInputOutput,
  CInputFormat,
  CalculateGematria,
  CalibreInputFormat,
  CalibreInputProfile,
  CalibreOutputFormat,
  CalibreOutputProfile,
  CallHandle,
  CheckFileTypeUsingMagicBytes,
  Cipher,
  ClangFormat,
  CliLogFormat,
  Command,
  CommandKey,
  CommandName,
  CommandSequence,
  CompileApi,
  CompileAsm,
  CompileCCommandInput,
  CompileCliBase,
  CompileCppCommandInput,
  CompileJava,
  CompileLlvm,
  CompileLlvmIrToAssembly,
  CompileRustCommandInput,
  CompileSwiftCommandInput,
  CompileWastCommandInput,
  CompressMp4WithFfmpeg,
  ConversionUnitAcre,
  ConversionUnitAmpere,
  ConversionUnitArcminute,
  ConversionUnitArcsecond,
  ConversionUnitBar,
  ConversionUnitBit,
  ConversionUnitByte,
  ConversionUnitCelsius,
  ConversionUnitCentilitre,
  ConversionUnitCentilitrePerSecond,
  ConversionUnitCentimeter,
  ConversionUnitCubicCentimeter,
  ConversionUnitCubicCentimeterPerSecond,
  ConversionUnitCubicFoot,
  ConversionUnitCubicFootPerHour,
  ConversionUnitCubicFootPerMinute,
  ConversionUnitCubicFootPerSecond,
  ConversionUnitCubicInch,
  ConversionUnitCubicInchPerHour,
  ConversionUnitCubicInchPerMinute,
  ConversionUnitCubicInchPerSecond,
  ConversionUnitCubicKilometer,
  ConversionUnitCubicKilometerPerSecond,
  ConversionUnitCubicMeter,
  ConversionUnitCubicMeterPerHour,
  ConversionUnitCubicMeterPerMinute,
  ConversionUnitCubicMeterPerSecond,
  ConversionUnitCubicMillimeter,
  ConversionUnitCubicMillimeterPerSecond,
  ConversionUnitCubicYard,
  ConversionUnitCubicYardPerHour,
  ConversionUnitCubicYardPerMinute,
  ConversionUnitCubicYardPerSecond,
  ConversionUnitCup,
  ConversionUnitCupPerSecond,
  ConversionUnitDay,
  ConversionUnitDecilitre,
  ConversionUnitDecilitrePerSecond,
  ConversionUnitDegree,
  ConversionUnitDegreePerSecond,
  ConversionUnitDozen,
  ConversionUnitEach,
  ConversionUnitFahrenheit,
  ConversionUnitFluidOunce,
  ConversionUnitFluidOuncePerHour,
  ConversionUnitFluidOuncePerMinute,
  ConversionUnitFluidOuncePerSecond,
  ConversionUnitFoot,
  ConversionUnitFootCandle,
  ConversionUnitFootPerSecond,
  ConversionUnitGallon,
  ConversionUnitGallonPerHour,
  ConversionUnitGallonPerMinute,
  ConversionUnitGallonPerSecond,
  ConversionUnitGigabit,
  ConversionUnitGigabyte,
  ConversionUnitGigahertz,
  ConversionUnitGigavoltAmpere,
  ConversionUnitGigavoltAmpereReactive,
  ConversionUnitGigavoltAmpereReactiveHour,
  ConversionUnitGigawatt,
  ConversionUnitGigawattHour,
  ConversionUnitGlas,
  ConversionUnitGradian,
  ConversionUnitGram,
  ConversionUnitHectare,
  ConversionUnitHectopascal,
  ConversionUnitHertz,
  ConversionUnitHour,
  ConversionUnitInch,
  ConversionUnitJoule,
  ConversionUnitKaffekopp,
  ConversionUnitKanna,
  ConversionUnitKelvin,
  ConversionUnitKiloampere,
  ConversionUnitKilobit,
  ConversionUnitKilobyte,
  ConversionUnitKilogram,
  ConversionUnitKilohertz,
  ConversionUnitKilojoule,
  ConversionUnitKilolitre,
  ConversionUnitKilolitrePerHour,
  ConversionUnitKilolitrePerMinute,
  ConversionUnitKilolitrePerSecond,
  ConversionUnitKilometer,
  ConversionUnitKilometrePerHour,
  ConversionUnitKilopascal,
  ConversionUnitKilopoundPerSquareInch,
  ConversionUnitKilovolt,
  ConversionUnitKilovoltAmpere,
  ConversionUnitKilovoltAmpereReactive,
  ConversionUnitKilovoltAmpereReactiveHour,
  ConversionUnitKilowatt,
  ConversionUnitKilowattHour,
  ConversionUnitKnot,
  ConversionUnitLitre,
  ConversionUnitLitrePerHour,
  ConversionUnitLitrePerMinute,
  ConversionUnitLitrePerSecond,
  ConversionUnitLux,
  ConversionUnitMatsked,
  ConversionUnitMegabit,
  ConversionUnitMegabyte,
  ConversionUnitMegahertz,
  ConversionUnitMegapascal,
  ConversionUnitMegavoltAmpere,
  ConversionUnitMegavoltAmpereReactive,
  ConversionUnitMegavoltAmpereReactiveHour,
  ConversionUnitMegawatt,
  ConversionUnitMegawattHour,
  ConversionUnitMeter,
  ConversionUnitMetrePerSecond,
  ConversionUnitMetricTonne,
  ConversionUnitMicrogram,
  ConversionUnitMicrosecond,
  ConversionUnitMile,
  ConversionUnitMilePerHour,
  ConversionUnitMilliampere,
  ConversionUnitMilligram,
  ConversionUnitMillihertz,
  ConversionUnitMillilitre,
  ConversionUnitMillilitrePerSecond,
  ConversionUnitMillimeter,
  ConversionUnitMillisecond,
  ConversionUnitMillivolt,
  ConversionUnitMillivoltAmpere,
  ConversionUnitMillivoltAmpereReactive,
  ConversionUnitMillivoltAmpereReactiveHour,
  ConversionUnitMilliwatt,
  ConversionUnitMilliwattHour,
  ConversionUnitMinute,
  ConversionUnitMinutePerKilometre,
  ConversionUnitMinutePerMile,
  ConversionUnitMonth,
  ConversionUnitNanosecond,
  ConversionUnitOunce,
  ConversionUnitPartPerBillion,
  ConversionUnitPartPerMillion,
  ConversionUnitPartPerQuadrillion,
  ConversionUnitPartPerTrillion,
  ConversionUnitPascal,
  ConversionUnitPint,
  ConversionUnitPintPerHour,
  ConversionUnitPintPerMinute,
  ConversionUnitPintPerSecond,
  ConversionUnitPound,
  ConversionUnitPoundPerSquareInch,
  ConversionUnitQuart,
  ConversionUnitQuartPerSecond,
  ConversionUnitRadian,
  ConversionUnitRadianPerSecond,
  ConversionUnitRankine,
  ConversionUnitRotationPerMinute,
  ConversionUnitSecond,
  ConversionUnitSecondPerFoot,
  ConversionUnitSecondPerMetre,
  ConversionUnitSquareCentimeter,
  ConversionUnitSquareFoot,
  ConversionUnitSquareInch,
  ConversionUnitSquareKilometer,
  ConversionUnitSquareMeter,
  ConversionUnitSquareMile,
  ConversionUnitSquareMillimeter,
  ConversionUnitSquareYard,
  ConversionUnitTablespoon,
  ConversionUnitTablespoonPerSecond,
  ConversionUnitTeaspoon,
  ConversionUnitTeaspoonPerSecond,
  ConversionUnitTerabit,
  ConversionUnitTerabyte,
  ConversionUnitTerahertz,
  ConversionUnitTesked,
  ConversionUnitTon,
  ConversionUnitTorr,
  ConversionUnitUsSurveyFoot,
  ConversionUnitVolt,
  ConversionUnitVoltAmpere,
  ConversionUnitVoltAmpereReactive,
  ConversionUnitVoltAmpereReactiveHour,
  ConversionUnitWatt,
  ConversionUnitWattHour,
  ConversionUnitWeek,
  ConversionUnitYard,
  ConversionUnitYear,
  ConvertAcre,
  ConvertAmpere,
  ConvertApi,
  ConvertArchiveCommandInput,
  ConvertArcminute,
  ConvertArcsecond,
  ConvertBar,
  ConvertBit,
  ConvertByte,
  ConvertCelsius,
  ConvertCentilitre,
  ConvertCentilitrePerSecond,
  ConvertCentimeter,
  ConvertCliBase,
  ConvertCubicCentimeter,
  ConvertCubicCentimeterPerSecond,
  ConvertCubicFoot,
  ConvertCubicFootPerHour,
  ConvertCubicFootPerMinute,
  ConvertCubicFootPerSecond,
  ConvertCubicInch,
  ConvertCubicInchPerHour,
  ConvertCubicInchPerMinute,
  ConvertCubicInchPerSecond,
  ConvertCubicKilometer,
  ConvertCubicKilometerPerSecond,
  ConvertCubicMeter,
  ConvertCubicMeterPerHour,
  ConvertCubicMeterPerMinute,
  ConvertCubicMeterPerSecond,
  ConvertCubicMillimeter,
  ConvertCubicMillimeterPerSecond,
  ConvertCubicYard,
  ConvertCubicYardPerHour,
  ConvertCubicYardPerMinute,
  ConvertCubicYardPerSecond,
  ConvertCup,
  ConvertCupPerSecond,
  ConvertDay,
  ConvertDecilitre,
  ConvertDecilitrePerSecond,
  ConvertDegree,
  ConvertDegreePerSecond,
  ConvertDocumentWithCalibreCommandInput,
  ConvertDocumentWithEnscriptCommandInput,
  ConvertDocumentWithJupyterCommandInput,
  ConvertDocumentWithLibreOfficeCommandInput,
  ConvertDocumentWithPandocCommandInput,
  ConvertDozen,
  ConvertEach,
  ConvertFahrenheit,
  ConvertFileBase,
  ConvertFileBaseRemote,
  ConvertFluidOunce,
  ConvertFluidOuncePerHour,
  ConvertFluidOuncePerMinute,
  ConvertFluidOuncePerSecond,
  ConvertFontWithFontForgeCommandInput,
  ConvertFoot,
  ConvertFootCandle,
  ConvertFootPerSecond,
  ConvertGallon,
  ConvertGallonPerHour,
  ConvertGallonPerMinute,
  ConvertGallonPerSecond,
  ConvertGigabit,
  ConvertGigabyte,
  ConvertGigahertz,
  ConvertGigavoltAmpere,
  ConvertGigavoltAmpereReactive,
  ConvertGigavoltAmpereReactiveHour,
  ConvertGigawatt,
  ConvertGigawattHour,
  ConvertGlas,
  ConvertGradian,
  ConvertGram,
  ConvertHectare,
  ConvertHectopascal,
  ConvertHertz,
  ConvertHour,
  ConvertHtmlWithPuppeteerCommandInput,
  ConvertImageWithImageMagickCommandInput,
  ConvertImageWithInkscapeCommandInput,
  ConvertInch,
  ConvertJoule,
  ConvertKaffekopp,
  ConvertKanna,
  ConvertKelvin,
  ConvertKiloampere,
  ConvertKilobit,
  ConvertKilobyte,
  ConvertKilogram,
  ConvertKilohertz,
  ConvertKilojoule,
  ConvertKilolitre,
  ConvertKilolitrePerHour,
  ConvertKilolitrePerMinute,
  ConvertKilolitrePerSecond,
  ConvertKilometer,
  ConvertKilometrePerHour,
  ConvertKilopascal,
  ConvertKilopoundPerSquareInch,
  ConvertKilovolt,
  ConvertKilovoltAmpere,
  ConvertKilovoltAmpereReactive,
  ConvertKilovoltAmpereReactiveHour,
  ConvertKilowatt,
  ConvertKilowattHour,
  ConvertKnot,
  ConvertLatexToPngCommandInput,
  ConvertLatexToPngInputFormat,
  ConvertLatexToPngOutputFormat,
  ConvertLatexWithPdfLatexCommandInput,
  ConvertLitre,
  ConvertLitrePerHour,
  ConvertLitrePerMinute,
  ConvertLitrePerSecond,
  ConvertLux,
  ConvertMatsked,
  ConvertMegabit,
  ConvertMegabyte,
  ConvertMegahertz,
  ConvertMegapascal,
  ConvertMegavoltAmpere,
  ConvertMegavoltAmpereReactive,
  ConvertMegavoltAmpereReactiveHour,
  ConvertMegawatt,
  ConvertMegawattHour,
  ConvertMeter,
  ConvertMetrePerSecond,
  ConvertMetricTonne,
  ConvertMicrogram,
  ConvertMicrosecond,
  ConvertMile,
  ConvertMilePerHour,
  ConvertMilliampere,
  ConvertMilligram,
  ConvertMillihertz,
  ConvertMillilitre,
  ConvertMillilitrePerSecond,
  ConvertMillimeter,
  ConvertMillisecond,
  ConvertMillivolt,
  ConvertMillivoltAmpere,
  ConvertMillivoltAmpereReactive,
  ConvertMillivoltAmpereReactiveHour,
  ConvertMilliwatt,
  ConvertMilliwattHour,
  ConvertMinute,
  ConvertMinutePerKilometre,
  ConvertMinutePerMile,
  ConvertMonth,
  ConvertMp4ToGifWithFfmpeg,
  ConvertNanosecond,
  ConvertOunce,
  ConvertPartPerBillion,
  ConvertPartPerMillion,
  ConvertPartPerQuadrillion,
  ConvertPartPerTrillion,
  ConvertPascal,
  ConvertPint,
  ConvertPintPerHour,
  ConvertPintPerMinute,
  ConvertPintPerSecond,
  ConvertPound,
  ConvertPoundPerSquareInch,
  ConvertQuart,
  ConvertQuartPerSecond,
  ConvertRadian,
  ConvertRadianPerSecond,
  ConvertRankine,
  ConvertRotationPerMinute,
  ConvertSecond,
  ConvertSecondPerFoot,
  ConvertSecondPerMetre,
  ConvertSquareCentimeter,
  ConvertSquareFoot,
  ConvertSquareInch,
  ConvertSquareKilometer,
  ConvertSquareMeter,
  ConvertSquareMile,
  ConvertSquareMillimeter,
  ConvertSquareYard,
  ConvertTablespoon,
  ConvertTablespoonPerSecond,
  ConvertTeaspoon,
  ConvertTeaspoonPerSecond,
  ConvertTerabit,
  ConvertTerabyte,
  ConvertTerahertz,
  ConvertTesked,
  ConvertTimeZone,
  ConvertTon,
  ConvertTorr,
  ConvertUnit,
  ConvertUsSurveyFoot,
  ConvertVideoToAudioWithFfmpeg,
  ConvertVideoWithFfmpegBase,
  ConvertVideoWithFfmpegCommandInput,
  ConvertVolt,
  ConvertVoltAmpere,
  ConvertVoltAmpereReactive,
  ConvertVoltAmpereReactiveHour,
  ConvertWatt,
  ConvertWattHour,
  ConvertWeek,
  ConvertYard,
  ConvertYear,
  CppInputFormat,
  CropPdfWithPdfCrop,
  DisassembleBinaryWithObjdump,
  EnscriptInputFormat,
  EnscriptOutputFormat,
  ExtractWith7Z,
  ExtractWithUnarchiver,
  FfmpegCodecAudio,
  FfmpegCodecSubtitle,
  FfmpegCodecVideo,
  FfmpegDecoderAudio,
  FfmpegDecoderSubtitle,
  FfmpegDecoderVideo,
  FfmpegEncoderAudio,
  FfmpegEncoderSubtitle,
  FfmpegEncoderVideo,
  FfmpegFormat,
  FfmpegStrictOption,
  FileContent,
  FileContentWithSha256,
  FileHasOutputContent,
  FileInputPath,
  FileOutputPath,
  FilePath,
  FileReaderEncoding,
  Flip,
  FontFormat,
  ForgeMessageDigest,
  FormatApi,
  FormatAssemblyCommandInput,
  FormatC,
  FormatCliBase,
  FormatCodeFormat,
  FormatCodeWithClangFormatCommandInput,
  FormatCodeWithPrettier,
  FormatCpp,
  FormatCssWithPrettier,
  FormatGraphqlWithPrettier,
  FormatHtmlWithPrettier,
  FormatJava,
  FormatJavaWithPrettier,
  FormatKotlinCommandInput,
  FormatMarkdownWithPrettier,
  FormatPythonCommandInput,
  FormatRuby,
  FormatRustCommandInput,
  FormatRustWithPrettier,
  FormatShWithPrettier,
  FormatSqlWithContent,
  FormatSwiftCommandInput,
  FormatTypescriptWithPrettier,
  FormatXmlWithPrettier,
  FormatYamlWithPrettier,
  GematriaSystemCalculation,
  GematriaSystemCalculationResult,
  GenerateHaikuPhrase,
  GenerateHash,
  GenerateMurmurHash,
  GenerateQrCode,
  GenerateRandomPhrase,
  GenerateRandomSymbols,
  GifsicleOptimizeOption,
  ImageMagicColorMatrix,
  ImageMagickChannel,
  ImageMagickColorSpace,
  ImageMagickCompression,
  ImageMagickFormat,
  ImageMagickGravity,
  ImageMagickInputFormat,
  ImageMagickOutputFormat,
  InkscapeExportFormat,
  InkscapeImportFormat,
  InspectColor,
  InspectMetadataFromImage,
  LibreOfficeInputFormat,
  LibreOfficeOutputFormat,
  LlvmArchitecture,
  LlvmCpu,
  LlvmFeature,
  LlvmOptimizationLevel,
  LocalInputPath,
  LocalOutputPath,
  LocalPath,
  NamedSymbolSet,
  NamedWordSet,
  ObjdumpDemangleStyle,
  ObjdumpHideOption,
  ObjdumpShowOption,
  PandocInputFormat,
  PandocOutputFormat,
  PatoolFormat,
  PdfLatexInputFormat,
  PdfLatexOutputFormat,
  PleasantAdjective,
  PleasantNoun,
  PrettierArrowParensOption,
  PrettierEndOfLineOption,
  PrettierHtmlWhitespaceSensitivityOption,
  PrettierPlugin,
  PrettierProseWrapOption,
  PrettierTypescriptTrailingCommaOption,
  PrettierXmlQuoteAttributesOption,
  PrettierXmlWhitespaceSensitivityOption,
  PuppeteerInputFormat,
  PuppeteerLifeCycleEvent,
  PuppeteerMarkdownInputFormat,
  PuppeteerOutputFormat,
  PuppeteerTxtInputFormat,
  QrCodeErrorCorrectionLevel,
  QrCodeFormat,
  RemoteInputPath,
  RemoteOutputPath,
  RemotePath,
  RemoveAudioFromVideoWithFfmpeg,
  RemoveImageMetadata,
  ReplaceImageColorWithImageMagick,
  Request,
  ResizeImageWithImageMagick,
  ResolveInputForCompileLocalExternal,
  ResolveInputForCompileLocalInternal,
  ResolveInputForCompileRemote,
  ResolveInputForConvertLocalExternal,
  ResolveInputForConvertLocalInternal,
  ResolveInputForConvertRemote,
  ResolveInputForFormatLocalExternal,
  ResolveInputForFormatLocalInternal,
  ResolveInputForFormatRemote,
  ResolveInputForSanitizeLocalExternal,
  ResolveInputForSanitizeLocalInternal,
  ResolveInputForSanitizeRemote,
  RustCompilerTarget,
  RustInputFormat,
  RustOutputFormat,
  SanitizeApi,
  SanitizeHtmlCommandInput,
  SharedGematriaLanguage,
  SlicePdf,
  SlicePdfWithData,
  SwiftInputFormat,
  SymbolSet,
  Task,
  TextStyle,
  TimeZone,
  TimeZoneAbbreviation,
  TimeZoneLocation,
  UnarchiverFormat,
  Unit,
  ValidatePdfWithData,
  VerifyCliBase,
  VerifyImageWithImageMagick,
  WastInputFormat,
  WastOutputFormat,
  WeightedSymbolSet,
  WeightedWordSet,
  WordSet,
  WriteMetadataToImage,
} from '~/code/type/shared/base/cast'

let AddAudioToVideoWithFfmpegModel: z.ZodType<AddAudioToVideoWithFfmpeg>

export const AddAudioToVideoWithFfmpegResolver =
  (): z.ZodType<AddAudioToVideoWithFfmpeg> => {
    if (!AddAudioToVideoWithFfmpegModel) {
      AddAudioToVideoWithFfmpegModel = z.object({
        inputVideoPath: z.string(),
        inputAudioPath: z.string(),
        outputPath: z.string(),
        audioCodec: z.string(),
        fit: z.boolean(),
      })
    }
    return AddAudioToVideoWithFfmpegModel!
  }

let AnonymousSymbolSetModel: z.ZodType<AnonymousSymbolSet>

export const AnonymousSymbolSetResolver =
  (): z.ZodType<AnonymousSymbolSet> => {
    if (!AnonymousSymbolSetModel) {
      AnonymousSymbolSetModel = z.object({
        form: z.literal('anonymous-symbol-set'),
        list: z.string(),
      })
    }
    return AnonymousSymbolSetModel!
  }

let AnonymousWordSetModel: z.ZodType<AnonymousWordSet>

export const AnonymousWordSetResolver =
  (): z.ZodType<AnonymousWordSet> => {
    if (!AnonymousWordSetModel) {
      AnonymousWordSetModel = z.object({
        form: z.literal('anonymous-word-set'),
        list: z.array(z.string()),
      })
    }
    return AnonymousWordSetModel!
  }

let ArchiveModel: z.ZodType<Archive>

export const ArchiveResolver = (): z.ZodType<Archive> => {
  if (!ArchiveModel) {
    ArchiveModel = z.object({
      input: z.object({
        path: z.string(),
      }),
      output: z.object({
        format: z.lazy(() => ArchiveFormatResolver()),
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return ArchiveModel!
}

let ArchiveFormatModel: z.ZodType<ArchiveFormat>

export const ArchiveFormatResolver = () => {
  if (!ArchiveFormatModel) {
    ArchiveFormatModel = z.enum(
      LOAD('archive-format') as readonly [string, ...string[]],
    ) as z.ZodType<ArchiveFormat>
  }
  return ArchiveFormatModel!
}

let AssemblySyntaxModel: z.ZodType<AssemblySyntax>

export const AssemblySyntaxResolver = () => {
  if (!AssemblySyntaxModel) {
    AssemblySyntaxModel = z.enum(
      LOAD('assembly-syntax') as readonly [string, ...string[]],
    ) as z.ZodType<AssemblySyntax>
  }
  return AssemblySyntaxModel!
}

let BackendCompilationOutputModel: z.ZodType<BackendCompilationOutput>

export const BackendCompilationOutputResolver = () => {
  if (!BackendCompilationOutputModel) {
    BackendCompilationOutputModel = z.enum(
      LOAD('backend-compilation-output') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<BackendCompilationOutput>
  }
  return BackendCompilationOutputModel!
}

let BuildBaseFileInputModel: z.ZodType<BuildBaseFileInput>

export const BuildBaseFileInputResolver =
  (): z.ZodType<BuildBaseFileInput> => {
    if (!BuildBaseFileInputModel) {
      BuildBaseFileInputModel = z
        .object({
          tool: z.optional(z.string()),
          input: z
            .object({
              file: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
          output: z
            .object({
              file: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return BuildBaseFileInputModel!
  }

let BuildBaseInputDirectoryOrFileOutputFileModel: z.ZodType<BuildBaseInputDirectoryOrFileOutputFile>

export const BuildBaseInputDirectoryOrFileOutputFileResolver =
  (): z.ZodType<BuildBaseInputDirectoryOrFileOutputFile> => {
    if (!BuildBaseInputDirectoryOrFileOutputFileModel) {
      BuildBaseInputDirectoryOrFileOutputFileModel = z
        .object({
          input: z
            .object({
              directory: z.optional(
                z
                  .object({
                    path: z.string(),
                  })
                  .passthrough(),
              ),
              file: z.optional(
                z
                  .object({
                    path: z.string(),
                  })
                  .passthrough(),
              ),
            })
            .passthrough(),
          output: z
            .object({
              file: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return BuildBaseInputDirectoryOrFileOutputFileModel!
  }

let BuildBaseInputFileOutputDirectoryModel: z.ZodType<BuildBaseInputFileOutputDirectory>

export const BuildBaseInputFileOutputDirectoryResolver =
  (): z.ZodType<BuildBaseInputFileOutputDirectory> => {
    if (!BuildBaseInputFileOutputDirectoryModel) {
      BuildBaseInputFileOutputDirectoryModel = z
        .object({
          output: z
            .object({
              directory: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
          input: z
            .object({
              file: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return BuildBaseInputFileOutputDirectoryModel!
  }

let BuildCommandToOptimizeGifWithGifsicleModel: z.ZodType<BuildCommandToOptimizeGifWithGifsicle>

export const BuildCommandToOptimizeGifWithGifsicleResolver =
  (): z.ZodType<BuildCommandToOptimizeGifWithGifsicle> => {
    if (!BuildCommandToOptimizeGifWithGifsicleModel) {
      BuildCommandToOptimizeGifWithGifsicleModel = z.object({
        lossy: z.optional(z.number().int().gte(0)),
        background: z.optional(z.string()),
        left: z.optional(z.number().int()),
        right: z.optional(z.number().int()),
        top: z.optional(z.number().int()),
        bottom: z.optional(z.number().int()),
        flip: z.optional(z.lazy(() => FlipResolver())),
        transparent: z.optional(z.string()),
        optimize: z.optional(
          z.lazy(() => GifsicleOptimizeOptionResolver()),
        ),
        scale: z.optional(z.number()),
        output: z.object({
          file: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return BuildCommandToOptimizeGifWithGifsicleModel!
  }

let BuildFormatInputOutputModel: z.ZodType<BuildFormatInputOutput>

export const BuildFormatInputOutputResolver =
  (): z.ZodType<BuildFormatInputOutput> => {
    if (!BuildFormatInputOutputModel) {
      BuildFormatInputOutputModel = z
        .object({
          tool: z.optional(z.string()),
          input: z
            .object({
              format: z.string(),
            })
            .passthrough(),
          output: z
            .object({
              format: z.string(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return BuildFormatInputOutputModel!
  }

let CInputFormatModel: z.ZodType<CInputFormat>

export const CInputFormatResolver = () => {
  if (!CInputFormatModel) {
    CInputFormatModel = z.enum(
      LOAD('c-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<CInputFormat>
  }
  return CInputFormatModel!
}

let CalculateGematriaModel: z.ZodType<CalculateGematria>

export const CalculateGematriaResolver =
  (): z.ZodType<CalculateGematria> => {
    if (!CalculateGematriaModel) {
      CalculateGematriaModel = z.object({
        input: z.object({
          string: z.object({
            decoded: z.string(),
            encoded: z.optional(z.string()),
          }),
        }),
      })
    }
    return CalculateGematriaModel!
  }

let CalibreInputFormatModel: z.ZodType<CalibreInputFormat>

export const CalibreInputFormatResolver = () => {
  if (!CalibreInputFormatModel) {
    CalibreInputFormatModel = z.enum(
      LOAD('calibre-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<CalibreInputFormat>
  }
  return CalibreInputFormatModel!
}

let CalibreInputProfileModel: z.ZodType<CalibreInputProfile>

export const CalibreInputProfileResolver = () => {
  if (!CalibreInputProfileModel) {
    CalibreInputProfileModel = z.enum(
      LOAD('calibre-input-profile') as readonly [string, ...string[]],
    ) as z.ZodType<CalibreInputProfile>
  }
  return CalibreInputProfileModel!
}

let CalibreOutputFormatModel: z.ZodType<CalibreOutputFormat>

export const CalibreOutputFormatResolver = () => {
  if (!CalibreOutputFormatModel) {
    CalibreOutputFormatModel = z.enum(
      LOAD('calibre-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<CalibreOutputFormat>
  }
  return CalibreOutputFormatModel!
}

let CalibreOutputProfileModel: z.ZodType<CalibreOutputProfile>

export const CalibreOutputProfileResolver = () => {
  if (!CalibreOutputProfileModel) {
    CalibreOutputProfileModel = z.enum(
      LOAD('calibre-output-profile') as readonly [string, ...string[]],
    ) as z.ZodType<CalibreOutputProfile>
  }
  return CalibreOutputProfileModel!
}

let CallHandleModel: z.ZodType<CallHandle>

export const CallHandleResolver = () => {
  if (!CallHandleModel) {
    CallHandleModel = z.enum(
      LOAD('call-handle') as readonly [string, ...string[]],
    ) as z.ZodType<CallHandle>
  }
  return CallHandleModel!
}

let CheckFileTypeUsingMagicBytesModel: z.ZodType<CheckFileTypeUsingMagicBytes>

export const CheckFileTypeUsingMagicBytesResolver =
  (): z.ZodType<CheckFileTypeUsingMagicBytes> => {
    if (!CheckFileTypeUsingMagicBytesModel) {
      CheckFileTypeUsingMagicBytesModel = z.object({
        input: z.object({
          file: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return CheckFileTypeUsingMagicBytesModel!
  }

let CipherModel: z.ZodType<Cipher>

export const CipherResolver = () => {
  if (!CipherModel) {
    CipherModel = z.enum(
      LOAD('cipher') as readonly [string, ...string[]],
    ) as z.ZodType<Cipher>
  }
  return CipherModel!
}

let ClangFormatModel: z.ZodType<ClangFormat>

export const ClangFormatResolver = () => {
  if (!ClangFormatModel) {
    ClangFormatModel = z.enum(
      LOAD('clang-format') as readonly [string, ...string[]],
    ) as z.ZodType<ClangFormat>
  }
  return ClangFormatModel!
}

let CliLogFormatModel: z.ZodType<CliLogFormat>

export const CliLogFormatResolver = () => {
  if (!CliLogFormatModel) {
    CliLogFormatModel = z.enum(
      LOAD('cli-log-format') as readonly [string, ...string[]],
    ) as z.ZodType<CliLogFormat>
  }
  return CliLogFormatModel!
}

let CommandModel: z.ZodType<Command>

export const CommandResolver = (): z.ZodType<Command> => {
  if (!CommandModel) {
    CommandModel = z.object({
      name: z.lazy(() => CommandNameResolver()),
      key: z.lazy(() => CommandKeyResolver()),
      link: z.array(z.string()),
    })
  }
  return CommandModel!
}

let CommandKeyModel: z.ZodType<CommandKey>

export const CommandKeyResolver = () => {
  if (!CommandKeyModel) {
    CommandKeyModel = z.enum(
      LOAD('command-key') as readonly [string, ...string[]],
    ) as z.ZodType<CommandKey>
  }
  return CommandKeyModel!
}

let CommandNameModel: z.ZodType<CommandName>

export const CommandNameResolver = () => {
  if (!CommandNameModel) {
    CommandNameModel = z.enum(
      LOAD('command-name') as readonly [string, ...string[]],
    ) as z.ZodType<CommandName>
  }
  return CommandNameModel!
}

let CommandSequenceModel: z.ZodType<CommandSequence>

export const CommandSequenceResolver =
  (): z.ZodType<CommandSequence> => {
    if (!CommandSequenceModel) {
      CommandSequenceModel = z.object({
        call: z.array(z.lazy(() => CommandResolver())),
      })
    }
    return CommandSequenceModel!
  }

let CompileApiModel: z.ZodType<CompileApi>

export const CompileApiResolver = (): z.ZodType<CompileApi> => {
  if (!CompileApiModel) {
    CompileApiModel = z.object({
      input: z.object({
        format: z.string(),
      }),
      output: z.object({
        format: z.string(),
      }),
    })
  }
  return CompileApiModel!
}

let CompileAsmModel: z.ZodType<CompileAsm>

export const CompileAsmResolver = (): z.ZodType<CompileAsm> => {
  if (!CompileAsmModel) {
    CompileAsmModel = z.object({
      input: z.object({
        format: z.string(),
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return CompileAsmModel!
}

let CompileCCommandInputModel: z.ZodType<CompileCCommandInput>

export const CompileCCommandInputResolver =
  (): z.ZodType<CompileCCommandInput> => {
    if (!CompileCCommandInputModel) {
      CompileCCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.lazy(() => LocalPathResolver()),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
        }),
        pathScope: z.optional(z.string()),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCCommandInputModel!
  }

let CompileCliBaseModel: z.ZodType<CompileCliBase>

export const CompileCliBaseResolver = (): z.ZodType<CompileCliBase> => {
  if (!CompileCliBaseModel) {
    CompileCliBaseModel = z
      .object({
        input: z
          .object({
            format: z.string(),
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        output: z
          .object({
            format: z.string(),
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        help: z.optional(z.boolean()),
        log: z
          .optional(z.lazy(() => CliLogFormatResolver()))
          .default('pretty'),
      })
      .passthrough()
  }
  return CompileCliBaseModel!
}

let CompileCppCommandInputModel: z.ZodType<CompileCppCommandInput>

export const CompileCppCommandInputResolver =
  (): z.ZodType<CompileCppCommandInput> => {
    if (!CompileCppCommandInputModel) {
      CompileCppCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.lazy(() => LocalPathResolver()),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
        }),
        pathScope: z.optional(z.string()),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCppCommandInputModel!
  }

let CompileJavaModel: z.ZodType<CompileJava>

export const CompileJavaResolver = (): z.ZodType<CompileJava> => {
  if (!CompileJavaModel) {
    CompileJavaModel = z.object({
      input: z.object({
        format: z.string(),
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return CompileJavaModel!
}

let CompileLlvmModel: z.ZodType<CompileLlvm>

export const CompileLlvmResolver = (): z.ZodType<CompileLlvm> => {
  if (!CompileLlvmModel) {
    CompileLlvmModel = z.object({
      input: z.object({
        format: z.string(),
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return CompileLlvmModel!
}

let CompileLlvmIrToAssemblyModel: z.ZodType<CompileLlvmIrToAssembly>

export const CompileLlvmIrToAssemblyResolver =
  (): z.ZodType<CompileLlvmIrToAssembly> => {
    if (!CompileLlvmIrToAssemblyModel) {
      CompileLlvmIrToAssemblyModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        output: z.object({
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
          file: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return CompileLlvmIrToAssemblyModel!
  }

let CompileRustCommandInputModel: z.ZodType<CompileRustCommandInput>

export const CompileRustCommandInputResolver =
  (): z.ZodType<CompileRustCommandInput> => {
    if (!CompileRustCommandInputModel) {
      CompileRustCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustCommandInputModel!
  }

let CompileSwiftCommandInputModel: z.ZodType<CompileSwiftCommandInput>

export const CompileSwiftCommandInputResolver =
  (): z.ZodType<CompileSwiftCommandInput> => {
    if (!CompileSwiftCommandInputModel) {
      CompileSwiftCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileSwiftCommandInputModel!
  }

let CompileWastCommandInputModel: z.ZodType<CompileWastCommandInput>

export const CompileWastCommandInputResolver =
  (): z.ZodType<CompileWastCommandInput> => {
    if (!CompileWastCommandInputModel) {
      CompileWastCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileWastCommandInputModel!
  }

let CompressMp4WithFfmpegModel: z.ZodType<CompressMp4WithFfmpeg>

export const CompressMp4WithFfmpegResolver =
  (): z.ZodType<CompressMp4WithFfmpeg> => {
    if (!CompressMp4WithFfmpegModel) {
      CompressMp4WithFfmpegModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        output: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        audioCodec: z
          .optional(z.lazy(() => FfmpegCodecAudioResolver()))
          .default('aac'),
        videoCodec: z
          .optional(z.lazy(() => FfmpegCodecVideoResolver()))
          .default('h264'),
      })
    }
    return CompressMp4WithFfmpegModel!
  }

let ConversionUnitAcreModel: z.ZodType<ConversionUnitAcre>

export const ConversionUnitAcreResolver = () => {
  if (!ConversionUnitAcreModel) {
    ConversionUnitAcreModel = z.enum(
      LOAD('conversion-unit-acre') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitAcre>
  }
  return ConversionUnitAcreModel!
}

let ConversionUnitAmpereModel: z.ZodType<ConversionUnitAmpere>

export const ConversionUnitAmpereResolver = () => {
  if (!ConversionUnitAmpereModel) {
    ConversionUnitAmpereModel = z.enum(
      LOAD('conversion-unit-ampere') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitAmpere>
  }
  return ConversionUnitAmpereModel!
}

let ConversionUnitArcminuteModel: z.ZodType<ConversionUnitArcminute>

export const ConversionUnitArcminuteResolver = () => {
  if (!ConversionUnitArcminuteModel) {
    ConversionUnitArcminuteModel = z.enum(
      LOAD('conversion-unit-arcminute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitArcminute>
  }
  return ConversionUnitArcminuteModel!
}

let ConversionUnitArcsecondModel: z.ZodType<ConversionUnitArcsecond>

export const ConversionUnitArcsecondResolver = () => {
  if (!ConversionUnitArcsecondModel) {
    ConversionUnitArcsecondModel = z.enum(
      LOAD('conversion-unit-arcsecond') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitArcsecond>
  }
  return ConversionUnitArcsecondModel!
}

let ConversionUnitBarModel: z.ZodType<ConversionUnitBar>

export const ConversionUnitBarResolver = () => {
  if (!ConversionUnitBarModel) {
    ConversionUnitBarModel = z.enum(
      LOAD('conversion-unit-bar') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitBar>
  }
  return ConversionUnitBarModel!
}

let ConversionUnitBitModel: z.ZodType<ConversionUnitBit>

export const ConversionUnitBitResolver = () => {
  if (!ConversionUnitBitModel) {
    ConversionUnitBitModel = z.enum(
      LOAD('conversion-unit-bit') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitBit>
  }
  return ConversionUnitBitModel!
}

let ConversionUnitByteModel: z.ZodType<ConversionUnitByte>

export const ConversionUnitByteResolver = () => {
  if (!ConversionUnitByteModel) {
    ConversionUnitByteModel = z.enum(
      LOAD('conversion-unit-byte') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitByte>
  }
  return ConversionUnitByteModel!
}

let ConversionUnitCelsiusModel: z.ZodType<ConversionUnitCelsius>

export const ConversionUnitCelsiusResolver = () => {
  if (!ConversionUnitCelsiusModel) {
    ConversionUnitCelsiusModel = z.enum(
      LOAD('conversion-unit-celsius') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitCelsius>
  }
  return ConversionUnitCelsiusModel!
}

let ConversionUnitCentilitreModel: z.ZodType<ConversionUnitCentilitre>

export const ConversionUnitCentilitreResolver = () => {
  if (!ConversionUnitCentilitreModel) {
    ConversionUnitCentilitreModel = z.enum(
      LOAD('conversion-unit-centilitre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCentilitre>
  }
  return ConversionUnitCentilitreModel!
}

let ConversionUnitCentilitrePerSecondModel: z.ZodType<ConversionUnitCentilitrePerSecond>

export const ConversionUnitCentilitrePerSecondResolver = () => {
  if (!ConversionUnitCentilitrePerSecondModel) {
    ConversionUnitCentilitrePerSecondModel = z.enum(
      LOAD('conversion-unit-centilitre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCentilitrePerSecond>
  }
  return ConversionUnitCentilitrePerSecondModel!
}

let ConversionUnitCentimeterModel: z.ZodType<ConversionUnitCentimeter>

export const ConversionUnitCentimeterResolver = () => {
  if (!ConversionUnitCentimeterModel) {
    ConversionUnitCentimeterModel = z.enum(
      LOAD('conversion-unit-centimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCentimeter>
  }
  return ConversionUnitCentimeterModel!
}

let ConversionUnitCubicCentimeterModel: z.ZodType<ConversionUnitCubicCentimeter>

export const ConversionUnitCubicCentimeterResolver = () => {
  if (!ConversionUnitCubicCentimeterModel) {
    ConversionUnitCubicCentimeterModel = z.enum(
      LOAD('conversion-unit-cubic-centimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicCentimeter>
  }
  return ConversionUnitCubicCentimeterModel!
}

let ConversionUnitCubicCentimeterPerSecondModel: z.ZodType<ConversionUnitCubicCentimeterPerSecond>

export const ConversionUnitCubicCentimeterPerSecondResolver = () => {
  if (!ConversionUnitCubicCentimeterPerSecondModel) {
    ConversionUnitCubicCentimeterPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-centimeter-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicCentimeterPerSecond>
  }
  return ConversionUnitCubicCentimeterPerSecondModel!
}

let ConversionUnitCubicFootModel: z.ZodType<ConversionUnitCubicFoot>

export const ConversionUnitCubicFootResolver = () => {
  if (!ConversionUnitCubicFootModel) {
    ConversionUnitCubicFootModel = z.enum(
      LOAD('conversion-unit-cubic-foot') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicFoot>
  }
  return ConversionUnitCubicFootModel!
}

let ConversionUnitCubicFootPerHourModel: z.ZodType<ConversionUnitCubicFootPerHour>

export const ConversionUnitCubicFootPerHourResolver = () => {
  if (!ConversionUnitCubicFootPerHourModel) {
    ConversionUnitCubicFootPerHourModel = z.enum(
      LOAD('conversion-unit-cubic-foot-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicFootPerHour>
  }
  return ConversionUnitCubicFootPerHourModel!
}

let ConversionUnitCubicFootPerMinuteModel: z.ZodType<ConversionUnitCubicFootPerMinute>

export const ConversionUnitCubicFootPerMinuteResolver = () => {
  if (!ConversionUnitCubicFootPerMinuteModel) {
    ConversionUnitCubicFootPerMinuteModel = z.enum(
      LOAD('conversion-unit-cubic-foot-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicFootPerMinute>
  }
  return ConversionUnitCubicFootPerMinuteModel!
}

let ConversionUnitCubicFootPerSecondModel: z.ZodType<ConversionUnitCubicFootPerSecond>

export const ConversionUnitCubicFootPerSecondResolver = () => {
  if (!ConversionUnitCubicFootPerSecondModel) {
    ConversionUnitCubicFootPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-foot-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicFootPerSecond>
  }
  return ConversionUnitCubicFootPerSecondModel!
}

let ConversionUnitCubicInchModel: z.ZodType<ConversionUnitCubicInch>

export const ConversionUnitCubicInchResolver = () => {
  if (!ConversionUnitCubicInchModel) {
    ConversionUnitCubicInchModel = z.enum(
      LOAD('conversion-unit-cubic-inch') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicInch>
  }
  return ConversionUnitCubicInchModel!
}

let ConversionUnitCubicInchPerHourModel: z.ZodType<ConversionUnitCubicInchPerHour>

export const ConversionUnitCubicInchPerHourResolver = () => {
  if (!ConversionUnitCubicInchPerHourModel) {
    ConversionUnitCubicInchPerHourModel = z.enum(
      LOAD('conversion-unit-cubic-inch-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicInchPerHour>
  }
  return ConversionUnitCubicInchPerHourModel!
}

let ConversionUnitCubicInchPerMinuteModel: z.ZodType<ConversionUnitCubicInchPerMinute>

export const ConversionUnitCubicInchPerMinuteResolver = () => {
  if (!ConversionUnitCubicInchPerMinuteModel) {
    ConversionUnitCubicInchPerMinuteModel = z.enum(
      LOAD('conversion-unit-cubic-inch-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicInchPerMinute>
  }
  return ConversionUnitCubicInchPerMinuteModel!
}

let ConversionUnitCubicInchPerSecondModel: z.ZodType<ConversionUnitCubicInchPerSecond>

export const ConversionUnitCubicInchPerSecondResolver = () => {
  if (!ConversionUnitCubicInchPerSecondModel) {
    ConversionUnitCubicInchPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-inch-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicInchPerSecond>
  }
  return ConversionUnitCubicInchPerSecondModel!
}

let ConversionUnitCubicKilometerModel: z.ZodType<ConversionUnitCubicKilometer>

export const ConversionUnitCubicKilometerResolver = () => {
  if (!ConversionUnitCubicKilometerModel) {
    ConversionUnitCubicKilometerModel = z.enum(
      LOAD('conversion-unit-cubic-kilometer') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicKilometer>
  }
  return ConversionUnitCubicKilometerModel!
}

let ConversionUnitCubicKilometerPerSecondModel: z.ZodType<ConversionUnitCubicKilometerPerSecond>

export const ConversionUnitCubicKilometerPerSecondResolver = () => {
  if (!ConversionUnitCubicKilometerPerSecondModel) {
    ConversionUnitCubicKilometerPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-kilometer-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicKilometerPerSecond>
  }
  return ConversionUnitCubicKilometerPerSecondModel!
}

let ConversionUnitCubicMeterModel: z.ZodType<ConversionUnitCubicMeter>

export const ConversionUnitCubicMeterResolver = () => {
  if (!ConversionUnitCubicMeterModel) {
    ConversionUnitCubicMeterModel = z.enum(
      LOAD('conversion-unit-cubic-meter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMeter>
  }
  return ConversionUnitCubicMeterModel!
}

let ConversionUnitCubicMeterPerHourModel: z.ZodType<ConversionUnitCubicMeterPerHour>

export const ConversionUnitCubicMeterPerHourResolver = () => {
  if (!ConversionUnitCubicMeterPerHourModel) {
    ConversionUnitCubicMeterPerHourModel = z.enum(
      LOAD('conversion-unit-cubic-meter-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMeterPerHour>
  }
  return ConversionUnitCubicMeterPerHourModel!
}

let ConversionUnitCubicMeterPerMinuteModel: z.ZodType<ConversionUnitCubicMeterPerMinute>

export const ConversionUnitCubicMeterPerMinuteResolver = () => {
  if (!ConversionUnitCubicMeterPerMinuteModel) {
    ConversionUnitCubicMeterPerMinuteModel = z.enum(
      LOAD('conversion-unit-cubic-meter-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMeterPerMinute>
  }
  return ConversionUnitCubicMeterPerMinuteModel!
}

let ConversionUnitCubicMeterPerSecondModel: z.ZodType<ConversionUnitCubicMeterPerSecond>

export const ConversionUnitCubicMeterPerSecondResolver = () => {
  if (!ConversionUnitCubicMeterPerSecondModel) {
    ConversionUnitCubicMeterPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-meter-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMeterPerSecond>
  }
  return ConversionUnitCubicMeterPerSecondModel!
}

let ConversionUnitCubicMillimeterModel: z.ZodType<ConversionUnitCubicMillimeter>

export const ConversionUnitCubicMillimeterResolver = () => {
  if (!ConversionUnitCubicMillimeterModel) {
    ConversionUnitCubicMillimeterModel = z.enum(
      LOAD('conversion-unit-cubic-millimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMillimeter>
  }
  return ConversionUnitCubicMillimeterModel!
}

let ConversionUnitCubicMillimeterPerSecondModel: z.ZodType<ConversionUnitCubicMillimeterPerSecond>

export const ConversionUnitCubicMillimeterPerSecondResolver = () => {
  if (!ConversionUnitCubicMillimeterPerSecondModel) {
    ConversionUnitCubicMillimeterPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-millimeter-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicMillimeterPerSecond>
  }
  return ConversionUnitCubicMillimeterPerSecondModel!
}

let ConversionUnitCubicYardModel: z.ZodType<ConversionUnitCubicYard>

export const ConversionUnitCubicYardResolver = () => {
  if (!ConversionUnitCubicYardModel) {
    ConversionUnitCubicYardModel = z.enum(
      LOAD('conversion-unit-cubic-yard') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicYard>
  }
  return ConversionUnitCubicYardModel!
}

let ConversionUnitCubicYardPerHourModel: z.ZodType<ConversionUnitCubicYardPerHour>

export const ConversionUnitCubicYardPerHourResolver = () => {
  if (!ConversionUnitCubicYardPerHourModel) {
    ConversionUnitCubicYardPerHourModel = z.enum(
      LOAD('conversion-unit-cubic-yard-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicYardPerHour>
  }
  return ConversionUnitCubicYardPerHourModel!
}

let ConversionUnitCubicYardPerMinuteModel: z.ZodType<ConversionUnitCubicYardPerMinute>

export const ConversionUnitCubicYardPerMinuteResolver = () => {
  if (!ConversionUnitCubicYardPerMinuteModel) {
    ConversionUnitCubicYardPerMinuteModel = z.enum(
      LOAD('conversion-unit-cubic-yard-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicYardPerMinute>
  }
  return ConversionUnitCubicYardPerMinuteModel!
}

let ConversionUnitCubicYardPerSecondModel: z.ZodType<ConversionUnitCubicYardPerSecond>

export const ConversionUnitCubicYardPerSecondResolver = () => {
  if (!ConversionUnitCubicYardPerSecondModel) {
    ConversionUnitCubicYardPerSecondModel = z.enum(
      LOAD('conversion-unit-cubic-yard-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCubicYardPerSecond>
  }
  return ConversionUnitCubicYardPerSecondModel!
}

let ConversionUnitCupModel: z.ZodType<ConversionUnitCup>

export const ConversionUnitCupResolver = () => {
  if (!ConversionUnitCupModel) {
    ConversionUnitCupModel = z.enum(
      LOAD('conversion-unit-cup') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitCup>
  }
  return ConversionUnitCupModel!
}

let ConversionUnitCupPerSecondModel: z.ZodType<ConversionUnitCupPerSecond>

export const ConversionUnitCupPerSecondResolver = () => {
  if (!ConversionUnitCupPerSecondModel) {
    ConversionUnitCupPerSecondModel = z.enum(
      LOAD('conversion-unit-cup-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitCupPerSecond>
  }
  return ConversionUnitCupPerSecondModel!
}

let ConversionUnitDayModel: z.ZodType<ConversionUnitDay>

export const ConversionUnitDayResolver = () => {
  if (!ConversionUnitDayModel) {
    ConversionUnitDayModel = z.enum(
      LOAD('conversion-unit-day') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitDay>
  }
  return ConversionUnitDayModel!
}

let ConversionUnitDecilitreModel: z.ZodType<ConversionUnitDecilitre>

export const ConversionUnitDecilitreResolver = () => {
  if (!ConversionUnitDecilitreModel) {
    ConversionUnitDecilitreModel = z.enum(
      LOAD('conversion-unit-decilitre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitDecilitre>
  }
  return ConversionUnitDecilitreModel!
}

let ConversionUnitDecilitrePerSecondModel: z.ZodType<ConversionUnitDecilitrePerSecond>

export const ConversionUnitDecilitrePerSecondResolver = () => {
  if (!ConversionUnitDecilitrePerSecondModel) {
    ConversionUnitDecilitrePerSecondModel = z.enum(
      LOAD('conversion-unit-decilitre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitDecilitrePerSecond>
  }
  return ConversionUnitDecilitrePerSecondModel!
}

let ConversionUnitDegreeModel: z.ZodType<ConversionUnitDegree>

export const ConversionUnitDegreeResolver = () => {
  if (!ConversionUnitDegreeModel) {
    ConversionUnitDegreeModel = z.enum(
      LOAD('conversion-unit-degree') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitDegree>
  }
  return ConversionUnitDegreeModel!
}

let ConversionUnitDegreePerSecondModel: z.ZodType<ConversionUnitDegreePerSecond>

export const ConversionUnitDegreePerSecondResolver = () => {
  if (!ConversionUnitDegreePerSecondModel) {
    ConversionUnitDegreePerSecondModel = z.enum(
      LOAD('conversion-unit-degree-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitDegreePerSecond>
  }
  return ConversionUnitDegreePerSecondModel!
}

let ConversionUnitDozenModel: z.ZodType<ConversionUnitDozen>

export const ConversionUnitDozenResolver = () => {
  if (!ConversionUnitDozenModel) {
    ConversionUnitDozenModel = z.enum(
      LOAD('conversion-unit-dozen') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitDozen>
  }
  return ConversionUnitDozenModel!
}

let ConversionUnitEachModel: z.ZodType<ConversionUnitEach>

export const ConversionUnitEachResolver = () => {
  if (!ConversionUnitEachModel) {
    ConversionUnitEachModel = z.enum(
      LOAD('conversion-unit-each') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitEach>
  }
  return ConversionUnitEachModel!
}

let ConversionUnitFahrenheitModel: z.ZodType<ConversionUnitFahrenheit>

export const ConversionUnitFahrenheitResolver = () => {
  if (!ConversionUnitFahrenheitModel) {
    ConversionUnitFahrenheitModel = z.enum(
      LOAD('conversion-unit-fahrenheit') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFahrenheit>
  }
  return ConversionUnitFahrenheitModel!
}

let ConversionUnitFluidOunceModel: z.ZodType<ConversionUnitFluidOunce>

export const ConversionUnitFluidOunceResolver = () => {
  if (!ConversionUnitFluidOunceModel) {
    ConversionUnitFluidOunceModel = z.enum(
      LOAD('conversion-unit-fluid-ounce') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFluidOunce>
  }
  return ConversionUnitFluidOunceModel!
}

let ConversionUnitFluidOuncePerHourModel: z.ZodType<ConversionUnitFluidOuncePerHour>

export const ConversionUnitFluidOuncePerHourResolver = () => {
  if (!ConversionUnitFluidOuncePerHourModel) {
    ConversionUnitFluidOuncePerHourModel = z.enum(
      LOAD('conversion-unit-fluid-ounce-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFluidOuncePerHour>
  }
  return ConversionUnitFluidOuncePerHourModel!
}

let ConversionUnitFluidOuncePerMinuteModel: z.ZodType<ConversionUnitFluidOuncePerMinute>

export const ConversionUnitFluidOuncePerMinuteResolver = () => {
  if (!ConversionUnitFluidOuncePerMinuteModel) {
    ConversionUnitFluidOuncePerMinuteModel = z.enum(
      LOAD('conversion-unit-fluid-ounce-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFluidOuncePerMinute>
  }
  return ConversionUnitFluidOuncePerMinuteModel!
}

let ConversionUnitFluidOuncePerSecondModel: z.ZodType<ConversionUnitFluidOuncePerSecond>

export const ConversionUnitFluidOuncePerSecondResolver = () => {
  if (!ConversionUnitFluidOuncePerSecondModel) {
    ConversionUnitFluidOuncePerSecondModel = z.enum(
      LOAD('conversion-unit-fluid-ounce-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFluidOuncePerSecond>
  }
  return ConversionUnitFluidOuncePerSecondModel!
}

let ConversionUnitFootModel: z.ZodType<ConversionUnitFoot>

export const ConversionUnitFootResolver = () => {
  if (!ConversionUnitFootModel) {
    ConversionUnitFootModel = z.enum(
      LOAD('conversion-unit-foot') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitFoot>
  }
  return ConversionUnitFootModel!
}

let ConversionUnitFootCandleModel: z.ZodType<ConversionUnitFootCandle>

export const ConversionUnitFootCandleResolver = () => {
  if (!ConversionUnitFootCandleModel) {
    ConversionUnitFootCandleModel = z.enum(
      LOAD('conversion-unit-foot-candle') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFootCandle>
  }
  return ConversionUnitFootCandleModel!
}

let ConversionUnitFootPerSecondModel: z.ZodType<ConversionUnitFootPerSecond>

export const ConversionUnitFootPerSecondResolver = () => {
  if (!ConversionUnitFootPerSecondModel) {
    ConversionUnitFootPerSecondModel = z.enum(
      LOAD('conversion-unit-foot-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitFootPerSecond>
  }
  return ConversionUnitFootPerSecondModel!
}

let ConversionUnitGallonModel: z.ZodType<ConversionUnitGallon>

export const ConversionUnitGallonResolver = () => {
  if (!ConversionUnitGallonModel) {
    ConversionUnitGallonModel = z.enum(
      LOAD('conversion-unit-gallon') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGallon>
  }
  return ConversionUnitGallonModel!
}

let ConversionUnitGallonPerHourModel: z.ZodType<ConversionUnitGallonPerHour>

export const ConversionUnitGallonPerHourResolver = () => {
  if (!ConversionUnitGallonPerHourModel) {
    ConversionUnitGallonPerHourModel = z.enum(
      LOAD('conversion-unit-gallon-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGallonPerHour>
  }
  return ConversionUnitGallonPerHourModel!
}

let ConversionUnitGallonPerMinuteModel: z.ZodType<ConversionUnitGallonPerMinute>

export const ConversionUnitGallonPerMinuteResolver = () => {
  if (!ConversionUnitGallonPerMinuteModel) {
    ConversionUnitGallonPerMinuteModel = z.enum(
      LOAD('conversion-unit-gallon-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGallonPerMinute>
  }
  return ConversionUnitGallonPerMinuteModel!
}

let ConversionUnitGallonPerSecondModel: z.ZodType<ConversionUnitGallonPerSecond>

export const ConversionUnitGallonPerSecondResolver = () => {
  if (!ConversionUnitGallonPerSecondModel) {
    ConversionUnitGallonPerSecondModel = z.enum(
      LOAD('conversion-unit-gallon-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGallonPerSecond>
  }
  return ConversionUnitGallonPerSecondModel!
}

let ConversionUnitGigabitModel: z.ZodType<ConversionUnitGigabit>

export const ConversionUnitGigabitResolver = () => {
  if (!ConversionUnitGigabitModel) {
    ConversionUnitGigabitModel = z.enum(
      LOAD('conversion-unit-gigabit') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGigabit>
  }
  return ConversionUnitGigabitModel!
}

let ConversionUnitGigabyteModel: z.ZodType<ConversionUnitGigabyte>

export const ConversionUnitGigabyteResolver = () => {
  if (!ConversionUnitGigabyteModel) {
    ConversionUnitGigabyteModel = z.enum(
      LOAD('conversion-unit-gigabyte') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigabyte>
  }
  return ConversionUnitGigabyteModel!
}

let ConversionUnitGigahertzModel: z.ZodType<ConversionUnitGigahertz>

export const ConversionUnitGigahertzResolver = () => {
  if (!ConversionUnitGigahertzModel) {
    ConversionUnitGigahertzModel = z.enum(
      LOAD('conversion-unit-gigahertz') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigahertz>
  }
  return ConversionUnitGigahertzModel!
}

let ConversionUnitGigavoltAmpereModel: z.ZodType<ConversionUnitGigavoltAmpere>

export const ConversionUnitGigavoltAmpereResolver = () => {
  if (!ConversionUnitGigavoltAmpereModel) {
    ConversionUnitGigavoltAmpereModel = z.enum(
      LOAD('conversion-unit-gigavolt-ampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigavoltAmpere>
  }
  return ConversionUnitGigavoltAmpereModel!
}

let ConversionUnitGigavoltAmpereReactiveModel: z.ZodType<ConversionUnitGigavoltAmpereReactive>

export const ConversionUnitGigavoltAmpereReactiveResolver = () => {
  if (!ConversionUnitGigavoltAmpereReactiveModel) {
    ConversionUnitGigavoltAmpereReactiveModel = z.enum(
      LOAD('conversion-unit-gigavolt-ampere-reactive') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigavoltAmpereReactive>
  }
  return ConversionUnitGigavoltAmpereReactiveModel!
}

let ConversionUnitGigavoltAmpereReactiveHourModel: z.ZodType<ConversionUnitGigavoltAmpereReactiveHour>

export const ConversionUnitGigavoltAmpereReactiveHourResolver = () => {
  if (!ConversionUnitGigavoltAmpereReactiveHourModel) {
    ConversionUnitGigavoltAmpereReactiveHourModel = z.enum(
      LOAD(
        'conversion-unit-gigavolt-ampere-reactive-hour',
      ) as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGigavoltAmpereReactiveHour>
  }
  return ConversionUnitGigavoltAmpereReactiveHourModel!
}

let ConversionUnitGigawattModel: z.ZodType<ConversionUnitGigawatt>

export const ConversionUnitGigawattResolver = () => {
  if (!ConversionUnitGigawattModel) {
    ConversionUnitGigawattModel = z.enum(
      LOAD('conversion-unit-gigawatt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigawatt>
  }
  return ConversionUnitGigawattModel!
}

let ConversionUnitGigawattHourModel: z.ZodType<ConversionUnitGigawattHour>

export const ConversionUnitGigawattHourResolver = () => {
  if (!ConversionUnitGigawattHourModel) {
    ConversionUnitGigawattHourModel = z.enum(
      LOAD('conversion-unit-gigawatt-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitGigawattHour>
  }
  return ConversionUnitGigawattHourModel!
}

let ConversionUnitGlasModel: z.ZodType<ConversionUnitGlas>

export const ConversionUnitGlasResolver = () => {
  if (!ConversionUnitGlasModel) {
    ConversionUnitGlasModel = z.enum(
      LOAD('conversion-unit-glas') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGlas>
  }
  return ConversionUnitGlasModel!
}

let ConversionUnitGradianModel: z.ZodType<ConversionUnitGradian>

export const ConversionUnitGradianResolver = () => {
  if (!ConversionUnitGradianModel) {
    ConversionUnitGradianModel = z.enum(
      LOAD('conversion-unit-gradian') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGradian>
  }
  return ConversionUnitGradianModel!
}

let ConversionUnitGramModel: z.ZodType<ConversionUnitGram>

export const ConversionUnitGramResolver = () => {
  if (!ConversionUnitGramModel) {
    ConversionUnitGramModel = z.enum(
      LOAD('conversion-unit-gram') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitGram>
  }
  return ConversionUnitGramModel!
}

let ConversionUnitHectareModel: z.ZodType<ConversionUnitHectare>

export const ConversionUnitHectareResolver = () => {
  if (!ConversionUnitHectareModel) {
    ConversionUnitHectareModel = z.enum(
      LOAD('conversion-unit-hectare') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitHectare>
  }
  return ConversionUnitHectareModel!
}

let ConversionUnitHectopascalModel: z.ZodType<ConversionUnitHectopascal>

export const ConversionUnitHectopascalResolver = () => {
  if (!ConversionUnitHectopascalModel) {
    ConversionUnitHectopascalModel = z.enum(
      LOAD('conversion-unit-hectopascal') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitHectopascal>
  }
  return ConversionUnitHectopascalModel!
}

let ConversionUnitHertzModel: z.ZodType<ConversionUnitHertz>

export const ConversionUnitHertzResolver = () => {
  if (!ConversionUnitHertzModel) {
    ConversionUnitHertzModel = z.enum(
      LOAD('conversion-unit-hertz') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitHertz>
  }
  return ConversionUnitHertzModel!
}

let ConversionUnitHourModel: z.ZodType<ConversionUnitHour>

export const ConversionUnitHourResolver = () => {
  if (!ConversionUnitHourModel) {
    ConversionUnitHourModel = z.enum(
      LOAD('conversion-unit-hour') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitHour>
  }
  return ConversionUnitHourModel!
}

let ConversionUnitInchModel: z.ZodType<ConversionUnitInch>

export const ConversionUnitInchResolver = () => {
  if (!ConversionUnitInchModel) {
    ConversionUnitInchModel = z.enum(
      LOAD('conversion-unit-inch') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitInch>
  }
  return ConversionUnitInchModel!
}

let ConversionUnitJouleModel: z.ZodType<ConversionUnitJoule>

export const ConversionUnitJouleResolver = () => {
  if (!ConversionUnitJouleModel) {
    ConversionUnitJouleModel = z.enum(
      LOAD('conversion-unit-joule') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitJoule>
  }
  return ConversionUnitJouleModel!
}

let ConversionUnitKaffekoppModel: z.ZodType<ConversionUnitKaffekopp>

export const ConversionUnitKaffekoppResolver = () => {
  if (!ConversionUnitKaffekoppModel) {
    ConversionUnitKaffekoppModel = z.enum(
      LOAD('conversion-unit-kaffekopp') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKaffekopp>
  }
  return ConversionUnitKaffekoppModel!
}

let ConversionUnitKannaModel: z.ZodType<ConversionUnitKanna>

export const ConversionUnitKannaResolver = () => {
  if (!ConversionUnitKannaModel) {
    ConversionUnitKannaModel = z.enum(
      LOAD('conversion-unit-kanna') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitKanna>
  }
  return ConversionUnitKannaModel!
}

let ConversionUnitKelvinModel: z.ZodType<ConversionUnitKelvin>

export const ConversionUnitKelvinResolver = () => {
  if (!ConversionUnitKelvinModel) {
    ConversionUnitKelvinModel = z.enum(
      LOAD('conversion-unit-kelvin') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitKelvin>
  }
  return ConversionUnitKelvinModel!
}

let ConversionUnitKiloampereModel: z.ZodType<ConversionUnitKiloampere>

export const ConversionUnitKiloampereResolver = () => {
  if (!ConversionUnitKiloampereModel) {
    ConversionUnitKiloampereModel = z.enum(
      LOAD('conversion-unit-kiloampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKiloampere>
  }
  return ConversionUnitKiloampereModel!
}

let ConversionUnitKilobitModel: z.ZodType<ConversionUnitKilobit>

export const ConversionUnitKilobitResolver = () => {
  if (!ConversionUnitKilobitModel) {
    ConversionUnitKilobitModel = z.enum(
      LOAD('conversion-unit-kilobit') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitKilobit>
  }
  return ConversionUnitKilobitModel!
}

let ConversionUnitKilobyteModel: z.ZodType<ConversionUnitKilobyte>

export const ConversionUnitKilobyteResolver = () => {
  if (!ConversionUnitKilobyteModel) {
    ConversionUnitKilobyteModel = z.enum(
      LOAD('conversion-unit-kilobyte') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilobyte>
  }
  return ConversionUnitKilobyteModel!
}

let ConversionUnitKilogramModel: z.ZodType<ConversionUnitKilogram>

export const ConversionUnitKilogramResolver = () => {
  if (!ConversionUnitKilogramModel) {
    ConversionUnitKilogramModel = z.enum(
      LOAD('conversion-unit-kilogram') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilogram>
  }
  return ConversionUnitKilogramModel!
}

let ConversionUnitKilohertzModel: z.ZodType<ConversionUnitKilohertz>

export const ConversionUnitKilohertzResolver = () => {
  if (!ConversionUnitKilohertzModel) {
    ConversionUnitKilohertzModel = z.enum(
      LOAD('conversion-unit-kilohertz') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilohertz>
  }
  return ConversionUnitKilohertzModel!
}

let ConversionUnitKilojouleModel: z.ZodType<ConversionUnitKilojoule>

export const ConversionUnitKilojouleResolver = () => {
  if (!ConversionUnitKilojouleModel) {
    ConversionUnitKilojouleModel = z.enum(
      LOAD('conversion-unit-kilojoule') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilojoule>
  }
  return ConversionUnitKilojouleModel!
}

let ConversionUnitKilolitreModel: z.ZodType<ConversionUnitKilolitre>

export const ConversionUnitKilolitreResolver = () => {
  if (!ConversionUnitKilolitreModel) {
    ConversionUnitKilolitreModel = z.enum(
      LOAD('conversion-unit-kilolitre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilolitre>
  }
  return ConversionUnitKilolitreModel!
}

let ConversionUnitKilolitrePerHourModel: z.ZodType<ConversionUnitKilolitrePerHour>

export const ConversionUnitKilolitrePerHourResolver = () => {
  if (!ConversionUnitKilolitrePerHourModel) {
    ConversionUnitKilolitrePerHourModel = z.enum(
      LOAD('conversion-unit-kilolitre-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilolitrePerHour>
  }
  return ConversionUnitKilolitrePerHourModel!
}

let ConversionUnitKilolitrePerMinuteModel: z.ZodType<ConversionUnitKilolitrePerMinute>

export const ConversionUnitKilolitrePerMinuteResolver = () => {
  if (!ConversionUnitKilolitrePerMinuteModel) {
    ConversionUnitKilolitrePerMinuteModel = z.enum(
      LOAD('conversion-unit-kilolitre-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilolitrePerMinute>
  }
  return ConversionUnitKilolitrePerMinuteModel!
}

let ConversionUnitKilolitrePerSecondModel: z.ZodType<ConversionUnitKilolitrePerSecond>

export const ConversionUnitKilolitrePerSecondResolver = () => {
  if (!ConversionUnitKilolitrePerSecondModel) {
    ConversionUnitKilolitrePerSecondModel = z.enum(
      LOAD('conversion-unit-kilolitre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilolitrePerSecond>
  }
  return ConversionUnitKilolitrePerSecondModel!
}

let ConversionUnitKilometerModel: z.ZodType<ConversionUnitKilometer>

export const ConversionUnitKilometerResolver = () => {
  if (!ConversionUnitKilometerModel) {
    ConversionUnitKilometerModel = z.enum(
      LOAD('conversion-unit-kilometer') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilometer>
  }
  return ConversionUnitKilometerModel!
}

let ConversionUnitKilometrePerHourModel: z.ZodType<ConversionUnitKilometrePerHour>

export const ConversionUnitKilometrePerHourResolver = () => {
  if (!ConversionUnitKilometrePerHourModel) {
    ConversionUnitKilometrePerHourModel = z.enum(
      LOAD('conversion-unit-kilometre-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilometrePerHour>
  }
  return ConversionUnitKilometrePerHourModel!
}

let ConversionUnitKilopascalModel: z.ZodType<ConversionUnitKilopascal>

export const ConversionUnitKilopascalResolver = () => {
  if (!ConversionUnitKilopascalModel) {
    ConversionUnitKilopascalModel = z.enum(
      LOAD('conversion-unit-kilopascal') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilopascal>
  }
  return ConversionUnitKilopascalModel!
}

let ConversionUnitKilopoundPerSquareInchModel: z.ZodType<ConversionUnitKilopoundPerSquareInch>

export const ConversionUnitKilopoundPerSquareInchResolver = () => {
  if (!ConversionUnitKilopoundPerSquareInchModel) {
    ConversionUnitKilopoundPerSquareInchModel = z.enum(
      LOAD('conversion-unit-kilopound-per-square-inch') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilopoundPerSquareInch>
  }
  return ConversionUnitKilopoundPerSquareInchModel!
}

let ConversionUnitKilovoltModel: z.ZodType<ConversionUnitKilovolt>

export const ConversionUnitKilovoltResolver = () => {
  if (!ConversionUnitKilovoltModel) {
    ConversionUnitKilovoltModel = z.enum(
      LOAD('conversion-unit-kilovolt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilovolt>
  }
  return ConversionUnitKilovoltModel!
}

let ConversionUnitKilovoltAmpereModel: z.ZodType<ConversionUnitKilovoltAmpere>

export const ConversionUnitKilovoltAmpereResolver = () => {
  if (!ConversionUnitKilovoltAmpereModel) {
    ConversionUnitKilovoltAmpereModel = z.enum(
      LOAD('conversion-unit-kilovolt-ampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilovoltAmpere>
  }
  return ConversionUnitKilovoltAmpereModel!
}

let ConversionUnitKilovoltAmpereReactiveModel: z.ZodType<ConversionUnitKilovoltAmpereReactive>

export const ConversionUnitKilovoltAmpereReactiveResolver = () => {
  if (!ConversionUnitKilovoltAmpereReactiveModel) {
    ConversionUnitKilovoltAmpereReactiveModel = z.enum(
      LOAD('conversion-unit-kilovolt-ampere-reactive') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilovoltAmpereReactive>
  }
  return ConversionUnitKilovoltAmpereReactiveModel!
}

let ConversionUnitKilovoltAmpereReactiveHourModel: z.ZodType<ConversionUnitKilovoltAmpereReactiveHour>

export const ConversionUnitKilovoltAmpereReactiveHourResolver = () => {
  if (!ConversionUnitKilovoltAmpereReactiveHourModel) {
    ConversionUnitKilovoltAmpereReactiveHourModel = z.enum(
      LOAD(
        'conversion-unit-kilovolt-ampere-reactive-hour',
      ) as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitKilovoltAmpereReactiveHour>
  }
  return ConversionUnitKilovoltAmpereReactiveHourModel!
}

let ConversionUnitKilowattModel: z.ZodType<ConversionUnitKilowatt>

export const ConversionUnitKilowattResolver = () => {
  if (!ConversionUnitKilowattModel) {
    ConversionUnitKilowattModel = z.enum(
      LOAD('conversion-unit-kilowatt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilowatt>
  }
  return ConversionUnitKilowattModel!
}

let ConversionUnitKilowattHourModel: z.ZodType<ConversionUnitKilowattHour>

export const ConversionUnitKilowattHourResolver = () => {
  if (!ConversionUnitKilowattHourModel) {
    ConversionUnitKilowattHourModel = z.enum(
      LOAD('conversion-unit-kilowatt-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitKilowattHour>
  }
  return ConversionUnitKilowattHourModel!
}

let ConversionUnitKnotModel: z.ZodType<ConversionUnitKnot>

export const ConversionUnitKnotResolver = () => {
  if (!ConversionUnitKnotModel) {
    ConversionUnitKnotModel = z.enum(
      LOAD('conversion-unit-knot') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitKnot>
  }
  return ConversionUnitKnotModel!
}

let ConversionUnitLitreModel: z.ZodType<ConversionUnitLitre>

export const ConversionUnitLitreResolver = () => {
  if (!ConversionUnitLitreModel) {
    ConversionUnitLitreModel = z.enum(
      LOAD('conversion-unit-litre') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitLitre>
  }
  return ConversionUnitLitreModel!
}

let ConversionUnitLitrePerHourModel: z.ZodType<ConversionUnitLitrePerHour>

export const ConversionUnitLitrePerHourResolver = () => {
  if (!ConversionUnitLitrePerHourModel) {
    ConversionUnitLitrePerHourModel = z.enum(
      LOAD('conversion-unit-litre-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitLitrePerHour>
  }
  return ConversionUnitLitrePerHourModel!
}

let ConversionUnitLitrePerMinuteModel: z.ZodType<ConversionUnitLitrePerMinute>

export const ConversionUnitLitrePerMinuteResolver = () => {
  if (!ConversionUnitLitrePerMinuteModel) {
    ConversionUnitLitrePerMinuteModel = z.enum(
      LOAD('conversion-unit-litre-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitLitrePerMinute>
  }
  return ConversionUnitLitrePerMinuteModel!
}

let ConversionUnitLitrePerSecondModel: z.ZodType<ConversionUnitLitrePerSecond>

export const ConversionUnitLitrePerSecondResolver = () => {
  if (!ConversionUnitLitrePerSecondModel) {
    ConversionUnitLitrePerSecondModel = z.enum(
      LOAD('conversion-unit-litre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitLitrePerSecond>
  }
  return ConversionUnitLitrePerSecondModel!
}

let ConversionUnitLuxModel: z.ZodType<ConversionUnitLux>

export const ConversionUnitLuxResolver = () => {
  if (!ConversionUnitLuxModel) {
    ConversionUnitLuxModel = z.enum(
      LOAD('conversion-unit-lux') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitLux>
  }
  return ConversionUnitLuxModel!
}

let ConversionUnitMatskedModel: z.ZodType<ConversionUnitMatsked>

export const ConversionUnitMatskedResolver = () => {
  if (!ConversionUnitMatskedModel) {
    ConversionUnitMatskedModel = z.enum(
      LOAD('conversion-unit-matsked') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMatsked>
  }
  return ConversionUnitMatskedModel!
}

let ConversionUnitMegabitModel: z.ZodType<ConversionUnitMegabit>

export const ConversionUnitMegabitResolver = () => {
  if (!ConversionUnitMegabitModel) {
    ConversionUnitMegabitModel = z.enum(
      LOAD('conversion-unit-megabit') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMegabit>
  }
  return ConversionUnitMegabitModel!
}

let ConversionUnitMegabyteModel: z.ZodType<ConversionUnitMegabyte>

export const ConversionUnitMegabyteResolver = () => {
  if (!ConversionUnitMegabyteModel) {
    ConversionUnitMegabyteModel = z.enum(
      LOAD('conversion-unit-megabyte') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegabyte>
  }
  return ConversionUnitMegabyteModel!
}

let ConversionUnitMegahertzModel: z.ZodType<ConversionUnitMegahertz>

export const ConversionUnitMegahertzResolver = () => {
  if (!ConversionUnitMegahertzModel) {
    ConversionUnitMegahertzModel = z.enum(
      LOAD('conversion-unit-megahertz') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegahertz>
  }
  return ConversionUnitMegahertzModel!
}

let ConversionUnitMegapascalModel: z.ZodType<ConversionUnitMegapascal>

export const ConversionUnitMegapascalResolver = () => {
  if (!ConversionUnitMegapascalModel) {
    ConversionUnitMegapascalModel = z.enum(
      LOAD('conversion-unit-megapascal') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegapascal>
  }
  return ConversionUnitMegapascalModel!
}

let ConversionUnitMegavoltAmpereModel: z.ZodType<ConversionUnitMegavoltAmpere>

export const ConversionUnitMegavoltAmpereResolver = () => {
  if (!ConversionUnitMegavoltAmpereModel) {
    ConversionUnitMegavoltAmpereModel = z.enum(
      LOAD('conversion-unit-megavolt-ampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegavoltAmpere>
  }
  return ConversionUnitMegavoltAmpereModel!
}

let ConversionUnitMegavoltAmpereReactiveModel: z.ZodType<ConversionUnitMegavoltAmpereReactive>

export const ConversionUnitMegavoltAmpereReactiveResolver = () => {
  if (!ConversionUnitMegavoltAmpereReactiveModel) {
    ConversionUnitMegavoltAmpereReactiveModel = z.enum(
      LOAD('conversion-unit-megavolt-ampere-reactive') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegavoltAmpereReactive>
  }
  return ConversionUnitMegavoltAmpereReactiveModel!
}

let ConversionUnitMegavoltAmpereReactiveHourModel: z.ZodType<ConversionUnitMegavoltAmpereReactiveHour>

export const ConversionUnitMegavoltAmpereReactiveHourResolver = () => {
  if (!ConversionUnitMegavoltAmpereReactiveHourModel) {
    ConversionUnitMegavoltAmpereReactiveHourModel = z.enum(
      LOAD(
        'conversion-unit-megavolt-ampere-reactive-hour',
      ) as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMegavoltAmpereReactiveHour>
  }
  return ConversionUnitMegavoltAmpereReactiveHourModel!
}

let ConversionUnitMegawattModel: z.ZodType<ConversionUnitMegawatt>

export const ConversionUnitMegawattResolver = () => {
  if (!ConversionUnitMegawattModel) {
    ConversionUnitMegawattModel = z.enum(
      LOAD('conversion-unit-megawatt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegawatt>
  }
  return ConversionUnitMegawattModel!
}

let ConversionUnitMegawattHourModel: z.ZodType<ConversionUnitMegawattHour>

export const ConversionUnitMegawattHourResolver = () => {
  if (!ConversionUnitMegawattHourModel) {
    ConversionUnitMegawattHourModel = z.enum(
      LOAD('conversion-unit-megawatt-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMegawattHour>
  }
  return ConversionUnitMegawattHourModel!
}

let ConversionUnitMeterModel: z.ZodType<ConversionUnitMeter>

export const ConversionUnitMeterResolver = () => {
  if (!ConversionUnitMeterModel) {
    ConversionUnitMeterModel = z.enum(
      LOAD('conversion-unit-meter') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMeter>
  }
  return ConversionUnitMeterModel!
}

let ConversionUnitMetrePerSecondModel: z.ZodType<ConversionUnitMetrePerSecond>

export const ConversionUnitMetrePerSecondResolver = () => {
  if (!ConversionUnitMetrePerSecondModel) {
    ConversionUnitMetrePerSecondModel = z.enum(
      LOAD('conversion-unit-metre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMetrePerSecond>
  }
  return ConversionUnitMetrePerSecondModel!
}

let ConversionUnitMetricTonneModel: z.ZodType<ConversionUnitMetricTonne>

export const ConversionUnitMetricTonneResolver = () => {
  if (!ConversionUnitMetricTonneModel) {
    ConversionUnitMetricTonneModel = z.enum(
      LOAD('conversion-unit-metric-tonne') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMetricTonne>
  }
  return ConversionUnitMetricTonneModel!
}

let ConversionUnitMicrogramModel: z.ZodType<ConversionUnitMicrogram>

export const ConversionUnitMicrogramResolver = () => {
  if (!ConversionUnitMicrogramModel) {
    ConversionUnitMicrogramModel = z.enum(
      LOAD('conversion-unit-microgram') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMicrogram>
  }
  return ConversionUnitMicrogramModel!
}

let ConversionUnitMicrosecondModel: z.ZodType<ConversionUnitMicrosecond>

export const ConversionUnitMicrosecondResolver = () => {
  if (!ConversionUnitMicrosecondModel) {
    ConversionUnitMicrosecondModel = z.enum(
      LOAD('conversion-unit-microsecond') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMicrosecond>
  }
  return ConversionUnitMicrosecondModel!
}

let ConversionUnitMileModel: z.ZodType<ConversionUnitMile>

export const ConversionUnitMileResolver = () => {
  if (!ConversionUnitMileModel) {
    ConversionUnitMileModel = z.enum(
      LOAD('conversion-unit-mile') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMile>
  }
  return ConversionUnitMileModel!
}

let ConversionUnitMilePerHourModel: z.ZodType<ConversionUnitMilePerHour>

export const ConversionUnitMilePerHourResolver = () => {
  if (!ConversionUnitMilePerHourModel) {
    ConversionUnitMilePerHourModel = z.enum(
      LOAD('conversion-unit-mile-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMilePerHour>
  }
  return ConversionUnitMilePerHourModel!
}

let ConversionUnitMilliampereModel: z.ZodType<ConversionUnitMilliampere>

export const ConversionUnitMilliampereResolver = () => {
  if (!ConversionUnitMilliampereModel) {
    ConversionUnitMilliampereModel = z.enum(
      LOAD('conversion-unit-milliampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMilliampere>
  }
  return ConversionUnitMilliampereModel!
}

let ConversionUnitMilligramModel: z.ZodType<ConversionUnitMilligram>

export const ConversionUnitMilligramResolver = () => {
  if (!ConversionUnitMilligramModel) {
    ConversionUnitMilligramModel = z.enum(
      LOAD('conversion-unit-milligram') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMilligram>
  }
  return ConversionUnitMilligramModel!
}

let ConversionUnitMillihertzModel: z.ZodType<ConversionUnitMillihertz>

export const ConversionUnitMillihertzResolver = () => {
  if (!ConversionUnitMillihertzModel) {
    ConversionUnitMillihertzModel = z.enum(
      LOAD('conversion-unit-millihertz') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillihertz>
  }
  return ConversionUnitMillihertzModel!
}

let ConversionUnitMillilitreModel: z.ZodType<ConversionUnitMillilitre>

export const ConversionUnitMillilitreResolver = () => {
  if (!ConversionUnitMillilitreModel) {
    ConversionUnitMillilitreModel = z.enum(
      LOAD('conversion-unit-millilitre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillilitre>
  }
  return ConversionUnitMillilitreModel!
}

let ConversionUnitMillilitrePerSecondModel: z.ZodType<ConversionUnitMillilitrePerSecond>

export const ConversionUnitMillilitrePerSecondResolver = () => {
  if (!ConversionUnitMillilitrePerSecondModel) {
    ConversionUnitMillilitrePerSecondModel = z.enum(
      LOAD('conversion-unit-millilitre-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillilitrePerSecond>
  }
  return ConversionUnitMillilitrePerSecondModel!
}

let ConversionUnitMillimeterModel: z.ZodType<ConversionUnitMillimeter>

export const ConversionUnitMillimeterResolver = () => {
  if (!ConversionUnitMillimeterModel) {
    ConversionUnitMillimeterModel = z.enum(
      LOAD('conversion-unit-millimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillimeter>
  }
  return ConversionUnitMillimeterModel!
}

let ConversionUnitMillisecondModel: z.ZodType<ConversionUnitMillisecond>

export const ConversionUnitMillisecondResolver = () => {
  if (!ConversionUnitMillisecondModel) {
    ConversionUnitMillisecondModel = z.enum(
      LOAD('conversion-unit-millisecond') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillisecond>
  }
  return ConversionUnitMillisecondModel!
}

let ConversionUnitMillivoltModel: z.ZodType<ConversionUnitMillivolt>

export const ConversionUnitMillivoltResolver = () => {
  if (!ConversionUnitMillivoltModel) {
    ConversionUnitMillivoltModel = z.enum(
      LOAD('conversion-unit-millivolt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillivolt>
  }
  return ConversionUnitMillivoltModel!
}

let ConversionUnitMillivoltAmpereModel: z.ZodType<ConversionUnitMillivoltAmpere>

export const ConversionUnitMillivoltAmpereResolver = () => {
  if (!ConversionUnitMillivoltAmpereModel) {
    ConversionUnitMillivoltAmpereModel = z.enum(
      LOAD('conversion-unit-millivolt-ampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillivoltAmpere>
  }
  return ConversionUnitMillivoltAmpereModel!
}

let ConversionUnitMillivoltAmpereReactiveModel: z.ZodType<ConversionUnitMillivoltAmpereReactive>

export const ConversionUnitMillivoltAmpereReactiveResolver = () => {
  if (!ConversionUnitMillivoltAmpereReactiveModel) {
    ConversionUnitMillivoltAmpereReactiveModel = z.enum(
      LOAD('conversion-unit-millivolt-ampere-reactive') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMillivoltAmpereReactive>
  }
  return ConversionUnitMillivoltAmpereReactiveModel!
}

let ConversionUnitMillivoltAmpereReactiveHourModel: z.ZodType<ConversionUnitMillivoltAmpereReactiveHour>

export const ConversionUnitMillivoltAmpereReactiveHourResolver = () => {
  if (!ConversionUnitMillivoltAmpereReactiveHourModel) {
    ConversionUnitMillivoltAmpereReactiveHourModel = z.enum(
      LOAD(
        'conversion-unit-millivolt-ampere-reactive-hour',
      ) as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMillivoltAmpereReactiveHour>
  }
  return ConversionUnitMillivoltAmpereReactiveHourModel!
}

let ConversionUnitMilliwattModel: z.ZodType<ConversionUnitMilliwatt>

export const ConversionUnitMilliwattResolver = () => {
  if (!ConversionUnitMilliwattModel) {
    ConversionUnitMilliwattModel = z.enum(
      LOAD('conversion-unit-milliwatt') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMilliwatt>
  }
  return ConversionUnitMilliwattModel!
}

let ConversionUnitMilliwattHourModel: z.ZodType<ConversionUnitMilliwattHour>

export const ConversionUnitMilliwattHourResolver = () => {
  if (!ConversionUnitMilliwattHourModel) {
    ConversionUnitMilliwattHourModel = z.enum(
      LOAD('conversion-unit-milliwatt-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMilliwattHour>
  }
  return ConversionUnitMilliwattHourModel!
}

let ConversionUnitMinuteModel: z.ZodType<ConversionUnitMinute>

export const ConversionUnitMinuteResolver = () => {
  if (!ConversionUnitMinuteModel) {
    ConversionUnitMinuteModel = z.enum(
      LOAD('conversion-unit-minute') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMinute>
  }
  return ConversionUnitMinuteModel!
}

let ConversionUnitMinutePerKilometreModel: z.ZodType<ConversionUnitMinutePerKilometre>

export const ConversionUnitMinutePerKilometreResolver = () => {
  if (!ConversionUnitMinutePerKilometreModel) {
    ConversionUnitMinutePerKilometreModel = z.enum(
      LOAD('conversion-unit-minute-per-kilometre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMinutePerKilometre>
  }
  return ConversionUnitMinutePerKilometreModel!
}

let ConversionUnitMinutePerMileModel: z.ZodType<ConversionUnitMinutePerMile>

export const ConversionUnitMinutePerMileResolver = () => {
  if (!ConversionUnitMinutePerMileModel) {
    ConversionUnitMinutePerMileModel = z.enum(
      LOAD('conversion-unit-minute-per-mile') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitMinutePerMile>
  }
  return ConversionUnitMinutePerMileModel!
}

let ConversionUnitMonthModel: z.ZodType<ConversionUnitMonth>

export const ConversionUnitMonthResolver = () => {
  if (!ConversionUnitMonthModel) {
    ConversionUnitMonthModel = z.enum(
      LOAD('conversion-unit-month') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitMonth>
  }
  return ConversionUnitMonthModel!
}

let ConversionUnitNanosecondModel: z.ZodType<ConversionUnitNanosecond>

export const ConversionUnitNanosecondResolver = () => {
  if (!ConversionUnitNanosecondModel) {
    ConversionUnitNanosecondModel = z.enum(
      LOAD('conversion-unit-nanosecond') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitNanosecond>
  }
  return ConversionUnitNanosecondModel!
}

let ConversionUnitOunceModel: z.ZodType<ConversionUnitOunce>

export const ConversionUnitOunceResolver = () => {
  if (!ConversionUnitOunceModel) {
    ConversionUnitOunceModel = z.enum(
      LOAD('conversion-unit-ounce') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitOunce>
  }
  return ConversionUnitOunceModel!
}

let ConversionUnitPartPerBillionModel: z.ZodType<ConversionUnitPartPerBillion>

export const ConversionUnitPartPerBillionResolver = () => {
  if (!ConversionUnitPartPerBillionModel) {
    ConversionUnitPartPerBillionModel = z.enum(
      LOAD('conversion-unit-part-per-billion') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPartPerBillion>
  }
  return ConversionUnitPartPerBillionModel!
}

let ConversionUnitPartPerMillionModel: z.ZodType<ConversionUnitPartPerMillion>

export const ConversionUnitPartPerMillionResolver = () => {
  if (!ConversionUnitPartPerMillionModel) {
    ConversionUnitPartPerMillionModel = z.enum(
      LOAD('conversion-unit-part-per-million') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPartPerMillion>
  }
  return ConversionUnitPartPerMillionModel!
}

let ConversionUnitPartPerQuadrillionModel: z.ZodType<ConversionUnitPartPerQuadrillion>

export const ConversionUnitPartPerQuadrillionResolver = () => {
  if (!ConversionUnitPartPerQuadrillionModel) {
    ConversionUnitPartPerQuadrillionModel = z.enum(
      LOAD('conversion-unit-part-per-quadrillion') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPartPerQuadrillion>
  }
  return ConversionUnitPartPerQuadrillionModel!
}

let ConversionUnitPartPerTrillionModel: z.ZodType<ConversionUnitPartPerTrillion>

export const ConversionUnitPartPerTrillionResolver = () => {
  if (!ConversionUnitPartPerTrillionModel) {
    ConversionUnitPartPerTrillionModel = z.enum(
      LOAD('conversion-unit-part-per-trillion') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPartPerTrillion>
  }
  return ConversionUnitPartPerTrillionModel!
}

let ConversionUnitPascalModel: z.ZodType<ConversionUnitPascal>

export const ConversionUnitPascalResolver = () => {
  if (!ConversionUnitPascalModel) {
    ConversionUnitPascalModel = z.enum(
      LOAD('conversion-unit-pascal') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitPascal>
  }
  return ConversionUnitPascalModel!
}

let ConversionUnitPintModel: z.ZodType<ConversionUnitPint>

export const ConversionUnitPintResolver = () => {
  if (!ConversionUnitPintModel) {
    ConversionUnitPintModel = z.enum(
      LOAD('conversion-unit-pint') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitPint>
  }
  return ConversionUnitPintModel!
}

let ConversionUnitPintPerHourModel: z.ZodType<ConversionUnitPintPerHour>

export const ConversionUnitPintPerHourResolver = () => {
  if (!ConversionUnitPintPerHourModel) {
    ConversionUnitPintPerHourModel = z.enum(
      LOAD('conversion-unit-pint-per-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPintPerHour>
  }
  return ConversionUnitPintPerHourModel!
}

let ConversionUnitPintPerMinuteModel: z.ZodType<ConversionUnitPintPerMinute>

export const ConversionUnitPintPerMinuteResolver = () => {
  if (!ConversionUnitPintPerMinuteModel) {
    ConversionUnitPintPerMinuteModel = z.enum(
      LOAD('conversion-unit-pint-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPintPerMinute>
  }
  return ConversionUnitPintPerMinuteModel!
}

let ConversionUnitPintPerSecondModel: z.ZodType<ConversionUnitPintPerSecond>

export const ConversionUnitPintPerSecondResolver = () => {
  if (!ConversionUnitPintPerSecondModel) {
    ConversionUnitPintPerSecondModel = z.enum(
      LOAD('conversion-unit-pint-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPintPerSecond>
  }
  return ConversionUnitPintPerSecondModel!
}

let ConversionUnitPoundModel: z.ZodType<ConversionUnitPound>

export const ConversionUnitPoundResolver = () => {
  if (!ConversionUnitPoundModel) {
    ConversionUnitPoundModel = z.enum(
      LOAD('conversion-unit-pound') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitPound>
  }
  return ConversionUnitPoundModel!
}

let ConversionUnitPoundPerSquareInchModel: z.ZodType<ConversionUnitPoundPerSquareInch>

export const ConversionUnitPoundPerSquareInchResolver = () => {
  if (!ConversionUnitPoundPerSquareInchModel) {
    ConversionUnitPoundPerSquareInchModel = z.enum(
      LOAD('conversion-unit-pound-per-square-inch') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitPoundPerSquareInch>
  }
  return ConversionUnitPoundPerSquareInchModel!
}

let ConversionUnitQuartModel: z.ZodType<ConversionUnitQuart>

export const ConversionUnitQuartResolver = () => {
  if (!ConversionUnitQuartModel) {
    ConversionUnitQuartModel = z.enum(
      LOAD('conversion-unit-quart') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitQuart>
  }
  return ConversionUnitQuartModel!
}

let ConversionUnitQuartPerSecondModel: z.ZodType<ConversionUnitQuartPerSecond>

export const ConversionUnitQuartPerSecondResolver = () => {
  if (!ConversionUnitQuartPerSecondModel) {
    ConversionUnitQuartPerSecondModel = z.enum(
      LOAD('conversion-unit-quart-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitQuartPerSecond>
  }
  return ConversionUnitQuartPerSecondModel!
}

let ConversionUnitRadianModel: z.ZodType<ConversionUnitRadian>

export const ConversionUnitRadianResolver = () => {
  if (!ConversionUnitRadianModel) {
    ConversionUnitRadianModel = z.enum(
      LOAD('conversion-unit-radian') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitRadian>
  }
  return ConversionUnitRadianModel!
}

let ConversionUnitRadianPerSecondModel: z.ZodType<ConversionUnitRadianPerSecond>

export const ConversionUnitRadianPerSecondResolver = () => {
  if (!ConversionUnitRadianPerSecondModel) {
    ConversionUnitRadianPerSecondModel = z.enum(
      LOAD('conversion-unit-radian-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitRadianPerSecond>
  }
  return ConversionUnitRadianPerSecondModel!
}

let ConversionUnitRankineModel: z.ZodType<ConversionUnitRankine>

export const ConversionUnitRankineResolver = () => {
  if (!ConversionUnitRankineModel) {
    ConversionUnitRankineModel = z.enum(
      LOAD('conversion-unit-rankine') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitRankine>
  }
  return ConversionUnitRankineModel!
}

let ConversionUnitRotationPerMinuteModel: z.ZodType<ConversionUnitRotationPerMinute>

export const ConversionUnitRotationPerMinuteResolver = () => {
  if (!ConversionUnitRotationPerMinuteModel) {
    ConversionUnitRotationPerMinuteModel = z.enum(
      LOAD('conversion-unit-rotation-per-minute') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitRotationPerMinute>
  }
  return ConversionUnitRotationPerMinuteModel!
}

let ConversionUnitSecondModel: z.ZodType<ConversionUnitSecond>

export const ConversionUnitSecondResolver = () => {
  if (!ConversionUnitSecondModel) {
    ConversionUnitSecondModel = z.enum(
      LOAD('conversion-unit-second') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitSecond>
  }
  return ConversionUnitSecondModel!
}

let ConversionUnitSecondPerFootModel: z.ZodType<ConversionUnitSecondPerFoot>

export const ConversionUnitSecondPerFootResolver = () => {
  if (!ConversionUnitSecondPerFootModel) {
    ConversionUnitSecondPerFootModel = z.enum(
      LOAD('conversion-unit-second-per-foot') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSecondPerFoot>
  }
  return ConversionUnitSecondPerFootModel!
}

let ConversionUnitSecondPerMetreModel: z.ZodType<ConversionUnitSecondPerMetre>

export const ConversionUnitSecondPerMetreResolver = () => {
  if (!ConversionUnitSecondPerMetreModel) {
    ConversionUnitSecondPerMetreModel = z.enum(
      LOAD('conversion-unit-second-per-metre') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSecondPerMetre>
  }
  return ConversionUnitSecondPerMetreModel!
}

let ConversionUnitSquareCentimeterModel: z.ZodType<ConversionUnitSquareCentimeter>

export const ConversionUnitSquareCentimeterResolver = () => {
  if (!ConversionUnitSquareCentimeterModel) {
    ConversionUnitSquareCentimeterModel = z.enum(
      LOAD('conversion-unit-square-centimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareCentimeter>
  }
  return ConversionUnitSquareCentimeterModel!
}

let ConversionUnitSquareFootModel: z.ZodType<ConversionUnitSquareFoot>

export const ConversionUnitSquareFootResolver = () => {
  if (!ConversionUnitSquareFootModel) {
    ConversionUnitSquareFootModel = z.enum(
      LOAD('conversion-unit-square-foot') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareFoot>
  }
  return ConversionUnitSquareFootModel!
}

let ConversionUnitSquareInchModel: z.ZodType<ConversionUnitSquareInch>

export const ConversionUnitSquareInchResolver = () => {
  if (!ConversionUnitSquareInchModel) {
    ConversionUnitSquareInchModel = z.enum(
      LOAD('conversion-unit-square-inch') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareInch>
  }
  return ConversionUnitSquareInchModel!
}

let ConversionUnitSquareKilometerModel: z.ZodType<ConversionUnitSquareKilometer>

export const ConversionUnitSquareKilometerResolver = () => {
  if (!ConversionUnitSquareKilometerModel) {
    ConversionUnitSquareKilometerModel = z.enum(
      LOAD('conversion-unit-square-kilometer') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareKilometer>
  }
  return ConversionUnitSquareKilometerModel!
}

let ConversionUnitSquareMeterModel: z.ZodType<ConversionUnitSquareMeter>

export const ConversionUnitSquareMeterResolver = () => {
  if (!ConversionUnitSquareMeterModel) {
    ConversionUnitSquareMeterModel = z.enum(
      LOAD('conversion-unit-square-meter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareMeter>
  }
  return ConversionUnitSquareMeterModel!
}

let ConversionUnitSquareMileModel: z.ZodType<ConversionUnitSquareMile>

export const ConversionUnitSquareMileResolver = () => {
  if (!ConversionUnitSquareMileModel) {
    ConversionUnitSquareMileModel = z.enum(
      LOAD('conversion-unit-square-mile') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareMile>
  }
  return ConversionUnitSquareMileModel!
}

let ConversionUnitSquareMillimeterModel: z.ZodType<ConversionUnitSquareMillimeter>

export const ConversionUnitSquareMillimeterResolver = () => {
  if (!ConversionUnitSquareMillimeterModel) {
    ConversionUnitSquareMillimeterModel = z.enum(
      LOAD('conversion-unit-square-millimeter') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareMillimeter>
  }
  return ConversionUnitSquareMillimeterModel!
}

let ConversionUnitSquareYardModel: z.ZodType<ConversionUnitSquareYard>

export const ConversionUnitSquareYardResolver = () => {
  if (!ConversionUnitSquareYardModel) {
    ConversionUnitSquareYardModel = z.enum(
      LOAD('conversion-unit-square-yard') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitSquareYard>
  }
  return ConversionUnitSquareYardModel!
}

let ConversionUnitTablespoonModel: z.ZodType<ConversionUnitTablespoon>

export const ConversionUnitTablespoonResolver = () => {
  if (!ConversionUnitTablespoonModel) {
    ConversionUnitTablespoonModel = z.enum(
      LOAD('conversion-unit-tablespoon') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTablespoon>
  }
  return ConversionUnitTablespoonModel!
}

let ConversionUnitTablespoonPerSecondModel: z.ZodType<ConversionUnitTablespoonPerSecond>

export const ConversionUnitTablespoonPerSecondResolver = () => {
  if (!ConversionUnitTablespoonPerSecondModel) {
    ConversionUnitTablespoonPerSecondModel = z.enum(
      LOAD('conversion-unit-tablespoon-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTablespoonPerSecond>
  }
  return ConversionUnitTablespoonPerSecondModel!
}

let ConversionUnitTeaspoonModel: z.ZodType<ConversionUnitTeaspoon>

export const ConversionUnitTeaspoonResolver = () => {
  if (!ConversionUnitTeaspoonModel) {
    ConversionUnitTeaspoonModel = z.enum(
      LOAD('conversion-unit-teaspoon') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTeaspoon>
  }
  return ConversionUnitTeaspoonModel!
}

let ConversionUnitTeaspoonPerSecondModel: z.ZodType<ConversionUnitTeaspoonPerSecond>

export const ConversionUnitTeaspoonPerSecondResolver = () => {
  if (!ConversionUnitTeaspoonPerSecondModel) {
    ConversionUnitTeaspoonPerSecondModel = z.enum(
      LOAD('conversion-unit-teaspoon-per-second') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTeaspoonPerSecond>
  }
  return ConversionUnitTeaspoonPerSecondModel!
}

let ConversionUnitTerabitModel: z.ZodType<ConversionUnitTerabit>

export const ConversionUnitTerabitResolver = () => {
  if (!ConversionUnitTerabitModel) {
    ConversionUnitTerabitModel = z.enum(
      LOAD('conversion-unit-terabit') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitTerabit>
  }
  return ConversionUnitTerabitModel!
}

let ConversionUnitTerabyteModel: z.ZodType<ConversionUnitTerabyte>

export const ConversionUnitTerabyteResolver = () => {
  if (!ConversionUnitTerabyteModel) {
    ConversionUnitTerabyteModel = z.enum(
      LOAD('conversion-unit-terabyte') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTerabyte>
  }
  return ConversionUnitTerabyteModel!
}

let ConversionUnitTerahertzModel: z.ZodType<ConversionUnitTerahertz>

export const ConversionUnitTerahertzResolver = () => {
  if (!ConversionUnitTerahertzModel) {
    ConversionUnitTerahertzModel = z.enum(
      LOAD('conversion-unit-terahertz') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitTerahertz>
  }
  return ConversionUnitTerahertzModel!
}

let ConversionUnitTeskedModel: z.ZodType<ConversionUnitTesked>

export const ConversionUnitTeskedResolver = () => {
  if (!ConversionUnitTeskedModel) {
    ConversionUnitTeskedModel = z.enum(
      LOAD('conversion-unit-tesked') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitTesked>
  }
  return ConversionUnitTeskedModel!
}

let ConversionUnitTonModel: z.ZodType<ConversionUnitTon>

export const ConversionUnitTonResolver = () => {
  if (!ConversionUnitTonModel) {
    ConversionUnitTonModel = z.enum(
      LOAD('conversion-unit-ton') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitTon>
  }
  return ConversionUnitTonModel!
}

let ConversionUnitTorrModel: z.ZodType<ConversionUnitTorr>

export const ConversionUnitTorrResolver = () => {
  if (!ConversionUnitTorrModel) {
    ConversionUnitTorrModel = z.enum(
      LOAD('conversion-unit-torr') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitTorr>
  }
  return ConversionUnitTorrModel!
}

let ConversionUnitUsSurveyFootModel: z.ZodType<ConversionUnitUsSurveyFoot>

export const ConversionUnitUsSurveyFootResolver = () => {
  if (!ConversionUnitUsSurveyFootModel) {
    ConversionUnitUsSurveyFootModel = z.enum(
      LOAD('conversion-unit-us-survey-foot') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitUsSurveyFoot>
  }
  return ConversionUnitUsSurveyFootModel!
}

let ConversionUnitVoltModel: z.ZodType<ConversionUnitVolt>

export const ConversionUnitVoltResolver = () => {
  if (!ConversionUnitVoltModel) {
    ConversionUnitVoltModel = z.enum(
      LOAD('conversion-unit-volt') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitVolt>
  }
  return ConversionUnitVoltModel!
}

let ConversionUnitVoltAmpereModel: z.ZodType<ConversionUnitVoltAmpere>

export const ConversionUnitVoltAmpereResolver = () => {
  if (!ConversionUnitVoltAmpereModel) {
    ConversionUnitVoltAmpereModel = z.enum(
      LOAD('conversion-unit-volt-ampere') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitVoltAmpere>
  }
  return ConversionUnitVoltAmpereModel!
}

let ConversionUnitVoltAmpereReactiveModel: z.ZodType<ConversionUnitVoltAmpereReactive>

export const ConversionUnitVoltAmpereReactiveResolver = () => {
  if (!ConversionUnitVoltAmpereReactiveModel) {
    ConversionUnitVoltAmpereReactiveModel = z.enum(
      LOAD('conversion-unit-volt-ampere-reactive') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitVoltAmpereReactive>
  }
  return ConversionUnitVoltAmpereReactiveModel!
}

let ConversionUnitVoltAmpereReactiveHourModel: z.ZodType<ConversionUnitVoltAmpereReactiveHour>

export const ConversionUnitVoltAmpereReactiveHourResolver = () => {
  if (!ConversionUnitVoltAmpereReactiveHourModel) {
    ConversionUnitVoltAmpereReactiveHourModel = z.enum(
      LOAD('conversion-unit-volt-ampere-reactive-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitVoltAmpereReactiveHour>
  }
  return ConversionUnitVoltAmpereReactiveHourModel!
}

let ConversionUnitWattModel: z.ZodType<ConversionUnitWatt>

export const ConversionUnitWattResolver = () => {
  if (!ConversionUnitWattModel) {
    ConversionUnitWattModel = z.enum(
      LOAD('conversion-unit-watt') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitWatt>
  }
  return ConversionUnitWattModel!
}

let ConversionUnitWattHourModel: z.ZodType<ConversionUnitWattHour>

export const ConversionUnitWattHourResolver = () => {
  if (!ConversionUnitWattHourModel) {
    ConversionUnitWattHourModel = z.enum(
      LOAD('conversion-unit-watt-hour') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConversionUnitWattHour>
  }
  return ConversionUnitWattHourModel!
}

let ConversionUnitWeekModel: z.ZodType<ConversionUnitWeek>

export const ConversionUnitWeekResolver = () => {
  if (!ConversionUnitWeekModel) {
    ConversionUnitWeekModel = z.enum(
      LOAD('conversion-unit-week') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitWeek>
  }
  return ConversionUnitWeekModel!
}

let ConversionUnitYardModel: z.ZodType<ConversionUnitYard>

export const ConversionUnitYardResolver = () => {
  if (!ConversionUnitYardModel) {
    ConversionUnitYardModel = z.enum(
      LOAD('conversion-unit-yard') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitYard>
  }
  return ConversionUnitYardModel!
}

let ConversionUnitYearModel: z.ZodType<ConversionUnitYear>

export const ConversionUnitYearResolver = () => {
  if (!ConversionUnitYearModel) {
    ConversionUnitYearModel = z.enum(
      LOAD('conversion-unit-year') as readonly [string, ...string[]],
    ) as z.ZodType<ConversionUnitYear>
  }
  return ConversionUnitYearModel!
}

let ConvertAcreModel: z.ZodType<ConvertAcre>

export const ConvertAcreResolver = (): z.ZodType<ConvertAcre> => {
  if (!ConvertAcreModel) {
    ConvertAcreModel = z.object({
      input: z.object({
        format: z.literal('acre'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitAcreResolver()),
      }),
    })
  }
  return ConvertAcreModel!
}

let ConvertAmpereModel: z.ZodType<ConvertAmpere>

export const ConvertAmpereResolver = (): z.ZodType<ConvertAmpere> => {
  if (!ConvertAmpereModel) {
    ConvertAmpereModel = z.object({
      input: z.object({
        format: z.literal('ampere'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitAmpereResolver()),
      }),
    })
  }
  return ConvertAmpereModel!
}

let ConvertApiModel: z.ZodType<ConvertApi>

export const ConvertApiResolver = (): z.ZodType<ConvertApi> => {
  if (!ConvertApiModel) {
    ConvertApiModel = z.object({
      input: z.object({
        format: z.string(),
      }),
      output: z.object({
        format: z.string(),
      }),
    })
  }
  return ConvertApiModel!
}

let ConvertArchiveCommandInputModel: z.ZodType<ConvertArchiveCommandInput>

export const ConvertArchiveCommandInputResolver =
  (): z.ZodType<ConvertArchiveCommandInput> => {
    if (!ConvertArchiveCommandInputModel) {
      ConvertArchiveCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertArchiveCommandInputModel!
  }

let ConvertArcminuteModel: z.ZodType<ConvertArcminute>

export const ConvertArcminuteResolver =
  (): z.ZodType<ConvertArcminute> => {
    if (!ConvertArcminuteModel) {
      ConvertArcminuteModel = z.object({
        input: z.object({
          format: z.literal('arcminute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitArcminuteResolver()),
        }),
      })
    }
    return ConvertArcminuteModel!
  }

let ConvertArcsecondModel: z.ZodType<ConvertArcsecond>

export const ConvertArcsecondResolver =
  (): z.ZodType<ConvertArcsecond> => {
    if (!ConvertArcsecondModel) {
      ConvertArcsecondModel = z.object({
        input: z.object({
          format: z.literal('arcsecond'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitArcsecondResolver()),
        }),
      })
    }
    return ConvertArcsecondModel!
  }

let ConvertBarModel: z.ZodType<ConvertBar>

export const ConvertBarResolver = (): z.ZodType<ConvertBar> => {
  if (!ConvertBarModel) {
    ConvertBarModel = z.object({
      input: z.object({
        format: z.literal('bar'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitBarResolver()),
      }),
    })
  }
  return ConvertBarModel!
}

let ConvertBitModel: z.ZodType<ConvertBit>

export const ConvertBitResolver = (): z.ZodType<ConvertBit> => {
  if (!ConvertBitModel) {
    ConvertBitModel = z.object({
      input: z.object({
        format: z.literal('bit'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitBitResolver()),
      }),
    })
  }
  return ConvertBitModel!
}

let ConvertByteModel: z.ZodType<ConvertByte>

export const ConvertByteResolver = (): z.ZodType<ConvertByte> => {
  if (!ConvertByteModel) {
    ConvertByteModel = z.object({
      input: z.object({
        format: z.literal('byte'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitByteResolver()),
      }),
    })
  }
  return ConvertByteModel!
}

let ConvertCelsiusModel: z.ZodType<ConvertCelsius>

export const ConvertCelsiusResolver = (): z.ZodType<ConvertCelsius> => {
  if (!ConvertCelsiusModel) {
    ConvertCelsiusModel = z.object({
      input: z.object({
        format: z.literal('celsius'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitCelsiusResolver()),
      }),
    })
  }
  return ConvertCelsiusModel!
}

let ConvertCentilitreModel: z.ZodType<ConvertCentilitre>

export const ConvertCentilitreResolver =
  (): z.ZodType<ConvertCentilitre> => {
    if (!ConvertCentilitreModel) {
      ConvertCentilitreModel = z.object({
        input: z.object({
          format: z.literal('centilitre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCentilitreResolver()),
        }),
      })
    }
    return ConvertCentilitreModel!
  }

let ConvertCentilitrePerSecondModel: z.ZodType<ConvertCentilitrePerSecond>

export const ConvertCentilitrePerSecondResolver =
  (): z.ZodType<ConvertCentilitrePerSecond> => {
    if (!ConvertCentilitrePerSecondModel) {
      ConvertCentilitrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('centilitre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCentilitrePerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCentilitrePerSecondModel!
  }

let ConvertCentimeterModel: z.ZodType<ConvertCentimeter>

export const ConvertCentimeterResolver =
  (): z.ZodType<ConvertCentimeter> => {
    if (!ConvertCentimeterModel) {
      ConvertCentimeterModel = z.object({
        input: z.object({
          format: z.literal('centimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCentimeterResolver()),
        }),
      })
    }
    return ConvertCentimeterModel!
  }

let ConvertCliBaseModel: z.ZodType<ConvertCliBase>

export const ConvertCliBaseResolver = (): z.ZodType<ConvertCliBase> => {
  if (!ConvertCliBaseModel) {
    ConvertCliBaseModel = z
      .object({
        input: z
          .object({
            format: z.string(),
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        output: z
          .object({
            format: z.string(),
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        help: z.optional(z.boolean()),
        log: z
          .optional(z.lazy(() => CliLogFormatResolver()))
          .default('pretty'),
      })
      .passthrough()
  }
  return ConvertCliBaseModel!
}

let ConvertCubicCentimeterModel: z.ZodType<ConvertCubicCentimeter>

export const ConvertCubicCentimeterResolver =
  (): z.ZodType<ConvertCubicCentimeter> => {
    if (!ConvertCubicCentimeterModel) {
      ConvertCubicCentimeterModel = z.object({
        input: z.object({
          format: z.literal('cubic-centimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicCentimeterResolver()),
        }),
      })
    }
    return ConvertCubicCentimeterModel!
  }

let ConvertCubicCentimeterPerSecondModel: z.ZodType<ConvertCubicCentimeterPerSecond>

export const ConvertCubicCentimeterPerSecondResolver =
  (): z.ZodType<ConvertCubicCentimeterPerSecond> => {
    if (!ConvertCubicCentimeterPerSecondModel) {
      ConvertCubicCentimeterPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-centimeter-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicCentimeterPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicCentimeterPerSecondModel!
  }

let ConvertCubicFootModel: z.ZodType<ConvertCubicFoot>

export const ConvertCubicFootResolver =
  (): z.ZodType<ConvertCubicFoot> => {
    if (!ConvertCubicFootModel) {
      ConvertCubicFootModel = z.object({
        input: z.object({
          format: z.literal('cubic-foot'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicFootResolver()),
        }),
      })
    }
    return ConvertCubicFootModel!
  }

let ConvertCubicFootPerHourModel: z.ZodType<ConvertCubicFootPerHour>

export const ConvertCubicFootPerHourResolver =
  (): z.ZodType<ConvertCubicFootPerHour> => {
    if (!ConvertCubicFootPerHourModel) {
      ConvertCubicFootPerHourModel = z.object({
        input: z.object({
          format: z.literal('cubic-foot-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicFootPerHourResolver(),
          ),
        }),
      })
    }
    return ConvertCubicFootPerHourModel!
  }

let ConvertCubicFootPerMinuteModel: z.ZodType<ConvertCubicFootPerMinute>

export const ConvertCubicFootPerMinuteResolver =
  (): z.ZodType<ConvertCubicFootPerMinute> => {
    if (!ConvertCubicFootPerMinuteModel) {
      ConvertCubicFootPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('cubic-foot-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicFootPerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertCubicFootPerMinuteModel!
  }

let ConvertCubicFootPerSecondModel: z.ZodType<ConvertCubicFootPerSecond>

export const ConvertCubicFootPerSecondResolver =
  (): z.ZodType<ConvertCubicFootPerSecond> => {
    if (!ConvertCubicFootPerSecondModel) {
      ConvertCubicFootPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-foot-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicFootPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicFootPerSecondModel!
  }

let ConvertCubicInchModel: z.ZodType<ConvertCubicInch>

export const ConvertCubicInchResolver =
  (): z.ZodType<ConvertCubicInch> => {
    if (!ConvertCubicInchModel) {
      ConvertCubicInchModel = z.object({
        input: z.object({
          format: z.literal('cubic-inch'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicInchResolver()),
        }),
      })
    }
    return ConvertCubicInchModel!
  }

let ConvertCubicInchPerHourModel: z.ZodType<ConvertCubicInchPerHour>

export const ConvertCubicInchPerHourResolver =
  (): z.ZodType<ConvertCubicInchPerHour> => {
    if (!ConvertCubicInchPerHourModel) {
      ConvertCubicInchPerHourModel = z.object({
        input: z.object({
          format: z.literal('cubic-inch-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicInchPerHourResolver(),
          ),
        }),
      })
    }
    return ConvertCubicInchPerHourModel!
  }

let ConvertCubicInchPerMinuteModel: z.ZodType<ConvertCubicInchPerMinute>

export const ConvertCubicInchPerMinuteResolver =
  (): z.ZodType<ConvertCubicInchPerMinute> => {
    if (!ConvertCubicInchPerMinuteModel) {
      ConvertCubicInchPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('cubic-inch-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicInchPerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertCubicInchPerMinuteModel!
  }

let ConvertCubicInchPerSecondModel: z.ZodType<ConvertCubicInchPerSecond>

export const ConvertCubicInchPerSecondResolver =
  (): z.ZodType<ConvertCubicInchPerSecond> => {
    if (!ConvertCubicInchPerSecondModel) {
      ConvertCubicInchPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-inch-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicInchPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicInchPerSecondModel!
  }

let ConvertCubicKilometerModel: z.ZodType<ConvertCubicKilometer>

export const ConvertCubicKilometerResolver =
  (): z.ZodType<ConvertCubicKilometer> => {
    if (!ConvertCubicKilometerModel) {
      ConvertCubicKilometerModel = z.object({
        input: z.object({
          format: z.literal('cubic-kilometer'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicKilometerResolver()),
        }),
      })
    }
    return ConvertCubicKilometerModel!
  }

let ConvertCubicKilometerPerSecondModel: z.ZodType<ConvertCubicKilometerPerSecond>

export const ConvertCubicKilometerPerSecondResolver =
  (): z.ZodType<ConvertCubicKilometerPerSecond> => {
    if (!ConvertCubicKilometerPerSecondModel) {
      ConvertCubicKilometerPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-kilometer-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicKilometerPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicKilometerPerSecondModel!
  }

let ConvertCubicMeterModel: z.ZodType<ConvertCubicMeter>

export const ConvertCubicMeterResolver =
  (): z.ZodType<ConvertCubicMeter> => {
    if (!ConvertCubicMeterModel) {
      ConvertCubicMeterModel = z.object({
        input: z.object({
          format: z.literal('cubic-meter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicMeterResolver()),
        }),
      })
    }
    return ConvertCubicMeterModel!
  }

let ConvertCubicMeterPerHourModel: z.ZodType<ConvertCubicMeterPerHour>

export const ConvertCubicMeterPerHourResolver =
  (): z.ZodType<ConvertCubicMeterPerHour> => {
    if (!ConvertCubicMeterPerHourModel) {
      ConvertCubicMeterPerHourModel = z.object({
        input: z.object({
          format: z.literal('cubic-meter-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicMeterPerHourResolver(),
          ),
        }),
      })
    }
    return ConvertCubicMeterPerHourModel!
  }

let ConvertCubicMeterPerMinuteModel: z.ZodType<ConvertCubicMeterPerMinute>

export const ConvertCubicMeterPerMinuteResolver =
  (): z.ZodType<ConvertCubicMeterPerMinute> => {
    if (!ConvertCubicMeterPerMinuteModel) {
      ConvertCubicMeterPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('cubic-meter-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicMeterPerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertCubicMeterPerMinuteModel!
  }

let ConvertCubicMeterPerSecondModel: z.ZodType<ConvertCubicMeterPerSecond>

export const ConvertCubicMeterPerSecondResolver =
  (): z.ZodType<ConvertCubicMeterPerSecond> => {
    if (!ConvertCubicMeterPerSecondModel) {
      ConvertCubicMeterPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-meter-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicMeterPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicMeterPerSecondModel!
  }

let ConvertCubicMillimeterModel: z.ZodType<ConvertCubicMillimeter>

export const ConvertCubicMillimeterResolver =
  (): z.ZodType<ConvertCubicMillimeter> => {
    if (!ConvertCubicMillimeterModel) {
      ConvertCubicMillimeterModel = z.object({
        input: z.object({
          format: z.literal('cubic-millimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicMillimeterResolver()),
        }),
      })
    }
    return ConvertCubicMillimeterModel!
  }

let ConvertCubicMillimeterPerSecondModel: z.ZodType<ConvertCubicMillimeterPerSecond>

export const ConvertCubicMillimeterPerSecondResolver =
  (): z.ZodType<ConvertCubicMillimeterPerSecond> => {
    if (!ConvertCubicMillimeterPerSecondModel) {
      ConvertCubicMillimeterPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-millimeter-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicMillimeterPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicMillimeterPerSecondModel!
  }

let ConvertCubicYardModel: z.ZodType<ConvertCubicYard>

export const ConvertCubicYardResolver =
  (): z.ZodType<ConvertCubicYard> => {
    if (!ConvertCubicYardModel) {
      ConvertCubicYardModel = z.object({
        input: z.object({
          format: z.literal('cubic-yard'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCubicYardResolver()),
        }),
      })
    }
    return ConvertCubicYardModel!
  }

let ConvertCubicYardPerHourModel: z.ZodType<ConvertCubicYardPerHour>

export const ConvertCubicYardPerHourResolver =
  (): z.ZodType<ConvertCubicYardPerHour> => {
    if (!ConvertCubicYardPerHourModel) {
      ConvertCubicYardPerHourModel = z.object({
        input: z.object({
          format: z.literal('cubic-yard-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicYardPerHourResolver(),
          ),
        }),
      })
    }
    return ConvertCubicYardPerHourModel!
  }

let ConvertCubicYardPerMinuteModel: z.ZodType<ConvertCubicYardPerMinute>

export const ConvertCubicYardPerMinuteResolver =
  (): z.ZodType<ConvertCubicYardPerMinute> => {
    if (!ConvertCubicYardPerMinuteModel) {
      ConvertCubicYardPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('cubic-yard-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicYardPerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertCubicYardPerMinuteModel!
  }

let ConvertCubicYardPerSecondModel: z.ZodType<ConvertCubicYardPerSecond>

export const ConvertCubicYardPerSecondResolver =
  (): z.ZodType<ConvertCubicYardPerSecond> => {
    if (!ConvertCubicYardPerSecondModel) {
      ConvertCubicYardPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cubic-yard-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitCubicYardPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertCubicYardPerSecondModel!
  }

let ConvertCupModel: z.ZodType<ConvertCup>

export const ConvertCupResolver = (): z.ZodType<ConvertCup> => {
  if (!ConvertCupModel) {
    ConvertCupModel = z.object({
      input: z.object({
        format: z.literal('cup'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitCupResolver()),
      }),
    })
  }
  return ConvertCupModel!
}

let ConvertCupPerSecondModel: z.ZodType<ConvertCupPerSecond>

export const ConvertCupPerSecondResolver =
  (): z.ZodType<ConvertCupPerSecond> => {
    if (!ConvertCupPerSecondModel) {
      ConvertCupPerSecondModel = z.object({
        input: z.object({
          format: z.literal('cup-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitCupPerSecondResolver()),
        }),
      })
    }
    return ConvertCupPerSecondModel!
  }

let ConvertDayModel: z.ZodType<ConvertDay>

export const ConvertDayResolver = (): z.ZodType<ConvertDay> => {
  if (!ConvertDayModel) {
    ConvertDayModel = z.object({
      input: z.object({
        format: z.literal('day'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitDayResolver()),
      }),
    })
  }
  return ConvertDayModel!
}

let ConvertDecilitreModel: z.ZodType<ConvertDecilitre>

export const ConvertDecilitreResolver =
  (): z.ZodType<ConvertDecilitre> => {
    if (!ConvertDecilitreModel) {
      ConvertDecilitreModel = z.object({
        input: z.object({
          format: z.literal('decilitre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitDecilitreResolver()),
        }),
      })
    }
    return ConvertDecilitreModel!
  }

let ConvertDecilitrePerSecondModel: z.ZodType<ConvertDecilitrePerSecond>

export const ConvertDecilitrePerSecondResolver =
  (): z.ZodType<ConvertDecilitrePerSecond> => {
    if (!ConvertDecilitrePerSecondModel) {
      ConvertDecilitrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('decilitre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitDecilitrePerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertDecilitrePerSecondModel!
  }

let ConvertDegreeModel: z.ZodType<ConvertDegree>

export const ConvertDegreeResolver = (): z.ZodType<ConvertDegree> => {
  if (!ConvertDegreeModel) {
    ConvertDegreeModel = z.object({
      input: z.object({
        format: z.literal('degree'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitDegreeResolver()),
      }),
    })
  }
  return ConvertDegreeModel!
}

let ConvertDegreePerSecondModel: z.ZodType<ConvertDegreePerSecond>

export const ConvertDegreePerSecondResolver =
  (): z.ZodType<ConvertDegreePerSecond> => {
    if (!ConvertDegreePerSecondModel) {
      ConvertDegreePerSecondModel = z.object({
        input: z.object({
          format: z.literal('degree-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitDegreePerSecondResolver()),
        }),
      })
    }
    return ConvertDegreePerSecondModel!
  }

let ConvertDocumentWithCalibreCommandInputModel: z.ZodType<ConvertDocumentWithCalibreCommandInput>

export const ConvertDocumentWithCalibreCommandInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreCommandInput> => {
    if (!ConvertDocumentWithCalibreCommandInputModel) {
      ConvertDocumentWithCalibreCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithCalibreCommandInputModel!
  }

let ConvertDocumentWithEnscriptCommandInputModel: z.ZodType<ConvertDocumentWithEnscriptCommandInput>

export const ConvertDocumentWithEnscriptCommandInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptCommandInput> => {
    if (!ConvertDocumentWithEnscriptCommandInputModel) {
      ConvertDocumentWithEnscriptCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithEnscriptCommandInputModel!
  }

let ConvertDocumentWithJupyterCommandInputModel: z.ZodType<ConvertDocumentWithJupyterCommandInput>

export const ConvertDocumentWithJupyterCommandInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterCommandInput> => {
    if (!ConvertDocumentWithJupyterCommandInputModel) {
      ConvertDocumentWithJupyterCommandInputModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.string(),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithJupyterCommandInputModel!
  }

let ConvertDocumentWithLibreOfficeCommandInputModel: z.ZodType<ConvertDocumentWithLibreOfficeCommandInput>

export const ConvertDocumentWithLibreOfficeCommandInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeCommandInput> => {
    if (!ConvertDocumentWithLibreOfficeCommandInputModel) {
      ConvertDocumentWithLibreOfficeCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
          directory: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithLibreOfficeCommandInputModel!
  }

let ConvertDocumentWithPandocCommandInputModel: z.ZodType<ConvertDocumentWithPandocCommandInput>

export const ConvertDocumentWithPandocCommandInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocCommandInput> => {
    if (!ConvertDocumentWithPandocCommandInputModel) {
      ConvertDocumentWithPandocCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithPandocCommandInputModel!
  }

let ConvertDozenModel: z.ZodType<ConvertDozen>

export const ConvertDozenResolver = (): z.ZodType<ConvertDozen> => {
  if (!ConvertDozenModel) {
    ConvertDozenModel = z.object({
      input: z.object({
        format: z.literal('dozen'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitDozenResolver()),
      }),
    })
  }
  return ConvertDozenModel!
}

let ConvertEachModel: z.ZodType<ConvertEach>

export const ConvertEachResolver = (): z.ZodType<ConvertEach> => {
  if (!ConvertEachModel) {
    ConvertEachModel = z.object({
      input: z.object({
        format: z.literal('each'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitEachResolver()),
      }),
    })
  }
  return ConvertEachModel!
}

let ConvertFahrenheitModel: z.ZodType<ConvertFahrenheit>

export const ConvertFahrenheitResolver =
  (): z.ZodType<ConvertFahrenheit> => {
    if (!ConvertFahrenheitModel) {
      ConvertFahrenheitModel = z.object({
        input: z.object({
          format: z.literal('fahrenheit'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitFahrenheitResolver()),
        }),
      })
    }
    return ConvertFahrenheitModel!
  }

let ConvertFileBaseModel: z.ZodType<ConvertFileBase>

export const ConvertFileBaseResolver =
  (): z.ZodType<ConvertFileBase> => {
    if (!ConvertFileBaseModel) {
      ConvertFileBaseModel = z
        .object({
          tool: z.optional(z.string()),
          remote: z.optional(z.boolean()),
          async: z.optional(z.boolean()).default(false),
          input: z
            .object({
              format: z.string(),
              file: z.union([
                z.lazy(() => FileContentResolver()),
                z.lazy(() => FilePathResolver()),
              ]),
            })
            .passthrough(),
          output: z
            .object({
              format: z.string(),
              file: z
                .object({
                  path: z.string(),
                })
                .passthrough(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return ConvertFileBaseModel!
  }

let ConvertFileBaseRemoteModel: z.ZodType<ConvertFileBaseRemote>

export const ConvertFileBaseRemoteResolver =
  (): z.ZodType<ConvertFileBaseRemote> => {
    if (!ConvertFileBaseRemoteModel) {
      ConvertFileBaseRemoteModel = z
        .object({
          tool: z.optional(z.string()),
          remote: z.optional(z.boolean()),
          async: z.optional(z.boolean()).default(false),
          input: z
            .object({
              format: z.string(),
              file: z.union([
                z.lazy(() => FileContentResolver()),
                z.lazy(() => FilePathResolver()),
              ]),
            })
            .passthrough(),
          output: z
            .object({
              format: z.string(),
            })
            .passthrough(),
        })
        .passthrough()
    }
    return ConvertFileBaseRemoteModel!
  }

let ConvertFluidOunceModel: z.ZodType<ConvertFluidOunce>

export const ConvertFluidOunceResolver =
  (): z.ZodType<ConvertFluidOunce> => {
    if (!ConvertFluidOunceModel) {
      ConvertFluidOunceModel = z.object({
        input: z.object({
          format: z.literal('fluid-ounce'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitFluidOunceResolver()),
        }),
      })
    }
    return ConvertFluidOunceModel!
  }

let ConvertFluidOuncePerHourModel: z.ZodType<ConvertFluidOuncePerHour>

export const ConvertFluidOuncePerHourResolver =
  (): z.ZodType<ConvertFluidOuncePerHour> => {
    if (!ConvertFluidOuncePerHourModel) {
      ConvertFluidOuncePerHourModel = z.object({
        input: z.object({
          format: z.literal('fluid-ounce-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitFluidOuncePerHourResolver(),
          ),
        }),
      })
    }
    return ConvertFluidOuncePerHourModel!
  }

let ConvertFluidOuncePerMinuteModel: z.ZodType<ConvertFluidOuncePerMinute>

export const ConvertFluidOuncePerMinuteResolver =
  (): z.ZodType<ConvertFluidOuncePerMinute> => {
    if (!ConvertFluidOuncePerMinuteModel) {
      ConvertFluidOuncePerMinuteModel = z.object({
        input: z.object({
          format: z.literal('fluid-ounce-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitFluidOuncePerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertFluidOuncePerMinuteModel!
  }

let ConvertFluidOuncePerSecondModel: z.ZodType<ConvertFluidOuncePerSecond>

export const ConvertFluidOuncePerSecondResolver =
  (): z.ZodType<ConvertFluidOuncePerSecond> => {
    if (!ConvertFluidOuncePerSecondModel) {
      ConvertFluidOuncePerSecondModel = z.object({
        input: z.object({
          format: z.literal('fluid-ounce-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitFluidOuncePerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertFluidOuncePerSecondModel!
  }

let ConvertFontWithFontForgeCommandInputModel: z.ZodType<ConvertFontWithFontForgeCommandInput>

export const ConvertFontWithFontForgeCommandInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeCommandInput> => {
    if (!ConvertFontWithFontForgeCommandInputModel) {
      ConvertFontWithFontForgeCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertFontWithFontForgeCommandInputModel!
  }

let ConvertFootModel: z.ZodType<ConvertFoot>

export const ConvertFootResolver = (): z.ZodType<ConvertFoot> => {
  if (!ConvertFootModel) {
    ConvertFootModel = z.object({
      input: z.object({
        format: z.literal('foot'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitFootResolver()),
      }),
    })
  }
  return ConvertFootModel!
}

let ConvertFootCandleModel: z.ZodType<ConvertFootCandle>

export const ConvertFootCandleResolver =
  (): z.ZodType<ConvertFootCandle> => {
    if (!ConvertFootCandleModel) {
      ConvertFootCandleModel = z.object({
        input: z.object({
          format: z.literal('foot-candle'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitFootCandleResolver()),
        }),
      })
    }
    return ConvertFootCandleModel!
  }

let ConvertFootPerSecondModel: z.ZodType<ConvertFootPerSecond>

export const ConvertFootPerSecondResolver =
  (): z.ZodType<ConvertFootPerSecond> => {
    if (!ConvertFootPerSecondModel) {
      ConvertFootPerSecondModel = z.object({
        input: z.object({
          format: z.literal('foot-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitFootPerSecondResolver()),
        }),
      })
    }
    return ConvertFootPerSecondModel!
  }

let ConvertGallonModel: z.ZodType<ConvertGallon>

export const ConvertGallonResolver = (): z.ZodType<ConvertGallon> => {
  if (!ConvertGallonModel) {
    ConvertGallonModel = z.object({
      input: z.object({
        format: z.literal('gallon'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitGallonResolver()),
      }),
    })
  }
  return ConvertGallonModel!
}

let ConvertGallonPerHourModel: z.ZodType<ConvertGallonPerHour>

export const ConvertGallonPerHourResolver =
  (): z.ZodType<ConvertGallonPerHour> => {
    if (!ConvertGallonPerHourModel) {
      ConvertGallonPerHourModel = z.object({
        input: z.object({
          format: z.literal('gallon-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGallonPerHourResolver()),
        }),
      })
    }
    return ConvertGallonPerHourModel!
  }

let ConvertGallonPerMinuteModel: z.ZodType<ConvertGallonPerMinute>

export const ConvertGallonPerMinuteResolver =
  (): z.ZodType<ConvertGallonPerMinute> => {
    if (!ConvertGallonPerMinuteModel) {
      ConvertGallonPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('gallon-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGallonPerMinuteResolver()),
        }),
      })
    }
    return ConvertGallonPerMinuteModel!
  }

let ConvertGallonPerSecondModel: z.ZodType<ConvertGallonPerSecond>

export const ConvertGallonPerSecondResolver =
  (): z.ZodType<ConvertGallonPerSecond> => {
    if (!ConvertGallonPerSecondModel) {
      ConvertGallonPerSecondModel = z.object({
        input: z.object({
          format: z.literal('gallon-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGallonPerSecondResolver()),
        }),
      })
    }
    return ConvertGallonPerSecondModel!
  }

let ConvertGigabitModel: z.ZodType<ConvertGigabit>

export const ConvertGigabitResolver = (): z.ZodType<ConvertGigabit> => {
  if (!ConvertGigabitModel) {
    ConvertGigabitModel = z.object({
      input: z.object({
        format: z.literal('gigabit'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitGigabitResolver()),
      }),
    })
  }
  return ConvertGigabitModel!
}

let ConvertGigabyteModel: z.ZodType<ConvertGigabyte>

export const ConvertGigabyteResolver =
  (): z.ZodType<ConvertGigabyte> => {
    if (!ConvertGigabyteModel) {
      ConvertGigabyteModel = z.object({
        input: z.object({
          format: z.literal('gigabyte'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGigabyteResolver()),
        }),
      })
    }
    return ConvertGigabyteModel!
  }

let ConvertGigahertzModel: z.ZodType<ConvertGigahertz>

export const ConvertGigahertzResolver =
  (): z.ZodType<ConvertGigahertz> => {
    if (!ConvertGigahertzModel) {
      ConvertGigahertzModel = z.object({
        input: z.object({
          format: z.literal('gigahertz'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGigahertzResolver()),
        }),
      })
    }
    return ConvertGigahertzModel!
  }

let ConvertGigavoltAmpereModel: z.ZodType<ConvertGigavoltAmpere>

export const ConvertGigavoltAmpereResolver =
  (): z.ZodType<ConvertGigavoltAmpere> => {
    if (!ConvertGigavoltAmpereModel) {
      ConvertGigavoltAmpereModel = z.object({
        input: z.object({
          format: z.literal('gigavolt-ampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGigavoltAmpereResolver()),
        }),
      })
    }
    return ConvertGigavoltAmpereModel!
  }

let ConvertGigavoltAmpereReactiveModel: z.ZodType<ConvertGigavoltAmpereReactive>

export const ConvertGigavoltAmpereReactiveResolver =
  (): z.ZodType<ConvertGigavoltAmpereReactive> => {
    if (!ConvertGigavoltAmpereReactiveModel) {
      ConvertGigavoltAmpereReactiveModel = z.object({
        input: z.object({
          format: z.literal('gigavolt-ampere-reactive'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitGigavoltAmpereReactiveResolver(),
          ),
        }),
      })
    }
    return ConvertGigavoltAmpereReactiveModel!
  }

let ConvertGigavoltAmpereReactiveHourModel: z.ZodType<ConvertGigavoltAmpereReactiveHour>

export const ConvertGigavoltAmpereReactiveHourResolver =
  (): z.ZodType<ConvertGigavoltAmpereReactiveHour> => {
    if (!ConvertGigavoltAmpereReactiveHourModel) {
      ConvertGigavoltAmpereReactiveHourModel = z.object({
        input: z.object({
          format: z.literal('gigavolt-ampere-reactive-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitGigavoltAmpereReactiveHourResolver(),
          ),
        }),
      })
    }
    return ConvertGigavoltAmpereReactiveHourModel!
  }

let ConvertGigawattModel: z.ZodType<ConvertGigawatt>

export const ConvertGigawattResolver =
  (): z.ZodType<ConvertGigawatt> => {
    if (!ConvertGigawattModel) {
      ConvertGigawattModel = z.object({
        input: z.object({
          format: z.literal('gigawatt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGigawattResolver()),
        }),
      })
    }
    return ConvertGigawattModel!
  }

let ConvertGigawattHourModel: z.ZodType<ConvertGigawattHour>

export const ConvertGigawattHourResolver =
  (): z.ZodType<ConvertGigawattHour> => {
    if (!ConvertGigawattHourModel) {
      ConvertGigawattHourModel = z.object({
        input: z.object({
          format: z.literal('gigawatt-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitGigawattHourResolver()),
        }),
      })
    }
    return ConvertGigawattHourModel!
  }

let ConvertGlasModel: z.ZodType<ConvertGlas>

export const ConvertGlasResolver = (): z.ZodType<ConvertGlas> => {
  if (!ConvertGlasModel) {
    ConvertGlasModel = z.object({
      input: z.object({
        format: z.literal('glas'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitGlasResolver()),
      }),
    })
  }
  return ConvertGlasModel!
}

let ConvertGradianModel: z.ZodType<ConvertGradian>

export const ConvertGradianResolver = (): z.ZodType<ConvertGradian> => {
  if (!ConvertGradianModel) {
    ConvertGradianModel = z.object({
      input: z.object({
        format: z.literal('gradian'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitGradianResolver()),
      }),
    })
  }
  return ConvertGradianModel!
}

let ConvertGramModel: z.ZodType<ConvertGram>

export const ConvertGramResolver = (): z.ZodType<ConvertGram> => {
  if (!ConvertGramModel) {
    ConvertGramModel = z.object({
      input: z.object({
        format: z.literal('gram'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitGramResolver()),
      }),
    })
  }
  return ConvertGramModel!
}

let ConvertHectareModel: z.ZodType<ConvertHectare>

export const ConvertHectareResolver = (): z.ZodType<ConvertHectare> => {
  if (!ConvertHectareModel) {
    ConvertHectareModel = z.object({
      input: z.object({
        format: z.literal('hectare'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitHectareResolver()),
      }),
    })
  }
  return ConvertHectareModel!
}

let ConvertHectopascalModel: z.ZodType<ConvertHectopascal>

export const ConvertHectopascalResolver =
  (): z.ZodType<ConvertHectopascal> => {
    if (!ConvertHectopascalModel) {
      ConvertHectopascalModel = z.object({
        input: z.object({
          format: z.literal('hectopascal'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitHectopascalResolver()),
        }),
      })
    }
    return ConvertHectopascalModel!
  }

let ConvertHertzModel: z.ZodType<ConvertHertz>

export const ConvertHertzResolver = (): z.ZodType<ConvertHertz> => {
  if (!ConvertHertzModel) {
    ConvertHertzModel = z.object({
      input: z.object({
        format: z.literal('hertz'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitHertzResolver()),
      }),
    })
  }
  return ConvertHertzModel!
}

let ConvertHourModel: z.ZodType<ConvertHour>

export const ConvertHourResolver = (): z.ZodType<ConvertHour> => {
  if (!ConvertHourModel) {
    ConvertHourModel = z.object({
      input: z.object({
        format: z.literal('hour'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitHourResolver()),
      }),
    })
  }
  return ConvertHourModel!
}

let ConvertHtmlWithPuppeteerCommandInputModel: z.ZodType<ConvertHtmlWithPuppeteerCommandInput>

export const ConvertHtmlWithPuppeteerCommandInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerCommandInput> => {
    if (!ConvertHtmlWithPuppeteerCommandInputModel) {
      ConvertHtmlWithPuppeteerCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.object({
          width: z.optional(z.number().int().gte(0)),
          height: z.optional(z.number().int().gte(0)),
        }),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
      })
    }
    return ConvertHtmlWithPuppeteerCommandInputModel!
  }

let ConvertImageWithImageMagickCommandInputModel: z.ZodType<ConvertImageWithImageMagickCommandInput>

export const ConvertImageWithImageMagickCommandInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickCommandInput> => {
    if (!ConvertImageWithImageMagickCommandInputModel) {
      ConvertImageWithImageMagickCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => ImageMagickOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        colorCount: z.optional(z.number().int().gte(0)),
        colorMatrix: z.optional(
          z
            .lazy(() => ImageMagicColorMatrixResolver())
            .refine(
              TEST(
                'colorMatrix',
                code.test_image_magic_color_matrix.test,
              ),
            ),
        ),
        colorSpace: z.optional(
          z.lazy(() => ImageMagickColorSpaceResolver()),
        ),
        compare: z.optional(z.boolean()),
        compression: z.optional(
          z.lazy(() => ImageMagickCompressionResolver()),
        ),
        density: z.optional(z.number().int().gte(0)),
        quality: z.optional(z.number().int().gte(0)),
      })
    }
    return ConvertImageWithImageMagickCommandInputModel!
  }

let ConvertImageWithInkscapeCommandInputModel: z.ZodType<ConvertImageWithInkscapeCommandInput>

export const ConvertImageWithInkscapeCommandInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeCommandInput> => {
    if (!ConvertImageWithInkscapeCommandInputModel) {
      ConvertImageWithInkscapeCommandInputModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.string(),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertImageWithInkscapeCommandInputModel!
  }

let ConvertInchModel: z.ZodType<ConvertInch>

export const ConvertInchResolver = (): z.ZodType<ConvertInch> => {
  if (!ConvertInchModel) {
    ConvertInchModel = z.object({
      input: z.object({
        format: z.literal('inch'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitInchResolver()),
      }),
    })
  }
  return ConvertInchModel!
}

let ConvertJouleModel: z.ZodType<ConvertJoule>

export const ConvertJouleResolver = (): z.ZodType<ConvertJoule> => {
  if (!ConvertJouleModel) {
    ConvertJouleModel = z.object({
      input: z.object({
        format: z.literal('joule'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitJouleResolver()),
      }),
    })
  }
  return ConvertJouleModel!
}

let ConvertKaffekoppModel: z.ZodType<ConvertKaffekopp>

export const ConvertKaffekoppResolver =
  (): z.ZodType<ConvertKaffekopp> => {
    if (!ConvertKaffekoppModel) {
      ConvertKaffekoppModel = z.object({
        input: z.object({
          format: z.literal('kaffekopp'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKaffekoppResolver()),
        }),
      })
    }
    return ConvertKaffekoppModel!
  }

let ConvertKannaModel: z.ZodType<ConvertKanna>

export const ConvertKannaResolver = (): z.ZodType<ConvertKanna> => {
  if (!ConvertKannaModel) {
    ConvertKannaModel = z.object({
      input: z.object({
        format: z.literal('kanna'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitKannaResolver()),
      }),
    })
  }
  return ConvertKannaModel!
}

let ConvertKelvinModel: z.ZodType<ConvertKelvin>

export const ConvertKelvinResolver = (): z.ZodType<ConvertKelvin> => {
  if (!ConvertKelvinModel) {
    ConvertKelvinModel = z.object({
      input: z.object({
        format: z.literal('kelvin'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitKelvinResolver()),
      }),
    })
  }
  return ConvertKelvinModel!
}

let ConvertKiloampereModel: z.ZodType<ConvertKiloampere>

export const ConvertKiloampereResolver =
  (): z.ZodType<ConvertKiloampere> => {
    if (!ConvertKiloampereModel) {
      ConvertKiloampereModel = z.object({
        input: z.object({
          format: z.literal('kiloampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKiloampereResolver()),
        }),
      })
    }
    return ConvertKiloampereModel!
  }

let ConvertKilobitModel: z.ZodType<ConvertKilobit>

export const ConvertKilobitResolver = (): z.ZodType<ConvertKilobit> => {
  if (!ConvertKilobitModel) {
    ConvertKilobitModel = z.object({
      input: z.object({
        format: z.literal('kilobit'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitKilobitResolver()),
      }),
    })
  }
  return ConvertKilobitModel!
}

let ConvertKilobyteModel: z.ZodType<ConvertKilobyte>

export const ConvertKilobyteResolver =
  (): z.ZodType<ConvertKilobyte> => {
    if (!ConvertKilobyteModel) {
      ConvertKilobyteModel = z.object({
        input: z.object({
          format: z.literal('kilobyte'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilobyteResolver()),
        }),
      })
    }
    return ConvertKilobyteModel!
  }

let ConvertKilogramModel: z.ZodType<ConvertKilogram>

export const ConvertKilogramResolver =
  (): z.ZodType<ConvertKilogram> => {
    if (!ConvertKilogramModel) {
      ConvertKilogramModel = z.object({
        input: z.object({
          format: z.literal('kilogram'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilogramResolver()),
        }),
      })
    }
    return ConvertKilogramModel!
  }

let ConvertKilohertzModel: z.ZodType<ConvertKilohertz>

export const ConvertKilohertzResolver =
  (): z.ZodType<ConvertKilohertz> => {
    if (!ConvertKilohertzModel) {
      ConvertKilohertzModel = z.object({
        input: z.object({
          format: z.literal('kilohertz'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilohertzResolver()),
        }),
      })
    }
    return ConvertKilohertzModel!
  }

let ConvertKilojouleModel: z.ZodType<ConvertKilojoule>

export const ConvertKilojouleResolver =
  (): z.ZodType<ConvertKilojoule> => {
    if (!ConvertKilojouleModel) {
      ConvertKilojouleModel = z.object({
        input: z.object({
          format: z.literal('kilojoule'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilojouleResolver()),
        }),
      })
    }
    return ConvertKilojouleModel!
  }

let ConvertKilolitreModel: z.ZodType<ConvertKilolitre>

export const ConvertKilolitreResolver =
  (): z.ZodType<ConvertKilolitre> => {
    if (!ConvertKilolitreModel) {
      ConvertKilolitreModel = z.object({
        input: z.object({
          format: z.literal('kilolitre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilolitreResolver()),
        }),
      })
    }
    return ConvertKilolitreModel!
  }

let ConvertKilolitrePerHourModel: z.ZodType<ConvertKilolitrePerHour>

export const ConvertKilolitrePerHourResolver =
  (): z.ZodType<ConvertKilolitrePerHour> => {
    if (!ConvertKilolitrePerHourModel) {
      ConvertKilolitrePerHourModel = z.object({
        input: z.object({
          format: z.literal('kilolitre-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilolitrePerHourResolver(),
          ),
        }),
      })
    }
    return ConvertKilolitrePerHourModel!
  }

let ConvertKilolitrePerMinuteModel: z.ZodType<ConvertKilolitrePerMinute>

export const ConvertKilolitrePerMinuteResolver =
  (): z.ZodType<ConvertKilolitrePerMinute> => {
    if (!ConvertKilolitrePerMinuteModel) {
      ConvertKilolitrePerMinuteModel = z.object({
        input: z.object({
          format: z.literal('kilolitre-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilolitrePerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertKilolitrePerMinuteModel!
  }

let ConvertKilolitrePerSecondModel: z.ZodType<ConvertKilolitrePerSecond>

export const ConvertKilolitrePerSecondResolver =
  (): z.ZodType<ConvertKilolitrePerSecond> => {
    if (!ConvertKilolitrePerSecondModel) {
      ConvertKilolitrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('kilolitre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilolitrePerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertKilolitrePerSecondModel!
  }

let ConvertKilometerModel: z.ZodType<ConvertKilometer>

export const ConvertKilometerResolver =
  (): z.ZodType<ConvertKilometer> => {
    if (!ConvertKilometerModel) {
      ConvertKilometerModel = z.object({
        input: z.object({
          format: z.literal('kilometer'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilometerResolver()),
        }),
      })
    }
    return ConvertKilometerModel!
  }

let ConvertKilometrePerHourModel: z.ZodType<ConvertKilometrePerHour>

export const ConvertKilometrePerHourResolver =
  (): z.ZodType<ConvertKilometrePerHour> => {
    if (!ConvertKilometrePerHourModel) {
      ConvertKilometrePerHourModel = z.object({
        input: z.object({
          format: z.literal('kilometre-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilometrePerHourResolver(),
          ),
        }),
      })
    }
    return ConvertKilometrePerHourModel!
  }

let ConvertKilopascalModel: z.ZodType<ConvertKilopascal>

export const ConvertKilopascalResolver =
  (): z.ZodType<ConvertKilopascal> => {
    if (!ConvertKilopascalModel) {
      ConvertKilopascalModel = z.object({
        input: z.object({
          format: z.literal('kilopascal'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilopascalResolver()),
        }),
      })
    }
    return ConvertKilopascalModel!
  }

let ConvertKilopoundPerSquareInchModel: z.ZodType<ConvertKilopoundPerSquareInch>

export const ConvertKilopoundPerSquareInchResolver =
  (): z.ZodType<ConvertKilopoundPerSquareInch> => {
    if (!ConvertKilopoundPerSquareInchModel) {
      ConvertKilopoundPerSquareInchModel = z.object({
        input: z.object({
          format: z.literal('kilopound-per-square-inch'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilopoundPerSquareInchResolver(),
          ),
        }),
      })
    }
    return ConvertKilopoundPerSquareInchModel!
  }

let ConvertKilovoltModel: z.ZodType<ConvertKilovolt>

export const ConvertKilovoltResolver =
  (): z.ZodType<ConvertKilovolt> => {
    if (!ConvertKilovoltModel) {
      ConvertKilovoltModel = z.object({
        input: z.object({
          format: z.literal('kilovolt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilovoltResolver()),
        }),
      })
    }
    return ConvertKilovoltModel!
  }

let ConvertKilovoltAmpereModel: z.ZodType<ConvertKilovoltAmpere>

export const ConvertKilovoltAmpereResolver =
  (): z.ZodType<ConvertKilovoltAmpere> => {
    if (!ConvertKilovoltAmpereModel) {
      ConvertKilovoltAmpereModel = z.object({
        input: z.object({
          format: z.literal('kilovolt-ampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilovoltAmpereResolver()),
        }),
      })
    }
    return ConvertKilovoltAmpereModel!
  }

let ConvertKilovoltAmpereReactiveModel: z.ZodType<ConvertKilovoltAmpereReactive>

export const ConvertKilovoltAmpereReactiveResolver =
  (): z.ZodType<ConvertKilovoltAmpereReactive> => {
    if (!ConvertKilovoltAmpereReactiveModel) {
      ConvertKilovoltAmpereReactiveModel = z.object({
        input: z.object({
          format: z.literal('kilovolt-ampere-reactive'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilovoltAmpereReactiveResolver(),
          ),
        }),
      })
    }
    return ConvertKilovoltAmpereReactiveModel!
  }

let ConvertKilovoltAmpereReactiveHourModel: z.ZodType<ConvertKilovoltAmpereReactiveHour>

export const ConvertKilovoltAmpereReactiveHourResolver =
  (): z.ZodType<ConvertKilovoltAmpereReactiveHour> => {
    if (!ConvertKilovoltAmpereReactiveHourModel) {
      ConvertKilovoltAmpereReactiveHourModel = z.object({
        input: z.object({
          format: z.literal('kilovolt-ampere-reactive-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitKilovoltAmpereReactiveHourResolver(),
          ),
        }),
      })
    }
    return ConvertKilovoltAmpereReactiveHourModel!
  }

let ConvertKilowattModel: z.ZodType<ConvertKilowatt>

export const ConvertKilowattResolver =
  (): z.ZodType<ConvertKilowatt> => {
    if (!ConvertKilowattModel) {
      ConvertKilowattModel = z.object({
        input: z.object({
          format: z.literal('kilowatt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilowattResolver()),
        }),
      })
    }
    return ConvertKilowattModel!
  }

let ConvertKilowattHourModel: z.ZodType<ConvertKilowattHour>

export const ConvertKilowattHourResolver =
  (): z.ZodType<ConvertKilowattHour> => {
    if (!ConvertKilowattHourModel) {
      ConvertKilowattHourModel = z.object({
        input: z.object({
          format: z.literal('kilowatt-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitKilowattHourResolver()),
        }),
      })
    }
    return ConvertKilowattHourModel!
  }

let ConvertKnotModel: z.ZodType<ConvertKnot>

export const ConvertKnotResolver = (): z.ZodType<ConvertKnot> => {
  if (!ConvertKnotModel) {
    ConvertKnotModel = z.object({
      input: z.object({
        format: z.literal('knot'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitKnotResolver()),
      }),
    })
  }
  return ConvertKnotModel!
}

let ConvertLatexToPngCommandInputModel: z.ZodType<ConvertLatexToPngCommandInput>

export const ConvertLatexToPngCommandInputResolver =
  (): z.ZodType<ConvertLatexToPngCommandInput> => {
    if (!ConvertLatexToPngCommandInputModel) {
      ConvertLatexToPngCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexToPngCommandInputModel!
  }

let ConvertLatexToPngInputFormatModel: z.ZodType<ConvertLatexToPngInputFormat>

export const ConvertLatexToPngInputFormatResolver = () => {
  if (!ConvertLatexToPngInputFormatModel) {
    ConvertLatexToPngInputFormatModel = z.enum(
      LOAD('convert-latex-to-png-input-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConvertLatexToPngInputFormat>
  }
  return ConvertLatexToPngInputFormatModel!
}

let ConvertLatexToPngOutputFormatModel: z.ZodType<ConvertLatexToPngOutputFormat>

export const ConvertLatexToPngOutputFormatResolver = () => {
  if (!ConvertLatexToPngOutputFormatModel) {
    ConvertLatexToPngOutputFormatModel = z.enum(
      LOAD('convert-latex-to-png-output-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ConvertLatexToPngOutputFormat>
  }
  return ConvertLatexToPngOutputFormatModel!
}

let ConvertLatexWithPdfLatexCommandInputModel: z.ZodType<ConvertLatexWithPdfLatexCommandInput>

export const ConvertLatexWithPdfLatexCommandInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexCommandInput> => {
    if (!ConvertLatexWithPdfLatexCommandInputModel) {
      ConvertLatexWithPdfLatexCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
          directory: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexWithPdfLatexCommandInputModel!
  }

let ConvertLitreModel: z.ZodType<ConvertLitre>

export const ConvertLitreResolver = (): z.ZodType<ConvertLitre> => {
  if (!ConvertLitreModel) {
    ConvertLitreModel = z.object({
      input: z.object({
        format: z.literal('litre'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitLitreResolver()),
      }),
    })
  }
  return ConvertLitreModel!
}

let ConvertLitrePerHourModel: z.ZodType<ConvertLitrePerHour>

export const ConvertLitrePerHourResolver =
  (): z.ZodType<ConvertLitrePerHour> => {
    if (!ConvertLitrePerHourModel) {
      ConvertLitrePerHourModel = z.object({
        input: z.object({
          format: z.literal('litre-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitLitrePerHourResolver()),
        }),
      })
    }
    return ConvertLitrePerHourModel!
  }

let ConvertLitrePerMinuteModel: z.ZodType<ConvertLitrePerMinute>

export const ConvertLitrePerMinuteResolver =
  (): z.ZodType<ConvertLitrePerMinute> => {
    if (!ConvertLitrePerMinuteModel) {
      ConvertLitrePerMinuteModel = z.object({
        input: z.object({
          format: z.literal('litre-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitLitrePerMinuteResolver()),
        }),
      })
    }
    return ConvertLitrePerMinuteModel!
  }

let ConvertLitrePerSecondModel: z.ZodType<ConvertLitrePerSecond>

export const ConvertLitrePerSecondResolver =
  (): z.ZodType<ConvertLitrePerSecond> => {
    if (!ConvertLitrePerSecondModel) {
      ConvertLitrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('litre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitLitrePerSecondResolver()),
        }),
      })
    }
    return ConvertLitrePerSecondModel!
  }

let ConvertLuxModel: z.ZodType<ConvertLux>

export const ConvertLuxResolver = (): z.ZodType<ConvertLux> => {
  if (!ConvertLuxModel) {
    ConvertLuxModel = z.object({
      input: z.object({
        format: z.literal('lux'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitLuxResolver()),
      }),
    })
  }
  return ConvertLuxModel!
}

let ConvertMatskedModel: z.ZodType<ConvertMatsked>

export const ConvertMatskedResolver = (): z.ZodType<ConvertMatsked> => {
  if (!ConvertMatskedModel) {
    ConvertMatskedModel = z.object({
      input: z.object({
        format: z.literal('matsked'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMatskedResolver()),
      }),
    })
  }
  return ConvertMatskedModel!
}

let ConvertMegabitModel: z.ZodType<ConvertMegabit>

export const ConvertMegabitResolver = (): z.ZodType<ConvertMegabit> => {
  if (!ConvertMegabitModel) {
    ConvertMegabitModel = z.object({
      input: z.object({
        format: z.literal('megabit'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMegabitResolver()),
      }),
    })
  }
  return ConvertMegabitModel!
}

let ConvertMegabyteModel: z.ZodType<ConvertMegabyte>

export const ConvertMegabyteResolver =
  (): z.ZodType<ConvertMegabyte> => {
    if (!ConvertMegabyteModel) {
      ConvertMegabyteModel = z.object({
        input: z.object({
          format: z.literal('megabyte'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegabyteResolver()),
        }),
      })
    }
    return ConvertMegabyteModel!
  }

let ConvertMegahertzModel: z.ZodType<ConvertMegahertz>

export const ConvertMegahertzResolver =
  (): z.ZodType<ConvertMegahertz> => {
    if (!ConvertMegahertzModel) {
      ConvertMegahertzModel = z.object({
        input: z.object({
          format: z.literal('megahertz'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegahertzResolver()),
        }),
      })
    }
    return ConvertMegahertzModel!
  }

let ConvertMegapascalModel: z.ZodType<ConvertMegapascal>

export const ConvertMegapascalResolver =
  (): z.ZodType<ConvertMegapascal> => {
    if (!ConvertMegapascalModel) {
      ConvertMegapascalModel = z.object({
        input: z.object({
          format: z.literal('megapascal'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegapascalResolver()),
        }),
      })
    }
    return ConvertMegapascalModel!
  }

let ConvertMegavoltAmpereModel: z.ZodType<ConvertMegavoltAmpere>

export const ConvertMegavoltAmpereResolver =
  (): z.ZodType<ConvertMegavoltAmpere> => {
    if (!ConvertMegavoltAmpereModel) {
      ConvertMegavoltAmpereModel = z.object({
        input: z.object({
          format: z.literal('megavolt-ampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegavoltAmpereResolver()),
        }),
      })
    }
    return ConvertMegavoltAmpereModel!
  }

let ConvertMegavoltAmpereReactiveModel: z.ZodType<ConvertMegavoltAmpereReactive>

export const ConvertMegavoltAmpereReactiveResolver =
  (): z.ZodType<ConvertMegavoltAmpereReactive> => {
    if (!ConvertMegavoltAmpereReactiveModel) {
      ConvertMegavoltAmpereReactiveModel = z.object({
        input: z.object({
          format: z.literal('megavolt-ampere-reactive'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMegavoltAmpereReactiveResolver(),
          ),
        }),
      })
    }
    return ConvertMegavoltAmpereReactiveModel!
  }

let ConvertMegavoltAmpereReactiveHourModel: z.ZodType<ConvertMegavoltAmpereReactiveHour>

export const ConvertMegavoltAmpereReactiveHourResolver =
  (): z.ZodType<ConvertMegavoltAmpereReactiveHour> => {
    if (!ConvertMegavoltAmpereReactiveHourModel) {
      ConvertMegavoltAmpereReactiveHourModel = z.object({
        input: z.object({
          format: z.literal('megavolt-ampere-reactive-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMegavoltAmpereReactiveHourResolver(),
          ),
        }),
      })
    }
    return ConvertMegavoltAmpereReactiveHourModel!
  }

let ConvertMegawattModel: z.ZodType<ConvertMegawatt>

export const ConvertMegawattResolver =
  (): z.ZodType<ConvertMegawatt> => {
    if (!ConvertMegawattModel) {
      ConvertMegawattModel = z.object({
        input: z.object({
          format: z.literal('megawatt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegawattResolver()),
        }),
      })
    }
    return ConvertMegawattModel!
  }

let ConvertMegawattHourModel: z.ZodType<ConvertMegawattHour>

export const ConvertMegawattHourResolver =
  (): z.ZodType<ConvertMegawattHour> => {
    if (!ConvertMegawattHourModel) {
      ConvertMegawattHourModel = z.object({
        input: z.object({
          format: z.literal('megawatt-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMegawattHourResolver()),
        }),
      })
    }
    return ConvertMegawattHourModel!
  }

let ConvertMeterModel: z.ZodType<ConvertMeter>

export const ConvertMeterResolver = (): z.ZodType<ConvertMeter> => {
  if (!ConvertMeterModel) {
    ConvertMeterModel = z.object({
      input: z.object({
        format: z.literal('meter'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMeterResolver()),
      }),
    })
  }
  return ConvertMeterModel!
}

let ConvertMetrePerSecondModel: z.ZodType<ConvertMetrePerSecond>

export const ConvertMetrePerSecondResolver =
  (): z.ZodType<ConvertMetrePerSecond> => {
    if (!ConvertMetrePerSecondModel) {
      ConvertMetrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('metre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMetrePerSecondResolver()),
        }),
      })
    }
    return ConvertMetrePerSecondModel!
  }

let ConvertMetricTonneModel: z.ZodType<ConvertMetricTonne>

export const ConvertMetricTonneResolver =
  (): z.ZodType<ConvertMetricTonne> => {
    if (!ConvertMetricTonneModel) {
      ConvertMetricTonneModel = z.object({
        input: z.object({
          format: z.literal('metric-tonne'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMetricTonneResolver()),
        }),
      })
    }
    return ConvertMetricTonneModel!
  }

let ConvertMicrogramModel: z.ZodType<ConvertMicrogram>

export const ConvertMicrogramResolver =
  (): z.ZodType<ConvertMicrogram> => {
    if (!ConvertMicrogramModel) {
      ConvertMicrogramModel = z.object({
        input: z.object({
          format: z.literal('microgram'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMicrogramResolver()),
        }),
      })
    }
    return ConvertMicrogramModel!
  }

let ConvertMicrosecondModel: z.ZodType<ConvertMicrosecond>

export const ConvertMicrosecondResolver =
  (): z.ZodType<ConvertMicrosecond> => {
    if (!ConvertMicrosecondModel) {
      ConvertMicrosecondModel = z.object({
        input: z.object({
          format: z.literal('microsecond'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMicrosecondResolver()),
        }),
      })
    }
    return ConvertMicrosecondModel!
  }

let ConvertMileModel: z.ZodType<ConvertMile>

export const ConvertMileResolver = (): z.ZodType<ConvertMile> => {
  if (!ConvertMileModel) {
    ConvertMileModel = z.object({
      input: z.object({
        format: z.literal('mile'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMileResolver()),
      }),
    })
  }
  return ConvertMileModel!
}

let ConvertMilePerHourModel: z.ZodType<ConvertMilePerHour>

export const ConvertMilePerHourResolver =
  (): z.ZodType<ConvertMilePerHour> => {
    if (!ConvertMilePerHourModel) {
      ConvertMilePerHourModel = z.object({
        input: z.object({
          format: z.literal('mile-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMilePerHourResolver()),
        }),
      })
    }
    return ConvertMilePerHourModel!
  }

let ConvertMilliampereModel: z.ZodType<ConvertMilliampere>

export const ConvertMilliampereResolver =
  (): z.ZodType<ConvertMilliampere> => {
    if (!ConvertMilliampereModel) {
      ConvertMilliampereModel = z.object({
        input: z.object({
          format: z.literal('milliampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMilliampereResolver()),
        }),
      })
    }
    return ConvertMilliampereModel!
  }

let ConvertMilligramModel: z.ZodType<ConvertMilligram>

export const ConvertMilligramResolver =
  (): z.ZodType<ConvertMilligram> => {
    if (!ConvertMilligramModel) {
      ConvertMilligramModel = z.object({
        input: z.object({
          format: z.literal('milligram'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMilligramResolver()),
        }),
      })
    }
    return ConvertMilligramModel!
  }

let ConvertMillihertzModel: z.ZodType<ConvertMillihertz>

export const ConvertMillihertzResolver =
  (): z.ZodType<ConvertMillihertz> => {
    if (!ConvertMillihertzModel) {
      ConvertMillihertzModel = z.object({
        input: z.object({
          format: z.literal('millihertz'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillihertzResolver()),
        }),
      })
    }
    return ConvertMillihertzModel!
  }

let ConvertMillilitreModel: z.ZodType<ConvertMillilitre>

export const ConvertMillilitreResolver =
  (): z.ZodType<ConvertMillilitre> => {
    if (!ConvertMillilitreModel) {
      ConvertMillilitreModel = z.object({
        input: z.object({
          format: z.literal('millilitre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillilitreResolver()),
        }),
      })
    }
    return ConvertMillilitreModel!
  }

let ConvertMillilitrePerSecondModel: z.ZodType<ConvertMillilitrePerSecond>

export const ConvertMillilitrePerSecondResolver =
  (): z.ZodType<ConvertMillilitrePerSecond> => {
    if (!ConvertMillilitrePerSecondModel) {
      ConvertMillilitrePerSecondModel = z.object({
        input: z.object({
          format: z.literal('millilitre-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMillilitrePerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertMillilitrePerSecondModel!
  }

let ConvertMillimeterModel: z.ZodType<ConvertMillimeter>

export const ConvertMillimeterResolver =
  (): z.ZodType<ConvertMillimeter> => {
    if (!ConvertMillimeterModel) {
      ConvertMillimeterModel = z.object({
        input: z.object({
          format: z.literal('millimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillimeterResolver()),
        }),
      })
    }
    return ConvertMillimeterModel!
  }

let ConvertMillisecondModel: z.ZodType<ConvertMillisecond>

export const ConvertMillisecondResolver =
  (): z.ZodType<ConvertMillisecond> => {
    if (!ConvertMillisecondModel) {
      ConvertMillisecondModel = z.object({
        input: z.object({
          format: z.literal('millisecond'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillisecondResolver()),
        }),
      })
    }
    return ConvertMillisecondModel!
  }

let ConvertMillivoltModel: z.ZodType<ConvertMillivolt>

export const ConvertMillivoltResolver =
  (): z.ZodType<ConvertMillivolt> => {
    if (!ConvertMillivoltModel) {
      ConvertMillivoltModel = z.object({
        input: z.object({
          format: z.literal('millivolt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillivoltResolver()),
        }),
      })
    }
    return ConvertMillivoltModel!
  }

let ConvertMillivoltAmpereModel: z.ZodType<ConvertMillivoltAmpere>

export const ConvertMillivoltAmpereResolver =
  (): z.ZodType<ConvertMillivoltAmpere> => {
    if (!ConvertMillivoltAmpereModel) {
      ConvertMillivoltAmpereModel = z.object({
        input: z.object({
          format: z.literal('millivolt-ampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMillivoltAmpereResolver()),
        }),
      })
    }
    return ConvertMillivoltAmpereModel!
  }

let ConvertMillivoltAmpereReactiveModel: z.ZodType<ConvertMillivoltAmpereReactive>

export const ConvertMillivoltAmpereReactiveResolver =
  (): z.ZodType<ConvertMillivoltAmpereReactive> => {
    if (!ConvertMillivoltAmpereReactiveModel) {
      ConvertMillivoltAmpereReactiveModel = z.object({
        input: z.object({
          format: z.literal('millivolt-ampere-reactive'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMillivoltAmpereReactiveResolver(),
          ),
        }),
      })
    }
    return ConvertMillivoltAmpereReactiveModel!
  }

let ConvertMillivoltAmpereReactiveHourModel: z.ZodType<ConvertMillivoltAmpereReactiveHour>

export const ConvertMillivoltAmpereReactiveHourResolver =
  (): z.ZodType<ConvertMillivoltAmpereReactiveHour> => {
    if (!ConvertMillivoltAmpereReactiveHourModel) {
      ConvertMillivoltAmpereReactiveHourModel = z.object({
        input: z.object({
          format: z.literal('millivolt-ampere-reactive-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMillivoltAmpereReactiveHourResolver(),
          ),
        }),
      })
    }
    return ConvertMillivoltAmpereReactiveHourModel!
  }

let ConvertMilliwattModel: z.ZodType<ConvertMilliwatt>

export const ConvertMilliwattResolver =
  (): z.ZodType<ConvertMilliwatt> => {
    if (!ConvertMilliwattModel) {
      ConvertMilliwattModel = z.object({
        input: z.object({
          format: z.literal('milliwatt'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMilliwattResolver()),
        }),
      })
    }
    return ConvertMilliwattModel!
  }

let ConvertMilliwattHourModel: z.ZodType<ConvertMilliwattHour>

export const ConvertMilliwattHourResolver =
  (): z.ZodType<ConvertMilliwattHour> => {
    if (!ConvertMilliwattHourModel) {
      ConvertMilliwattHourModel = z.object({
        input: z.object({
          format: z.literal('milliwatt-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMilliwattHourResolver()),
        }),
      })
    }
    return ConvertMilliwattHourModel!
  }

let ConvertMinuteModel: z.ZodType<ConvertMinute>

export const ConvertMinuteResolver = (): z.ZodType<ConvertMinute> => {
  if (!ConvertMinuteModel) {
    ConvertMinuteModel = z.object({
      input: z.object({
        format: z.literal('minute'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMinuteResolver()),
      }),
    })
  }
  return ConvertMinuteModel!
}

let ConvertMinutePerKilometreModel: z.ZodType<ConvertMinutePerKilometre>

export const ConvertMinutePerKilometreResolver =
  (): z.ZodType<ConvertMinutePerKilometre> => {
    if (!ConvertMinutePerKilometreModel) {
      ConvertMinutePerKilometreModel = z.object({
        input: z.object({
          format: z.literal('minute-per-kilometre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitMinutePerKilometreResolver(),
          ),
        }),
      })
    }
    return ConvertMinutePerKilometreModel!
  }

let ConvertMinutePerMileModel: z.ZodType<ConvertMinutePerMile>

export const ConvertMinutePerMileResolver =
  (): z.ZodType<ConvertMinutePerMile> => {
    if (!ConvertMinutePerMileModel) {
      ConvertMinutePerMileModel = z.object({
        input: z.object({
          format: z.literal('minute-per-mile'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitMinutePerMileResolver()),
        }),
      })
    }
    return ConvertMinutePerMileModel!
  }

let ConvertMonthModel: z.ZodType<ConvertMonth>

export const ConvertMonthResolver = (): z.ZodType<ConvertMonth> => {
  if (!ConvertMonthModel) {
    ConvertMonthModel = z.object({
      input: z.object({
        format: z.literal('month'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitMonthResolver()),
      }),
    })
  }
  return ConvertMonthModel!
}

let ConvertMp4ToGifWithFfmpegModel: z.ZodType<ConvertMp4ToGifWithFfmpeg>

export const ConvertMp4ToGifWithFfmpegResolver =
  (): z.ZodType<ConvertMp4ToGifWithFfmpeg> => {
    if (!ConvertMp4ToGifWithFfmpegModel) {
      ConvertMp4ToGifWithFfmpegModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        output: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        fps: z.number().int(),
        width: z.number().int(),
        startTime: z.union([
          z
            .number()
            .int()
            .refine(TEST('startTime', code.test_time_integer.test)),
          z
            .string()
            .refine(TEST('startTime', code.test_time_string.test)),
        ]),
        endTime: z.union([
          z
            .number()
            .int()
            .refine(TEST('endTime', code.test_time_integer.test)),
          z
            .string()
            .refine(TEST('endTime', code.test_time_string.test)),
        ]),
        duration: z.union([
          z
            .number()
            .int()
            .refine(TEST('duration', code.test_time_integer.test)),
          z
            .string()
            .refine(TEST('duration', code.test_time_string.test)),
        ]),
      })
    }
    return ConvertMp4ToGifWithFfmpegModel!
  }

let ConvertNanosecondModel: z.ZodType<ConvertNanosecond>

export const ConvertNanosecondResolver =
  (): z.ZodType<ConvertNanosecond> => {
    if (!ConvertNanosecondModel) {
      ConvertNanosecondModel = z.object({
        input: z.object({
          format: z.literal('nanosecond'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitNanosecondResolver()),
        }),
      })
    }
    return ConvertNanosecondModel!
  }

let ConvertOunceModel: z.ZodType<ConvertOunce>

export const ConvertOunceResolver = (): z.ZodType<ConvertOunce> => {
  if (!ConvertOunceModel) {
    ConvertOunceModel = z.object({
      input: z.object({
        format: z.literal('ounce'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitOunceResolver()),
      }),
    })
  }
  return ConvertOunceModel!
}

let ConvertPartPerBillionModel: z.ZodType<ConvertPartPerBillion>

export const ConvertPartPerBillionResolver =
  (): z.ZodType<ConvertPartPerBillion> => {
    if (!ConvertPartPerBillionModel) {
      ConvertPartPerBillionModel = z.object({
        input: z.object({
          format: z.literal('part-per-billion'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPartPerBillionResolver()),
        }),
      })
    }
    return ConvertPartPerBillionModel!
  }

let ConvertPartPerMillionModel: z.ZodType<ConvertPartPerMillion>

export const ConvertPartPerMillionResolver =
  (): z.ZodType<ConvertPartPerMillion> => {
    if (!ConvertPartPerMillionModel) {
      ConvertPartPerMillionModel = z.object({
        input: z.object({
          format: z.literal('part-per-million'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPartPerMillionResolver()),
        }),
      })
    }
    return ConvertPartPerMillionModel!
  }

let ConvertPartPerQuadrillionModel: z.ZodType<ConvertPartPerQuadrillion>

export const ConvertPartPerQuadrillionResolver =
  (): z.ZodType<ConvertPartPerQuadrillion> => {
    if (!ConvertPartPerQuadrillionModel) {
      ConvertPartPerQuadrillionModel = z.object({
        input: z.object({
          format: z.literal('part-per-quadrillion'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitPartPerQuadrillionResolver(),
          ),
        }),
      })
    }
    return ConvertPartPerQuadrillionModel!
  }

let ConvertPartPerTrillionModel: z.ZodType<ConvertPartPerTrillion>

export const ConvertPartPerTrillionResolver =
  (): z.ZodType<ConvertPartPerTrillion> => {
    if (!ConvertPartPerTrillionModel) {
      ConvertPartPerTrillionModel = z.object({
        input: z.object({
          format: z.literal('part-per-trillion'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPartPerTrillionResolver()),
        }),
      })
    }
    return ConvertPartPerTrillionModel!
  }

let ConvertPascalModel: z.ZodType<ConvertPascal>

export const ConvertPascalResolver = (): z.ZodType<ConvertPascal> => {
  if (!ConvertPascalModel) {
    ConvertPascalModel = z.object({
      input: z.object({
        format: z.literal('pascal'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitPascalResolver()),
      }),
    })
  }
  return ConvertPascalModel!
}

let ConvertPintModel: z.ZodType<ConvertPint>

export const ConvertPintResolver = (): z.ZodType<ConvertPint> => {
  if (!ConvertPintModel) {
    ConvertPintModel = z.object({
      input: z.object({
        format: z.literal('pint'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitPintResolver()),
      }),
    })
  }
  return ConvertPintModel!
}

let ConvertPintPerHourModel: z.ZodType<ConvertPintPerHour>

export const ConvertPintPerHourResolver =
  (): z.ZodType<ConvertPintPerHour> => {
    if (!ConvertPintPerHourModel) {
      ConvertPintPerHourModel = z.object({
        input: z.object({
          format: z.literal('pint-per-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPintPerHourResolver()),
        }),
      })
    }
    return ConvertPintPerHourModel!
  }

let ConvertPintPerMinuteModel: z.ZodType<ConvertPintPerMinute>

export const ConvertPintPerMinuteResolver =
  (): z.ZodType<ConvertPintPerMinute> => {
    if (!ConvertPintPerMinuteModel) {
      ConvertPintPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('pint-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPintPerMinuteResolver()),
        }),
      })
    }
    return ConvertPintPerMinuteModel!
  }

let ConvertPintPerSecondModel: z.ZodType<ConvertPintPerSecond>

export const ConvertPintPerSecondResolver =
  (): z.ZodType<ConvertPintPerSecond> => {
    if (!ConvertPintPerSecondModel) {
      ConvertPintPerSecondModel = z.object({
        input: z.object({
          format: z.literal('pint-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitPintPerSecondResolver()),
        }),
      })
    }
    return ConvertPintPerSecondModel!
  }

let ConvertPoundModel: z.ZodType<ConvertPound>

export const ConvertPoundResolver = (): z.ZodType<ConvertPound> => {
  if (!ConvertPoundModel) {
    ConvertPoundModel = z.object({
      input: z.object({
        format: z.literal('pound'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitPoundResolver()),
      }),
    })
  }
  return ConvertPoundModel!
}

let ConvertPoundPerSquareInchModel: z.ZodType<ConvertPoundPerSquareInch>

export const ConvertPoundPerSquareInchResolver =
  (): z.ZodType<ConvertPoundPerSquareInch> => {
    if (!ConvertPoundPerSquareInchModel) {
      ConvertPoundPerSquareInchModel = z.object({
        input: z.object({
          format: z.literal('pound-per-square-inch'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitPoundPerSquareInchResolver(),
          ),
        }),
      })
    }
    return ConvertPoundPerSquareInchModel!
  }

let ConvertQuartModel: z.ZodType<ConvertQuart>

export const ConvertQuartResolver = (): z.ZodType<ConvertQuart> => {
  if (!ConvertQuartModel) {
    ConvertQuartModel = z.object({
      input: z.object({
        format: z.literal('quart'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitQuartResolver()),
      }),
    })
  }
  return ConvertQuartModel!
}

let ConvertQuartPerSecondModel: z.ZodType<ConvertQuartPerSecond>

export const ConvertQuartPerSecondResolver =
  (): z.ZodType<ConvertQuartPerSecond> => {
    if (!ConvertQuartPerSecondModel) {
      ConvertQuartPerSecondModel = z.object({
        input: z.object({
          format: z.literal('quart-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitQuartPerSecondResolver()),
        }),
      })
    }
    return ConvertQuartPerSecondModel!
  }

let ConvertRadianModel: z.ZodType<ConvertRadian>

export const ConvertRadianResolver = (): z.ZodType<ConvertRadian> => {
  if (!ConvertRadianModel) {
    ConvertRadianModel = z.object({
      input: z.object({
        format: z.literal('radian'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitRadianResolver()),
      }),
    })
  }
  return ConvertRadianModel!
}

let ConvertRadianPerSecondModel: z.ZodType<ConvertRadianPerSecond>

export const ConvertRadianPerSecondResolver =
  (): z.ZodType<ConvertRadianPerSecond> => {
    if (!ConvertRadianPerSecondModel) {
      ConvertRadianPerSecondModel = z.object({
        input: z.object({
          format: z.literal('radian-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitRadianPerSecondResolver()),
        }),
      })
    }
    return ConvertRadianPerSecondModel!
  }

let ConvertRankineModel: z.ZodType<ConvertRankine>

export const ConvertRankineResolver = (): z.ZodType<ConvertRankine> => {
  if (!ConvertRankineModel) {
    ConvertRankineModel = z.object({
      input: z.object({
        format: z.literal('rankine'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitRankineResolver()),
      }),
    })
  }
  return ConvertRankineModel!
}

let ConvertRotationPerMinuteModel: z.ZodType<ConvertRotationPerMinute>

export const ConvertRotationPerMinuteResolver =
  (): z.ZodType<ConvertRotationPerMinute> => {
    if (!ConvertRotationPerMinuteModel) {
      ConvertRotationPerMinuteModel = z.object({
        input: z.object({
          format: z.literal('rotation-per-minute'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitRotationPerMinuteResolver(),
          ),
        }),
      })
    }
    return ConvertRotationPerMinuteModel!
  }

let ConvertSecondModel: z.ZodType<ConvertSecond>

export const ConvertSecondResolver = (): z.ZodType<ConvertSecond> => {
  if (!ConvertSecondModel) {
    ConvertSecondModel = z.object({
      input: z.object({
        format: z.literal('second'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitSecondResolver()),
      }),
    })
  }
  return ConvertSecondModel!
}

let ConvertSecondPerFootModel: z.ZodType<ConvertSecondPerFoot>

export const ConvertSecondPerFootResolver =
  (): z.ZodType<ConvertSecondPerFoot> => {
    if (!ConvertSecondPerFootModel) {
      ConvertSecondPerFootModel = z.object({
        input: z.object({
          format: z.literal('second-per-foot'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSecondPerFootResolver()),
        }),
      })
    }
    return ConvertSecondPerFootModel!
  }

let ConvertSecondPerMetreModel: z.ZodType<ConvertSecondPerMetre>

export const ConvertSecondPerMetreResolver =
  (): z.ZodType<ConvertSecondPerMetre> => {
    if (!ConvertSecondPerMetreModel) {
      ConvertSecondPerMetreModel = z.object({
        input: z.object({
          format: z.literal('second-per-metre'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSecondPerMetreResolver()),
        }),
      })
    }
    return ConvertSecondPerMetreModel!
  }

let ConvertSquareCentimeterModel: z.ZodType<ConvertSquareCentimeter>

export const ConvertSquareCentimeterResolver =
  (): z.ZodType<ConvertSquareCentimeter> => {
    if (!ConvertSquareCentimeterModel) {
      ConvertSquareCentimeterModel = z.object({
        input: z.object({
          format: z.literal('square-centimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitSquareCentimeterResolver(),
          ),
        }),
      })
    }
    return ConvertSquareCentimeterModel!
  }

let ConvertSquareFootModel: z.ZodType<ConvertSquareFoot>

export const ConvertSquareFootResolver =
  (): z.ZodType<ConvertSquareFoot> => {
    if (!ConvertSquareFootModel) {
      ConvertSquareFootModel = z.object({
        input: z.object({
          format: z.literal('square-foot'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareFootResolver()),
        }),
      })
    }
    return ConvertSquareFootModel!
  }

let ConvertSquareInchModel: z.ZodType<ConvertSquareInch>

export const ConvertSquareInchResolver =
  (): z.ZodType<ConvertSquareInch> => {
    if (!ConvertSquareInchModel) {
      ConvertSquareInchModel = z.object({
        input: z.object({
          format: z.literal('square-inch'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareInchResolver()),
        }),
      })
    }
    return ConvertSquareInchModel!
  }

let ConvertSquareKilometerModel: z.ZodType<ConvertSquareKilometer>

export const ConvertSquareKilometerResolver =
  (): z.ZodType<ConvertSquareKilometer> => {
    if (!ConvertSquareKilometerModel) {
      ConvertSquareKilometerModel = z.object({
        input: z.object({
          format: z.literal('square-kilometer'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareKilometerResolver()),
        }),
      })
    }
    return ConvertSquareKilometerModel!
  }

let ConvertSquareMeterModel: z.ZodType<ConvertSquareMeter>

export const ConvertSquareMeterResolver =
  (): z.ZodType<ConvertSquareMeter> => {
    if (!ConvertSquareMeterModel) {
      ConvertSquareMeterModel = z.object({
        input: z.object({
          format: z.literal('square-meter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareMeterResolver()),
        }),
      })
    }
    return ConvertSquareMeterModel!
  }

let ConvertSquareMileModel: z.ZodType<ConvertSquareMile>

export const ConvertSquareMileResolver =
  (): z.ZodType<ConvertSquareMile> => {
    if (!ConvertSquareMileModel) {
      ConvertSquareMileModel = z.object({
        input: z.object({
          format: z.literal('square-mile'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareMileResolver()),
        }),
      })
    }
    return ConvertSquareMileModel!
  }

let ConvertSquareMillimeterModel: z.ZodType<ConvertSquareMillimeter>

export const ConvertSquareMillimeterResolver =
  (): z.ZodType<ConvertSquareMillimeter> => {
    if (!ConvertSquareMillimeterModel) {
      ConvertSquareMillimeterModel = z.object({
        input: z.object({
          format: z.literal('square-millimeter'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitSquareMillimeterResolver(),
          ),
        }),
      })
    }
    return ConvertSquareMillimeterModel!
  }

let ConvertSquareYardModel: z.ZodType<ConvertSquareYard>

export const ConvertSquareYardResolver =
  (): z.ZodType<ConvertSquareYard> => {
    if (!ConvertSquareYardModel) {
      ConvertSquareYardModel = z.object({
        input: z.object({
          format: z.literal('square-yard'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitSquareYardResolver()),
        }),
      })
    }
    return ConvertSquareYardModel!
  }

let ConvertTablespoonModel: z.ZodType<ConvertTablespoon>

export const ConvertTablespoonResolver =
  (): z.ZodType<ConvertTablespoon> => {
    if (!ConvertTablespoonModel) {
      ConvertTablespoonModel = z.object({
        input: z.object({
          format: z.literal('tablespoon'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitTablespoonResolver()),
        }),
      })
    }
    return ConvertTablespoonModel!
  }

let ConvertTablespoonPerSecondModel: z.ZodType<ConvertTablespoonPerSecond>

export const ConvertTablespoonPerSecondResolver =
  (): z.ZodType<ConvertTablespoonPerSecond> => {
    if (!ConvertTablespoonPerSecondModel) {
      ConvertTablespoonPerSecondModel = z.object({
        input: z.object({
          format: z.literal('tablespoon-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitTablespoonPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertTablespoonPerSecondModel!
  }

let ConvertTeaspoonModel: z.ZodType<ConvertTeaspoon>

export const ConvertTeaspoonResolver =
  (): z.ZodType<ConvertTeaspoon> => {
    if (!ConvertTeaspoonModel) {
      ConvertTeaspoonModel = z.object({
        input: z.object({
          format: z.literal('teaspoon'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitTeaspoonResolver()),
        }),
      })
    }
    return ConvertTeaspoonModel!
  }

let ConvertTeaspoonPerSecondModel: z.ZodType<ConvertTeaspoonPerSecond>

export const ConvertTeaspoonPerSecondResolver =
  (): z.ZodType<ConvertTeaspoonPerSecond> => {
    if (!ConvertTeaspoonPerSecondModel) {
      ConvertTeaspoonPerSecondModel = z.object({
        input: z.object({
          format: z.literal('teaspoon-per-second'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitTeaspoonPerSecondResolver(),
          ),
        }),
      })
    }
    return ConvertTeaspoonPerSecondModel!
  }

let ConvertTerabitModel: z.ZodType<ConvertTerabit>

export const ConvertTerabitResolver = (): z.ZodType<ConvertTerabit> => {
  if (!ConvertTerabitModel) {
    ConvertTerabitModel = z.object({
      input: z.object({
        format: z.literal('terabit'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitTerabitResolver()),
      }),
    })
  }
  return ConvertTerabitModel!
}

let ConvertTerabyteModel: z.ZodType<ConvertTerabyte>

export const ConvertTerabyteResolver =
  (): z.ZodType<ConvertTerabyte> => {
    if (!ConvertTerabyteModel) {
      ConvertTerabyteModel = z.object({
        input: z.object({
          format: z.literal('terabyte'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitTerabyteResolver()),
        }),
      })
    }
    return ConvertTerabyteModel!
  }

let ConvertTerahertzModel: z.ZodType<ConvertTerahertz>

export const ConvertTerahertzResolver =
  (): z.ZodType<ConvertTerahertz> => {
    if (!ConvertTerahertzModel) {
      ConvertTerahertzModel = z.object({
        input: z.object({
          format: z.literal('terahertz'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitTerahertzResolver()),
        }),
      })
    }
    return ConvertTerahertzModel!
  }

let ConvertTeskedModel: z.ZodType<ConvertTesked>

export const ConvertTeskedResolver = (): z.ZodType<ConvertTesked> => {
  if (!ConvertTeskedModel) {
    ConvertTeskedModel = z.object({
      input: z.object({
        format: z.literal('tesked'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitTeskedResolver()),
      }),
    })
  }
  return ConvertTeskedModel!
}

let ConvertTimeZoneModel: z.ZodType<ConvertTimeZone>

export const ConvertTimeZoneResolver =
  (): z.ZodType<ConvertTimeZone> => {
    if (!ConvertTimeZoneModel) {
      ConvertTimeZoneModel = z.object({
        input: z.object({
          date: z.string(),
        }),
        output: z.object({
          timezone: z.lazy(() => TimeZoneResolver()),
          format: z.string(),
        }),
      })
    }
    return ConvertTimeZoneModel!
  }

let ConvertTonModel: z.ZodType<ConvertTon>

export const ConvertTonResolver = (): z.ZodType<ConvertTon> => {
  if (!ConvertTonModel) {
    ConvertTonModel = z.object({
      input: z.object({
        format: z.literal('ton'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitTonResolver()),
      }),
    })
  }
  return ConvertTonModel!
}

let ConvertTorrModel: z.ZodType<ConvertTorr>

export const ConvertTorrResolver = (): z.ZodType<ConvertTorr> => {
  if (!ConvertTorrModel) {
    ConvertTorrModel = z.object({
      input: z.object({
        format: z.literal('torr'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitTorrResolver()),
      }),
    })
  }
  return ConvertTorrModel!
}

let ConvertUnitModel: z.ZodType<ConvertUnit>

export const ConvertUnitResolver = (): z.ZodType<ConvertUnit> => {
  if (!ConvertUnitModel) {
    ConvertUnitModel = z.object({
      input: z.object({
        format: z.lazy(() => UnitResolver()),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => UnitResolver()),
      }),
    })
  }
  return ConvertUnitModel!
}

let ConvertUsSurveyFootModel: z.ZodType<ConvertUsSurveyFoot>

export const ConvertUsSurveyFootResolver =
  (): z.ZodType<ConvertUsSurveyFoot> => {
    if (!ConvertUsSurveyFootModel) {
      ConvertUsSurveyFootModel = z.object({
        input: z.object({
          format: z.literal('us-survey-foot'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitUsSurveyFootResolver()),
        }),
      })
    }
    return ConvertUsSurveyFootModel!
  }

let ConvertVideoToAudioWithFfmpegModel: z.ZodType<ConvertVideoToAudioWithFfmpeg>

export const ConvertVideoToAudioWithFfmpegResolver =
  (): z.ZodType<ConvertVideoToAudioWithFfmpeg> => {
    if (!ConvertVideoToAudioWithFfmpegModel) {
      ConvertVideoToAudioWithFfmpegModel = z.object({
        inputPath: z.string(),
        outputPath: z.string(),
      })
    }
    return ConvertVideoToAudioWithFfmpegModel!
  }

let ConvertVideoWithFfmpegBaseModel: z.ZodType<ConvertVideoWithFfmpegBase>

export const ConvertVideoWithFfmpegBaseResolver =
  (): z.ZodType<ConvertVideoWithFfmpegBase> => {
    if (!ConvertVideoWithFfmpegBaseModel) {
      ConvertVideoWithFfmpegBaseModel = z.object({
        audioCodec: z.optional(
          z.lazy(() => FfmpegCodecAudioResolver()),
        ),
        videoCodec: z.optional(
          z.lazy(() => FfmpegCodecVideoResolver()),
        ),
        audioBitRate: z.optional(z.number().int()),
        videoBitRate: z.optional(z.number().int()),
        frameRate: z.optional(z.number().int()),
        startTime: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('startTime', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('startTime', code.test_time_string.test)),
          ]),
        ),
        endTime: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('endTime', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('endTime', code.test_time_string.test)),
          ]),
        ),
        strict: z
          .optional(z.lazy(() => FfmpegStrictOptionResolver()))
          .default('strict'),
        overwrite: z.optional(z.boolean()).default(false),
        progress: z.optional(z.boolean()).default(false),
        scaleWidth: z.optional(z.number().int()),
        scaleHeight: z.optional(z.number().int()),
        audioChannels: z.optional(z.number().int()),
        audioSamplingFrequency: z.optional(z.number().int()),
        subtitleCodec: z.optional(
          z.lazy(() => FfmpegCodecSubtitleResolver()),
        ),
        duration: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('duration', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('duration', code.test_time_string.test)),
          ]),
        ),
        rotation: z.optional(z.number()),
      })
    }
    return ConvertVideoWithFfmpegBaseModel!
  }

let ConvertVideoWithFfmpegCommandInputModel: z.ZodType<ConvertVideoWithFfmpegCommandInput>

export const ConvertVideoWithFfmpegCommandInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegCommandInput> => {
    if (!ConvertVideoWithFfmpegCommandInputModel) {
      ConvertVideoWithFfmpegCommandInputModel = z.object({
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        audioCodec: z.optional(
          z.lazy(() => FfmpegCodecAudioResolver()),
        ),
        videoCodec: z.optional(
          z.lazy(() => FfmpegCodecVideoResolver()),
        ),
        audioBitRate: z.optional(z.number().int()),
        videoBitRate: z.optional(z.number().int()),
        frameRate: z.optional(z.number().int()),
        startTime: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('startTime', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('startTime', code.test_time_string.test)),
          ]),
        ),
        endTime: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('endTime', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('endTime', code.test_time_string.test)),
          ]),
        ),
        strict: z
          .optional(z.lazy(() => FfmpegStrictOptionResolver()))
          .default('strict'),
        overwrite: z.optional(z.boolean()).default(false),
        progress: z.optional(z.boolean()).default(false),
        scaleWidth: z.optional(z.number().int()),
        scaleHeight: z.optional(z.number().int()),
        audioChannels: z.optional(z.number().int()),
        audioSamplingFrequency: z.optional(z.number().int()),
        subtitleCodec: z.optional(
          z.lazy(() => FfmpegCodecSubtitleResolver()),
        ),
        duration: z.optional(
          z.union([
            z
              .number()
              .int()
              .refine(TEST('duration', code.test_time_integer.test)),
            z
              .string()
              .refine(TEST('duration', code.test_time_string.test)),
          ]),
        ),
        rotation: z.optional(z.number()),
      })
    }
    return ConvertVideoWithFfmpegCommandInputModel!
  }

let ConvertVoltModel: z.ZodType<ConvertVolt>

export const ConvertVoltResolver = (): z.ZodType<ConvertVolt> => {
  if (!ConvertVoltModel) {
    ConvertVoltModel = z.object({
      input: z.object({
        format: z.literal('volt'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitVoltResolver()),
      }),
    })
  }
  return ConvertVoltModel!
}

let ConvertVoltAmpereModel: z.ZodType<ConvertVoltAmpere>

export const ConvertVoltAmpereResolver =
  (): z.ZodType<ConvertVoltAmpere> => {
    if (!ConvertVoltAmpereModel) {
      ConvertVoltAmpereModel = z.object({
        input: z.object({
          format: z.literal('volt-ampere'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitVoltAmpereResolver()),
        }),
      })
    }
    return ConvertVoltAmpereModel!
  }

let ConvertVoltAmpereReactiveModel: z.ZodType<ConvertVoltAmpereReactive>

export const ConvertVoltAmpereReactiveResolver =
  (): z.ZodType<ConvertVoltAmpereReactive> => {
    if (!ConvertVoltAmpereReactiveModel) {
      ConvertVoltAmpereReactiveModel = z.object({
        input: z.object({
          format: z.literal('volt-ampere-reactive'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitVoltAmpereReactiveResolver(),
          ),
        }),
      })
    }
    return ConvertVoltAmpereReactiveModel!
  }

let ConvertVoltAmpereReactiveHourModel: z.ZodType<ConvertVoltAmpereReactiveHour>

export const ConvertVoltAmpereReactiveHourResolver =
  (): z.ZodType<ConvertVoltAmpereReactiveHour> => {
    if (!ConvertVoltAmpereReactiveHourModel) {
      ConvertVoltAmpereReactiveHourModel = z.object({
        input: z.object({
          format: z.literal('volt-ampere-reactive-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() =>
            ConversionUnitVoltAmpereReactiveHourResolver(),
          ),
        }),
      })
    }
    return ConvertVoltAmpereReactiveHourModel!
  }

let ConvertWattModel: z.ZodType<ConvertWatt>

export const ConvertWattResolver = (): z.ZodType<ConvertWatt> => {
  if (!ConvertWattModel) {
    ConvertWattModel = z.object({
      input: z.object({
        format: z.literal('watt'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitWattResolver()),
      }),
    })
  }
  return ConvertWattModel!
}

let ConvertWattHourModel: z.ZodType<ConvertWattHour>

export const ConvertWattHourResolver =
  (): z.ZodType<ConvertWattHour> => {
    if (!ConvertWattHourModel) {
      ConvertWattHourModel = z.object({
        input: z.object({
          format: z.literal('watt-hour'),
          value: z.number(),
        }),
        output: z.object({
          format: z.lazy(() => ConversionUnitWattHourResolver()),
        }),
      })
    }
    return ConvertWattHourModel!
  }

let ConvertWeekModel: z.ZodType<ConvertWeek>

export const ConvertWeekResolver = (): z.ZodType<ConvertWeek> => {
  if (!ConvertWeekModel) {
    ConvertWeekModel = z.object({
      input: z.object({
        format: z.literal('week'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitWeekResolver()),
      }),
    })
  }
  return ConvertWeekModel!
}

let ConvertYardModel: z.ZodType<ConvertYard>

export const ConvertYardResolver = (): z.ZodType<ConvertYard> => {
  if (!ConvertYardModel) {
    ConvertYardModel = z.object({
      input: z.object({
        format: z.literal('yard'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitYardResolver()),
      }),
    })
  }
  return ConvertYardModel!
}

let ConvertYearModel: z.ZodType<ConvertYear>

export const ConvertYearResolver = (): z.ZodType<ConvertYear> => {
  if (!ConvertYearModel) {
    ConvertYearModel = z.object({
      input: z.object({
        format: z.literal('year'),
        value: z.number(),
      }),
      output: z.object({
        format: z.lazy(() => ConversionUnitYearResolver()),
      }),
    })
  }
  return ConvertYearModel!
}

let CppInputFormatModel: z.ZodType<CppInputFormat>

export const CppInputFormatResolver = () => {
  if (!CppInputFormatModel) {
    CppInputFormatModel = z.enum(
      LOAD('cpp-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<CppInputFormat>
  }
  return CppInputFormatModel!
}

let CropPdfWithPdfCropModel: z.ZodType<CropPdfWithPdfCrop>

export const CropPdfWithPdfCropResolver =
  (): z.ZodType<CropPdfWithPdfCrop> => {
    if (!CropPdfWithPdfCropModel) {
      CropPdfWithPdfCropModel = z.object({
        margin: z.optional(z.number().int().gte(0)),
        input: z.object({
          file: z.object({
            path: z.string(),
          }),
        }),
        output: z.object({
          file: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return CropPdfWithPdfCropModel!
  }

let DisassembleBinaryWithObjdumpModel: z.ZodType<DisassembleBinaryWithObjdump>

export const DisassembleBinaryWithObjdumpResolver =
  (): z.ZodType<DisassembleBinaryWithObjdump> => {
    if (!DisassembleBinaryWithObjdumpModel) {
      DisassembleBinaryWithObjdumpModel = z.object({
        show: z.array(z.lazy(() => ObjdumpShowOptionResolver())),
        demangleStyle: z.lazy(() => ObjdumpDemangleStyleResolver()),
        disassembleAll: z.boolean(),
        hide: z.lazy(() => ObjdumpHideOptionResolver()),
        color: z.boolean(),
      })
    }
    return DisassembleBinaryWithObjdumpModel!
  }

let EnscriptInputFormatModel: z.ZodType<EnscriptInputFormat>

export const EnscriptInputFormatResolver = () => {
  if (!EnscriptInputFormatModel) {
    EnscriptInputFormatModel = z.enum(
      LOAD('enscript-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<EnscriptInputFormat>
  }
  return EnscriptInputFormatModel!
}

let EnscriptOutputFormatModel: z.ZodType<EnscriptOutputFormat>

export const EnscriptOutputFormatResolver = () => {
  if (!EnscriptOutputFormatModel) {
    EnscriptOutputFormatModel = z.enum(
      LOAD('enscript-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<EnscriptOutputFormat>
  }
  return EnscriptOutputFormatModel!
}

let ExtractWith7ZModel: z.ZodType<ExtractWith7Z>

export const ExtractWith7ZResolver = (): z.ZodType<ExtractWith7Z> => {
  if (!ExtractWith7ZModel) {
    ExtractWith7ZModel = z.object({
      input: z.object({
        format: z.string(),
        path: z.string(),
      }),
      output: z.object({
        format: z.string(),
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return ExtractWith7ZModel!
}

let ExtractWithUnarchiverModel: z.ZodType<ExtractWithUnarchiver>

export const ExtractWithUnarchiverResolver =
  (): z.ZodType<ExtractWithUnarchiver> => {
    if (!ExtractWithUnarchiverModel) {
      ExtractWithUnarchiverModel = z.object({
        input: z.object({
          password: z.optional(z.string()),
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.object({
            path: z.string(),
          }),
        }),
        output: z.object({
          overwrite: z.optional(z.boolean()).default(false),
          directory: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return ExtractWithUnarchiverModel!
  }

let FfmpegCodecAudioModel: z.ZodType<FfmpegCodecAudio>

export const FfmpegCodecAudioResolver = () => {
  if (!FfmpegCodecAudioModel) {
    FfmpegCodecAudioModel = z.enum(
      LOAD('ffmpeg-codec-audio') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegCodecAudio>
  }
  return FfmpegCodecAudioModel!
}

let FfmpegCodecSubtitleModel: z.ZodType<FfmpegCodecSubtitle>

export const FfmpegCodecSubtitleResolver = () => {
  if (!FfmpegCodecSubtitleModel) {
    FfmpegCodecSubtitleModel = z.enum(
      LOAD('ffmpeg-codec-subtitle') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegCodecSubtitle>
  }
  return FfmpegCodecSubtitleModel!
}

let FfmpegCodecVideoModel: z.ZodType<FfmpegCodecVideo>

export const FfmpegCodecVideoResolver = () => {
  if (!FfmpegCodecVideoModel) {
    FfmpegCodecVideoModel = z.enum(
      LOAD('ffmpeg-codec-video') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegCodecVideo>
  }
  return FfmpegCodecVideoModel!
}

let FfmpegDecoderAudioModel: z.ZodType<FfmpegDecoderAudio>

export const FfmpegDecoderAudioResolver = () => {
  if (!FfmpegDecoderAudioModel) {
    FfmpegDecoderAudioModel = z.enum(
      LOAD('ffmpeg-decoder-audio') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegDecoderAudio>
  }
  return FfmpegDecoderAudioModel!
}

let FfmpegDecoderSubtitleModel: z.ZodType<FfmpegDecoderSubtitle>

export const FfmpegDecoderSubtitleResolver = () => {
  if (!FfmpegDecoderSubtitleModel) {
    FfmpegDecoderSubtitleModel = z.enum(
      LOAD('ffmpeg-decoder-subtitle') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegDecoderSubtitle>
  }
  return FfmpegDecoderSubtitleModel!
}

let FfmpegDecoderVideoModel: z.ZodType<FfmpegDecoderVideo>

export const FfmpegDecoderVideoResolver = () => {
  if (!FfmpegDecoderVideoModel) {
    FfmpegDecoderVideoModel = z.enum(
      LOAD('ffmpeg-decoder-video') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegDecoderVideo>
  }
  return FfmpegDecoderVideoModel!
}

let FfmpegEncoderAudioModel: z.ZodType<FfmpegEncoderAudio>

export const FfmpegEncoderAudioResolver = () => {
  if (!FfmpegEncoderAudioModel) {
    FfmpegEncoderAudioModel = z.enum(
      LOAD('ffmpeg-encoder-audio') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegEncoderAudio>
  }
  return FfmpegEncoderAudioModel!
}

let FfmpegEncoderSubtitleModel: z.ZodType<FfmpegEncoderSubtitle>

export const FfmpegEncoderSubtitleResolver = () => {
  if (!FfmpegEncoderSubtitleModel) {
    FfmpegEncoderSubtitleModel = z.enum(
      LOAD('ffmpeg-encoder-subtitle') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegEncoderSubtitle>
  }
  return FfmpegEncoderSubtitleModel!
}

let FfmpegEncoderVideoModel: z.ZodType<FfmpegEncoderVideo>

export const FfmpegEncoderVideoResolver = () => {
  if (!FfmpegEncoderVideoModel) {
    FfmpegEncoderVideoModel = z.enum(
      LOAD('ffmpeg-encoder-video') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegEncoderVideo>
  }
  return FfmpegEncoderVideoModel!
}

let FfmpegFormatModel: z.ZodType<FfmpegFormat>

export const FfmpegFormatResolver = () => {
  if (!FfmpegFormatModel) {
    FfmpegFormatModel = z.enum(
      LOAD('ffmpeg-format') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegFormat>
  }
  return FfmpegFormatModel!
}

let FfmpegStrictOptionModel: z.ZodType<FfmpegStrictOption>

export const FfmpegStrictOptionResolver = () => {
  if (!FfmpegStrictOptionModel) {
    FfmpegStrictOptionModel = z.enum(
      LOAD('ffmpeg-strict-option') as readonly [string, ...string[]],
    ) as z.ZodType<FfmpegStrictOption>
  }
  return FfmpegStrictOptionModel!
}

let FileContentModel: z.ZodType<FileContent>

export const FileContentResolver = (): z.ZodType<FileContent> => {
  if (!FileContentModel) {
    FileContentModel = z.object({
      content: z.union([
        z.instanceof(ArrayBuffer),
        z.instanceof(Blob),
        z.string(),
      ]),
    })
  }
  return FileContentModel!
}

let FileContentWithSha256Model: z.ZodType<FileContentWithSha256>

export const FileContentWithSha256Resolver =
  (): z.ZodType<FileContentWithSha256> => {
    if (!FileContentWithSha256Model) {
      FileContentWithSha256Model = z.object({
        sha256: z.string().refine(TEST('sha256', code.is_sha256.test)),
        content: z.union([
          z.instanceof(ArrayBuffer),
          z.instanceof(Blob),
          z.string(),
        ]),
      })
    }
    return FileContentWithSha256Model!
  }

let FileHasOutputContentModel: z.ZodType<FileHasOutputContent>

export const FileHasOutputContentResolver =
  (): z.ZodType<FileHasOutputContent> => {
    if (!FileHasOutputContentModel) {
      FileHasOutputContentModel = z.object({
        content: z.boolean(),
      })
    }
    return FileHasOutputContentModel!
  }

let FileInputPathModel: z.ZodType<FileInputPath>

export const FileInputPathResolver = (): z.ZodType<FileInputPath> => {
  if (!FileInputPathModel) {
    FileInputPathModel = z.object({
      path: z.string(),
    })
  }
  return FileInputPathModel!
}

let FileOutputPathModel: z.ZodType<FileOutputPath>

export const FileOutputPathResolver = (): z.ZodType<FileOutputPath> => {
  if (!FileOutputPathModel) {
    FileOutputPathModel = z.object({
      path: z.string(),
    })
  }
  return FileOutputPathModel!
}

let FilePathModel: z.ZodType<FilePath>

export const FilePathResolver = (): z.ZodType<FilePath> => {
  if (!FilePathModel) {
    FilePathModel = z.object({
      path: z.string(),
    })
  }
  return FilePathModel!
}

let FileReaderEncodingModel: z.ZodType<FileReaderEncoding>

export const FileReaderEncodingResolver = () => {
  if (!FileReaderEncodingModel) {
    FileReaderEncodingModel = z.enum(
      LOAD('file-reader-encoding') as readonly [string, ...string[]],
    ) as z.ZodType<FileReaderEncoding>
  }
  return FileReaderEncodingModel!
}

let FlipModel: z.ZodType<Flip>

export const FlipResolver = () => {
  if (!FlipModel) {
    FlipModel = z.enum(
      LOAD('flip') as readonly [string, ...string[]],
    ) as z.ZodType<Flip>
  }
  return FlipModel!
}

let FontFormatModel: z.ZodType<FontFormat>

export const FontFormatResolver = () => {
  if (!FontFormatModel) {
    FontFormatModel = z.enum(
      LOAD('font-format') as readonly [string, ...string[]],
    ) as z.ZodType<FontFormat>
  }
  return FontFormatModel!
}

let ForgeMessageDigestModel: z.ZodType<ForgeMessageDigest>

export const ForgeMessageDigestResolver = () => {
  if (!ForgeMessageDigestModel) {
    ForgeMessageDigestModel = z.enum(
      LOAD('forge-message-digest') as readonly [string, ...string[]],
    ) as z.ZodType<ForgeMessageDigest>
  }
  return ForgeMessageDigestModel!
}

let FormatApiModel: z.ZodType<FormatApi>

export const FormatApiResolver = (): z.ZodType<FormatApi> => {
  if (!FormatApiModel) {
    FormatApiModel = z.object({
      format: z.string(),
    })
  }
  return FormatApiModel!
}

let FormatAssemblyCommandInputModel: z.ZodType<FormatAssemblyCommandInput>

export const FormatAssemblyCommandInputResolver =
  (): z.ZodType<FormatAssemblyCommandInput> => {
    if (!FormatAssemblyCommandInputModel) {
      FormatAssemblyCommandInputModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatAssemblyCommandInputModel!
  }

let FormatCModel: z.ZodType<FormatC>

export const FormatCResolver = (): z.ZodType<FormatC> => {
  if (!FormatCModel) {
    FormatCModel = z.object({
      format: z.string(),
      input: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
      output: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return FormatCModel!
}

let FormatCliBaseModel: z.ZodType<FormatCliBase>

export const FormatCliBaseResolver = (): z.ZodType<FormatCliBase> => {
  if (!FormatCliBaseModel) {
    FormatCliBaseModel = z
      .object({
        format: z.string(),
        input: z
          .object({
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        output: z
          .object({
            file: z
              .object({
                path: z.string(),
              })
              .passthrough(),
          })
          .passthrough(),
        help: z.optional(z.boolean()),
        log: z
          .optional(z.lazy(() => CliLogFormatResolver()))
          .default('pretty'),
      })
      .passthrough()
  }
  return FormatCliBaseModel!
}

let FormatCodeFormatModel: z.ZodType<FormatCodeFormat>

export const FormatCodeFormatResolver = () => {
  if (!FormatCodeFormatModel) {
    FormatCodeFormatModel = z.enum(
      LOAD('format-code-format') as readonly [string, ...string[]],
    ) as z.ZodType<FormatCodeFormat>
  }
  return FormatCodeFormatModel!
}

let FormatCodeWithClangFormatCommandInputModel: z.ZodType<FormatCodeWithClangFormatCommandInput>

export const FormatCodeWithClangFormatCommandInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatCommandInput> => {
    if (!FormatCodeWithClangFormatCommandInputModel) {
      FormatCodeWithClangFormatCommandInputModel = z.object({
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        style: z.object({
          path: z.string(),
        }),
      })
    }
    return FormatCodeWithClangFormatCommandInputModel!
  }

let FormatCodeWithPrettierModel: z.ZodType<FormatCodeWithPrettier>

export const FormatCodeWithPrettierResolver =
  (): z.ZodType<FormatCodeWithPrettier> => {
    if (!FormatCodeWithPrettierModel) {
      FormatCodeWithPrettierModel = z.object({
        code: z.string(),
        format: z.lazy(() => PrettierPluginResolver()),
      })
    }
    return FormatCodeWithPrettierModel!
  }

let FormatCppModel: z.ZodType<FormatCpp>

export const FormatCppResolver = (): z.ZodType<FormatCpp> => {
  if (!FormatCppModel) {
    FormatCppModel = z.object({
      format: z.string(),
      input: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
      output: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return FormatCppModel!
}

let FormatCssWithPrettierModel: z.ZodType<FormatCssWithPrettier>

export const FormatCssWithPrettierResolver =
  (): z.ZodType<FormatCssWithPrettier> => {
    if (!FormatCssWithPrettierModel) {
      FormatCssWithPrettierModel = z.object({
        code: z.string(),
        singleQuote: z.optional(z.boolean()).default(false),
      })
    }
    return FormatCssWithPrettierModel!
  }

let FormatGraphqlWithPrettierModel: z.ZodType<FormatGraphqlWithPrettier>

export const FormatGraphqlWithPrettierResolver =
  (): z.ZodType<FormatGraphqlWithPrettier> => {
    if (!FormatGraphqlWithPrettierModel) {
      FormatGraphqlWithPrettierModel = z.object({
        code: z.string(),
        bracketSpacing: z.optional(z.boolean()).default(true),
      })
    }
    return FormatGraphqlWithPrettierModel!
  }

let FormatHtmlWithPrettierModel: z.ZodType<FormatHtmlWithPrettier>

export const FormatHtmlWithPrettierResolver =
  (): z.ZodType<FormatHtmlWithPrettier> => {
    if (!FormatHtmlWithPrettierModel) {
      FormatHtmlWithPrettierModel = z.object({
        code: z.string(),
        bracketSameLine: z.optional(z.boolean()).default(false),
        htmlWhitespaceSensitivity: z
          .optional(
            z.lazy(() =>
              PrettierHtmlWhitespaceSensitivityOptionResolver(),
            ),
          )
          .default('css'),
        singleAttributePerLine: z.optional(z.boolean()).default(false),
        vueIndentScriptAndStyle: z.optional(z.boolean()).default(false),
      })
    }
    return FormatHtmlWithPrettierModel!
  }

let FormatJavaModel: z.ZodType<FormatJava>

export const FormatJavaResolver = (): z.ZodType<FormatJava> => {
  if (!FormatJavaModel) {
    FormatJavaModel = z.object({
      format: z.string(),
      input: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
      output: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return FormatJavaModel!
}

let FormatJavaWithPrettierModel: z.ZodType<FormatJavaWithPrettier>

export const FormatJavaWithPrettierResolver =
  (): z.ZodType<FormatJavaWithPrettier> => {
    if (!FormatJavaWithPrettierModel) {
      FormatJavaWithPrettierModel = z.object({
        code: z.string(),
        maxLineLength: z.optional(z.number().int().gte(0)),
        indentationSize: z.optional(z.number().int().gte(0)),
        useTabs: z.optional(z.boolean()),
        trailingComma: z.optional(z.boolean()),
      })
    }
    return FormatJavaWithPrettierModel!
  }

let FormatKotlinCommandInputModel: z.ZodType<FormatKotlinCommandInput>

export const FormatKotlinCommandInputResolver =
  (): z.ZodType<FormatKotlinCommandInput> => {
    if (!FormatKotlinCommandInputModel) {
      FormatKotlinCommandInputModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatKotlinCommandInputModel!
  }

let FormatMarkdownWithPrettierModel: z.ZodType<FormatMarkdownWithPrettier>

export const FormatMarkdownWithPrettierResolver =
  (): z.ZodType<FormatMarkdownWithPrettier> => {
    if (!FormatMarkdownWithPrettierModel) {
      FormatMarkdownWithPrettierModel = z.object({
        code: z.string(),
        proseWrap: z
          .optional(z.lazy(() => PrettierProseWrapOptionResolver()))
          .default('preserve'),
        singleQuote: z.optional(z.boolean()).default(false),
      })
    }
    return FormatMarkdownWithPrettierModel!
  }

let FormatPythonCommandInputModel: z.ZodType<FormatPythonCommandInput>

export const FormatPythonCommandInputResolver =
  (): z.ZodType<FormatPythonCommandInput> => {
    if (!FormatPythonCommandInputModel) {
      FormatPythonCommandInputModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatPythonCommandInputModel!
  }

let FormatRubyModel: z.ZodType<FormatRuby>

export const FormatRubyResolver = (): z.ZodType<FormatRuby> => {
  if (!FormatRubyModel) {
    FormatRubyModel = z.object({
      format: z.string(),
      input: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
      output: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return FormatRubyModel!
}

let FormatRustCommandInputModel: z.ZodType<FormatRustCommandInput>

export const FormatRustCommandInputResolver =
  (): z.ZodType<FormatRustCommandInput> => {
    if (!FormatRustCommandInputModel) {
      FormatRustCommandInputModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatRustCommandInputModel!
  }

let FormatRustWithPrettierModel: z.ZodType<FormatRustWithPrettier>

export const FormatRustWithPrettierResolver =
  (): z.ZodType<FormatRustWithPrettier> => {
    if (!FormatRustWithPrettierModel) {
      FormatRustWithPrettierModel = z.object({
        code: z.string(),
        useTabs: z.optional(z.boolean()),
        indentationSize: z.optional(z.number().int().gte(0)),
        maxLineLength: z.optional(z.number().int().gte(0)),
        endOfLine: z.optional(
          z.lazy(() => PrettierEndOfLineOptionResolver()),
        ),
      })
    }
    return FormatRustWithPrettierModel!
  }

let FormatShWithPrettierModel: z.ZodType<FormatShWithPrettier>

export const FormatShWithPrettierResolver =
  (): z.ZodType<FormatShWithPrettier> => {
    if (!FormatShWithPrettierModel) {
      FormatShWithPrettierModel = z.object({
        code: z.string(),
        keepComments: z.optional(z.boolean()),
        stopAt: z.optional(z.string()),
        variant: z.optional(z.string()),
        indent: z.optional(z.number().int().gte(0)),
        binaryNextLine: z.optional(z.boolean()),
        switchCaseIndent: z.optional(z.boolean()),
        spaceRedirects: z.optional(z.boolean()),
        keepPadding: z.optional(z.boolean()),
        minify: z.optional(z.boolean()),
        functionNextLine: z.optional(z.boolean()),
      })
    }
    return FormatShWithPrettierModel!
  }

let FormatSqlWithContentModel: z.ZodType<FormatSqlWithContent>

export const FormatSqlWithContentResolver =
  (): z.ZodType<FormatSqlWithContent> => {
    if (!FormatSqlWithContentModel) {
      FormatSqlWithContentModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.union([z.instanceof(ArrayBuffer), z.string()]),
          }),
        }),
      })
    }
    return FormatSqlWithContentModel!
  }

let FormatSwiftCommandInputModel: z.ZodType<FormatSwiftCommandInput>

export const FormatSwiftCommandInputResolver =
  (): z.ZodType<FormatSwiftCommandInput> => {
    if (!FormatSwiftCommandInputModel) {
      FormatSwiftCommandInputModel = z.object({
        format: z.string(),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatSwiftCommandInputModel!
  }

let FormatTypescriptWithPrettierModel: z.ZodType<FormatTypescriptWithPrettier>

export const FormatTypescriptWithPrettierResolver =
  (): z.ZodType<FormatTypescriptWithPrettier> => {
    if (!FormatTypescriptWithPrettierModel) {
      FormatTypescriptWithPrettierModel = z.object({
        code: z.string(),
        jsxSingleQuote: z.optional(z.boolean()),
        singleQuote: z.optional(z.boolean()),
        semiColon: z.optional(z.boolean()),
        indentationSize: z.optional(z.number().int().gte(0)),
        maxLineLength: z.optional(z.number().int().gte(0)),
        trailingComma: z.optional(
          z.lazy(() => PrettierTypescriptTrailingCommaOptionResolver()),
        ),
        bracketSpacing: z.optional(z.boolean()),
        bracketSameLine: z.optional(z.boolean()),
        arrowParentheses: z.optional(
          z.lazy(() => PrettierArrowParensOptionResolver()),
        ),
        endOfLine: z.optional(
          z.lazy(() => PrettierEndOfLineOptionResolver()),
        ),
        singleAttributePerLine: z.optional(z.boolean()),
      })
    }
    return FormatTypescriptWithPrettierModel!
  }

let FormatXmlWithPrettierModel: z.ZodType<FormatXmlWithPrettier>

export const FormatXmlWithPrettierResolver =
  (): z.ZodType<FormatXmlWithPrettier> => {
    if (!FormatXmlWithPrettierModel) {
      FormatXmlWithPrettierModel = z.object({
        code: z.string(),
        xmlSelfClosingSpace: z.optional(z.boolean()).default(true),
        indentationSize: z.optional(z.number().int().gte(0)).default(2),
        xmlWhitespaceSensitivity: z
          .optional(
            z.lazy(() =>
              PrettierXmlWhitespaceSensitivityOptionResolver(),
            ),
          )
          .default('strict'),
        maxLineLength: z.optional(z.number().int().gte(0)).default(80),
        xmlSortAttributesByKey: z.optional(z.boolean()).default(true),
        xmlQuoteAttributes: z
          .optional(
            z.lazy(() => PrettierXmlQuoteAttributesOptionResolver()),
          )
          .default('preserve'),
      })
    }
    return FormatXmlWithPrettierModel!
  }

let FormatYamlWithPrettierModel: z.ZodType<FormatYamlWithPrettier>

export const FormatYamlWithPrettierResolver =
  (): z.ZodType<FormatYamlWithPrettier> => {
    if (!FormatYamlWithPrettierModel) {
      FormatYamlWithPrettierModel = z.object({
        code: z.string(),
        bracketSpacing: z.optional(z.boolean()).default(true),
        singleQuote: z.optional(z.boolean()).default(false),
        proseWrap: z
          .optional(z.lazy(() => PrettierProseWrapOptionResolver()))
          .default('preserve'),
      })
    }
    return FormatYamlWithPrettierModel!
  }

let GematriaSystemCalculationModel: z.ZodType<GematriaSystemCalculation>

export const GematriaSystemCalculationResolver =
  (): z.ZodType<GematriaSystemCalculation> => {
    if (!GematriaSystemCalculationModel) {
      GematriaSystemCalculationModel = z.object({
        system: z.object({
          slug: z.string(),
          title: z.string(),
        }),
        reduction: z.number().int().gte(0),
        summation: z.number().int().gte(0),
      })
    }
    return GematriaSystemCalculationModel!
  }

let GematriaSystemCalculationResultModel: z.ZodType<GematriaSystemCalculationResult>

export const GematriaSystemCalculationResultResolver =
  (): z.ZodType<GematriaSystemCalculationResult> => {
    if (!GematriaSystemCalculationResultModel) {
      GematriaSystemCalculationResultModel = z.object({
        string: z.object({
          decoded: z.string(),
          encoded: z.string(),
        }),
        script: z.object({
          slug: z.string(),
          title: z.string(),
        }),
        calculation: z.array(
          z.lazy(() => GematriaSystemCalculationResolver()),
        ),
      })
    }
    return GematriaSystemCalculationResultModel!
  }

let GenerateHaikuPhraseModel: z.ZodType<GenerateHaikuPhrase>

export const GenerateHaikuPhraseResolver =
  (): z.ZodType<GenerateHaikuPhrase> => {
    if (!GenerateHaikuPhraseModel) {
      GenerateHaikuPhraseModel = z.object({
        format: z.literal('haiku_phrase'),
        separator: z.optional(z.string()).default('-'),
        adjectives: z.array(
          z.union([
            z.lazy(() => NamedWordSetResolver()),
            z.lazy(() => AnonymousWordSetResolver()),
          ]),
        ),
        nouns: z.array(
          z.union([
            z.lazy(() => NamedWordSetResolver()),
            z.lazy(() => AnonymousWordSetResolver()),
          ]),
        ),
      })
    }
    return GenerateHaikuPhraseModel!
  }

let GenerateHashModel: z.ZodType<GenerateHash>

export const GenerateHashResolver = (): z.ZodType<GenerateHash> => {
  if (!GenerateHashModel) {
    GenerateHashModel = z.object({
      class: z.lazy(() => ForgeMessageDigestResolver()),
      content: z.union([z.string(), z.instanceof(ArrayBuffer)]),
    })
  }
  return GenerateHashModel!
}

let GenerateMurmurHashModel: z.ZodType<GenerateMurmurHash>

export const GenerateMurmurHashResolver =
  (): z.ZodType<GenerateMurmurHash> => {
    if (!GenerateMurmurHashModel) {
      GenerateMurmurHashModel = z.object({
        input: z.string(),
        seed: z.number().int(),
        version: z.optional(z.string()).default('3'),
      })
    }
    return GenerateMurmurHashModel!
  }

let GenerateQrCodeModel: z.ZodType<GenerateQrCode>

export const GenerateQrCodeResolver = (): z.ZodType<GenerateQrCode> => {
  if (!GenerateQrCodeModel) {
    GenerateQrCodeModel = z.object({
      errorCorrectionLevel: z.lazy(() =>
        QrCodeErrorCorrectionLevelResolver(),
      ),
      format: z.lazy(() => QrCodeFormatResolver()),
      margin: z.number().int().gte(0),
      color: z.optional(
        z.object({
          dark: z
            .string()
            .refine(TEST('dark', code.is_hex_color_8.test)),
          light: z
            .string()
            .refine(TEST('light', code.is_hex_color_8.test)),
        }),
      ),
    })
  }
  return GenerateQrCodeModel!
}

let GenerateRandomPhraseModel: z.ZodType<GenerateRandomPhrase>

export const GenerateRandomPhraseResolver =
  (): z.ZodType<GenerateRandomPhrase> => {
    if (!GenerateRandomPhraseModel) {
      GenerateRandomPhraseModel = z.object({
        format: z.literal('random_phrase'),
        separator: z.optional(z.string()).default('-'),
        minSize: z.optional(z.number().int()).default(2),
        maxSize: z.optional(z.number().int()).default(4),
        exclusions: z.optional(
          z.array(z.lazy(() => WeightedWordSetResolver())),
        ),
        inclusions: z.array(z.lazy(() => WeightedWordSetResolver())),
      })
    }
    return GenerateRandomPhraseModel!
  }

let GenerateRandomSymbolsModel: z.ZodType<GenerateRandomSymbols>

export const GenerateRandomSymbolsResolver =
  (): z.ZodType<GenerateRandomSymbols> => {
    if (!GenerateRandomSymbolsModel) {
      GenerateRandomSymbolsModel = z.object({
        format: z.literal('random_symbols'),
        minSize: z.optional(z.number().int()).default(4),
        maxSize: z.optional(z.number().int()).default(16),
        exclusions: z.optional(
          z.array(z.lazy(() => WeightedSymbolSetResolver())),
        ),
        inclusions: z.array(z.lazy(() => WeightedSymbolSetResolver())),
      })
    }
    return GenerateRandomSymbolsModel!
  }

let GifsicleOptimizeOptionModel: z.ZodType<GifsicleOptimizeOption>

export const GifsicleOptimizeOptionResolver = () => {
  if (!GifsicleOptimizeOptionModel) {
    GifsicleOptimizeOptionModel = z.enum(
      LOAD('gifsicle-optimize-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<GifsicleOptimizeOption>
  }
  return GifsicleOptimizeOptionModel!
}

let ImageMagicColorMatrixModel: z.ZodType<ImageMagicColorMatrix>

export const ImageMagicColorMatrixResolver =
  (): z.ZodType<ImageMagicColorMatrix> => {
    if (!ImageMagicColorMatrixModel) {
      ImageMagicColorMatrixModel = z.object({
        row: z.number().int().gte(0),
        column: z.number().int().gte(0),
        value: z.array(z.number()),
      })
    }
    return ImageMagicColorMatrixModel!
  }

let ImageMagickChannelModel: z.ZodType<ImageMagickChannel>

export const ImageMagickChannelResolver = () => {
  if (!ImageMagickChannelModel) {
    ImageMagickChannelModel = z.enum(
      LOAD('image-magick-channel') as readonly [string, ...string[]],
    ) as z.ZodType<ImageMagickChannel>
  }
  return ImageMagickChannelModel!
}

let ImageMagickColorSpaceModel: z.ZodType<ImageMagickColorSpace>

export const ImageMagickColorSpaceResolver = () => {
  if (!ImageMagickColorSpaceModel) {
    ImageMagickColorSpaceModel = z.enum(
      LOAD('image-magick-color-space') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ImageMagickColorSpace>
  }
  return ImageMagickColorSpaceModel!
}

let ImageMagickCompressionModel: z.ZodType<ImageMagickCompression>

export const ImageMagickCompressionResolver = () => {
  if (!ImageMagickCompressionModel) {
    ImageMagickCompressionModel = z.enum(
      LOAD('image-magick-compression') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ImageMagickCompression>
  }
  return ImageMagickCompressionModel!
}

let ImageMagickFormatModel: z.ZodType<ImageMagickFormat>

export const ImageMagickFormatResolver = () => {
  if (!ImageMagickFormatModel) {
    ImageMagickFormatModel = z.enum(
      LOAD('image-magick-format') as readonly [string, ...string[]],
    ) as z.ZodType<ImageMagickFormat>
  }
  return ImageMagickFormatModel!
}

let ImageMagickGravityModel: z.ZodType<ImageMagickGravity>

export const ImageMagickGravityResolver = () => {
  if (!ImageMagickGravityModel) {
    ImageMagickGravityModel = z.enum(
      LOAD('image-magick-gravity') as readonly [string, ...string[]],
    ) as z.ZodType<ImageMagickGravity>
  }
  return ImageMagickGravityModel!
}

let ImageMagickInputFormatModel: z.ZodType<ImageMagickInputFormat>

export const ImageMagickInputFormatResolver = () => {
  if (!ImageMagickInputFormatModel) {
    ImageMagickInputFormatModel = z.enum(
      LOAD('image-magick-input-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ImageMagickInputFormat>
  }
  return ImageMagickInputFormatModel!
}

let ImageMagickOutputFormatModel: z.ZodType<ImageMagickOutputFormat>

export const ImageMagickOutputFormatResolver = () => {
  if (!ImageMagickOutputFormatModel) {
    ImageMagickOutputFormatModel = z.enum(
      LOAD('image-magick-output-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<ImageMagickOutputFormat>
  }
  return ImageMagickOutputFormatModel!
}

let InkscapeExportFormatModel: z.ZodType<InkscapeExportFormat>

export const InkscapeExportFormatResolver = () => {
  if (!InkscapeExportFormatModel) {
    InkscapeExportFormatModel = z.enum(
      LOAD('inkscape-export-format') as readonly [string, ...string[]],
    ) as z.ZodType<InkscapeExportFormat>
  }
  return InkscapeExportFormatModel!
}

let InkscapeImportFormatModel: z.ZodType<InkscapeImportFormat>

export const InkscapeImportFormatResolver = () => {
  if (!InkscapeImportFormatModel) {
    InkscapeImportFormatModel = z.enum(
      LOAD('inkscape-import-format') as readonly [string, ...string[]],
    ) as z.ZodType<InkscapeImportFormat>
  }
  return InkscapeImportFormatModel!
}

let InspectColorModel: z.ZodType<InspectColor>

export const InspectColorResolver = (): z.ZodType<InspectColor> => {
  if (!InspectColorModel) {
    InspectColorModel = z.object({
      value: z.string(),
    })
  }
  return InspectColorModel!
}

let InspectMetadataFromImageModel: z.ZodType<InspectMetadataFromImage>

export const InspectMetadataFromImageResolver =
  (): z.ZodType<InspectMetadataFromImage> => {
    if (!InspectMetadataFromImageModel) {
      InspectMetadataFromImageModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        copyright: z.optional(z.string()),
        creator: z.optional(z.string()),
        license: z.optional(z.string()),
        keywords: z.optional(z.array(z.string())),
        artist: z.optional(z.string()),
        originalDate: z.optional(z.coerce.date()),
        allDates: z.optional(z.coerce.date()),
        creationDate: z.optional(z.coerce.date()),
        title: z.optional(z.string()),
        description: z.optional(z.string()),
      })
    }
    return InspectMetadataFromImageModel!
  }

let LibreOfficeInputFormatModel: z.ZodType<LibreOfficeInputFormat>

export const LibreOfficeInputFormatResolver = () => {
  if (!LibreOfficeInputFormatModel) {
    LibreOfficeInputFormatModel = z.enum(
      LOAD('libre-office-input-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<LibreOfficeInputFormat>
  }
  return LibreOfficeInputFormatModel!
}

let LibreOfficeOutputFormatModel: z.ZodType<LibreOfficeOutputFormat>

export const LibreOfficeOutputFormatResolver = () => {
  if (!LibreOfficeOutputFormatModel) {
    LibreOfficeOutputFormatModel = z.enum(
      LOAD('libre-office-output-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<LibreOfficeOutputFormat>
  }
  return LibreOfficeOutputFormatModel!
}

let LlvmArchitectureModel: z.ZodType<LlvmArchitecture>

export const LlvmArchitectureResolver = () => {
  if (!LlvmArchitectureModel) {
    LlvmArchitectureModel = z.enum(
      LOAD('llvm-architecture') as readonly [string, ...string[]],
    ) as z.ZodType<LlvmArchitecture>
  }
  return LlvmArchitectureModel!
}

let LlvmCpuModel: z.ZodType<LlvmCpu>

export const LlvmCpuResolver = () => {
  if (!LlvmCpuModel) {
    LlvmCpuModel = z.enum(
      LOAD('llvm-cpu') as readonly [string, ...string[]],
    ) as z.ZodType<LlvmCpu>
  }
  return LlvmCpuModel!
}

let LlvmFeatureModel: z.ZodType<LlvmFeature>

export const LlvmFeatureResolver = () => {
  if (!LlvmFeatureModel) {
    LlvmFeatureModel = z.enum(
      LOAD('llvm-feature') as readonly [string, ...string[]],
    ) as z.ZodType<LlvmFeature>
  }
  return LlvmFeatureModel!
}

let LlvmOptimizationLevelModel: z.ZodType<LlvmOptimizationLevel>

export const LlvmOptimizationLevelResolver = () => {
  if (!LlvmOptimizationLevelModel) {
    LlvmOptimizationLevelModel = z.enum(
      LOAD('llvm-optimization-level') as readonly [string, ...string[]],
    ) as z.ZodType<LlvmOptimizationLevel>
  }
  return LlvmOptimizationLevelModel!
}

let LocalInputPathModel: z.ZodType<LocalInputPath>

export const LocalInputPathResolver = (): z.ZodType<LocalInputPath> => {
  if (!LocalInputPathModel) {
    LocalInputPathModel = z.object({
      path: z.string().refine(TEST('path', code.is_local_path.test)),
    })
  }
  return LocalInputPathModel!
}

let LocalOutputPathModel: z.ZodType<LocalOutputPath>

export const LocalOutputPathResolver =
  (): z.ZodType<LocalOutputPath> => {
    if (!LocalOutputPathModel) {
      LocalOutputPathModel = z.object({
        path: z.string().refine(TEST('path', code.is_local_path.test)),
      })
    }
    return LocalOutputPathModel!
  }

let LocalPathModel: z.ZodType<LocalPath>

export const LocalPathResolver = (): z.ZodType<LocalPath> => {
  if (!LocalPathModel) {
    LocalPathModel = z.object({
      path: z.string().refine(TEST('path', code.is_local_path.test)),
    })
  }
  return LocalPathModel!
}

let NamedSymbolSetModel: z.ZodType<NamedSymbolSet>

export const NamedSymbolSetResolver = (): z.ZodType<NamedSymbolSet> => {
  if (!NamedSymbolSetModel) {
    NamedSymbolSetModel = z.object({
      form: z.literal('named-symbol-set'),
      name: z.lazy(() => SymbolSetResolver()),
    })
  }
  return NamedSymbolSetModel!
}

let NamedWordSetModel: z.ZodType<NamedWordSet>

export const NamedWordSetResolver = (): z.ZodType<NamedWordSet> => {
  if (!NamedWordSetModel) {
    NamedWordSetModel = z.object({
      form: z.literal('named-word-set'),
      name: z.lazy(() => WordSetResolver()),
    })
  }
  return NamedWordSetModel!
}

let ObjdumpDemangleStyleModel: z.ZodType<ObjdumpDemangleStyle>

export const ObjdumpDemangleStyleResolver = () => {
  if (!ObjdumpDemangleStyleModel) {
    ObjdumpDemangleStyleModel = z.enum(
      LOAD('objdump-demangle-style') as readonly [string, ...string[]],
    ) as z.ZodType<ObjdumpDemangleStyle>
  }
  return ObjdumpDemangleStyleModel!
}

let ObjdumpHideOptionModel: z.ZodType<ObjdumpHideOption>

export const ObjdumpHideOptionResolver = () => {
  if (!ObjdumpHideOptionModel) {
    ObjdumpHideOptionModel = z.enum(
      LOAD('objdump-hide-option') as readonly [string, ...string[]],
    ) as z.ZodType<ObjdumpHideOption>
  }
  return ObjdumpHideOptionModel!
}

let ObjdumpShowOptionModel: z.ZodType<ObjdumpShowOption>

export const ObjdumpShowOptionResolver = () => {
  if (!ObjdumpShowOptionModel) {
    ObjdumpShowOptionModel = z.enum(
      LOAD('objdump-show-option') as readonly [string, ...string[]],
    ) as z.ZodType<ObjdumpShowOption>
  }
  return ObjdumpShowOptionModel!
}

let PandocInputFormatModel: z.ZodType<PandocInputFormat>

export const PandocInputFormatResolver = () => {
  if (!PandocInputFormatModel) {
    PandocInputFormatModel = z.enum(
      LOAD('pandoc-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<PandocInputFormat>
  }
  return PandocInputFormatModel!
}

let PandocOutputFormatModel: z.ZodType<PandocOutputFormat>

export const PandocOutputFormatResolver = () => {
  if (!PandocOutputFormatModel) {
    PandocOutputFormatModel = z.enum(
      LOAD('pandoc-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<PandocOutputFormat>
  }
  return PandocOutputFormatModel!
}

let PatoolFormatModel: z.ZodType<PatoolFormat>

export const PatoolFormatResolver = () => {
  if (!PatoolFormatModel) {
    PatoolFormatModel = z.enum(
      LOAD('patool-format') as readonly [string, ...string[]],
    ) as z.ZodType<PatoolFormat>
  }
  return PatoolFormatModel!
}

let PdfLatexInputFormatModel: z.ZodType<PdfLatexInputFormat>

export const PdfLatexInputFormatResolver = () => {
  if (!PdfLatexInputFormatModel) {
    PdfLatexInputFormatModel = z.enum(
      LOAD('pdf-latex-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<PdfLatexInputFormat>
  }
  return PdfLatexInputFormatModel!
}

let PdfLatexOutputFormatModel: z.ZodType<PdfLatexOutputFormat>

export const PdfLatexOutputFormatResolver = () => {
  if (!PdfLatexOutputFormatModel) {
    PdfLatexOutputFormatModel = z.enum(
      LOAD('pdf-latex-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<PdfLatexOutputFormat>
  }
  return PdfLatexOutputFormatModel!
}

let PleasantAdjectiveModel: z.ZodType<PleasantAdjective>

export const PleasantAdjectiveResolver = () => {
  if (!PleasantAdjectiveModel) {
    PleasantAdjectiveModel = z.enum(
      LOAD('pleasant-adjective') as readonly [string, ...string[]],
    ) as z.ZodType<PleasantAdjective>
  }
  return PleasantAdjectiveModel!
}

let PleasantNounModel: z.ZodType<PleasantNoun>

export const PleasantNounResolver = () => {
  if (!PleasantNounModel) {
    PleasantNounModel = z.enum(
      LOAD('pleasant-noun') as readonly [string, ...string[]],
    ) as z.ZodType<PleasantNoun>
  }
  return PleasantNounModel!
}

let PrettierArrowParensOptionModel: z.ZodType<PrettierArrowParensOption>

export const PrettierArrowParensOptionResolver = () => {
  if (!PrettierArrowParensOptionModel) {
    PrettierArrowParensOptionModel = z.enum(
      LOAD('prettier-arrow-parens-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierArrowParensOption>
  }
  return PrettierArrowParensOptionModel!
}

let PrettierEndOfLineOptionModel: z.ZodType<PrettierEndOfLineOption>

export const PrettierEndOfLineOptionResolver = () => {
  if (!PrettierEndOfLineOptionModel) {
    PrettierEndOfLineOptionModel = z.enum(
      LOAD('prettier-end-of-line-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierEndOfLineOption>
  }
  return PrettierEndOfLineOptionModel!
}

let PrettierHtmlWhitespaceSensitivityOptionModel: z.ZodType<PrettierHtmlWhitespaceSensitivityOption>

export const PrettierHtmlWhitespaceSensitivityOptionResolver = () => {
  if (!PrettierHtmlWhitespaceSensitivityOptionModel) {
    PrettierHtmlWhitespaceSensitivityOptionModel = z.enum(
      LOAD('prettier-html-whitespace-sensitivity-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierHtmlWhitespaceSensitivityOption>
  }
  return PrettierHtmlWhitespaceSensitivityOptionModel!
}

let PrettierPluginModel: z.ZodType<PrettierPlugin>

export const PrettierPluginResolver = () => {
  if (!PrettierPluginModel) {
    PrettierPluginModel = z.enum(
      LOAD('prettier-plugin') as readonly [string, ...string[]],
    ) as z.ZodType<PrettierPlugin>
  }
  return PrettierPluginModel!
}

let PrettierProseWrapOptionModel: z.ZodType<PrettierProseWrapOption>

export const PrettierProseWrapOptionResolver = () => {
  if (!PrettierProseWrapOptionModel) {
    PrettierProseWrapOptionModel = z.enum(
      LOAD('prettier-prose-wrap-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierProseWrapOption>
  }
  return PrettierProseWrapOptionModel!
}

let PrettierTypescriptTrailingCommaOptionModel: z.ZodType<PrettierTypescriptTrailingCommaOption>

export const PrettierTypescriptTrailingCommaOptionResolver = () => {
  if (!PrettierTypescriptTrailingCommaOptionModel) {
    PrettierTypescriptTrailingCommaOptionModel = z.enum(
      LOAD('prettier-typescript-trailing-comma-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierTypescriptTrailingCommaOption>
  }
  return PrettierTypescriptTrailingCommaOptionModel!
}

let PrettierXmlQuoteAttributesOptionModel: z.ZodType<PrettierXmlQuoteAttributesOption>

export const PrettierXmlQuoteAttributesOptionResolver = () => {
  if (!PrettierXmlQuoteAttributesOptionModel) {
    PrettierXmlQuoteAttributesOptionModel = z.enum(
      LOAD('prettier-xml-quote-attributes-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierXmlQuoteAttributesOption>
  }
  return PrettierXmlQuoteAttributesOptionModel!
}

let PrettierXmlWhitespaceSensitivityOptionModel: z.ZodType<PrettierXmlWhitespaceSensitivityOption>

export const PrettierXmlWhitespaceSensitivityOptionResolver = () => {
  if (!PrettierXmlWhitespaceSensitivityOptionModel) {
    PrettierXmlWhitespaceSensitivityOptionModel = z.enum(
      LOAD('prettier-xml-whitespace-sensitivity-option') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PrettierXmlWhitespaceSensitivityOption>
  }
  return PrettierXmlWhitespaceSensitivityOptionModel!
}

let PuppeteerInputFormatModel: z.ZodType<PuppeteerInputFormat>

export const PuppeteerInputFormatResolver = () => {
  if (!PuppeteerInputFormatModel) {
    PuppeteerInputFormatModel = z.enum(
      LOAD('puppeteer-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<PuppeteerInputFormat>
  }
  return PuppeteerInputFormatModel!
}

let PuppeteerLifeCycleEventModel: z.ZodType<PuppeteerLifeCycleEvent>

export const PuppeteerLifeCycleEventResolver = () => {
  if (!PuppeteerLifeCycleEventModel) {
    PuppeteerLifeCycleEventModel = z.enum(
      LOAD('puppeteer-life-cycle-event') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PuppeteerLifeCycleEvent>
  }
  return PuppeteerLifeCycleEventModel!
}

let PuppeteerMarkdownInputFormatModel: z.ZodType<PuppeteerMarkdownInputFormat>

export const PuppeteerMarkdownInputFormatResolver = () => {
  if (!PuppeteerMarkdownInputFormatModel) {
    PuppeteerMarkdownInputFormatModel = z.enum(
      LOAD('puppeteer-markdown-input-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PuppeteerMarkdownInputFormat>
  }
  return PuppeteerMarkdownInputFormatModel!
}

let PuppeteerOutputFormatModel: z.ZodType<PuppeteerOutputFormat>

export const PuppeteerOutputFormatResolver = () => {
  if (!PuppeteerOutputFormatModel) {
    PuppeteerOutputFormatModel = z.enum(
      LOAD('puppeteer-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<PuppeteerOutputFormat>
  }
  return PuppeteerOutputFormatModel!
}

let PuppeteerTxtInputFormatModel: z.ZodType<PuppeteerTxtInputFormat>

export const PuppeteerTxtInputFormatResolver = () => {
  if (!PuppeteerTxtInputFormatModel) {
    PuppeteerTxtInputFormatModel = z.enum(
      LOAD('puppeteer-txt-input-format') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<PuppeteerTxtInputFormat>
  }
  return PuppeteerTxtInputFormatModel!
}

let QrCodeErrorCorrectionLevelModel: z.ZodType<QrCodeErrorCorrectionLevel>

export const QrCodeErrorCorrectionLevelResolver = () => {
  if (!QrCodeErrorCorrectionLevelModel) {
    QrCodeErrorCorrectionLevelModel = z.enum(
      LOAD('qr-code-error-correction-level') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<QrCodeErrorCorrectionLevel>
  }
  return QrCodeErrorCorrectionLevelModel!
}

let QrCodeFormatModel: z.ZodType<QrCodeFormat>

export const QrCodeFormatResolver = () => {
  if (!QrCodeFormatModel) {
    QrCodeFormatModel = z.enum(
      LOAD('qr-code-format') as readonly [string, ...string[]],
    ) as z.ZodType<QrCodeFormat>
  }
  return QrCodeFormatModel!
}

let RemoteInputPathModel: z.ZodType<RemoteInputPath>

export const RemoteInputPathResolver =
  (): z.ZodType<RemoteInputPath> => {
    if (!RemoteInputPathModel) {
      RemoteInputPathModel = z.object({
        path: z.string().refine(TEST('path', code.is_remote_path.test)),
      })
    }
    return RemoteInputPathModel!
  }

let RemoteOutputPathModel: z.ZodType<RemoteOutputPath>

export const RemoteOutputPathResolver =
  (): z.ZodType<RemoteOutputPath> => {
    if (!RemoteOutputPathModel) {
      RemoteOutputPathModel = z.object({
        path: z.string().refine(TEST('path', code.is_remote_path.test)),
      })
    }
    return RemoteOutputPathModel!
  }

let RemotePathModel: z.ZodType<RemotePath>

export const RemotePathResolver = (): z.ZodType<RemotePath> => {
  if (!RemotePathModel) {
    RemotePathModel = z.object({
      path: z.string().refine(TEST('path', code.is_remote_path.test)),
    })
  }
  return RemotePathModel!
}

let RemoveAudioFromVideoWithFfmpegModel: z.ZodType<RemoveAudioFromVideoWithFfmpeg>

export const RemoveAudioFromVideoWithFfmpegResolver =
  (): z.ZodType<RemoveAudioFromVideoWithFfmpeg> => {
    if (!RemoveAudioFromVideoWithFfmpegModel) {
      RemoveAudioFromVideoWithFfmpegModel = z.object({
        inputPath: z.string(),
        outputPath: z.string(),
      })
    }
    return RemoveAudioFromVideoWithFfmpegModel!
  }

let RemoveImageMetadataModel: z.ZodType<RemoveImageMetadata>

export const RemoveImageMetadataResolver =
  (): z.ZodType<RemoveImageMetadata> => {
    if (!RemoveImageMetadataModel) {
      RemoveImageMetadataModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
      })
    }
    return RemoveImageMetadataModel!
  }

let ReplaceImageColorWithImageMagickModel: z.ZodType<ReplaceImageColorWithImageMagick>

export const ReplaceImageColorWithImageMagickResolver =
  (): z.ZodType<ReplaceImageColorWithImageMagick> => {
    if (!ReplaceImageColorWithImageMagickModel) {
      ReplaceImageColorWithImageMagickModel = z.object({
        inputPath: z.string(),
        outputPath: z.string(),
        startColor: z.string(),
        endColor: z.string(),
        fuzz: z.number(),
      })
    }
    return ReplaceImageColorWithImageMagickModel!
  }

let RequestModel: z.ZodType<Request>

export const RequestResolver = (): z.ZodType<Request> => {
  if (!RequestModel) {
    RequestModel = z.object({
      path: z.string(),
      body: z.object({}).passthrough(),
    })
  }
  return RequestModel!
}

let ResizeImageWithImageMagickModel: z.ZodType<ResizeImageWithImageMagick>

export const ResizeImageWithImageMagickResolver =
  (): z.ZodType<ResizeImageWithImageMagick> => {
    if (!ResizeImageWithImageMagickModel) {
      ResizeImageWithImageMagickModel = z.object({
        inputPath: z.string(),
        outputPath: z.string(),
        width: z.number().int(),
        height: z.number().int(),
        stretch: z.boolean(),
        gravity: z.lazy(() => ImageMagickGravityResolver()),
      })
    }
    return ResizeImageWithImageMagickModel!
  }

let ResolveInputForCompileLocalExternalModel: z.ZodType<ResolveInputForCompileLocalExternal>

export const ResolveInputForCompileLocalExternalResolver =
  (): z.ZodType<ResolveInputForCompileLocalExternal> => {
    if (!ResolveInputForCompileLocalExternalModel) {
      ResolveInputForCompileLocalExternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForCompileLocalExternalModel!
  }

let ResolveInputForCompileLocalInternalModel: z.ZodType<ResolveInputForCompileLocalInternal>

export const ResolveInputForCompileLocalInternalResolver =
  (): z.ZodType<ResolveInputForCompileLocalInternal> => {
    if (!ResolveInputForCompileLocalInternalModel) {
      ResolveInputForCompileLocalInternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForCompileLocalInternalModel!
  }

let ResolveInputForCompileRemoteModel: z.ZodType<ResolveInputForCompileRemote>

export const ResolveInputForCompileRemoteResolver =
  (): z.ZodType<ResolveInputForCompileRemote> => {
    if (!ResolveInputForCompileRemoteModel) {
      ResolveInputForCompileRemoteModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForCompileRemoteModel!
  }

let ResolveInputForConvertLocalExternalModel: z.ZodType<ResolveInputForConvertLocalExternal>

export const ResolveInputForConvertLocalExternalResolver =
  (): z.ZodType<ResolveInputForConvertLocalExternal> => {
    if (!ResolveInputForConvertLocalExternalModel) {
      ResolveInputForConvertLocalExternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForConvertLocalExternalModel!
  }

let ResolveInputForConvertLocalInternalModel: z.ZodType<ResolveInputForConvertLocalInternal>

export const ResolveInputForConvertLocalInternalResolver =
  (): z.ZodType<ResolveInputForConvertLocalInternal> => {
    if (!ResolveInputForConvertLocalInternalModel) {
      ResolveInputForConvertLocalInternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForConvertLocalInternalModel!
  }

let ResolveInputForConvertRemoteModel: z.ZodType<ResolveInputForConvertRemote>

export const ResolveInputForConvertRemoteResolver =
  (): z.ZodType<ResolveInputForConvertRemote> => {
    if (!ResolveInputForConvertRemoteModel) {
      ResolveInputForConvertRemoteModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForConvertRemoteModel!
  }

let ResolveInputForFormatLocalExternalModel: z.ZodType<ResolveInputForFormatLocalExternal>

export const ResolveInputForFormatLocalExternalResolver =
  (): z.ZodType<ResolveInputForFormatLocalExternal> => {
    if (!ResolveInputForFormatLocalExternalModel) {
      ResolveInputForFormatLocalExternalModel = z.object({
        pathScope: z.optional(z.string()),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForFormatLocalExternalModel!
  }

let ResolveInputForFormatLocalInternalModel: z.ZodType<ResolveInputForFormatLocalInternal>

export const ResolveInputForFormatLocalInternalResolver =
  (): z.ZodType<ResolveInputForFormatLocalInternal> => {
    if (!ResolveInputForFormatLocalInternalModel) {
      ResolveInputForFormatLocalInternalModel = z.object({
        pathScope: z.optional(z.string()),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForFormatLocalInternalModel!
  }

let ResolveInputForFormatRemoteModel: z.ZodType<ResolveInputForFormatRemote>

export const ResolveInputForFormatRemoteResolver =
  (): z.ZodType<ResolveInputForFormatRemote> => {
    if (!ResolveInputForFormatRemoteModel) {
      ResolveInputForFormatRemoteModel = z.object({
        pathScope: z.optional(z.string()),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForFormatRemoteModel!
  }

let ResolveInputForSanitizeLocalExternalModel: z.ZodType<ResolveInputForSanitizeLocalExternal>

export const ResolveInputForSanitizeLocalExternalResolver =
  (): z.ZodType<ResolveInputForSanitizeLocalExternal> => {
    if (!ResolveInputForSanitizeLocalExternalModel) {
      ResolveInputForSanitizeLocalExternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForSanitizeLocalExternalModel!
  }

let ResolveInputForSanitizeLocalInternalModel: z.ZodType<ResolveInputForSanitizeLocalInternal>

export const ResolveInputForSanitizeLocalInternalResolver =
  (): z.ZodType<ResolveInputForSanitizeLocalInternal> => {
    if (!ResolveInputForSanitizeLocalInternalModel) {
      ResolveInputForSanitizeLocalInternalModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForSanitizeLocalInternalModel!
  }

let ResolveInputForSanitizeRemoteModel: z.ZodType<ResolveInputForSanitizeRemote>

export const ResolveInputForSanitizeRemoteResolver =
  (): z.ZodType<ResolveInputForSanitizeRemote> => {
    if (!ResolveInputForSanitizeRemoteModel) {
      ResolveInputForSanitizeRemoteModel = z.object({
        pathScope: z.optional(z.string()),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FilePathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalPathResolver())),
        }),
      })
    }
    return ResolveInputForSanitizeRemoteModel!
  }

let RustCompilerTargetModel: z.ZodType<RustCompilerTarget>

export const RustCompilerTargetResolver = () => {
  if (!RustCompilerTargetModel) {
    RustCompilerTargetModel = z.enum(
      LOAD('rust-compiler-target') as readonly [string, ...string[]],
    ) as z.ZodType<RustCompilerTarget>
  }
  return RustCompilerTargetModel!
}

let RustInputFormatModel: z.ZodType<RustInputFormat>

export const RustInputFormatResolver = () => {
  if (!RustInputFormatModel) {
    RustInputFormatModel = z.enum(
      LOAD('rust-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<RustInputFormat>
  }
  return RustInputFormatModel!
}

let RustOutputFormatModel: z.ZodType<RustOutputFormat>

export const RustOutputFormatResolver = () => {
  if (!RustOutputFormatModel) {
    RustOutputFormatModel = z.enum(
      LOAD('rust-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<RustOutputFormat>
  }
  return RustOutputFormatModel!
}

let SanitizeApiModel: z.ZodType<SanitizeApi>

export const SanitizeApiResolver = (): z.ZodType<SanitizeApi> => {
  if (!SanitizeApiModel) {
    SanitizeApiModel = z.object({
      input: z.object({
        format: z.string(),
      }),
    })
  }
  return SanitizeApiModel!
}

let SanitizeHtmlCommandInputModel: z.ZodType<SanitizeHtmlCommandInput>

export const SanitizeHtmlCommandInputResolver =
  (): z.ZodType<SanitizeHtmlCommandInput> => {
    if (!SanitizeHtmlCommandInputModel) {
      SanitizeHtmlCommandInputModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return SanitizeHtmlCommandInputModel!
  }

let SharedGematriaLanguageModel: z.ZodType<SharedGematriaLanguage>

export const SharedGematriaLanguageResolver = () => {
  if (!SharedGematriaLanguageModel) {
    SharedGematriaLanguageModel = z.enum(
      LOAD('shared-gematria-language') as readonly [
        string,
        ...string[],
      ],
    ) as z.ZodType<SharedGematriaLanguage>
  }
  return SharedGematriaLanguageModel!
}

let SlicePdfModel: z.ZodType<SlicePdf>

export const SlicePdfResolver = (): z.ZodType<SlicePdf> => {
  if (!SlicePdfModel) {
    SlicePdfModel = z.object({
      input: z.object({
        format: z.string(),
        file: z.object({
          path: z.string(),
        }),
      }),
      startPage: z.number().int().gte(0),
      endPage: z.number().int().gte(0),
      output: z.object({
        file: z.object({
          path: z.string(),
        }),
      }),
    })
  }
  return SlicePdfModel!
}

let SlicePdfWithDataModel: z.ZodType<SlicePdfWithData>

export const SlicePdfWithDataResolver =
  (): z.ZodType<SlicePdfWithData> => {
    if (!SlicePdfWithDataModel) {
      SlicePdfWithDataModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            data: z.instanceof(ArrayBuffer),
          }),
        }),
        startPage: z.number().int().gte(0),
        endPage: z.number().int().gte(0),
      })
    }
    return SlicePdfWithDataModel!
  }

let SwiftInputFormatModel: z.ZodType<SwiftInputFormat>

export const SwiftInputFormatResolver = () => {
  if (!SwiftInputFormatModel) {
    SwiftInputFormatModel = z.enum(
      LOAD('swift-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<SwiftInputFormat>
  }
  return SwiftInputFormatModel!
}

let SymbolSetModel: z.ZodType<SymbolSet>

export const SymbolSetResolver = () => {
  if (!SymbolSetModel) {
    SymbolSetModel = z.enum(
      LOAD('symbol-set') as readonly [string, ...string[]],
    ) as z.ZodType<SymbolSet>
  }
  return SymbolSetModel!
}

let TaskModel: z.ZodType<Task>

export const TaskResolver = () => {
  if (!TaskModel) {
    TaskModel = z.enum(
      LOAD('task') as readonly [string, ...string[]],
    ) as z.ZodType<Task>
  }
  return TaskModel!
}

let TextStyleModel: z.ZodType<TextStyle>

export const TextStyleResolver = (): z.ZodType<TextStyle> => {
  if (!TextStyleModel) {
    TextStyleModel = z.object({
      color: z.optional(
        z.string().refine(TEST('color', code.is_hex_color_6.test)),
      ),
      bold: z.optional(z.boolean()).default(false),
      italic: z.optional(z.boolean()).default(false),
      font: z.optional(
        z.object({
          size: z.optional(z.number().int().gte(0)),
          family: z.optional(z.array(z.string())),
        }),
      ),
      lineHeight: z.optional(z.number()),
      letterSpacing: z.optional(z.number()),
      allCaps: z.optional(z.boolean()).default(false),
    })
  }
  return TextStyleModel!
}

let TimeZoneModel: z.ZodType<TimeZone>

export const TimeZoneResolver = () => {
  if (!TimeZoneModel) {
    TimeZoneModel = z.enum(
      LOAD('time-zone') as readonly [string, ...string[]],
    ) as z.ZodType<TimeZone>
  }
  return TimeZoneModel!
}

let TimeZoneAbbreviationModel: z.ZodType<TimeZoneAbbreviation>

export const TimeZoneAbbreviationResolver = () => {
  if (!TimeZoneAbbreviationModel) {
    TimeZoneAbbreviationModel = z.enum(
      LOAD('time-zone-abbreviation') as readonly [string, ...string[]],
    ) as z.ZodType<TimeZoneAbbreviation>
  }
  return TimeZoneAbbreviationModel!
}

let TimeZoneLocationModel: z.ZodType<TimeZoneLocation>

export const TimeZoneLocationResolver = () => {
  if (!TimeZoneLocationModel) {
    TimeZoneLocationModel = z.enum(
      LOAD('time-zone-location') as readonly [string, ...string[]],
    ) as z.ZodType<TimeZoneLocation>
  }
  return TimeZoneLocationModel!
}

let UnarchiverFormatModel: z.ZodType<UnarchiverFormat>

export const UnarchiverFormatResolver = () => {
  if (!UnarchiverFormatModel) {
    UnarchiverFormatModel = z.enum(
      LOAD('unarchiver-format') as readonly [string, ...string[]],
    ) as z.ZodType<UnarchiverFormat>
  }
  return UnarchiverFormatModel!
}

let UnitModel: z.ZodType<Unit>

export const UnitResolver = () => {
  if (!UnitModel) {
    UnitModel = z.enum(
      LOAD('unit') as readonly [string, ...string[]],
    ) as z.ZodType<Unit>
  }
  return UnitModel!
}

let ValidatePdfWithDataModel: z.ZodType<ValidatePdfWithData>

export const ValidatePdfWithDataResolver =
  (): z.ZodType<ValidatePdfWithData> => {
    if (!ValidatePdfWithDataModel) {
      ValidatePdfWithDataModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            data: z.instanceof(ArrayBuffer),
          }),
        }),
      })
    }
    return ValidatePdfWithDataModel!
  }

let VerifyCliBaseModel: z.ZodType<VerifyCliBase>

export const VerifyCliBaseResolver = (): z.ZodType<VerifyCliBase> => {
  if (!VerifyCliBaseModel) {
    VerifyCliBaseModel = z
      .object({
        format: z.string(),
        file: z
          .object({
            path: z.string(),
          })
          .passthrough(),
        help: z.optional(z.boolean()),
        log: z
          .optional(z.lazy(() => CliLogFormatResolver()))
          .default('pretty'),
      })
      .passthrough()
  }
  return VerifyCliBaseModel!
}

let VerifyImageWithImageMagickModel: z.ZodType<VerifyImageWithImageMagick>

export const VerifyImageWithImageMagickResolver =
  (): z.ZodType<VerifyImageWithImageMagick> => {
    if (!VerifyImageWithImageMagickModel) {
      VerifyImageWithImageMagickModel = z.object({
        format: z.lazy(() => ImageMagickFormatResolver()),
        file: z.object({
          path: z.string(),
        }),
      })
    }
    return VerifyImageWithImageMagickModel!
  }

let WastInputFormatModel: z.ZodType<WastInputFormat>

export const WastInputFormatResolver = () => {
  if (!WastInputFormatModel) {
    WastInputFormatModel = z.enum(
      LOAD('wast-input-format') as readonly [string, ...string[]],
    ) as z.ZodType<WastInputFormat>
  }
  return WastInputFormatModel!
}

let WastOutputFormatModel: z.ZodType<WastOutputFormat>

export const WastOutputFormatResolver = () => {
  if (!WastOutputFormatModel) {
    WastOutputFormatModel = z.enum(
      LOAD('wast-output-format') as readonly [string, ...string[]],
    ) as z.ZodType<WastOutputFormat>
  }
  return WastOutputFormatModel!
}

let WeightedSymbolSetModel: z.ZodType<WeightedSymbolSet>

export const WeightedSymbolSetResolver =
  (): z.ZodType<WeightedSymbolSet> => {
    if (!WeightedSymbolSetModel) {
      WeightedSymbolSetModel = z.object({
        value: z.union([
          z.lazy(() => NamedSymbolSetResolver()),
          z.lazy(() => AnonymousSymbolSetResolver()),
        ]),
        weight: z.number().int(),
      })
    }
    return WeightedSymbolSetModel!
  }

let WeightedWordSetModel: z.ZodType<WeightedWordSet>

export const WeightedWordSetResolver =
  (): z.ZodType<WeightedWordSet> => {
    if (!WeightedWordSetModel) {
      WeightedWordSetModel = z.object({
        value: z.union([
          z.lazy(() => NamedWordSetResolver()),
          z.lazy(() => AnonymousWordSetResolver()),
        ]),
        weight: z.number().int(),
      })
    }
    return WeightedWordSetModel!
  }

let WordSetModel: z.ZodType<WordSet>

export const WordSetResolver = () => {
  if (!WordSetModel) {
    WordSetModel = z.enum(
      LOAD('word-set') as readonly [string, ...string[]],
    ) as z.ZodType<WordSet>
  }
  return WordSetModel!
}

let WriteMetadataToImageModel: z.ZodType<WriteMetadataToImage>

export const WriteMetadataToImageResolver =
  (): z.ZodType<WriteMetadataToImage> => {
    if (!WriteMetadataToImageModel) {
      WriteMetadataToImageModel = z.object({
        input: z.object({
          format: z.string(),
          file: z.object({
            path: z.string(),
          }),
        }),
        copyright: z.optional(z.string()),
        creator: z.optional(z.string()),
        license: z.optional(z.string()),
        keywords: z.optional(z.array(z.string())),
        artist: z.optional(z.string()),
        originalDate: z.optional(z.coerce.date()),
        allDates: z.optional(z.coerce.date()),
        creationDate: z.optional(z.coerce.date()),
        title: z.optional(z.string()),
        description: z.optional(z.string()),
      })
    }
    return WriteMetadataToImageModel!
  }
