import { z } from 'zod'
import { LOAD, MAKE, TEST } from '@termsurf/form'
import * as code from '~/code/type/code'

import {
  CompileCBrowserInput,
  CompileCBrowserLocalInput,
  CompileCBrowserOutput,
  CompileCBrowserRemoteInput,
  CompileCppBrowserInput,
  CompileCppBrowserLocalInput,
  CompileCppBrowserOutput,
  CompileCppBrowserRemoteInput,
  CompileRustBrowserInput,
  CompileRustBrowserLocalInput,
  CompileRustBrowserOutput,
  CompileRustBrowserRemoteInput,
  CompileSwiftBrowserInput,
  CompileSwiftBrowserLocalInput,
  CompileSwiftBrowserOutput,
  CompileSwiftBrowserRemoteInput,
  CompileWastBrowserInput,
  CompileWastBrowserLocalInput,
  CompileWastBrowserOutput,
  CompileWastBrowserRemoteInput,
  ConvertArchiveBrowserInput,
  ConvertArchiveBrowserLocalInput,
  ConvertArchiveBrowserOutput,
  ConvertArchiveBrowserRemoteInput,
  ConvertDocumentWithCalibreBrowserInput,
  ConvertDocumentWithCalibreBrowserLocalInput,
  ConvertDocumentWithCalibreBrowserOutput,
  ConvertDocumentWithCalibreBrowserRemoteInput,
  ConvertDocumentWithEnscriptBrowserInput,
  ConvertDocumentWithEnscriptBrowserLocalInput,
  ConvertDocumentWithEnscriptBrowserOutput,
  ConvertDocumentWithEnscriptBrowserRemoteInput,
  ConvertDocumentWithJupyterBrowserInput,
  ConvertDocumentWithJupyterBrowserLocalInput,
  ConvertDocumentWithJupyterBrowserOutput,
  ConvertDocumentWithJupyterBrowserRemoteInput,
  ConvertDocumentWithLibreOfficeBrowserInput,
  ConvertDocumentWithLibreOfficeBrowserLocalInput,
  ConvertDocumentWithLibreOfficeBrowserOutput,
  ConvertDocumentWithLibreOfficeBrowserRemoteInput,
  ConvertDocumentWithPandocBrowserInput,
  ConvertDocumentWithPandocBrowserLocalInput,
  ConvertDocumentWithPandocBrowserOutput,
  ConvertDocumentWithPandocBrowserRemoteInput,
  ConvertFontWithFontForgeBrowserInput,
  ConvertFontWithFontForgeBrowserLocalInput,
  ConvertFontWithFontForgeBrowserOutput,
  ConvertFontWithFontForgeBrowserRemoteInput,
  ConvertHtmlWithPuppeteerBrowserInput,
  ConvertHtmlWithPuppeteerBrowserLocalInput,
  ConvertHtmlWithPuppeteerBrowserOutput,
  ConvertHtmlWithPuppeteerBrowserRemoteInput,
  ConvertImageWithImageMagickBrowserInput,
  ConvertImageWithImageMagickBrowserLocalInput,
  ConvertImageWithImageMagickBrowserOutput,
  ConvertImageWithImageMagickBrowserRemoteInput,
  ConvertImageWithInkscapeBrowserInput,
  ConvertImageWithInkscapeBrowserLocalInput,
  ConvertImageWithInkscapeBrowserOutput,
  ConvertImageWithInkscapeBrowserRemoteInput,
  ConvertLatexToPngBrowserInput,
  ConvertLatexToPngBrowserLocalInput,
  ConvertLatexToPngBrowserOutput,
  ConvertLatexToPngBrowserRemoteInput,
  ConvertLatexWithPdfLatexBrowserInput,
  ConvertLatexWithPdfLatexBrowserLocalInput,
  ConvertLatexWithPdfLatexBrowserOutput,
  ConvertLatexWithPdfLatexBrowserRemoteInput,
  ConvertMarkdownWithPuppeteerBrowserInput,
  ConvertMarkdownWithPuppeteerBrowserLocalInput,
  ConvertMarkdownWithPuppeteerBrowserOutput,
  ConvertMarkdownWithPuppeteerBrowserRemoteInput,
  ConvertTxtWithPuppeteerBrowserInput,
  ConvertTxtWithPuppeteerBrowserLocalInput,
  ConvertTxtWithPuppeteerBrowserOutput,
  ConvertTxtWithPuppeteerBrowserRemoteInput,
  ConvertVideoWithFfmpegBrowserInput,
  ConvertVideoWithFfmpegBrowserLocalInput,
  ConvertVideoWithFfmpegBrowserOutput,
  ConvertVideoWithFfmpegBrowserRemoteInput,
  FormatAssemblyBrowserInput,
  FormatAssemblyBrowserLocalInput,
  FormatAssemblyBrowserOutput,
  FormatAssemblyBrowserRemoteInput,
  FormatCodeWithClangFormatBrowserInput,
  FormatCodeWithClangFormatBrowserLocalInput,
  FormatCodeWithClangFormatBrowserOutput,
  FormatCodeWithClangFormatBrowserRemoteInput,
  FormatKotlinBrowserInput,
  FormatKotlinBrowserLocalInput,
  FormatKotlinBrowserOutput,
  FormatKotlinBrowserRemoteInput,
  FormatPythonBrowserInput,
  FormatPythonBrowserLocalInput,
  FormatPythonBrowserOutput,
  FormatPythonBrowserRemoteInput,
  FormatRustBrowserInput,
  FormatRustBrowserLocalInput,
  FormatRustBrowserOutput,
  FormatRustBrowserRemoteInput,
  FormatSwiftBrowserInput,
  FormatSwiftBrowserLocalInput,
  FormatSwiftBrowserOutput,
  FormatSwiftBrowserRemoteInput,
  SanitizeHtmlBrowserInput,
  SanitizeHtmlBrowserLocalInput,
  SanitizeHtmlBrowserOutput,
  SanitizeHtmlBrowserRemoteInput,
} from '~/code/type/browser/base/cast'
import {
  ArchiveFormatResolver,
  AssemblySyntaxResolver,
  BackendCompilationOutputResolver,
  CInputFormatResolver,
  CalibreInputFormatResolver,
  CalibreOutputFormatResolver,
  ClangFormatResolver,
  ConvertLatexToPngInputFormatResolver,
  ConvertLatexToPngOutputFormatResolver,
  CppInputFormatResolver,
  EnscriptInputFormatResolver,
  EnscriptOutputFormatResolver,
  FfmpegCodecAudioResolver,
  FfmpegCodecSubtitleResolver,
  FfmpegCodecVideoResolver,
  FfmpegFormatResolver,
  FfmpegStrictOptionResolver,
  FileContentResolver,
  FileContentWithSha256Resolver,
  FontFormatResolver,
  ImageMagicColorMatrixResolver,
  ImageMagickColorSpaceResolver,
  ImageMagickCompressionResolver,
  ImageMagickInputFormatResolver,
  ImageMagickOutputFormatResolver,
  LibreOfficeInputFormatResolver,
  LibreOfficeOutputFormatResolver,
  LlvmArchitectureResolver,
  LlvmOptimizationLevelResolver,
  PandocInputFormatResolver,
  PandocOutputFormatResolver,
  PdfLatexInputFormatResolver,
  PdfLatexOutputFormatResolver,
  PuppeteerInputFormatResolver,
  PuppeteerLifeCycleEventResolver,
  PuppeteerMarkdownInputFormatResolver,
  PuppeteerOutputFormatResolver,
  PuppeteerTxtInputFormatResolver,
  RustCompilerTargetResolver,
  RustInputFormatResolver,
  RustOutputFormatResolver,
  SwiftInputFormatResolver,
  WastInputFormatResolver,
  WastOutputFormatResolver,
} from '~/code/type/shared/base/take'
import { ClangStyleAllResolver } from '~/code/type/shared/clang-format/take'

let CompileCBrowserInputModel: z.ZodType<CompileCBrowserInput>

export const CompileCBrowserInputResolver =
  (): z.ZodType<CompileCBrowserInput> => {
    if (!CompileCBrowserInputModel) {
      CompileCBrowserInputModel = z.union([
        z.lazy(() => CompileCBrowserRemoteInputResolver()),
        z.lazy(() => CompileCBrowserLocalInputResolver()),
      ])
    }
    return CompileCBrowserInputModel!
  }

let CompileCBrowserLocalInputModel: z.ZodType<CompileCBrowserLocalInput>

export const CompileCBrowserLocalInputResolver =
  (): z.ZodType<CompileCBrowserLocalInput> => {
    if (!CompileCBrowserLocalInputModel) {
      CompileCBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
        }),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCBrowserLocalInputModel!
  }

let CompileCBrowserOutputModel: z.ZodType<CompileCBrowserOutput>

export const CompileCBrowserOutputResolver =
  (): z.ZodType<CompileCBrowserOutput> => {
    if (!CompileCBrowserOutputModel) {
      CompileCBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return CompileCBrowserOutputModel!
  }

let CompileCBrowserRemoteInputModel: z.ZodType<CompileCBrowserRemoteInput>

export const CompileCBrowserRemoteInputResolver =
  (): z.ZodType<CompileCBrowserRemoteInput> => {
    if (!CompileCBrowserRemoteInputModel) {
      CompileCBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
        }),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCBrowserRemoteInputModel!
  }

let CompileCppBrowserInputModel: z.ZodType<CompileCppBrowserInput>

export const CompileCppBrowserInputResolver =
  (): z.ZodType<CompileCppBrowserInput> => {
    if (!CompileCppBrowserInputModel) {
      CompileCppBrowserInputModel = z.union([
        z.lazy(() => CompileCppBrowserRemoteInputResolver()),
        z.lazy(() => CompileCppBrowserLocalInputResolver()),
      ])
    }
    return CompileCppBrowserInputModel!
  }

let CompileCppBrowserLocalInputModel: z.ZodType<CompileCppBrowserLocalInput>

export const CompileCppBrowserLocalInputResolver =
  (): z.ZodType<CompileCppBrowserLocalInput> => {
    if (!CompileCppBrowserLocalInputModel) {
      CompileCppBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
        }),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCppBrowserLocalInputModel!
  }

let CompileCppBrowserOutputModel: z.ZodType<CompileCppBrowserOutput>

export const CompileCppBrowserOutputResolver =
  (): z.ZodType<CompileCppBrowserOutput> => {
    if (!CompileCppBrowserOutputModel) {
      CompileCppBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return CompileCppBrowserOutputModel!
  }

let CompileCppBrowserRemoteInputModel: z.ZodType<CompileCppBrowserRemoteInput>

export const CompileCppBrowserRemoteInputResolver =
  (): z.ZodType<CompileCppBrowserRemoteInput> => {
    if (!CompileCppBrowserRemoteInputModel) {
      CompileCppBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          architecture: z
            .optional(z.lazy(() => LlvmArchitectureResolver()))
            .default('x86_64'),
          syntax: z
            .optional(z.lazy(() => AssemblySyntaxResolver()))
            .default('intel'),
        }),
        optimizationLevel: z
          .optional(z.lazy(() => LlvmOptimizationLevelResolver()))
          .default('0'),
        fastMath: z.optional(z.boolean()).default(false),
      })
    }
    return CompileCppBrowserRemoteInputModel!
  }

let CompileRustBrowserInputModel: z.ZodType<CompileRustBrowserInput>

export const CompileRustBrowserInputResolver =
  (): z.ZodType<CompileRustBrowserInput> => {
    if (!CompileRustBrowserInputModel) {
      CompileRustBrowserInputModel = z.union([
        z.lazy(() => CompileRustBrowserRemoteInputResolver()),
        z.lazy(() => CompileRustBrowserLocalInputResolver()),
      ])
    }
    return CompileRustBrowserInputModel!
  }

let CompileRustBrowserLocalInputModel: z.ZodType<CompileRustBrowserLocalInput>

export const CompileRustBrowserLocalInputResolver =
  (): z.ZodType<CompileRustBrowserLocalInput> => {
    if (!CompileRustBrowserLocalInputModel) {
      CompileRustBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustBrowserLocalInputModel!
  }

let CompileRustBrowserOutputModel: z.ZodType<CompileRustBrowserOutput>

export const CompileRustBrowserOutputResolver =
  (): z.ZodType<CompileRustBrowserOutput> => {
    if (!CompileRustBrowserOutputModel) {
      CompileRustBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return CompileRustBrowserOutputModel!
  }

let CompileRustBrowserRemoteInputModel: z.ZodType<CompileRustBrowserRemoteInput>

export const CompileRustBrowserRemoteInputResolver =
  (): z.ZodType<CompileRustBrowserRemoteInput> => {
    if (!CompileRustBrowserRemoteInputModel) {
      CompileRustBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustBrowserRemoteInputModel!
  }

let CompileSwiftBrowserInputModel: z.ZodType<CompileSwiftBrowserInput>

export const CompileSwiftBrowserInputResolver =
  (): z.ZodType<CompileSwiftBrowserInput> => {
    if (!CompileSwiftBrowserInputModel) {
      CompileSwiftBrowserInputModel = z.union([
        z.lazy(() => CompileSwiftBrowserRemoteInputResolver()),
        z.lazy(() => CompileSwiftBrowserLocalInputResolver()),
      ])
    }
    return CompileSwiftBrowserInputModel!
  }

let CompileSwiftBrowserLocalInputModel: z.ZodType<CompileSwiftBrowserLocalInput>

export const CompileSwiftBrowserLocalInputResolver =
  (): z.ZodType<CompileSwiftBrowserLocalInput> => {
    if (!CompileSwiftBrowserLocalInputModel) {
      CompileSwiftBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
        }),
      })
    }
    return CompileSwiftBrowserLocalInputModel!
  }

let CompileSwiftBrowserOutputModel: z.ZodType<CompileSwiftBrowserOutput>

export const CompileSwiftBrowserOutputResolver =
  (): z.ZodType<CompileSwiftBrowserOutput> => {
    if (!CompileSwiftBrowserOutputModel) {
      CompileSwiftBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return CompileSwiftBrowserOutputModel!
  }

let CompileSwiftBrowserRemoteInputModel: z.ZodType<CompileSwiftBrowserRemoteInput>

export const CompileSwiftBrowserRemoteInputResolver =
  (): z.ZodType<CompileSwiftBrowserRemoteInput> => {
    if (!CompileSwiftBrowserRemoteInputModel) {
      CompileSwiftBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
        }),
      })
    }
    return CompileSwiftBrowserRemoteInputModel!
  }

let CompileWastBrowserInputModel: z.ZodType<CompileWastBrowserInput>

export const CompileWastBrowserInputResolver =
  (): z.ZodType<CompileWastBrowserInput> => {
    if (!CompileWastBrowserInputModel) {
      CompileWastBrowserInputModel = z.union([
        z.lazy(() => CompileWastBrowserRemoteInputResolver()),
        z.lazy(() => CompileWastBrowserLocalInputResolver()),
      ])
    }
    return CompileWastBrowserInputModel!
  }

let CompileWastBrowserLocalInputModel: z.ZodType<CompileWastBrowserLocalInput>

export const CompileWastBrowserLocalInputResolver =
  (): z.ZodType<CompileWastBrowserLocalInput> => {
    if (!CompileWastBrowserLocalInputModel) {
      CompileWastBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
        }),
      })
    }
    return CompileWastBrowserLocalInputModel!
  }

let CompileWastBrowserOutputModel: z.ZodType<CompileWastBrowserOutput>

export const CompileWastBrowserOutputResolver =
  (): z.ZodType<CompileWastBrowserOutput> => {
    if (!CompileWastBrowserOutputModel) {
      CompileWastBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return CompileWastBrowserOutputModel!
  }

let CompileWastBrowserRemoteInputModel: z.ZodType<CompileWastBrowserRemoteInput>

export const CompileWastBrowserRemoteInputResolver =
  (): z.ZodType<CompileWastBrowserRemoteInput> => {
    if (!CompileWastBrowserRemoteInputModel) {
      CompileWastBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
        }),
      })
    }
    return CompileWastBrowserRemoteInputModel!
  }

let ConvertArchiveBrowserInputModel: z.ZodType<ConvertArchiveBrowserInput>

export const ConvertArchiveBrowserInputResolver =
  (): z.ZodType<ConvertArchiveBrowserInput> => {
    if (!ConvertArchiveBrowserInputModel) {
      ConvertArchiveBrowserInputModel = z.union([
        z.lazy(() => ConvertArchiveBrowserRemoteInputResolver()),
        z.lazy(() => ConvertArchiveBrowserLocalInputResolver()),
      ])
    }
    return ConvertArchiveBrowserInputModel!
  }

let ConvertArchiveBrowserLocalInputModel: z.ZodType<ConvertArchiveBrowserLocalInput>

export const ConvertArchiveBrowserLocalInputResolver =
  (): z.ZodType<ConvertArchiveBrowserLocalInput> => {
    if (!ConvertArchiveBrowserLocalInputModel) {
      ConvertArchiveBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
        }),
      })
    }
    return ConvertArchiveBrowserLocalInputModel!
  }

let ConvertArchiveBrowserOutputModel: z.ZodType<ConvertArchiveBrowserOutput>

export const ConvertArchiveBrowserOutputResolver =
  (): z.ZodType<ConvertArchiveBrowserOutput> => {
    if (!ConvertArchiveBrowserOutputModel) {
      ConvertArchiveBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertArchiveBrowserOutputModel!
  }

let ConvertArchiveBrowserRemoteInputModel: z.ZodType<ConvertArchiveBrowserRemoteInput>

export const ConvertArchiveBrowserRemoteInputResolver =
  (): z.ZodType<ConvertArchiveBrowserRemoteInput> => {
    if (!ConvertArchiveBrowserRemoteInputModel) {
      ConvertArchiveBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
        }),
      })
    }
    return ConvertArchiveBrowserRemoteInputModel!
  }

let ConvertDocumentWithCalibreBrowserInputModel: z.ZodType<ConvertDocumentWithCalibreBrowserInput>

export const ConvertDocumentWithCalibreBrowserInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreBrowserInput> => {
    if (!ConvertDocumentWithCalibreBrowserInputModel) {
      ConvertDocumentWithCalibreBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithCalibreBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithCalibreBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithCalibreBrowserInputModel!
  }

let ConvertDocumentWithCalibreBrowserLocalInputModel: z.ZodType<ConvertDocumentWithCalibreBrowserLocalInput>

export const ConvertDocumentWithCalibreBrowserLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreBrowserLocalInput> => {
    if (!ConvertDocumentWithCalibreBrowserLocalInputModel) {
      ConvertDocumentWithCalibreBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithCalibreBrowserLocalInputModel!
  }

let ConvertDocumentWithCalibreBrowserOutputModel: z.ZodType<ConvertDocumentWithCalibreBrowserOutput>

export const ConvertDocumentWithCalibreBrowserOutputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreBrowserOutput> => {
    if (!ConvertDocumentWithCalibreBrowserOutputModel) {
      ConvertDocumentWithCalibreBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertDocumentWithCalibreBrowserOutputModel!
  }

let ConvertDocumentWithCalibreBrowserRemoteInputModel: z.ZodType<ConvertDocumentWithCalibreBrowserRemoteInput>

export const ConvertDocumentWithCalibreBrowserRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreBrowserRemoteInput> => {
    if (!ConvertDocumentWithCalibreBrowserRemoteInputModel) {
      ConvertDocumentWithCalibreBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithCalibreBrowserRemoteInputModel!
  }

let ConvertDocumentWithEnscriptBrowserInputModel: z.ZodType<ConvertDocumentWithEnscriptBrowserInput>

export const ConvertDocumentWithEnscriptBrowserInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptBrowserInput> => {
    if (!ConvertDocumentWithEnscriptBrowserInputModel) {
      ConvertDocumentWithEnscriptBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithEnscriptBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithEnscriptBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithEnscriptBrowserInputModel!
  }

let ConvertDocumentWithEnscriptBrowserLocalInputModel: z.ZodType<ConvertDocumentWithEnscriptBrowserLocalInput>

export const ConvertDocumentWithEnscriptBrowserLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptBrowserLocalInput> => {
    if (!ConvertDocumentWithEnscriptBrowserLocalInputModel) {
      ConvertDocumentWithEnscriptBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithEnscriptBrowserLocalInputModel!
  }

let ConvertDocumentWithEnscriptBrowserOutputModel: z.ZodType<ConvertDocumentWithEnscriptBrowserOutput>

export const ConvertDocumentWithEnscriptBrowserOutputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptBrowserOutput> => {
    if (!ConvertDocumentWithEnscriptBrowserOutputModel) {
      ConvertDocumentWithEnscriptBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertDocumentWithEnscriptBrowserOutputModel!
  }

let ConvertDocumentWithEnscriptBrowserRemoteInputModel: z.ZodType<ConvertDocumentWithEnscriptBrowserRemoteInput>

export const ConvertDocumentWithEnscriptBrowserRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptBrowserRemoteInput> => {
    if (!ConvertDocumentWithEnscriptBrowserRemoteInputModel) {
      ConvertDocumentWithEnscriptBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithEnscriptBrowserRemoteInputModel!
  }

let ConvertDocumentWithJupyterBrowserInputModel: z.ZodType<ConvertDocumentWithJupyterBrowserInput>

export const ConvertDocumentWithJupyterBrowserInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterBrowserInput> => {
    if (!ConvertDocumentWithJupyterBrowserInputModel) {
      ConvertDocumentWithJupyterBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithJupyterBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithJupyterBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithJupyterBrowserInputModel!
  }

let ConvertDocumentWithJupyterBrowserLocalInputModel: z.ZodType<ConvertDocumentWithJupyterBrowserLocalInput>

export const ConvertDocumentWithJupyterBrowserLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterBrowserLocalInput> => {
    if (!ConvertDocumentWithJupyterBrowserLocalInputModel) {
      ConvertDocumentWithJupyterBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.string(),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertDocumentWithJupyterBrowserLocalInputModel!
  }

let ConvertDocumentWithJupyterBrowserOutputModel: z.ZodType<ConvertDocumentWithJupyterBrowserOutput>

export const ConvertDocumentWithJupyterBrowserOutputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterBrowserOutput> => {
    if (!ConvertDocumentWithJupyterBrowserOutputModel) {
      ConvertDocumentWithJupyterBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertDocumentWithJupyterBrowserOutputModel!
  }

let ConvertDocumentWithJupyterBrowserRemoteInputModel: z.ZodType<ConvertDocumentWithJupyterBrowserRemoteInput>

export const ConvertDocumentWithJupyterBrowserRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterBrowserRemoteInput> => {
    if (!ConvertDocumentWithJupyterBrowserRemoteInputModel) {
      ConvertDocumentWithJupyterBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertDocumentWithJupyterBrowserRemoteInputModel!
  }

let ConvertDocumentWithLibreOfficeBrowserInputModel: z.ZodType<ConvertDocumentWithLibreOfficeBrowserInput>

export const ConvertDocumentWithLibreOfficeBrowserInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeBrowserInput> => {
    if (!ConvertDocumentWithLibreOfficeBrowserInputModel) {
      ConvertDocumentWithLibreOfficeBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithLibreOfficeBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithLibreOfficeBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithLibreOfficeBrowserInputModel!
  }

let ConvertDocumentWithLibreOfficeBrowserLocalInputModel: z.ZodType<ConvertDocumentWithLibreOfficeBrowserLocalInput>

export const ConvertDocumentWithLibreOfficeBrowserLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeBrowserLocalInput> => {
    if (!ConvertDocumentWithLibreOfficeBrowserLocalInputModel) {
      ConvertDocumentWithLibreOfficeBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithLibreOfficeBrowserLocalInputModel!
  }

let ConvertDocumentWithLibreOfficeBrowserOutputModel: z.ZodType<ConvertDocumentWithLibreOfficeBrowserOutput>

export const ConvertDocumentWithLibreOfficeBrowserOutputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeBrowserOutput> => {
    if (!ConvertDocumentWithLibreOfficeBrowserOutputModel) {
      ConvertDocumentWithLibreOfficeBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertDocumentWithLibreOfficeBrowserOutputModel!
  }

let ConvertDocumentWithLibreOfficeBrowserRemoteInputModel: z.ZodType<ConvertDocumentWithLibreOfficeBrowserRemoteInput>

export const ConvertDocumentWithLibreOfficeBrowserRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeBrowserRemoteInput> => {
    if (!ConvertDocumentWithLibreOfficeBrowserRemoteInputModel) {
      ConvertDocumentWithLibreOfficeBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithLibreOfficeBrowserRemoteInputModel!
  }

let ConvertDocumentWithPandocBrowserInputModel: z.ZodType<ConvertDocumentWithPandocBrowserInput>

export const ConvertDocumentWithPandocBrowserInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocBrowserInput> => {
    if (!ConvertDocumentWithPandocBrowserInputModel) {
      ConvertDocumentWithPandocBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithPandocBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithPandocBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithPandocBrowserInputModel!
  }

let ConvertDocumentWithPandocBrowserLocalInputModel: z.ZodType<ConvertDocumentWithPandocBrowserLocalInput>

export const ConvertDocumentWithPandocBrowserLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocBrowserLocalInput> => {
    if (!ConvertDocumentWithPandocBrowserLocalInputModel) {
      ConvertDocumentWithPandocBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithPandocBrowserLocalInputModel!
  }

let ConvertDocumentWithPandocBrowserOutputModel: z.ZodType<ConvertDocumentWithPandocBrowserOutput>

export const ConvertDocumentWithPandocBrowserOutputResolver =
  (): z.ZodType<ConvertDocumentWithPandocBrowserOutput> => {
    if (!ConvertDocumentWithPandocBrowserOutputModel) {
      ConvertDocumentWithPandocBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertDocumentWithPandocBrowserOutputModel!
  }

let ConvertDocumentWithPandocBrowserRemoteInputModel: z.ZodType<ConvertDocumentWithPandocBrowserRemoteInput>

export const ConvertDocumentWithPandocBrowserRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocBrowserRemoteInput> => {
    if (!ConvertDocumentWithPandocBrowserRemoteInputModel) {
      ConvertDocumentWithPandocBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithPandocBrowserRemoteInputModel!
  }

let ConvertFontWithFontForgeBrowserInputModel: z.ZodType<ConvertFontWithFontForgeBrowserInput>

export const ConvertFontWithFontForgeBrowserInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeBrowserInput> => {
    if (!ConvertFontWithFontForgeBrowserInputModel) {
      ConvertFontWithFontForgeBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertFontWithFontForgeBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertFontWithFontForgeBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertFontWithFontForgeBrowserInputModel!
  }

let ConvertFontWithFontForgeBrowserLocalInputModel: z.ZodType<ConvertFontWithFontForgeBrowserLocalInput>

export const ConvertFontWithFontForgeBrowserLocalInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeBrowserLocalInput> => {
    if (!ConvertFontWithFontForgeBrowserLocalInputModel) {
      ConvertFontWithFontForgeBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
        }),
      })
    }
    return ConvertFontWithFontForgeBrowserLocalInputModel!
  }

let ConvertFontWithFontForgeBrowserOutputModel: z.ZodType<ConvertFontWithFontForgeBrowserOutput>

export const ConvertFontWithFontForgeBrowserOutputResolver =
  (): z.ZodType<ConvertFontWithFontForgeBrowserOutput> => {
    if (!ConvertFontWithFontForgeBrowserOutputModel) {
      ConvertFontWithFontForgeBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertFontWithFontForgeBrowserOutputModel!
  }

let ConvertFontWithFontForgeBrowserRemoteInputModel: z.ZodType<ConvertFontWithFontForgeBrowserRemoteInput>

export const ConvertFontWithFontForgeBrowserRemoteInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeBrowserRemoteInput> => {
    if (!ConvertFontWithFontForgeBrowserRemoteInputModel) {
      ConvertFontWithFontForgeBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
        }),
      })
    }
    return ConvertFontWithFontForgeBrowserRemoteInputModel!
  }

let ConvertHtmlWithPuppeteerBrowserInputModel: z.ZodType<ConvertHtmlWithPuppeteerBrowserInput>

export const ConvertHtmlWithPuppeteerBrowserInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerBrowserInput> => {
    if (!ConvertHtmlWithPuppeteerBrowserInputModel) {
      ConvertHtmlWithPuppeteerBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertHtmlWithPuppeteerBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertHtmlWithPuppeteerBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertHtmlWithPuppeteerBrowserInputModel!
  }

let ConvertHtmlWithPuppeteerBrowserLocalInputModel: z.ZodType<ConvertHtmlWithPuppeteerBrowserLocalInput>

export const ConvertHtmlWithPuppeteerBrowserLocalInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerBrowserLocalInput> => {
    if (!ConvertHtmlWithPuppeteerBrowserLocalInputModel) {
      ConvertHtmlWithPuppeteerBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
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
    return ConvertHtmlWithPuppeteerBrowserLocalInputModel!
  }

let ConvertHtmlWithPuppeteerBrowserOutputModel: z.ZodType<ConvertHtmlWithPuppeteerBrowserOutput>

export const ConvertHtmlWithPuppeteerBrowserOutputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerBrowserOutput> => {
    if (!ConvertHtmlWithPuppeteerBrowserOutputModel) {
      ConvertHtmlWithPuppeteerBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertHtmlWithPuppeteerBrowserOutputModel!
  }

let ConvertHtmlWithPuppeteerBrowserRemoteInputModel: z.ZodType<ConvertHtmlWithPuppeteerBrowserRemoteInput>

export const ConvertHtmlWithPuppeteerBrowserRemoteInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerBrowserRemoteInput> => {
    if (!ConvertHtmlWithPuppeteerBrowserRemoteInputModel) {
      ConvertHtmlWithPuppeteerBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
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
    return ConvertHtmlWithPuppeteerBrowserRemoteInputModel!
  }

let ConvertImageWithImageMagickBrowserInputModel: z.ZodType<ConvertImageWithImageMagickBrowserInput>

export const ConvertImageWithImageMagickBrowserInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickBrowserInput> => {
    if (!ConvertImageWithImageMagickBrowserInputModel) {
      ConvertImageWithImageMagickBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertImageWithImageMagickBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertImageWithImageMagickBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertImageWithImageMagickBrowserInputModel!
  }

let ConvertImageWithImageMagickBrowserLocalInputModel: z.ZodType<ConvertImageWithImageMagickBrowserLocalInput>

export const ConvertImageWithImageMagickBrowserLocalInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickBrowserLocalInput> => {
    if (!ConvertImageWithImageMagickBrowserLocalInputModel) {
      ConvertImageWithImageMagickBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => ImageMagickOutputFormatResolver()),
        }),
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
    return ConvertImageWithImageMagickBrowserLocalInputModel!
  }

let ConvertImageWithImageMagickBrowserOutputModel: z.ZodType<ConvertImageWithImageMagickBrowserOutput>

export const ConvertImageWithImageMagickBrowserOutputResolver =
  (): z.ZodType<ConvertImageWithImageMagickBrowserOutput> => {
    if (!ConvertImageWithImageMagickBrowserOutputModel) {
      ConvertImageWithImageMagickBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertImageWithImageMagickBrowserOutputModel!
  }

let ConvertImageWithImageMagickBrowserRemoteInputModel: z.ZodType<ConvertImageWithImageMagickBrowserRemoteInput>

export const ConvertImageWithImageMagickBrowserRemoteInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickBrowserRemoteInput> => {
    if (!ConvertImageWithImageMagickBrowserRemoteInputModel) {
      ConvertImageWithImageMagickBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => ImageMagickOutputFormatResolver()),
        }),
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
    return ConvertImageWithImageMagickBrowserRemoteInputModel!
  }

let ConvertImageWithInkscapeBrowserInputModel: z.ZodType<ConvertImageWithInkscapeBrowserInput>

export const ConvertImageWithInkscapeBrowserInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeBrowserInput> => {
    if (!ConvertImageWithInkscapeBrowserInputModel) {
      ConvertImageWithInkscapeBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertImageWithInkscapeBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertImageWithInkscapeBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertImageWithInkscapeBrowserInputModel!
  }

let ConvertImageWithInkscapeBrowserLocalInputModel: z.ZodType<ConvertImageWithInkscapeBrowserLocalInput>

export const ConvertImageWithInkscapeBrowserLocalInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeBrowserLocalInput> => {
    if (!ConvertImageWithInkscapeBrowserLocalInputModel) {
      ConvertImageWithInkscapeBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.string(),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertImageWithInkscapeBrowserLocalInputModel!
  }

let ConvertImageWithInkscapeBrowserOutputModel: z.ZodType<ConvertImageWithInkscapeBrowserOutput>

export const ConvertImageWithInkscapeBrowserOutputResolver =
  (): z.ZodType<ConvertImageWithInkscapeBrowserOutput> => {
    if (!ConvertImageWithInkscapeBrowserOutputModel) {
      ConvertImageWithInkscapeBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertImageWithInkscapeBrowserOutputModel!
  }

let ConvertImageWithInkscapeBrowserRemoteInputModel: z.ZodType<ConvertImageWithInkscapeBrowserRemoteInput>

export const ConvertImageWithInkscapeBrowserRemoteInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeBrowserRemoteInput> => {
    if (!ConvertImageWithInkscapeBrowserRemoteInputModel) {
      ConvertImageWithInkscapeBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertImageWithInkscapeBrowserRemoteInputModel!
  }

let ConvertLatexToPngBrowserInputModel: z.ZodType<ConvertLatexToPngBrowserInput>

export const ConvertLatexToPngBrowserInputResolver =
  (): z.ZodType<ConvertLatexToPngBrowserInput> => {
    if (!ConvertLatexToPngBrowserInputModel) {
      ConvertLatexToPngBrowserInputModel = z.union([
        z.lazy(() => ConvertLatexToPngBrowserRemoteInputResolver()),
        z.lazy(() => ConvertLatexToPngBrowserLocalInputResolver()),
      ])
    }
    return ConvertLatexToPngBrowserInputModel!
  }

let ConvertLatexToPngBrowserLocalInputModel: z.ZodType<ConvertLatexToPngBrowserLocalInput>

export const ConvertLatexToPngBrowserLocalInputResolver =
  (): z.ZodType<ConvertLatexToPngBrowserLocalInput> => {
    if (!ConvertLatexToPngBrowserLocalInputModel) {
      ConvertLatexToPngBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexToPngBrowserLocalInputModel!
  }

let ConvertLatexToPngBrowserOutputModel: z.ZodType<ConvertLatexToPngBrowserOutput>

export const ConvertLatexToPngBrowserOutputResolver =
  (): z.ZodType<ConvertLatexToPngBrowserOutput> => {
    if (!ConvertLatexToPngBrowserOutputModel) {
      ConvertLatexToPngBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertLatexToPngBrowserOutputModel!
  }

let ConvertLatexToPngBrowserRemoteInputModel: z.ZodType<ConvertLatexToPngBrowserRemoteInput>

export const ConvertLatexToPngBrowserRemoteInputResolver =
  (): z.ZodType<ConvertLatexToPngBrowserRemoteInput> => {
    if (!ConvertLatexToPngBrowserRemoteInputModel) {
      ConvertLatexToPngBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexToPngBrowserRemoteInputModel!
  }

let ConvertLatexWithPdfLatexBrowserInputModel: z.ZodType<ConvertLatexWithPdfLatexBrowserInput>

export const ConvertLatexWithPdfLatexBrowserInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexBrowserInput> => {
    if (!ConvertLatexWithPdfLatexBrowserInputModel) {
      ConvertLatexWithPdfLatexBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertLatexWithPdfLatexBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertLatexWithPdfLatexBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertLatexWithPdfLatexBrowserInputModel!
  }

let ConvertLatexWithPdfLatexBrowserLocalInputModel: z.ZodType<ConvertLatexWithPdfLatexBrowserLocalInput>

export const ConvertLatexWithPdfLatexBrowserLocalInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexBrowserLocalInput> => {
    if (!ConvertLatexWithPdfLatexBrowserLocalInputModel) {
      ConvertLatexWithPdfLatexBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexWithPdfLatexBrowserLocalInputModel!
  }

let ConvertLatexWithPdfLatexBrowserOutputModel: z.ZodType<ConvertLatexWithPdfLatexBrowserOutput>

export const ConvertLatexWithPdfLatexBrowserOutputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexBrowserOutput> => {
    if (!ConvertLatexWithPdfLatexBrowserOutputModel) {
      ConvertLatexWithPdfLatexBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertLatexWithPdfLatexBrowserOutputModel!
  }

let ConvertLatexWithPdfLatexBrowserRemoteInputModel: z.ZodType<ConvertLatexWithPdfLatexBrowserRemoteInput>

export const ConvertLatexWithPdfLatexBrowserRemoteInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexBrowserRemoteInput> => {
    if (!ConvertLatexWithPdfLatexBrowserRemoteInputModel) {
      ConvertLatexWithPdfLatexBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexWithPdfLatexBrowserRemoteInputModel!
  }

let ConvertMarkdownWithPuppeteerBrowserInputModel: z.ZodType<ConvertMarkdownWithPuppeteerBrowserInput>

export const ConvertMarkdownWithPuppeteerBrowserInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerBrowserInput> => {
    if (!ConvertMarkdownWithPuppeteerBrowserInputModel) {
      ConvertMarkdownWithPuppeteerBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertMarkdownWithPuppeteerBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertMarkdownWithPuppeteerBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertMarkdownWithPuppeteerBrowserInputModel!
  }

let ConvertMarkdownWithPuppeteerBrowserLocalInputModel: z.ZodType<ConvertMarkdownWithPuppeteerBrowserLocalInput>

export const ConvertMarkdownWithPuppeteerBrowserLocalInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerBrowserLocalInput> => {
    if (!ConvertMarkdownWithPuppeteerBrowserLocalInputModel) {
      ConvertMarkdownWithPuppeteerBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
      })
    }
    return ConvertMarkdownWithPuppeteerBrowserLocalInputModel!
  }

let ConvertMarkdownWithPuppeteerBrowserOutputModel: z.ZodType<ConvertMarkdownWithPuppeteerBrowserOutput>

export const ConvertMarkdownWithPuppeteerBrowserOutputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerBrowserOutput> => {
    if (!ConvertMarkdownWithPuppeteerBrowserOutputModel) {
      ConvertMarkdownWithPuppeteerBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertMarkdownWithPuppeteerBrowserOutputModel!
  }

let ConvertMarkdownWithPuppeteerBrowserRemoteInputModel: z.ZodType<ConvertMarkdownWithPuppeteerBrowserRemoteInput>

export const ConvertMarkdownWithPuppeteerBrowserRemoteInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerBrowserRemoteInput> => {
    if (!ConvertMarkdownWithPuppeteerBrowserRemoteInputModel) {
      ConvertMarkdownWithPuppeteerBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
      })
    }
    return ConvertMarkdownWithPuppeteerBrowserRemoteInputModel!
  }

let ConvertTxtWithPuppeteerBrowserInputModel: z.ZodType<ConvertTxtWithPuppeteerBrowserInput>

export const ConvertTxtWithPuppeteerBrowserInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerBrowserInput> => {
    if (!ConvertTxtWithPuppeteerBrowserInputModel) {
      ConvertTxtWithPuppeteerBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertTxtWithPuppeteerBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertTxtWithPuppeteerBrowserLocalInputResolver(),
        ),
      ])
    }
    return ConvertTxtWithPuppeteerBrowserInputModel!
  }

let ConvertTxtWithPuppeteerBrowserLocalInputModel: z.ZodType<ConvertTxtWithPuppeteerBrowserLocalInput>

export const ConvertTxtWithPuppeteerBrowserLocalInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerBrowserLocalInput> => {
    if (!ConvertTxtWithPuppeteerBrowserLocalInputModel) {
      ConvertTxtWithPuppeteerBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
      })
    }
    return ConvertTxtWithPuppeteerBrowserLocalInputModel!
  }

let ConvertTxtWithPuppeteerBrowserOutputModel: z.ZodType<ConvertTxtWithPuppeteerBrowserOutput>

export const ConvertTxtWithPuppeteerBrowserOutputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerBrowserOutput> => {
    if (!ConvertTxtWithPuppeteerBrowserOutputModel) {
      ConvertTxtWithPuppeteerBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertTxtWithPuppeteerBrowserOutputModel!
  }

let ConvertTxtWithPuppeteerBrowserRemoteInputModel: z.ZodType<ConvertTxtWithPuppeteerBrowserRemoteInput>

export const ConvertTxtWithPuppeteerBrowserRemoteInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerBrowserRemoteInput> => {
    if (!ConvertTxtWithPuppeteerBrowserRemoteInputModel) {
      ConvertTxtWithPuppeteerBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
      })
    }
    return ConvertTxtWithPuppeteerBrowserRemoteInputModel!
  }

let ConvertVideoWithFfmpegBrowserInputModel: z.ZodType<ConvertVideoWithFfmpegBrowserInput>

export const ConvertVideoWithFfmpegBrowserInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegBrowserInput> => {
    if (!ConvertVideoWithFfmpegBrowserInputModel) {
      ConvertVideoWithFfmpegBrowserInputModel = z.union([
        z.lazy(() =>
          ConvertVideoWithFfmpegBrowserRemoteInputResolver(),
        ),
        z.lazy(() => ConvertVideoWithFfmpegBrowserLocalInputResolver()),
      ])
    }
    return ConvertVideoWithFfmpegBrowserInputModel!
  }

let ConvertVideoWithFfmpegBrowserLocalInputModel: z.ZodType<ConvertVideoWithFfmpegBrowserLocalInput>

export const ConvertVideoWithFfmpegBrowserLocalInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegBrowserLocalInput> => {
    if (!ConvertVideoWithFfmpegBrowserLocalInputModel) {
      ConvertVideoWithFfmpegBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
        }),
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
    return ConvertVideoWithFfmpegBrowserLocalInputModel!
  }

let ConvertVideoWithFfmpegBrowserOutputModel: z.ZodType<ConvertVideoWithFfmpegBrowserOutput>

export const ConvertVideoWithFfmpegBrowserOutputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegBrowserOutput> => {
    if (!ConvertVideoWithFfmpegBrowserOutputModel) {
      ConvertVideoWithFfmpegBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return ConvertVideoWithFfmpegBrowserOutputModel!
  }

let ConvertVideoWithFfmpegBrowserRemoteInputModel: z.ZodType<ConvertVideoWithFfmpegBrowserRemoteInput>

export const ConvertVideoWithFfmpegBrowserRemoteInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegBrowserRemoteInput> => {
    if (!ConvertVideoWithFfmpegBrowserRemoteInputModel) {
      ConvertVideoWithFfmpegBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
        }),
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
    return ConvertVideoWithFfmpegBrowserRemoteInputModel!
  }

let FormatAssemblyBrowserInputModel: z.ZodType<FormatAssemblyBrowserInput>

export const FormatAssemblyBrowserInputResolver =
  (): z.ZodType<FormatAssemblyBrowserInput> => {
    if (!FormatAssemblyBrowserInputModel) {
      FormatAssemblyBrowserInputModel = z.union([
        z.lazy(() => FormatAssemblyBrowserRemoteInputResolver()),
        z.lazy(() => FormatAssemblyBrowserLocalInputResolver()),
      ])
    }
    return FormatAssemblyBrowserInputModel!
  }

let FormatAssemblyBrowserLocalInputModel: z.ZodType<FormatAssemblyBrowserLocalInput>

export const FormatAssemblyBrowserLocalInputResolver =
  (): z.ZodType<FormatAssemblyBrowserLocalInput> => {
    if (!FormatAssemblyBrowserLocalInputModel) {
      FormatAssemblyBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatAssemblyBrowserLocalInputModel!
  }

let FormatAssemblyBrowserOutputModel: z.ZodType<FormatAssemblyBrowserOutput>

export const FormatAssemblyBrowserOutputResolver =
  (): z.ZodType<FormatAssemblyBrowserOutput> => {
    if (!FormatAssemblyBrowserOutputModel) {
      FormatAssemblyBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatAssemblyBrowserOutputModel!
  }

let FormatAssemblyBrowserRemoteInputModel: z.ZodType<FormatAssemblyBrowserRemoteInput>

export const FormatAssemblyBrowserRemoteInputResolver =
  (): z.ZodType<FormatAssemblyBrowserRemoteInput> => {
    if (!FormatAssemblyBrowserRemoteInputModel) {
      FormatAssemblyBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatAssemblyBrowserRemoteInputModel!
  }

let FormatCodeWithClangFormatBrowserInputModel: z.ZodType<FormatCodeWithClangFormatBrowserInput>

export const FormatCodeWithClangFormatBrowserInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatBrowserInput> => {
    if (!FormatCodeWithClangFormatBrowserInputModel) {
      FormatCodeWithClangFormatBrowserInputModel = z.union([
        z.lazy(() =>
          FormatCodeWithClangFormatBrowserRemoteInputResolver(),
        ),
        z.lazy(() =>
          FormatCodeWithClangFormatBrowserLocalInputResolver(),
        ),
      ])
    }
    return FormatCodeWithClangFormatBrowserInputModel!
  }

let FormatCodeWithClangFormatBrowserLocalInputModel: z.ZodType<FormatCodeWithClangFormatBrowserLocalInput>

export const FormatCodeWithClangFormatBrowserLocalInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatBrowserLocalInput> => {
    if (!FormatCodeWithClangFormatBrowserLocalInputModel) {
      FormatCodeWithClangFormatBrowserLocalInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.optional(z.literal('local')),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatCodeWithClangFormatBrowserLocalInputModel!
  }

let FormatCodeWithClangFormatBrowserOutputModel: z.ZodType<FormatCodeWithClangFormatBrowserOutput>

export const FormatCodeWithClangFormatBrowserOutputResolver =
  (): z.ZodType<FormatCodeWithClangFormatBrowserOutput> => {
    if (!FormatCodeWithClangFormatBrowserOutputModel) {
      FormatCodeWithClangFormatBrowserOutputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatCodeWithClangFormatBrowserOutputModel!
  }

let FormatCodeWithClangFormatBrowserRemoteInputModel: z.ZodType<FormatCodeWithClangFormatBrowserRemoteInput>

export const FormatCodeWithClangFormatBrowserRemoteInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatBrowserRemoteInput> => {
    if (!FormatCodeWithClangFormatBrowserRemoteInputModel) {
      FormatCodeWithClangFormatBrowserRemoteInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.literal('remote'),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatCodeWithClangFormatBrowserRemoteInputModel!
  }

let FormatKotlinBrowserInputModel: z.ZodType<FormatKotlinBrowserInput>

export const FormatKotlinBrowserInputResolver =
  (): z.ZodType<FormatKotlinBrowserInput> => {
    if (!FormatKotlinBrowserInputModel) {
      FormatKotlinBrowserInputModel = z.union([
        z.lazy(() => FormatKotlinBrowserRemoteInputResolver()),
        z.lazy(() => FormatKotlinBrowserLocalInputResolver()),
      ])
    }
    return FormatKotlinBrowserInputModel!
  }

let FormatKotlinBrowserLocalInputModel: z.ZodType<FormatKotlinBrowserLocalInput>

export const FormatKotlinBrowserLocalInputResolver =
  (): z.ZodType<FormatKotlinBrowserLocalInput> => {
    if (!FormatKotlinBrowserLocalInputModel) {
      FormatKotlinBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatKotlinBrowserLocalInputModel!
  }

let FormatKotlinBrowserOutputModel: z.ZodType<FormatKotlinBrowserOutput>

export const FormatKotlinBrowserOutputResolver =
  (): z.ZodType<FormatKotlinBrowserOutput> => {
    if (!FormatKotlinBrowserOutputModel) {
      FormatKotlinBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatKotlinBrowserOutputModel!
  }

let FormatKotlinBrowserRemoteInputModel: z.ZodType<FormatKotlinBrowserRemoteInput>

export const FormatKotlinBrowserRemoteInputResolver =
  (): z.ZodType<FormatKotlinBrowserRemoteInput> => {
    if (!FormatKotlinBrowserRemoteInputModel) {
      FormatKotlinBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatKotlinBrowserRemoteInputModel!
  }

let FormatPythonBrowserInputModel: z.ZodType<FormatPythonBrowserInput>

export const FormatPythonBrowserInputResolver =
  (): z.ZodType<FormatPythonBrowserInput> => {
    if (!FormatPythonBrowserInputModel) {
      FormatPythonBrowserInputModel = z.union([
        z.lazy(() => FormatPythonBrowserRemoteInputResolver()),
        z.lazy(() => FormatPythonBrowserLocalInputResolver()),
      ])
    }
    return FormatPythonBrowserInputModel!
  }

let FormatPythonBrowserLocalInputModel: z.ZodType<FormatPythonBrowserLocalInput>

export const FormatPythonBrowserLocalInputResolver =
  (): z.ZodType<FormatPythonBrowserLocalInput> => {
    if (!FormatPythonBrowserLocalInputModel) {
      FormatPythonBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatPythonBrowserLocalInputModel!
  }

let FormatPythonBrowserOutputModel: z.ZodType<FormatPythonBrowserOutput>

export const FormatPythonBrowserOutputResolver =
  (): z.ZodType<FormatPythonBrowserOutput> => {
    if (!FormatPythonBrowserOutputModel) {
      FormatPythonBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatPythonBrowserOutputModel!
  }

let FormatPythonBrowserRemoteInputModel: z.ZodType<FormatPythonBrowserRemoteInput>

export const FormatPythonBrowserRemoteInputResolver =
  (): z.ZodType<FormatPythonBrowserRemoteInput> => {
    if (!FormatPythonBrowserRemoteInputModel) {
      FormatPythonBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatPythonBrowserRemoteInputModel!
  }

let FormatRustBrowserInputModel: z.ZodType<FormatRustBrowserInput>

export const FormatRustBrowserInputResolver =
  (): z.ZodType<FormatRustBrowserInput> => {
    if (!FormatRustBrowserInputModel) {
      FormatRustBrowserInputModel = z.union([
        z.lazy(() => FormatRustBrowserRemoteInputResolver()),
        z.lazy(() => FormatRustBrowserLocalInputResolver()),
      ])
    }
    return FormatRustBrowserInputModel!
  }

let FormatRustBrowserLocalInputModel: z.ZodType<FormatRustBrowserLocalInput>

export const FormatRustBrowserLocalInputResolver =
  (): z.ZodType<FormatRustBrowserLocalInput> => {
    if (!FormatRustBrowserLocalInputModel) {
      FormatRustBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatRustBrowserLocalInputModel!
  }

let FormatRustBrowserOutputModel: z.ZodType<FormatRustBrowserOutput>

export const FormatRustBrowserOutputResolver =
  (): z.ZodType<FormatRustBrowserOutput> => {
    if (!FormatRustBrowserOutputModel) {
      FormatRustBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatRustBrowserOutputModel!
  }

let FormatRustBrowserRemoteInputModel: z.ZodType<FormatRustBrowserRemoteInput>

export const FormatRustBrowserRemoteInputResolver =
  (): z.ZodType<FormatRustBrowserRemoteInput> => {
    if (!FormatRustBrowserRemoteInputModel) {
      FormatRustBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatRustBrowserRemoteInputModel!
  }

let FormatSwiftBrowserInputModel: z.ZodType<FormatSwiftBrowserInput>

export const FormatSwiftBrowserInputResolver =
  (): z.ZodType<FormatSwiftBrowserInput> => {
    if (!FormatSwiftBrowserInputModel) {
      FormatSwiftBrowserInputModel = z.union([
        z.lazy(() => FormatSwiftBrowserRemoteInputResolver()),
        z.lazy(() => FormatSwiftBrowserLocalInputResolver()),
      ])
    }
    return FormatSwiftBrowserInputModel!
  }

let FormatSwiftBrowserLocalInputModel: z.ZodType<FormatSwiftBrowserLocalInput>

export const FormatSwiftBrowserLocalInputResolver =
  (): z.ZodType<FormatSwiftBrowserLocalInput> => {
    if (!FormatSwiftBrowserLocalInputModel) {
      FormatSwiftBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        format: z.string(),
        input: z.object({
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return FormatSwiftBrowserLocalInputModel!
  }

let FormatSwiftBrowserOutputModel: z.ZodType<FormatSwiftBrowserOutput>

export const FormatSwiftBrowserOutputResolver =
  (): z.ZodType<FormatSwiftBrowserOutput> => {
    if (!FormatSwiftBrowserOutputModel) {
      FormatSwiftBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return FormatSwiftBrowserOutputModel!
  }

let FormatSwiftBrowserRemoteInputModel: z.ZodType<FormatSwiftBrowserRemoteInput>

export const FormatSwiftBrowserRemoteInputResolver =
  (): z.ZodType<FormatSwiftBrowserRemoteInput> => {
    if (!FormatSwiftBrowserRemoteInputModel) {
      FormatSwiftBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return FormatSwiftBrowserRemoteInputModel!
  }

let SanitizeHtmlBrowserInputModel: z.ZodType<SanitizeHtmlBrowserInput>

export const SanitizeHtmlBrowserInputResolver =
  (): z.ZodType<SanitizeHtmlBrowserInput> => {
    if (!SanitizeHtmlBrowserInputModel) {
      SanitizeHtmlBrowserInputModel = z.union([
        z.lazy(() => SanitizeHtmlBrowserRemoteInputResolver()),
        z.lazy(() => SanitizeHtmlBrowserLocalInputResolver()),
      ])
    }
    return SanitizeHtmlBrowserInputModel!
  }

let SanitizeHtmlBrowserLocalInputModel: z.ZodType<SanitizeHtmlBrowserLocalInput>

export const SanitizeHtmlBrowserLocalInputResolver =
  (): z.ZodType<SanitizeHtmlBrowserLocalInput> => {
    if (!SanitizeHtmlBrowserLocalInputModel) {
      SanitizeHtmlBrowserLocalInputModel = z.object({
        handle: z.optional(z.literal('local')),
        input: z.object({
          format: z.string(),
          file: z.object({
            content: z.lazy(() => FileContentResolver()),
          }),
        }),
      })
    }
    return SanitizeHtmlBrowserLocalInputModel!
  }

let SanitizeHtmlBrowserOutputModel: z.ZodType<SanitizeHtmlBrowserOutput>

export const SanitizeHtmlBrowserOutputResolver =
  (): z.ZodType<SanitizeHtmlBrowserOutput> => {
    if (!SanitizeHtmlBrowserOutputModel) {
      SanitizeHtmlBrowserOutputModel = z.object({
        file: z.lazy(() => FileContentResolver()),
      })
    }
    return SanitizeHtmlBrowserOutputModel!
  }

let SanitizeHtmlBrowserRemoteInputModel: z.ZodType<SanitizeHtmlBrowserRemoteInput>

export const SanitizeHtmlBrowserRemoteInputResolver =
  (): z.ZodType<SanitizeHtmlBrowserRemoteInput> => {
    if (!SanitizeHtmlBrowserRemoteInputModel) {
      SanitizeHtmlBrowserRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.lazy(() => FileContentWithSha256Resolver()),
        }),
      })
    }
    return SanitizeHtmlBrowserRemoteInputModel!
  }
