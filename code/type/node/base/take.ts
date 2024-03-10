import { z } from 'zod'
import { LOAD, MAKE, TEST } from '@termsurf/form'
import * as code from '~/code/type/code'

import {
  CompileCNodeClientInput,
  CompileCNodeExternalInput,
  CompileCNodeInput,
  CompileCNodeLocalExternalInput,
  CompileCNodeLocalInput,
  CompileCNodeLocalInternalInput,
  CompileCNodeOutput,
  CompileCNodeRemoteInput,
  CompileCppNodeClientInput,
  CompileCppNodeExternalInput,
  CompileCppNodeInput,
  CompileCppNodeLocalExternalInput,
  CompileCppNodeLocalInput,
  CompileCppNodeLocalInternalInput,
  CompileCppNodeOutput,
  CompileCppNodeRemoteInput,
  CompileRustNodeClientInput,
  CompileRustNodeExternalInput,
  CompileRustNodeInput,
  CompileRustNodeLocalExternalInput,
  CompileRustNodeLocalInput,
  CompileRustNodeLocalInternalInput,
  CompileRustNodeOutput,
  CompileRustNodeRemoteInput,
  CompileSwiftNodeClientInput,
  CompileSwiftNodeExternalInput,
  CompileSwiftNodeInput,
  CompileSwiftNodeLocalExternalInput,
  CompileSwiftNodeLocalInput,
  CompileSwiftNodeLocalInternalInput,
  CompileSwiftNodeOutput,
  CompileSwiftNodeRemoteInput,
  CompileWastNodeClientInput,
  CompileWastNodeExternalInput,
  CompileWastNodeInput,
  CompileWastNodeLocalExternalInput,
  CompileWastNodeLocalInput,
  CompileWastNodeLocalInternalInput,
  CompileWastNodeOutput,
  CompileWastNodeRemoteInput,
  ConvertArchiveNodeClientInput,
  ConvertArchiveNodeExternalInput,
  ConvertArchiveNodeInput,
  ConvertArchiveNodeLocalExternalInput,
  ConvertArchiveNodeLocalInput,
  ConvertArchiveNodeLocalInternalInput,
  ConvertArchiveNodeOutput,
  ConvertArchiveNodeRemoteInput,
  ConvertDocumentWithCalibreNodeClientInput,
  ConvertDocumentWithCalibreNodeExternalInput,
  ConvertDocumentWithCalibreNodeInput,
  ConvertDocumentWithCalibreNodeLocalExternalInput,
  ConvertDocumentWithCalibreNodeLocalInput,
  ConvertDocumentWithCalibreNodeLocalInternalInput,
  ConvertDocumentWithCalibreNodeOutput,
  ConvertDocumentWithCalibreNodeRemoteInput,
  ConvertDocumentWithEnscriptNodeClientInput,
  ConvertDocumentWithEnscriptNodeExternalInput,
  ConvertDocumentWithEnscriptNodeInput,
  ConvertDocumentWithEnscriptNodeLocalExternalInput,
  ConvertDocumentWithEnscriptNodeLocalInput,
  ConvertDocumentWithEnscriptNodeLocalInternalInput,
  ConvertDocumentWithEnscriptNodeOutput,
  ConvertDocumentWithEnscriptNodeRemoteInput,
  ConvertDocumentWithJupyterNodeClientInput,
  ConvertDocumentWithJupyterNodeExternalInput,
  ConvertDocumentWithJupyterNodeInput,
  ConvertDocumentWithJupyterNodeLocalExternalInput,
  ConvertDocumentWithJupyterNodeLocalInput,
  ConvertDocumentWithJupyterNodeLocalInternalInput,
  ConvertDocumentWithJupyterNodeOutput,
  ConvertDocumentWithJupyterNodeRemoteInput,
  ConvertDocumentWithLibreOfficeNodeClientInput,
  ConvertDocumentWithLibreOfficeNodeExternalInput,
  ConvertDocumentWithLibreOfficeNodeInput,
  ConvertDocumentWithLibreOfficeNodeLocalExternalInput,
  ConvertDocumentWithLibreOfficeNodeLocalInput,
  ConvertDocumentWithLibreOfficeNodeLocalInternalInput,
  ConvertDocumentWithLibreOfficeNodeOutput,
  ConvertDocumentWithLibreOfficeNodeRemoteInput,
  ConvertDocumentWithPandocNodeClientInput,
  ConvertDocumentWithPandocNodeExternalInput,
  ConvertDocumentWithPandocNodeInput,
  ConvertDocumentWithPandocNodeLocalExternalInput,
  ConvertDocumentWithPandocNodeLocalInput,
  ConvertDocumentWithPandocNodeLocalInternalInput,
  ConvertDocumentWithPandocNodeOutput,
  ConvertDocumentWithPandocNodeRemoteInput,
  ConvertFontWithFontForgeNodeClientInput,
  ConvertFontWithFontForgeNodeExternalInput,
  ConvertFontWithFontForgeNodeInput,
  ConvertFontWithFontForgeNodeLocalExternalInput,
  ConvertFontWithFontForgeNodeLocalInput,
  ConvertFontWithFontForgeNodeLocalInternalInput,
  ConvertFontWithFontForgeNodeOutput,
  ConvertFontWithFontForgeNodeRemoteInput,
  ConvertHtmlWithPuppeteerNodeClientInput,
  ConvertHtmlWithPuppeteerNodeExternalInput,
  ConvertHtmlWithPuppeteerNodeInput,
  ConvertHtmlWithPuppeteerNodeLocalExternalInput,
  ConvertHtmlWithPuppeteerNodeLocalInput,
  ConvertHtmlWithPuppeteerNodeLocalInternalInput,
  ConvertHtmlWithPuppeteerNodeOutput,
  ConvertHtmlWithPuppeteerNodeRemoteInput,
  ConvertImageWithImageMagickNodeClientInput,
  ConvertImageWithImageMagickNodeExternalInput,
  ConvertImageWithImageMagickNodeInput,
  ConvertImageWithImageMagickNodeLocalExternalInput,
  ConvertImageWithImageMagickNodeLocalInput,
  ConvertImageWithImageMagickNodeLocalInternalInput,
  ConvertImageWithImageMagickNodeOutput,
  ConvertImageWithImageMagickNodeRemoteInput,
  ConvertImageWithInkscapeNodeClientInput,
  ConvertImageWithInkscapeNodeExternalInput,
  ConvertImageWithInkscapeNodeInput,
  ConvertImageWithInkscapeNodeLocalExternalInput,
  ConvertImageWithInkscapeNodeLocalInput,
  ConvertImageWithInkscapeNodeLocalInternalInput,
  ConvertImageWithInkscapeNodeOutput,
  ConvertImageWithInkscapeNodeRemoteInput,
  ConvertLatexToPngNodeClientInput,
  ConvertLatexToPngNodeExternalInput,
  ConvertLatexToPngNodeInput,
  ConvertLatexToPngNodeLocalExternalInput,
  ConvertLatexToPngNodeLocalInput,
  ConvertLatexToPngNodeLocalInternalInput,
  ConvertLatexToPngNodeOutput,
  ConvertLatexToPngNodeRemoteInput,
  ConvertLatexWithPdfLatexNodeClientInput,
  ConvertLatexWithPdfLatexNodeExternalInput,
  ConvertLatexWithPdfLatexNodeInput,
  ConvertLatexWithPdfLatexNodeLocalExternalInput,
  ConvertLatexWithPdfLatexNodeLocalInput,
  ConvertLatexWithPdfLatexNodeLocalInternalInput,
  ConvertLatexWithPdfLatexNodeOutput,
  ConvertLatexWithPdfLatexNodeRemoteInput,
  ConvertMarkdownWithPuppeteerNodeClientInput,
  ConvertMarkdownWithPuppeteerNodeExternalInput,
  ConvertMarkdownWithPuppeteerNodeInput,
  ConvertMarkdownWithPuppeteerNodeLocalExternalInput,
  ConvertMarkdownWithPuppeteerNodeLocalInput,
  ConvertMarkdownWithPuppeteerNodeLocalInternalInput,
  ConvertMarkdownWithPuppeteerNodeOutput,
  ConvertMarkdownWithPuppeteerNodeRemoteInput,
  ConvertTxtWithPuppeteerNodeClientInput,
  ConvertTxtWithPuppeteerNodeExternalInput,
  ConvertTxtWithPuppeteerNodeInput,
  ConvertTxtWithPuppeteerNodeLocalExternalInput,
  ConvertTxtWithPuppeteerNodeLocalInput,
  ConvertTxtWithPuppeteerNodeLocalInternalInput,
  ConvertTxtWithPuppeteerNodeOutput,
  ConvertTxtWithPuppeteerNodeRemoteInput,
  ConvertVideoWithFfmpegNodeClientInput,
  ConvertVideoWithFfmpegNodeExternalInput,
  ConvertVideoWithFfmpegNodeInput,
  ConvertVideoWithFfmpegNodeLocalExternalInput,
  ConvertVideoWithFfmpegNodeLocalInput,
  ConvertVideoWithFfmpegNodeLocalInternalInput,
  ConvertVideoWithFfmpegNodeOutput,
  ConvertVideoWithFfmpegNodeRemoteInput,
  FormatAssemblyNodeClientInput,
  FormatAssemblyNodeExternalInput,
  FormatAssemblyNodeInput,
  FormatAssemblyNodeLocalExternalInput,
  FormatAssemblyNodeLocalInput,
  FormatAssemblyNodeLocalInternalInput,
  FormatAssemblyNodeOutput,
  FormatAssemblyNodeRemoteInput,
  FormatCodeWithClangFormatNodeClientInput,
  FormatCodeWithClangFormatNodeExternalInput,
  FormatCodeWithClangFormatNodeInput,
  FormatCodeWithClangFormatNodeLocalExternalInput,
  FormatCodeWithClangFormatNodeLocalInput,
  FormatCodeWithClangFormatNodeLocalInternalInput,
  FormatCodeWithClangFormatNodeOutput,
  FormatCodeWithClangFormatNodeRemoteInput,
  FormatKotlinNodeClientInput,
  FormatKotlinNodeExternalInput,
  FormatKotlinNodeInput,
  FormatKotlinNodeLocalExternalInput,
  FormatKotlinNodeLocalInput,
  FormatKotlinNodeLocalInternalInput,
  FormatKotlinNodeOutput,
  FormatKotlinNodeRemoteInput,
  FormatPythonNodeClientInput,
  FormatPythonNodeExternalInput,
  FormatPythonNodeInput,
  FormatPythonNodeLocalExternalInput,
  FormatPythonNodeLocalInput,
  FormatPythonNodeLocalInternalInput,
  FormatPythonNodeOutput,
  FormatPythonNodeRemoteInput,
  FormatRustNodeClientInput,
  FormatRustNodeExternalInput,
  FormatRustNodeInput,
  FormatRustNodeLocalExternalInput,
  FormatRustNodeLocalInput,
  FormatRustNodeLocalInternalInput,
  FormatRustNodeOutput,
  FormatRustNodeRemoteInput,
  FormatSwiftNodeClientInput,
  FormatSwiftNodeExternalInput,
  FormatSwiftNodeInput,
  FormatSwiftNodeLocalExternalInput,
  FormatSwiftNodeLocalInput,
  FormatSwiftNodeLocalInternalInput,
  FormatSwiftNodeOutput,
  FormatSwiftNodeRemoteInput,
  SanitizeHtmlNodeClientInput,
  SanitizeHtmlNodeExternalInput,
  SanitizeHtmlNodeInput,
  SanitizeHtmlNodeLocalExternalInput,
  SanitizeHtmlNodeLocalInput,
  SanitizeHtmlNodeLocalInternalInput,
  SanitizeHtmlNodeOutput,
  SanitizeHtmlNodeRemoteInput,
} from '~/code/type/node/base/cast'
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
  FileInputPathResolver,
  FilePathResolver,
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
  LocalOutputPathResolver,
  LocalPathResolver,
  PandocInputFormatResolver,
  PandocOutputFormatResolver,
  PdfLatexInputFormatResolver,
  PdfLatexOutputFormatResolver,
  PuppeteerInputFormatResolver,
  PuppeteerLifeCycleEventResolver,
  PuppeteerMarkdownInputFormatResolver,
  PuppeteerOutputFormatResolver,
  PuppeteerTxtInputFormatResolver,
  RemoteInputPathResolver,
  RustCompilerTargetResolver,
  RustInputFormatResolver,
  RustOutputFormatResolver,
  SwiftInputFormatResolver,
  TextStyleResolver,
  WastInputFormatResolver,
  WastOutputFormatResolver,
} from '~/code/type/shared/base/take'
import { ClangStyleAllResolver } from '~/code/type/shared/clang-format/take'

let CompileCNodeClientInputModel: z.ZodType<CompileCNodeClientInput>

export const CompileCNodeClientInputResolver =
  (): z.ZodType<CompileCNodeClientInput> => {
    if (!CompileCNodeClientInputModel) {
      CompileCNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileCNodeClientInputModel!
  }

let CompileCNodeExternalInputModel: z.ZodType<CompileCNodeExternalInput>

export const CompileCNodeExternalInputResolver =
  (): z.ZodType<CompileCNodeExternalInput> => {
    if (!CompileCNodeExternalInputModel) {
      CompileCNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileCNodeExternalInputModel!
  }

let CompileCNodeInputModel: z.ZodType<CompileCNodeInput>

export const CompileCNodeInputResolver =
  (): z.ZodType<CompileCNodeInput> => {
    if (!CompileCNodeInputModel) {
      CompileCNodeInputModel = z.union([
        z.lazy(() => CompileCNodeRemoteInputResolver()),
        z.lazy(() => CompileCNodeLocalExternalInputResolver()),
        z.lazy(() => CompileCNodeLocalInternalInputResolver()),
      ])
    }
    return CompileCNodeInputModel!
  }

let CompileCNodeLocalExternalInputModel: z.ZodType<CompileCNodeLocalExternalInput>

export const CompileCNodeLocalExternalInputResolver =
  (): z.ZodType<CompileCNodeLocalExternalInput> => {
    if (!CompileCNodeLocalExternalInputModel) {
      CompileCNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCNodeLocalExternalInputModel!
  }

let CompileCNodeLocalInputModel: z.ZodType<CompileCNodeLocalInput>

export const CompileCNodeLocalInputResolver =
  (): z.ZodType<CompileCNodeLocalInput> => {
    if (!CompileCNodeLocalInputModel) {
      CompileCNodeLocalInputModel = z.object({
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
    return CompileCNodeLocalInputModel!
  }

let CompileCNodeLocalInternalInputModel: z.ZodType<CompileCNodeLocalInternalInput>

export const CompileCNodeLocalInternalInputResolver =
  (): z.ZodType<CompileCNodeLocalInternalInput> => {
    if (!CompileCNodeLocalInternalInputModel) {
      CompileCNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCNodeLocalInternalInputModel!
  }

let CompileCNodeOutputModel: z.ZodType<CompileCNodeOutput>

export const CompileCNodeOutputResolver =
  (): z.ZodType<CompileCNodeOutput> => {
    if (!CompileCNodeOutputModel) {
      CompileCNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return CompileCNodeOutputModel!
  }

let CompileCNodeRemoteInputModel: z.ZodType<CompileCNodeRemoteInput>

export const CompileCNodeRemoteInputResolver =
  (): z.ZodType<CompileCNodeRemoteInput> => {
    if (!CompileCNodeRemoteInputModel) {
      CompileCNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCNodeRemoteInputModel!
  }

let CompileCppNodeClientInputModel: z.ZodType<CompileCppNodeClientInput>

export const CompileCppNodeClientInputResolver =
  (): z.ZodType<CompileCppNodeClientInput> => {
    if (!CompileCppNodeClientInputModel) {
      CompileCppNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileCppNodeClientInputModel!
  }

let CompileCppNodeExternalInputModel: z.ZodType<CompileCppNodeExternalInput>

export const CompileCppNodeExternalInputResolver =
  (): z.ZodType<CompileCppNodeExternalInput> => {
    if (!CompileCppNodeExternalInputModel) {
      CompileCppNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileCppNodeExternalInputModel!
  }

let CompileCppNodeInputModel: z.ZodType<CompileCppNodeInput>

export const CompileCppNodeInputResolver =
  (): z.ZodType<CompileCppNodeInput> => {
    if (!CompileCppNodeInputModel) {
      CompileCppNodeInputModel = z.union([
        z.lazy(() => CompileCppNodeRemoteInputResolver()),
        z.lazy(() => CompileCppNodeLocalExternalInputResolver()),
        z.lazy(() => CompileCppNodeLocalInternalInputResolver()),
      ])
    }
    return CompileCppNodeInputModel!
  }

let CompileCppNodeLocalExternalInputModel: z.ZodType<CompileCppNodeLocalExternalInput>

export const CompileCppNodeLocalExternalInputResolver =
  (): z.ZodType<CompileCppNodeLocalExternalInput> => {
    if (!CompileCppNodeLocalExternalInputModel) {
      CompileCppNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCppNodeLocalExternalInputModel!
  }

let CompileCppNodeLocalInputModel: z.ZodType<CompileCppNodeLocalInput>

export const CompileCppNodeLocalInputResolver =
  (): z.ZodType<CompileCppNodeLocalInput> => {
    if (!CompileCppNodeLocalInputModel) {
      CompileCppNodeLocalInputModel = z.object({
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
    return CompileCppNodeLocalInputModel!
  }

let CompileCppNodeLocalInternalInputModel: z.ZodType<CompileCppNodeLocalInternalInput>

export const CompileCppNodeLocalInternalInputResolver =
  (): z.ZodType<CompileCppNodeLocalInternalInput> => {
    if (!CompileCppNodeLocalInternalInputModel) {
      CompileCppNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCppNodeLocalInternalInputModel!
  }

let CompileCppNodeOutputModel: z.ZodType<CompileCppNodeOutput>

export const CompileCppNodeOutputResolver =
  (): z.ZodType<CompileCppNodeOutput> => {
    if (!CompileCppNodeOutputModel) {
      CompileCppNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return CompileCppNodeOutputModel!
  }

let CompileCppNodeRemoteInputModel: z.ZodType<CompileCppNodeRemoteInput>

export const CompileCppNodeRemoteInputResolver =
  (): z.ZodType<CompileCppNodeRemoteInput> => {
    if (!CompileCppNodeRemoteInputModel) {
      CompileCppNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CppInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return CompileCppNodeRemoteInputModel!
  }

let CompileRustNodeClientInputModel: z.ZodType<CompileRustNodeClientInput>

export const CompileRustNodeClientInputResolver =
  (): z.ZodType<CompileRustNodeClientInput> => {
    if (!CompileRustNodeClientInputModel) {
      CompileRustNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileRustNodeClientInputModel!
  }

let CompileRustNodeExternalInputModel: z.ZodType<CompileRustNodeExternalInput>

export const CompileRustNodeExternalInputResolver =
  (): z.ZodType<CompileRustNodeExternalInput> => {
    if (!CompileRustNodeExternalInputModel) {
      CompileRustNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return CompileRustNodeExternalInputModel!
  }

let CompileRustNodeInputModel: z.ZodType<CompileRustNodeInput>

export const CompileRustNodeInputResolver =
  (): z.ZodType<CompileRustNodeInput> => {
    if (!CompileRustNodeInputModel) {
      CompileRustNodeInputModel = z.union([
        z.lazy(() => CompileRustNodeRemoteInputResolver()),
        z.lazy(() => CompileRustNodeLocalExternalInputResolver()),
        z.lazy(() => CompileRustNodeLocalInternalInputResolver()),
      ])
    }
    return CompileRustNodeInputModel!
  }

let CompileRustNodeLocalExternalInputModel: z.ZodType<CompileRustNodeLocalExternalInput>

export const CompileRustNodeLocalExternalInputResolver =
  (): z.ZodType<CompileRustNodeLocalExternalInput> => {
    if (!CompileRustNodeLocalExternalInputModel) {
      CompileRustNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustNodeLocalExternalInputModel!
  }

let CompileRustNodeLocalInputModel: z.ZodType<CompileRustNodeLocalInput>

export const CompileRustNodeLocalInputResolver =
  (): z.ZodType<CompileRustNodeLocalInput> => {
    if (!CompileRustNodeLocalInputModel) {
      CompileRustNodeLocalInputModel = z.object({
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
    return CompileRustNodeLocalInputModel!
  }

let CompileRustNodeLocalInternalInputModel: z.ZodType<CompileRustNodeLocalInternalInput>

export const CompileRustNodeLocalInternalInputResolver =
  (): z.ZodType<CompileRustNodeLocalInternalInput> => {
    if (!CompileRustNodeLocalInternalInputModel) {
      CompileRustNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustNodeLocalInternalInputModel!
  }

let CompileRustNodeOutputModel: z.ZodType<CompileRustNodeOutput>

export const CompileRustNodeOutputResolver =
  (): z.ZodType<CompileRustNodeOutput> => {
    if (!CompileRustNodeOutputModel) {
      CompileRustNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return CompileRustNodeOutputModel!
  }

let CompileRustNodeRemoteInputModel: z.ZodType<CompileRustNodeRemoteInput>

export const CompileRustNodeRemoteInputResolver =
  (): z.ZodType<CompileRustNodeRemoteInput> => {
    if (!CompileRustNodeRemoteInputModel) {
      CompileRustNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => RustInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => RustOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          optimize: z.optional(z.boolean()).default(false),
          target: z.optional(
            z.lazy(() => RustCompilerTargetResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
        explain: z.optional(z.boolean()).default(false),
      })
    }
    return CompileRustNodeRemoteInputModel!
  }

let CompileSwiftNodeClientInputModel: z.ZodType<CompileSwiftNodeClientInput>

export const CompileSwiftNodeClientInputResolver =
  (): z.ZodType<CompileSwiftNodeClientInput> => {
    if (!CompileSwiftNodeClientInputModel) {
      CompileSwiftNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
        }),
      })
    }
    return CompileSwiftNodeClientInputModel!
  }

let CompileSwiftNodeExternalInputModel: z.ZodType<CompileSwiftNodeExternalInput>

export const CompileSwiftNodeExternalInputResolver =
  (): z.ZodType<CompileSwiftNodeExternalInput> => {
    if (!CompileSwiftNodeExternalInputModel) {
      CompileSwiftNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
        }),
      })
    }
    return CompileSwiftNodeExternalInputModel!
  }

let CompileSwiftNodeInputModel: z.ZodType<CompileSwiftNodeInput>

export const CompileSwiftNodeInputResolver =
  (): z.ZodType<CompileSwiftNodeInput> => {
    if (!CompileSwiftNodeInputModel) {
      CompileSwiftNodeInputModel = z.union([
        z.lazy(() => CompileSwiftNodeRemoteInputResolver()),
        z.lazy(() => CompileSwiftNodeLocalExternalInputResolver()),
        z.lazy(() => CompileSwiftNodeLocalInternalInputResolver()),
      ])
    }
    return CompileSwiftNodeInputModel!
  }

let CompileSwiftNodeLocalExternalInputModel: z.ZodType<CompileSwiftNodeLocalExternalInput>

export const CompileSwiftNodeLocalExternalInputResolver =
  (): z.ZodType<CompileSwiftNodeLocalExternalInput> => {
    if (!CompileSwiftNodeLocalExternalInputModel) {
      CompileSwiftNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileSwiftNodeLocalExternalInputModel!
  }

let CompileSwiftNodeLocalInputModel: z.ZodType<CompileSwiftNodeLocalInput>

export const CompileSwiftNodeLocalInputResolver =
  (): z.ZodType<CompileSwiftNodeLocalInput> => {
    if (!CompileSwiftNodeLocalInputModel) {
      CompileSwiftNodeLocalInputModel = z.object({
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
    return CompileSwiftNodeLocalInputModel!
  }

let CompileSwiftNodeLocalInternalInputModel: z.ZodType<CompileSwiftNodeLocalInternalInput>

export const CompileSwiftNodeLocalInternalInputResolver =
  (): z.ZodType<CompileSwiftNodeLocalInternalInput> => {
    if (!CompileSwiftNodeLocalInternalInputModel) {
      CompileSwiftNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileSwiftNodeLocalInternalInputModel!
  }

let CompileSwiftNodeOutputModel: z.ZodType<CompileSwiftNodeOutput>

export const CompileSwiftNodeOutputResolver =
  (): z.ZodType<CompileSwiftNodeOutput> => {
    if (!CompileSwiftNodeOutputModel) {
      CompileSwiftNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return CompileSwiftNodeOutputModel!
  }

let CompileSwiftNodeRemoteInputModel: z.ZodType<CompileSwiftNodeRemoteInput>

export const CompileSwiftNodeRemoteInputResolver =
  (): z.ZodType<CompileSwiftNodeRemoteInput> => {
    if (!CompileSwiftNodeRemoteInputModel) {
      CompileSwiftNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => SwiftInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => BackendCompilationOutputResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileSwiftNodeRemoteInputModel!
  }

let CompileWastNodeClientInputModel: z.ZodType<CompileWastNodeClientInput>

export const CompileWastNodeClientInputResolver =
  (): z.ZodType<CompileWastNodeClientInput> => {
    if (!CompileWastNodeClientInputModel) {
      CompileWastNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
        }),
      })
    }
    return CompileWastNodeClientInputModel!
  }

let CompileWastNodeExternalInputModel: z.ZodType<CompileWastNodeExternalInput>

export const CompileWastNodeExternalInputResolver =
  (): z.ZodType<CompileWastNodeExternalInput> => {
    if (!CompileWastNodeExternalInputModel) {
      CompileWastNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
        }),
      })
    }
    return CompileWastNodeExternalInputModel!
  }

let CompileWastNodeInputModel: z.ZodType<CompileWastNodeInput>

export const CompileWastNodeInputResolver =
  (): z.ZodType<CompileWastNodeInput> => {
    if (!CompileWastNodeInputModel) {
      CompileWastNodeInputModel = z.union([
        z.lazy(() => CompileWastNodeRemoteInputResolver()),
        z.lazy(() => CompileWastNodeLocalExternalInputResolver()),
        z.lazy(() => CompileWastNodeLocalInternalInputResolver()),
      ])
    }
    return CompileWastNodeInputModel!
  }

let CompileWastNodeLocalExternalInputModel: z.ZodType<CompileWastNodeLocalExternalInput>

export const CompileWastNodeLocalExternalInputResolver =
  (): z.ZodType<CompileWastNodeLocalExternalInput> => {
    if (!CompileWastNodeLocalExternalInputModel) {
      CompileWastNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileWastNodeLocalExternalInputModel!
  }

let CompileWastNodeLocalInputModel: z.ZodType<CompileWastNodeLocalInput>

export const CompileWastNodeLocalInputResolver =
  (): z.ZodType<CompileWastNodeLocalInput> => {
    if (!CompileWastNodeLocalInputModel) {
      CompileWastNodeLocalInputModel = z.object({
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
    return CompileWastNodeLocalInputModel!
  }

let CompileWastNodeLocalInternalInputModel: z.ZodType<CompileWastNodeLocalInternalInput>

export const CompileWastNodeLocalInternalInputResolver =
  (): z.ZodType<CompileWastNodeLocalInternalInput> => {
    if (!CompileWastNodeLocalInternalInputModel) {
      CompileWastNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileWastNodeLocalInternalInputModel!
  }

let CompileWastNodeOutputModel: z.ZodType<CompileWastNodeOutput>

export const CompileWastNodeOutputResolver =
  (): z.ZodType<CompileWastNodeOutput> => {
    if (!CompileWastNodeOutputModel) {
      CompileWastNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return CompileWastNodeOutputModel!
  }

let CompileWastNodeRemoteInputModel: z.ZodType<CompileWastNodeRemoteInput>

export const CompileWastNodeRemoteInputResolver =
  (): z.ZodType<CompileWastNodeRemoteInput> => {
    if (!CompileWastNodeRemoteInputModel) {
      CompileWastNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => WastInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => WastOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return CompileWastNodeRemoteInputModel!
  }

let ConvertArchiveNodeClientInputModel: z.ZodType<ConvertArchiveNodeClientInput>

export const ConvertArchiveNodeClientInputResolver =
  (): z.ZodType<ConvertArchiveNodeClientInput> => {
    if (!ConvertArchiveNodeClientInputModel) {
      ConvertArchiveNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
        }),
      })
    }
    return ConvertArchiveNodeClientInputModel!
  }

let ConvertArchiveNodeExternalInputModel: z.ZodType<ConvertArchiveNodeExternalInput>

export const ConvertArchiveNodeExternalInputResolver =
  (): z.ZodType<ConvertArchiveNodeExternalInput> => {
    if (!ConvertArchiveNodeExternalInputModel) {
      ConvertArchiveNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
        }),
      })
    }
    return ConvertArchiveNodeExternalInputModel!
  }

let ConvertArchiveNodeInputModel: z.ZodType<ConvertArchiveNodeInput>

export const ConvertArchiveNodeInputResolver =
  (): z.ZodType<ConvertArchiveNodeInput> => {
    if (!ConvertArchiveNodeInputModel) {
      ConvertArchiveNodeInputModel = z.union([
        z.lazy(() => ConvertArchiveNodeRemoteInputResolver()),
        z.lazy(() => ConvertArchiveNodeLocalExternalInputResolver()),
        z.lazy(() => ConvertArchiveNodeLocalInternalInputResolver()),
      ])
    }
    return ConvertArchiveNodeInputModel!
  }

let ConvertArchiveNodeLocalExternalInputModel: z.ZodType<ConvertArchiveNodeLocalExternalInput>

export const ConvertArchiveNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertArchiveNodeLocalExternalInput> => {
    if (!ConvertArchiveNodeLocalExternalInputModel) {
      ConvertArchiveNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertArchiveNodeLocalExternalInputModel!
  }

let ConvertArchiveNodeLocalInputModel: z.ZodType<ConvertArchiveNodeLocalInput>

export const ConvertArchiveNodeLocalInputResolver =
  (): z.ZodType<ConvertArchiveNodeLocalInput> => {
    if (!ConvertArchiveNodeLocalInputModel) {
      ConvertArchiveNodeLocalInputModel = z.object({
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
    return ConvertArchiveNodeLocalInputModel!
  }

let ConvertArchiveNodeLocalInternalInputModel: z.ZodType<ConvertArchiveNodeLocalInternalInput>

export const ConvertArchiveNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertArchiveNodeLocalInternalInput> => {
    if (!ConvertArchiveNodeLocalInternalInputModel) {
      ConvertArchiveNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertArchiveNodeLocalInternalInputModel!
  }

let ConvertArchiveNodeOutputModel: z.ZodType<ConvertArchiveNodeOutput>

export const ConvertArchiveNodeOutputResolver =
  (): z.ZodType<ConvertArchiveNodeOutput> => {
    if (!ConvertArchiveNodeOutputModel) {
      ConvertArchiveNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertArchiveNodeOutputModel!
  }

let ConvertArchiveNodeRemoteInputModel: z.ZodType<ConvertArchiveNodeRemoteInput>

export const ConvertArchiveNodeRemoteInputResolver =
  (): z.ZodType<ConvertArchiveNodeRemoteInput> => {
    if (!ConvertArchiveNodeRemoteInputModel) {
      ConvertArchiveNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ArchiveFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertArchiveNodeRemoteInputModel!
  }

let ConvertDocumentWithCalibreNodeClientInputModel: z.ZodType<ConvertDocumentWithCalibreNodeClientInput>

export const ConvertDocumentWithCalibreNodeClientInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeClientInput> => {
    if (!ConvertDocumentWithCalibreNodeClientInputModel) {
      ConvertDocumentWithCalibreNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithCalibreNodeClientInputModel!
  }

let ConvertDocumentWithCalibreNodeExternalInputModel: z.ZodType<ConvertDocumentWithCalibreNodeExternalInput>

export const ConvertDocumentWithCalibreNodeExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeExternalInput> => {
    if (!ConvertDocumentWithCalibreNodeExternalInputModel) {
      ConvertDocumentWithCalibreNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithCalibreNodeExternalInputModel!
  }

let ConvertDocumentWithCalibreNodeInputModel: z.ZodType<ConvertDocumentWithCalibreNodeInput>

export const ConvertDocumentWithCalibreNodeInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeInput> => {
    if (!ConvertDocumentWithCalibreNodeInputModel) {
      ConvertDocumentWithCalibreNodeInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithCalibreNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithCalibreNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithCalibreNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithCalibreNodeInputModel!
  }

let ConvertDocumentWithCalibreNodeLocalExternalInputModel: z.ZodType<ConvertDocumentWithCalibreNodeLocalExternalInput>

export const ConvertDocumentWithCalibreNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeLocalExternalInput> => {
    if (!ConvertDocumentWithCalibreNodeLocalExternalInputModel) {
      ConvertDocumentWithCalibreNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithCalibreNodeLocalExternalInputModel!
  }

let ConvertDocumentWithCalibreNodeLocalInputModel: z.ZodType<ConvertDocumentWithCalibreNodeLocalInput>

export const ConvertDocumentWithCalibreNodeLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeLocalInput> => {
    if (!ConvertDocumentWithCalibreNodeLocalInputModel) {
      ConvertDocumentWithCalibreNodeLocalInputModel = z.object({
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
    return ConvertDocumentWithCalibreNodeLocalInputModel!
  }

let ConvertDocumentWithCalibreNodeLocalInternalInputModel: z.ZodType<ConvertDocumentWithCalibreNodeLocalInternalInput>

export const ConvertDocumentWithCalibreNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeLocalInternalInput> => {
    if (!ConvertDocumentWithCalibreNodeLocalInternalInputModel) {
      ConvertDocumentWithCalibreNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithCalibreNodeLocalInternalInputModel!
  }

let ConvertDocumentWithCalibreNodeOutputModel: z.ZodType<ConvertDocumentWithCalibreNodeOutput>

export const ConvertDocumentWithCalibreNodeOutputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeOutput> => {
    if (!ConvertDocumentWithCalibreNodeOutputModel) {
      ConvertDocumentWithCalibreNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertDocumentWithCalibreNodeOutputModel!
  }

let ConvertDocumentWithCalibreNodeRemoteInputModel: z.ZodType<ConvertDocumentWithCalibreNodeRemoteInput>

export const ConvertDocumentWithCalibreNodeRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithCalibreNodeRemoteInput> => {
    if (!ConvertDocumentWithCalibreNodeRemoteInputModel) {
      ConvertDocumentWithCalibreNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => CalibreInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => CalibreOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithCalibreNodeRemoteInputModel!
  }

let ConvertDocumentWithEnscriptNodeClientInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeClientInput>

export const ConvertDocumentWithEnscriptNodeClientInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeClientInput> => {
    if (!ConvertDocumentWithEnscriptNodeClientInputModel) {
      ConvertDocumentWithEnscriptNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithEnscriptNodeClientInputModel!
  }

let ConvertDocumentWithEnscriptNodeExternalInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeExternalInput>

export const ConvertDocumentWithEnscriptNodeExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeExternalInput> => {
    if (!ConvertDocumentWithEnscriptNodeExternalInputModel) {
      ConvertDocumentWithEnscriptNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithEnscriptNodeExternalInputModel!
  }

let ConvertDocumentWithEnscriptNodeInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeInput>

export const ConvertDocumentWithEnscriptNodeInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeInput> => {
    if (!ConvertDocumentWithEnscriptNodeInputModel) {
      ConvertDocumentWithEnscriptNodeInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithEnscriptNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithEnscriptNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithEnscriptNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithEnscriptNodeInputModel!
  }

let ConvertDocumentWithEnscriptNodeLocalExternalInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeLocalExternalInput>

export const ConvertDocumentWithEnscriptNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeLocalExternalInput> => {
    if (!ConvertDocumentWithEnscriptNodeLocalExternalInputModel) {
      ConvertDocumentWithEnscriptNodeLocalExternalInputModel = z.object(
        {
          handle: z.literal('external'),
          input: z.object({
            format: z.lazy(() => EnscriptInputFormatResolver()),
            file: z.union([
              z.lazy(() => RemoteInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => EnscriptOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          }),
          pathScope: z.optional(z.string()),
        },
      )
    }
    return ConvertDocumentWithEnscriptNodeLocalExternalInputModel!
  }

let ConvertDocumentWithEnscriptNodeLocalInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeLocalInput>

export const ConvertDocumentWithEnscriptNodeLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeLocalInput> => {
    if (!ConvertDocumentWithEnscriptNodeLocalInputModel) {
      ConvertDocumentWithEnscriptNodeLocalInputModel = z.object({
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
    return ConvertDocumentWithEnscriptNodeLocalInputModel!
  }

let ConvertDocumentWithEnscriptNodeLocalInternalInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeLocalInternalInput>

export const ConvertDocumentWithEnscriptNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeLocalInternalInput> => {
    if (!ConvertDocumentWithEnscriptNodeLocalInternalInputModel) {
      ConvertDocumentWithEnscriptNodeLocalInternalInputModel = z.object(
        {
          handle: z.optional(z.literal('internal')),
          input: z.object({
            format: z.lazy(() => EnscriptInputFormatResolver()),
            file: z.union([
              z.lazy(() => FileInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => EnscriptOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          }),
          pathScope: z.optional(z.string()),
        },
      )
    }
    return ConvertDocumentWithEnscriptNodeLocalInternalInputModel!
  }

let ConvertDocumentWithEnscriptNodeOutputModel: z.ZodType<ConvertDocumentWithEnscriptNodeOutput>

export const ConvertDocumentWithEnscriptNodeOutputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeOutput> => {
    if (!ConvertDocumentWithEnscriptNodeOutputModel) {
      ConvertDocumentWithEnscriptNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertDocumentWithEnscriptNodeOutputModel!
  }

let ConvertDocumentWithEnscriptNodeRemoteInputModel: z.ZodType<ConvertDocumentWithEnscriptNodeRemoteInput>

export const ConvertDocumentWithEnscriptNodeRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithEnscriptNodeRemoteInput> => {
    if (!ConvertDocumentWithEnscriptNodeRemoteInputModel) {
      ConvertDocumentWithEnscriptNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => EnscriptInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => EnscriptOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithEnscriptNodeRemoteInputModel!
  }

let ConvertDocumentWithJupyterNodeClientInputModel: z.ZodType<ConvertDocumentWithJupyterNodeClientInput>

export const ConvertDocumentWithJupyterNodeClientInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeClientInput> => {
    if (!ConvertDocumentWithJupyterNodeClientInputModel) {
      ConvertDocumentWithJupyterNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertDocumentWithJupyterNodeClientInputModel!
  }

let ConvertDocumentWithJupyterNodeExternalInputModel: z.ZodType<ConvertDocumentWithJupyterNodeExternalInput>

export const ConvertDocumentWithJupyterNodeExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeExternalInput> => {
    if (!ConvertDocumentWithJupyterNodeExternalInputModel) {
      ConvertDocumentWithJupyterNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertDocumentWithJupyterNodeExternalInputModel!
  }

let ConvertDocumentWithJupyterNodeInputModel: z.ZodType<ConvertDocumentWithJupyterNodeInput>

export const ConvertDocumentWithJupyterNodeInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeInput> => {
    if (!ConvertDocumentWithJupyterNodeInputModel) {
      ConvertDocumentWithJupyterNodeInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithJupyterNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithJupyterNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithJupyterNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithJupyterNodeInputModel!
  }

let ConvertDocumentWithJupyterNodeLocalExternalInputModel: z.ZodType<ConvertDocumentWithJupyterNodeLocalExternalInput>

export const ConvertDocumentWithJupyterNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeLocalExternalInput> => {
    if (!ConvertDocumentWithJupyterNodeLocalExternalInputModel) {
      ConvertDocumentWithJupyterNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithJupyterNodeLocalExternalInputModel!
  }

let ConvertDocumentWithJupyterNodeLocalInputModel: z.ZodType<ConvertDocumentWithJupyterNodeLocalInput>

export const ConvertDocumentWithJupyterNodeLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeLocalInput> => {
    if (!ConvertDocumentWithJupyterNodeLocalInputModel) {
      ConvertDocumentWithJupyterNodeLocalInputModel = z.object({
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
    return ConvertDocumentWithJupyterNodeLocalInputModel!
  }

let ConvertDocumentWithJupyterNodeLocalInternalInputModel: z.ZodType<ConvertDocumentWithJupyterNodeLocalInternalInput>

export const ConvertDocumentWithJupyterNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeLocalInternalInput> => {
    if (!ConvertDocumentWithJupyterNodeLocalInternalInputModel) {
      ConvertDocumentWithJupyterNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithJupyterNodeLocalInternalInputModel!
  }

let ConvertDocumentWithJupyterNodeOutputModel: z.ZodType<ConvertDocumentWithJupyterNodeOutput>

export const ConvertDocumentWithJupyterNodeOutputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeOutput> => {
    if (!ConvertDocumentWithJupyterNodeOutputModel) {
      ConvertDocumentWithJupyterNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertDocumentWithJupyterNodeOutputModel!
  }

let ConvertDocumentWithJupyterNodeRemoteInputModel: z.ZodType<ConvertDocumentWithJupyterNodeRemoteInput>

export const ConvertDocumentWithJupyterNodeRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithJupyterNodeRemoteInput> => {
    if (!ConvertDocumentWithJupyterNodeRemoteInputModel) {
      ConvertDocumentWithJupyterNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithJupyterNodeRemoteInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeClientInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeClientInput>

export const ConvertDocumentWithLibreOfficeNodeClientInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeClientInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeClientInputModel) {
      ConvertDocumentWithLibreOfficeNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithLibreOfficeNodeClientInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeExternalInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeExternalInput>

export const ConvertDocumentWithLibreOfficeNodeExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeExternalInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeExternalInputModel) {
      ConvertDocumentWithLibreOfficeNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithLibreOfficeNodeExternalInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeInput>

export const ConvertDocumentWithLibreOfficeNodeInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeInputModel) {
      ConvertDocumentWithLibreOfficeNodeInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithLibreOfficeNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithLibreOfficeNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithLibreOfficeNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithLibreOfficeNodeInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeLocalExternalInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalExternalInput>

export const ConvertDocumentWithLibreOfficeNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalExternalInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeLocalExternalInputModel) {
      ConvertDocumentWithLibreOfficeNodeLocalExternalInputModel =
        z.object({
          handle: z.literal('external'),
          input: z.object({
            format: z.lazy(() => LibreOfficeInputFormatResolver()),
            file: z.union([
              z.lazy(() => RemoteInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => LibreOfficeOutputFormatResolver()),
          }),
          pathScope: z.optional(z.string()),
        })
    }
    return ConvertDocumentWithLibreOfficeNodeLocalExternalInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeLocalInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalInput>

export const ConvertDocumentWithLibreOfficeNodeLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeLocalInputModel) {
      ConvertDocumentWithLibreOfficeNodeLocalInputModel = z.object({
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
    return ConvertDocumentWithLibreOfficeNodeLocalInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeLocalInternalInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalInternalInput>

export const ConvertDocumentWithLibreOfficeNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeLocalInternalInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeLocalInternalInputModel) {
      ConvertDocumentWithLibreOfficeNodeLocalInternalInputModel =
        z.object({
          handle: z.optional(z.literal('internal')),
          input: z.object({
            format: z.lazy(() => LibreOfficeInputFormatResolver()),
            file: z.union([
              z.lazy(() => FileInputPathResolver()),
              z.lazy(() => FileContentResolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => LibreOfficeOutputFormatResolver()),
            directory: z.optional(
              z.lazy(() => LocalOutputPathResolver()),
            ),
          }),
          pathScope: z.optional(z.string()),
        })
    }
    return ConvertDocumentWithLibreOfficeNodeLocalInternalInputModel!
  }

let ConvertDocumentWithLibreOfficeNodeOutputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeOutput>

export const ConvertDocumentWithLibreOfficeNodeOutputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeOutput> => {
    if (!ConvertDocumentWithLibreOfficeNodeOutputModel) {
      ConvertDocumentWithLibreOfficeNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertDocumentWithLibreOfficeNodeOutputModel!
  }

let ConvertDocumentWithLibreOfficeNodeRemoteInputModel: z.ZodType<ConvertDocumentWithLibreOfficeNodeRemoteInput>

export const ConvertDocumentWithLibreOfficeNodeRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithLibreOfficeNodeRemoteInput> => {
    if (!ConvertDocumentWithLibreOfficeNodeRemoteInputModel) {
      ConvertDocumentWithLibreOfficeNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => LibreOfficeInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => LibreOfficeOutputFormatResolver()),
          directory: z.optional(
            z.lazy(() => LocalOutputPathResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithLibreOfficeNodeRemoteInputModel!
  }

let ConvertDocumentWithPandocNodeClientInputModel: z.ZodType<ConvertDocumentWithPandocNodeClientInput>

export const ConvertDocumentWithPandocNodeClientInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeClientInput> => {
    if (!ConvertDocumentWithPandocNodeClientInputModel) {
      ConvertDocumentWithPandocNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithPandocNodeClientInputModel!
  }

let ConvertDocumentWithPandocNodeExternalInputModel: z.ZodType<ConvertDocumentWithPandocNodeExternalInput>

export const ConvertDocumentWithPandocNodeExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeExternalInput> => {
    if (!ConvertDocumentWithPandocNodeExternalInputModel) {
      ConvertDocumentWithPandocNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
        }),
      })
    }
    return ConvertDocumentWithPandocNodeExternalInputModel!
  }

let ConvertDocumentWithPandocNodeInputModel: z.ZodType<ConvertDocumentWithPandocNodeInput>

export const ConvertDocumentWithPandocNodeInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeInput> => {
    if (!ConvertDocumentWithPandocNodeInputModel) {
      ConvertDocumentWithPandocNodeInputModel = z.union([
        z.lazy(() =>
          ConvertDocumentWithPandocNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithPandocNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertDocumentWithPandocNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertDocumentWithPandocNodeInputModel!
  }

let ConvertDocumentWithPandocNodeLocalExternalInputModel: z.ZodType<ConvertDocumentWithPandocNodeLocalExternalInput>

export const ConvertDocumentWithPandocNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeLocalExternalInput> => {
    if (!ConvertDocumentWithPandocNodeLocalExternalInputModel) {
      ConvertDocumentWithPandocNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithPandocNodeLocalExternalInputModel!
  }

let ConvertDocumentWithPandocNodeLocalInputModel: z.ZodType<ConvertDocumentWithPandocNodeLocalInput>

export const ConvertDocumentWithPandocNodeLocalInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeLocalInput> => {
    if (!ConvertDocumentWithPandocNodeLocalInputModel) {
      ConvertDocumentWithPandocNodeLocalInputModel = z.object({
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
    return ConvertDocumentWithPandocNodeLocalInputModel!
  }

let ConvertDocumentWithPandocNodeLocalInternalInputModel: z.ZodType<ConvertDocumentWithPandocNodeLocalInternalInput>

export const ConvertDocumentWithPandocNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeLocalInternalInput> => {
    if (!ConvertDocumentWithPandocNodeLocalInternalInputModel) {
      ConvertDocumentWithPandocNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithPandocNodeLocalInternalInputModel!
  }

let ConvertDocumentWithPandocNodeOutputModel: z.ZodType<ConvertDocumentWithPandocNodeOutput>

export const ConvertDocumentWithPandocNodeOutputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeOutput> => {
    if (!ConvertDocumentWithPandocNodeOutputModel) {
      ConvertDocumentWithPandocNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertDocumentWithPandocNodeOutputModel!
  }

let ConvertDocumentWithPandocNodeRemoteInputModel: z.ZodType<ConvertDocumentWithPandocNodeRemoteInput>

export const ConvertDocumentWithPandocNodeRemoteInputResolver =
  (): z.ZodType<ConvertDocumentWithPandocNodeRemoteInput> => {
    if (!ConvertDocumentWithPandocNodeRemoteInputModel) {
      ConvertDocumentWithPandocNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PandocInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PandocOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertDocumentWithPandocNodeRemoteInputModel!
  }

let ConvertFontWithFontForgeNodeClientInputModel: z.ZodType<ConvertFontWithFontForgeNodeClientInput>

export const ConvertFontWithFontForgeNodeClientInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeClientInput> => {
    if (!ConvertFontWithFontForgeNodeClientInputModel) {
      ConvertFontWithFontForgeNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
        }),
      })
    }
    return ConvertFontWithFontForgeNodeClientInputModel!
  }

let ConvertFontWithFontForgeNodeExternalInputModel: z.ZodType<ConvertFontWithFontForgeNodeExternalInput>

export const ConvertFontWithFontForgeNodeExternalInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeExternalInput> => {
    if (!ConvertFontWithFontForgeNodeExternalInputModel) {
      ConvertFontWithFontForgeNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
        }),
      })
    }
    return ConvertFontWithFontForgeNodeExternalInputModel!
  }

let ConvertFontWithFontForgeNodeInputModel: z.ZodType<ConvertFontWithFontForgeNodeInput>

export const ConvertFontWithFontForgeNodeInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeInput> => {
    if (!ConvertFontWithFontForgeNodeInputModel) {
      ConvertFontWithFontForgeNodeInputModel = z.union([
        z.lazy(() => ConvertFontWithFontForgeNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertFontWithFontForgeNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertFontWithFontForgeNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertFontWithFontForgeNodeInputModel!
  }

let ConvertFontWithFontForgeNodeLocalExternalInputModel: z.ZodType<ConvertFontWithFontForgeNodeLocalExternalInput>

export const ConvertFontWithFontForgeNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeLocalExternalInput> => {
    if (!ConvertFontWithFontForgeNodeLocalExternalInputModel) {
      ConvertFontWithFontForgeNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertFontWithFontForgeNodeLocalExternalInputModel!
  }

let ConvertFontWithFontForgeNodeLocalInputModel: z.ZodType<ConvertFontWithFontForgeNodeLocalInput>

export const ConvertFontWithFontForgeNodeLocalInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeLocalInput> => {
    if (!ConvertFontWithFontForgeNodeLocalInputModel) {
      ConvertFontWithFontForgeNodeLocalInputModel = z.object({
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
    return ConvertFontWithFontForgeNodeLocalInputModel!
  }

let ConvertFontWithFontForgeNodeLocalInternalInputModel: z.ZodType<ConvertFontWithFontForgeNodeLocalInternalInput>

export const ConvertFontWithFontForgeNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeLocalInternalInput> => {
    if (!ConvertFontWithFontForgeNodeLocalInternalInputModel) {
      ConvertFontWithFontForgeNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertFontWithFontForgeNodeLocalInternalInputModel!
  }

let ConvertFontWithFontForgeNodeOutputModel: z.ZodType<ConvertFontWithFontForgeNodeOutput>

export const ConvertFontWithFontForgeNodeOutputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeOutput> => {
    if (!ConvertFontWithFontForgeNodeOutputModel) {
      ConvertFontWithFontForgeNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertFontWithFontForgeNodeOutputModel!
  }

let ConvertFontWithFontForgeNodeRemoteInputModel: z.ZodType<ConvertFontWithFontForgeNodeRemoteInput>

export const ConvertFontWithFontForgeNodeRemoteInputResolver =
  (): z.ZodType<ConvertFontWithFontForgeNodeRemoteInput> => {
    if (!ConvertFontWithFontForgeNodeRemoteInputModel) {
      ConvertFontWithFontForgeNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FontFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertFontWithFontForgeNodeRemoteInputModel!
  }

let ConvertHtmlWithPuppeteerNodeClientInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeClientInput>

export const ConvertHtmlWithPuppeteerNodeClientInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeClientInput> => {
    if (!ConvertHtmlWithPuppeteerNodeClientInputModel) {
      ConvertHtmlWithPuppeteerNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertHtmlWithPuppeteerNodeClientInputModel!
  }

let ConvertHtmlWithPuppeteerNodeExternalInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeExternalInput>

export const ConvertHtmlWithPuppeteerNodeExternalInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeExternalInput> => {
    if (!ConvertHtmlWithPuppeteerNodeExternalInputModel) {
      ConvertHtmlWithPuppeteerNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertHtmlWithPuppeteerNodeExternalInputModel!
  }

let ConvertHtmlWithPuppeteerNodeInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeInput>

export const ConvertHtmlWithPuppeteerNodeInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeInput> => {
    if (!ConvertHtmlWithPuppeteerNodeInputModel) {
      ConvertHtmlWithPuppeteerNodeInputModel = z.union([
        z.lazy(() => ConvertHtmlWithPuppeteerNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertHtmlWithPuppeteerNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertHtmlWithPuppeteerNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertHtmlWithPuppeteerNodeInputModel!
  }

let ConvertHtmlWithPuppeteerNodeLocalExternalInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeLocalExternalInput>

export const ConvertHtmlWithPuppeteerNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeLocalExternalInput> => {
    if (!ConvertHtmlWithPuppeteerNodeLocalExternalInputModel) {
      ConvertHtmlWithPuppeteerNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertHtmlWithPuppeteerNodeLocalExternalInputModel!
  }

let ConvertHtmlWithPuppeteerNodeLocalInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeLocalInput>

export const ConvertHtmlWithPuppeteerNodeLocalInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeLocalInput> => {
    if (!ConvertHtmlWithPuppeteerNodeLocalInputModel) {
      ConvertHtmlWithPuppeteerNodeLocalInputModel = z.object({
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
    return ConvertHtmlWithPuppeteerNodeLocalInputModel!
  }

let ConvertHtmlWithPuppeteerNodeLocalInternalInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeLocalInternalInput>

export const ConvertHtmlWithPuppeteerNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeLocalInternalInput> => {
    if (!ConvertHtmlWithPuppeteerNodeLocalInternalInputModel) {
      ConvertHtmlWithPuppeteerNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertHtmlWithPuppeteerNodeLocalInternalInputModel!
  }

let ConvertHtmlWithPuppeteerNodeOutputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeOutput>

export const ConvertHtmlWithPuppeteerNodeOutputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeOutput> => {
    if (!ConvertHtmlWithPuppeteerNodeOutputModel) {
      ConvertHtmlWithPuppeteerNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertHtmlWithPuppeteerNodeOutputModel!
  }

let ConvertHtmlWithPuppeteerNodeRemoteInputModel: z.ZodType<ConvertHtmlWithPuppeteerNodeRemoteInput>

export const ConvertHtmlWithPuppeteerNodeRemoteInputResolver =
  (): z.ZodType<ConvertHtmlWithPuppeteerNodeRemoteInput> => {
    if (!ConvertHtmlWithPuppeteerNodeRemoteInputModel) {
      ConvertHtmlWithPuppeteerNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertHtmlWithPuppeteerNodeRemoteInputModel!
  }

let ConvertImageWithImageMagickNodeClientInputModel: z.ZodType<ConvertImageWithImageMagickNodeClientInput>

export const ConvertImageWithImageMagickNodeClientInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeClientInput> => {
    if (!ConvertImageWithImageMagickNodeClientInputModel) {
      ConvertImageWithImageMagickNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertImageWithImageMagickNodeClientInputModel!
  }

let ConvertImageWithImageMagickNodeExternalInputModel: z.ZodType<ConvertImageWithImageMagickNodeExternalInput>

export const ConvertImageWithImageMagickNodeExternalInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeExternalInput> => {
    if (!ConvertImageWithImageMagickNodeExternalInputModel) {
      ConvertImageWithImageMagickNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertImageWithImageMagickNodeExternalInputModel!
  }

let ConvertImageWithImageMagickNodeInputModel: z.ZodType<ConvertImageWithImageMagickNodeInput>

export const ConvertImageWithImageMagickNodeInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeInput> => {
    if (!ConvertImageWithImageMagickNodeInputModel) {
      ConvertImageWithImageMagickNodeInputModel = z.union([
        z.lazy(() =>
          ConvertImageWithImageMagickNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertImageWithImageMagickNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertImageWithImageMagickNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertImageWithImageMagickNodeInputModel!
  }

let ConvertImageWithImageMagickNodeLocalExternalInputModel: z.ZodType<ConvertImageWithImageMagickNodeLocalExternalInput>

export const ConvertImageWithImageMagickNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeLocalExternalInput> => {
    if (!ConvertImageWithImageMagickNodeLocalExternalInputModel) {
      ConvertImageWithImageMagickNodeLocalExternalInputModel = z.object(
        {
          handle: z.literal('external'),
          input: z.object({
            format: z.lazy(() => ImageMagickInputFormatResolver()),
            file: z.union([
              z.lazy(() => RemoteInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => ImageMagickOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
        },
      )
    }
    return ConvertImageWithImageMagickNodeLocalExternalInputModel!
  }

let ConvertImageWithImageMagickNodeLocalInputModel: z.ZodType<ConvertImageWithImageMagickNodeLocalInput>

export const ConvertImageWithImageMagickNodeLocalInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeLocalInput> => {
    if (!ConvertImageWithImageMagickNodeLocalInputModel) {
      ConvertImageWithImageMagickNodeLocalInputModel = z.object({
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
    return ConvertImageWithImageMagickNodeLocalInputModel!
  }

let ConvertImageWithImageMagickNodeLocalInternalInputModel: z.ZodType<ConvertImageWithImageMagickNodeLocalInternalInput>

export const ConvertImageWithImageMagickNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeLocalInternalInput> => {
    if (!ConvertImageWithImageMagickNodeLocalInternalInputModel) {
      ConvertImageWithImageMagickNodeLocalInternalInputModel = z.object(
        {
          handle: z.optional(z.literal('internal')),
          input: z.object({
            format: z.lazy(() => ImageMagickInputFormatResolver()),
            file: z.union([
              z.lazy(() => FileInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => ImageMagickOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
        },
      )
    }
    return ConvertImageWithImageMagickNodeLocalInternalInputModel!
  }

let ConvertImageWithImageMagickNodeOutputModel: z.ZodType<ConvertImageWithImageMagickNodeOutput>

export const ConvertImageWithImageMagickNodeOutputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeOutput> => {
    if (!ConvertImageWithImageMagickNodeOutputModel) {
      ConvertImageWithImageMagickNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertImageWithImageMagickNodeOutputModel!
  }

let ConvertImageWithImageMagickNodeRemoteInputModel: z.ZodType<ConvertImageWithImageMagickNodeRemoteInput>

export const ConvertImageWithImageMagickNodeRemoteInputResolver =
  (): z.ZodType<ConvertImageWithImageMagickNodeRemoteInput> => {
    if (!ConvertImageWithImageMagickNodeRemoteInputModel) {
      ConvertImageWithImageMagickNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ImageMagickInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ImageMagickOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertImageWithImageMagickNodeRemoteInputModel!
  }

let ConvertImageWithInkscapeNodeClientInputModel: z.ZodType<ConvertImageWithInkscapeNodeClientInput>

export const ConvertImageWithInkscapeNodeClientInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeClientInput> => {
    if (!ConvertImageWithInkscapeNodeClientInputModel) {
      ConvertImageWithInkscapeNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertImageWithInkscapeNodeClientInputModel!
  }

let ConvertImageWithInkscapeNodeExternalInputModel: z.ZodType<ConvertImageWithInkscapeNodeExternalInput>

export const ConvertImageWithInkscapeNodeExternalInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeExternalInput> => {
    if (!ConvertImageWithInkscapeNodeExternalInputModel) {
      ConvertImageWithInkscapeNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
        }),
      })
    }
    return ConvertImageWithInkscapeNodeExternalInputModel!
  }

let ConvertImageWithInkscapeNodeInputModel: z.ZodType<ConvertImageWithInkscapeNodeInput>

export const ConvertImageWithInkscapeNodeInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeInput> => {
    if (!ConvertImageWithInkscapeNodeInputModel) {
      ConvertImageWithInkscapeNodeInputModel = z.union([
        z.lazy(() => ConvertImageWithInkscapeNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertImageWithInkscapeNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertImageWithInkscapeNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertImageWithInkscapeNodeInputModel!
  }

let ConvertImageWithInkscapeNodeLocalExternalInputModel: z.ZodType<ConvertImageWithInkscapeNodeLocalExternalInput>

export const ConvertImageWithInkscapeNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeLocalExternalInput> => {
    if (!ConvertImageWithInkscapeNodeLocalExternalInputModel) {
      ConvertImageWithInkscapeNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertImageWithInkscapeNodeLocalExternalInputModel!
  }

let ConvertImageWithInkscapeNodeLocalInputModel: z.ZodType<ConvertImageWithInkscapeNodeLocalInput>

export const ConvertImageWithInkscapeNodeLocalInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeLocalInput> => {
    if (!ConvertImageWithInkscapeNodeLocalInputModel) {
      ConvertImageWithInkscapeNodeLocalInputModel = z.object({
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
    return ConvertImageWithInkscapeNodeLocalInputModel!
  }

let ConvertImageWithInkscapeNodeLocalInternalInputModel: z.ZodType<ConvertImageWithInkscapeNodeLocalInternalInput>

export const ConvertImageWithInkscapeNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeLocalInternalInput> => {
    if (!ConvertImageWithInkscapeNodeLocalInternalInputModel) {
      ConvertImageWithInkscapeNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertImageWithInkscapeNodeLocalInternalInputModel!
  }

let ConvertImageWithInkscapeNodeOutputModel: z.ZodType<ConvertImageWithInkscapeNodeOutput>

export const ConvertImageWithInkscapeNodeOutputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeOutput> => {
    if (!ConvertImageWithInkscapeNodeOutputModel) {
      ConvertImageWithInkscapeNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertImageWithInkscapeNodeOutputModel!
  }

let ConvertImageWithInkscapeNodeRemoteInputModel: z.ZodType<ConvertImageWithInkscapeNodeRemoteInput>

export const ConvertImageWithInkscapeNodeRemoteInputResolver =
  (): z.ZodType<ConvertImageWithInkscapeNodeRemoteInput> => {
    if (!ConvertImageWithInkscapeNodeRemoteInputModel) {
      ConvertImageWithInkscapeNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.string(),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertImageWithInkscapeNodeRemoteInputModel!
  }

let ConvertLatexToPngNodeClientInputModel: z.ZodType<ConvertLatexToPngNodeClientInput>

export const ConvertLatexToPngNodeClientInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeClientInput> => {
    if (!ConvertLatexToPngNodeClientInputModel) {
      ConvertLatexToPngNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexToPngNodeClientInputModel!
  }

let ConvertLatexToPngNodeExternalInputModel: z.ZodType<ConvertLatexToPngNodeExternalInput>

export const ConvertLatexToPngNodeExternalInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeExternalInput> => {
    if (!ConvertLatexToPngNodeExternalInputModel) {
      ConvertLatexToPngNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexToPngNodeExternalInputModel!
  }

let ConvertLatexToPngNodeInputModel: z.ZodType<ConvertLatexToPngNodeInput>

export const ConvertLatexToPngNodeInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeInput> => {
    if (!ConvertLatexToPngNodeInputModel) {
      ConvertLatexToPngNodeInputModel = z.union([
        z.lazy(() => ConvertLatexToPngNodeRemoteInputResolver()),
        z.lazy(() => ConvertLatexToPngNodeLocalExternalInputResolver()),
        z.lazy(() => ConvertLatexToPngNodeLocalInternalInputResolver()),
      ])
    }
    return ConvertLatexToPngNodeInputModel!
  }

let ConvertLatexToPngNodeLocalExternalInputModel: z.ZodType<ConvertLatexToPngNodeLocalExternalInput>

export const ConvertLatexToPngNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeLocalExternalInput> => {
    if (!ConvertLatexToPngNodeLocalExternalInputModel) {
      ConvertLatexToPngNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexToPngNodeLocalExternalInputModel!
  }

let ConvertLatexToPngNodeLocalInputModel: z.ZodType<ConvertLatexToPngNodeLocalInput>

export const ConvertLatexToPngNodeLocalInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeLocalInput> => {
    if (!ConvertLatexToPngNodeLocalInputModel) {
      ConvertLatexToPngNodeLocalInputModel = z.object({
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
    return ConvertLatexToPngNodeLocalInputModel!
  }

let ConvertLatexToPngNodeLocalInternalInputModel: z.ZodType<ConvertLatexToPngNodeLocalInternalInput>

export const ConvertLatexToPngNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeLocalInternalInput> => {
    if (!ConvertLatexToPngNodeLocalInternalInputModel) {
      ConvertLatexToPngNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexToPngNodeLocalInternalInputModel!
  }

let ConvertLatexToPngNodeOutputModel: z.ZodType<ConvertLatexToPngNodeOutput>

export const ConvertLatexToPngNodeOutputResolver =
  (): z.ZodType<ConvertLatexToPngNodeOutput> => {
    if (!ConvertLatexToPngNodeOutputModel) {
      ConvertLatexToPngNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertLatexToPngNodeOutputModel!
  }

let ConvertLatexToPngNodeRemoteInputModel: z.ZodType<ConvertLatexToPngNodeRemoteInput>

export const ConvertLatexToPngNodeRemoteInputResolver =
  (): z.ZodType<ConvertLatexToPngNodeRemoteInput> => {
    if (!ConvertLatexToPngNodeRemoteInputModel) {
      ConvertLatexToPngNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => ConvertLatexToPngInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => ConvertLatexToPngOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexToPngNodeRemoteInputModel!
  }

let ConvertLatexWithPdfLatexNodeClientInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeClientInput>

export const ConvertLatexWithPdfLatexNodeClientInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeClientInput> => {
    if (!ConvertLatexWithPdfLatexNodeClientInputModel) {
      ConvertLatexWithPdfLatexNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexWithPdfLatexNodeClientInputModel!
  }

let ConvertLatexWithPdfLatexNodeExternalInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeExternalInput>

export const ConvertLatexWithPdfLatexNodeExternalInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeExternalInput> => {
    if (!ConvertLatexWithPdfLatexNodeExternalInputModel) {
      ConvertLatexWithPdfLatexNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
        }),
      })
    }
    return ConvertLatexWithPdfLatexNodeExternalInputModel!
  }

let ConvertLatexWithPdfLatexNodeInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeInput>

export const ConvertLatexWithPdfLatexNodeInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeInput> => {
    if (!ConvertLatexWithPdfLatexNodeInputModel) {
      ConvertLatexWithPdfLatexNodeInputModel = z.union([
        z.lazy(() => ConvertLatexWithPdfLatexNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertLatexWithPdfLatexNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertLatexWithPdfLatexNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertLatexWithPdfLatexNodeInputModel!
  }

let ConvertLatexWithPdfLatexNodeLocalExternalInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeLocalExternalInput>

export const ConvertLatexWithPdfLatexNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeLocalExternalInput> => {
    if (!ConvertLatexWithPdfLatexNodeLocalExternalInputModel) {
      ConvertLatexWithPdfLatexNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexWithPdfLatexNodeLocalExternalInputModel!
  }

let ConvertLatexWithPdfLatexNodeLocalInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeLocalInput>

export const ConvertLatexWithPdfLatexNodeLocalInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeLocalInput> => {
    if (!ConvertLatexWithPdfLatexNodeLocalInputModel) {
      ConvertLatexWithPdfLatexNodeLocalInputModel = z.object({
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
    return ConvertLatexWithPdfLatexNodeLocalInputModel!
  }

let ConvertLatexWithPdfLatexNodeLocalInternalInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeLocalInternalInput>

export const ConvertLatexWithPdfLatexNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeLocalInternalInput> => {
    if (!ConvertLatexWithPdfLatexNodeLocalInternalInputModel) {
      ConvertLatexWithPdfLatexNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentResolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
          directory: z.optional(
            z.lazy(() => LocalOutputPathResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexWithPdfLatexNodeLocalInternalInputModel!
  }

let ConvertLatexWithPdfLatexNodeOutputModel: z.ZodType<ConvertLatexWithPdfLatexNodeOutput>

export const ConvertLatexWithPdfLatexNodeOutputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeOutput> => {
    if (!ConvertLatexWithPdfLatexNodeOutputModel) {
      ConvertLatexWithPdfLatexNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertLatexWithPdfLatexNodeOutputModel!
  }

let ConvertLatexWithPdfLatexNodeRemoteInputModel: z.ZodType<ConvertLatexWithPdfLatexNodeRemoteInput>

export const ConvertLatexWithPdfLatexNodeRemoteInputResolver =
  (): z.ZodType<ConvertLatexWithPdfLatexNodeRemoteInput> => {
    if (!ConvertLatexWithPdfLatexNodeRemoteInputModel) {
      ConvertLatexWithPdfLatexNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PdfLatexInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PdfLatexOutputFormatResolver()),
          directory: z.optional(
            z.lazy(() => LocalOutputPathResolver()),
          ),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return ConvertLatexWithPdfLatexNodeRemoteInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeClientInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeClientInput>

export const ConvertMarkdownWithPuppeteerNodeClientInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeClientInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeClientInputModel) {
      ConvertMarkdownWithPuppeteerNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            h1: z.optional(z.lazy(() => TextStyleResolver())),
            h2: z.optional(z.lazy(() => TextStyleResolver())),
            h3: z.optional(z.lazy(() => TextStyleResolver())),
            h4: z.optional(z.lazy(() => TextStyleResolver())),
            h5: z.optional(z.lazy(() => TextStyleResolver())),
            h6: z.optional(z.lazy(() => TextStyleResolver())),
            text: z.optional(z.lazy(() => TextStyleResolver())),
            link: z.optional(z.lazy(() => TextStyleResolver())),
          }),
        ),
      })
    }
    return ConvertMarkdownWithPuppeteerNodeClientInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeExternalInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeExternalInput>

export const ConvertMarkdownWithPuppeteerNodeExternalInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeExternalInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeExternalInputModel) {
      ConvertMarkdownWithPuppeteerNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            h1: z.optional(z.lazy(() => TextStyleResolver())),
            h2: z.optional(z.lazy(() => TextStyleResolver())),
            h3: z.optional(z.lazy(() => TextStyleResolver())),
            h4: z.optional(z.lazy(() => TextStyleResolver())),
            h5: z.optional(z.lazy(() => TextStyleResolver())),
            h6: z.optional(z.lazy(() => TextStyleResolver())),
            text: z.optional(z.lazy(() => TextStyleResolver())),
            link: z.optional(z.lazy(() => TextStyleResolver())),
          }),
        ),
      })
    }
    return ConvertMarkdownWithPuppeteerNodeExternalInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeInput>

export const ConvertMarkdownWithPuppeteerNodeInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeInputModel) {
      ConvertMarkdownWithPuppeteerNodeInputModel = z.union([
        z.lazy(() =>
          ConvertMarkdownWithPuppeteerNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          ConvertMarkdownWithPuppeteerNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertMarkdownWithPuppeteerNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertMarkdownWithPuppeteerNodeInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeLocalExternalInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalExternalInput>

export const ConvertMarkdownWithPuppeteerNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalExternalInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeLocalExternalInputModel) {
      ConvertMarkdownWithPuppeteerNodeLocalExternalInputModel =
        z.object({
          handle: z.literal('external'),
          input: z.object({
            format: z.lazy(() =>
              PuppeteerMarkdownInputFormatResolver(),
            ),
            file: z.union([
              z.lazy(() => RemoteInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => PuppeteerOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          }),
          pathScope: z.optional(z.string()),
          viewport: z.optional(
            z.object({
              width: z.optional(z.number().int().gte(0)),
              height: z.optional(z.number().int().gte(0)),
            }),
          ),
          proxy: z.optional(z.string()),
          waitUntil: z.optional(
            z.lazy(() => PuppeteerLifeCycleEventResolver()),
          ),
          style: z.optional(
            z.object({
              margin: z.optional(
                z.object({
                  x: z.optional(z.number().int().gte(0)),
                  y: z.optional(z.number().int().gte(0)),
                }),
              ),
              h1: z.optional(z.lazy(() => TextStyleResolver())),
              h2: z.optional(z.lazy(() => TextStyleResolver())),
              h3: z.optional(z.lazy(() => TextStyleResolver())),
              h4: z.optional(z.lazy(() => TextStyleResolver())),
              h5: z.optional(z.lazy(() => TextStyleResolver())),
              h6: z.optional(z.lazy(() => TextStyleResolver())),
              text: z.optional(z.lazy(() => TextStyleResolver())),
              link: z.optional(z.lazy(() => TextStyleResolver())),
            }),
          ),
        })
    }
    return ConvertMarkdownWithPuppeteerNodeLocalExternalInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeLocalInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalInput>

export const ConvertMarkdownWithPuppeteerNodeLocalInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeLocalInputModel) {
      ConvertMarkdownWithPuppeteerNodeLocalInputModel = z.object({
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.object({
            content: z.instanceof(ArrayBuffer),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            h1: z.optional(z.lazy(() => TextStyleResolver())),
            h2: z.optional(z.lazy(() => TextStyleResolver())),
            h3: z.optional(z.lazy(() => TextStyleResolver())),
            h4: z.optional(z.lazy(() => TextStyleResolver())),
            h5: z.optional(z.lazy(() => TextStyleResolver())),
            h6: z.optional(z.lazy(() => TextStyleResolver())),
            text: z.optional(z.lazy(() => TextStyleResolver())),
            link: z.optional(z.lazy(() => TextStyleResolver())),
          }),
        ),
      })
    }
    return ConvertMarkdownWithPuppeteerNodeLocalInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeLocalInternalInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalInternalInput>

export const ConvertMarkdownWithPuppeteerNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeLocalInternalInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeLocalInternalInputModel) {
      ConvertMarkdownWithPuppeteerNodeLocalInternalInputModel =
        z.object({
          handle: z.optional(z.literal('internal')),
          input: z.object({
            format: z.lazy(() =>
              PuppeteerMarkdownInputFormatResolver(),
            ),
            file: z.union([
              z.lazy(() => FileInputPathResolver()),
              z.lazy(() => FileContentWithSha256Resolver()),
            ]),
          }),
          output: z.object({
            format: z.lazy(() => PuppeteerOutputFormatResolver()),
            file: z.optional(z.lazy(() => LocalOutputPathResolver())),
          }),
          pathScope: z.optional(z.string()),
          viewport: z.optional(
            z.object({
              width: z.optional(z.number().int().gte(0)),
              height: z.optional(z.number().int().gte(0)),
            }),
          ),
          proxy: z.optional(z.string()),
          waitUntil: z.optional(
            z.lazy(() => PuppeteerLifeCycleEventResolver()),
          ),
          style: z.optional(
            z.object({
              margin: z.optional(
                z.object({
                  x: z.optional(z.number().int().gte(0)),
                  y: z.optional(z.number().int().gte(0)),
                }),
              ),
              h1: z.optional(z.lazy(() => TextStyleResolver())),
              h2: z.optional(z.lazy(() => TextStyleResolver())),
              h3: z.optional(z.lazy(() => TextStyleResolver())),
              h4: z.optional(z.lazy(() => TextStyleResolver())),
              h5: z.optional(z.lazy(() => TextStyleResolver())),
              h6: z.optional(z.lazy(() => TextStyleResolver())),
              text: z.optional(z.lazy(() => TextStyleResolver())),
              link: z.optional(z.lazy(() => TextStyleResolver())),
            }),
          ),
        })
    }
    return ConvertMarkdownWithPuppeteerNodeLocalInternalInputModel!
  }

let ConvertMarkdownWithPuppeteerNodeOutputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeOutput>

export const ConvertMarkdownWithPuppeteerNodeOutputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeOutput> => {
    if (!ConvertMarkdownWithPuppeteerNodeOutputModel) {
      ConvertMarkdownWithPuppeteerNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertMarkdownWithPuppeteerNodeOutputModel!
  }

let ConvertMarkdownWithPuppeteerNodeRemoteInputModel: z.ZodType<ConvertMarkdownWithPuppeteerNodeRemoteInput>

export const ConvertMarkdownWithPuppeteerNodeRemoteInputResolver =
  (): z.ZodType<ConvertMarkdownWithPuppeteerNodeRemoteInput> => {
    if (!ConvertMarkdownWithPuppeteerNodeRemoteInputModel) {
      ConvertMarkdownWithPuppeteerNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerMarkdownInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            h1: z.optional(z.lazy(() => TextStyleResolver())),
            h2: z.optional(z.lazy(() => TextStyleResolver())),
            h3: z.optional(z.lazy(() => TextStyleResolver())),
            h4: z.optional(z.lazy(() => TextStyleResolver())),
            h5: z.optional(z.lazy(() => TextStyleResolver())),
            h6: z.optional(z.lazy(() => TextStyleResolver())),
            text: z.optional(z.lazy(() => TextStyleResolver())),
            link: z.optional(z.lazy(() => TextStyleResolver())),
          }),
        ),
      })
    }
    return ConvertMarkdownWithPuppeteerNodeRemoteInputModel!
  }

let ConvertTxtWithPuppeteerNodeClientInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeClientInput>

export const ConvertTxtWithPuppeteerNodeClientInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeClientInput> => {
    if (!ConvertTxtWithPuppeteerNodeClientInputModel) {
      ConvertTxtWithPuppeteerNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeClientInputModel!
  }

let ConvertTxtWithPuppeteerNodeExternalInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeExternalInput>

export const ConvertTxtWithPuppeteerNodeExternalInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeExternalInput> => {
    if (!ConvertTxtWithPuppeteerNodeExternalInputModel) {
      ConvertTxtWithPuppeteerNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
        }),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeExternalInputModel!
  }

let ConvertTxtWithPuppeteerNodeInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeInput>

export const ConvertTxtWithPuppeteerNodeInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeInput> => {
    if (!ConvertTxtWithPuppeteerNodeInputModel) {
      ConvertTxtWithPuppeteerNodeInputModel = z.union([
        z.lazy(() => ConvertTxtWithPuppeteerNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertTxtWithPuppeteerNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertTxtWithPuppeteerNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertTxtWithPuppeteerNodeInputModel!
  }

let ConvertTxtWithPuppeteerNodeLocalExternalInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeLocalExternalInput>

export const ConvertTxtWithPuppeteerNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeLocalExternalInput> => {
    if (!ConvertTxtWithPuppeteerNodeLocalExternalInputModel) {
      ConvertTxtWithPuppeteerNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeLocalExternalInputModel!
  }

let ConvertTxtWithPuppeteerNodeLocalInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeLocalInput>

export const ConvertTxtWithPuppeteerNodeLocalInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeLocalInput> => {
    if (!ConvertTxtWithPuppeteerNodeLocalInputModel) {
      ConvertTxtWithPuppeteerNodeLocalInputModel = z.object({
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.object({
            content: z.instanceof(ArrayBuffer),
          }),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeLocalInputModel!
  }

let ConvertTxtWithPuppeteerNodeLocalInternalInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeLocalInternalInput>

export const ConvertTxtWithPuppeteerNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeLocalInternalInput> => {
    if (!ConvertTxtWithPuppeteerNodeLocalInternalInputModel) {
      ConvertTxtWithPuppeteerNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeLocalInternalInputModel!
  }

let ConvertTxtWithPuppeteerNodeOutputModel: z.ZodType<ConvertTxtWithPuppeteerNodeOutput>

export const ConvertTxtWithPuppeteerNodeOutputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeOutput> => {
    if (!ConvertTxtWithPuppeteerNodeOutputModel) {
      ConvertTxtWithPuppeteerNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertTxtWithPuppeteerNodeOutputModel!
  }

let ConvertTxtWithPuppeteerNodeRemoteInputModel: z.ZodType<ConvertTxtWithPuppeteerNodeRemoteInput>

export const ConvertTxtWithPuppeteerNodeRemoteInputResolver =
  (): z.ZodType<ConvertTxtWithPuppeteerNodeRemoteInput> => {
    if (!ConvertTxtWithPuppeteerNodeRemoteInputModel) {
      ConvertTxtWithPuppeteerNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => PuppeteerTxtInputFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => PuppeteerOutputFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
        viewport: z.optional(
          z.object({
            width: z.optional(z.number().int().gte(0)),
            height: z.optional(z.number().int().gte(0)),
          }),
        ),
        proxy: z.optional(z.string()),
        waitUntil: z.optional(
          z.lazy(() => PuppeteerLifeCycleEventResolver()),
        ),
        style: z.optional(
          z.object({
            margin: z.optional(
              z.object({
                x: z.optional(z.number().int().gte(0)),
                y: z.optional(z.number().int().gte(0)),
              }),
            ),
            text: z.lazy(() => TextStyleResolver()),
          }),
        ),
      })
    }
    return ConvertTxtWithPuppeteerNodeRemoteInputModel!
  }

let ConvertVideoWithFfmpegNodeClientInputModel: z.ZodType<ConvertVideoWithFfmpegNodeClientInput>

export const ConvertVideoWithFfmpegNodeClientInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeClientInput> => {
    if (!ConvertVideoWithFfmpegNodeClientInputModel) {
      ConvertVideoWithFfmpegNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertVideoWithFfmpegNodeClientInputModel!
  }

let ConvertVideoWithFfmpegNodeExternalInputModel: z.ZodType<ConvertVideoWithFfmpegNodeExternalInput>

export const ConvertVideoWithFfmpegNodeExternalInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeExternalInput> => {
    if (!ConvertVideoWithFfmpegNodeExternalInputModel) {
      ConvertVideoWithFfmpegNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
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
    return ConvertVideoWithFfmpegNodeExternalInputModel!
  }

let ConvertVideoWithFfmpegNodeInputModel: z.ZodType<ConvertVideoWithFfmpegNodeInput>

export const ConvertVideoWithFfmpegNodeInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeInput> => {
    if (!ConvertVideoWithFfmpegNodeInputModel) {
      ConvertVideoWithFfmpegNodeInputModel = z.union([
        z.lazy(() => ConvertVideoWithFfmpegNodeRemoteInputResolver()),
        z.lazy(() =>
          ConvertVideoWithFfmpegNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          ConvertVideoWithFfmpegNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return ConvertVideoWithFfmpegNodeInputModel!
  }

let ConvertVideoWithFfmpegNodeLocalExternalInputModel: z.ZodType<ConvertVideoWithFfmpegNodeLocalExternalInput>

export const ConvertVideoWithFfmpegNodeLocalExternalInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeLocalExternalInput> => {
    if (!ConvertVideoWithFfmpegNodeLocalExternalInputModel) {
      ConvertVideoWithFfmpegNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertVideoWithFfmpegNodeLocalExternalInputModel!
  }

let ConvertVideoWithFfmpegNodeLocalInputModel: z.ZodType<ConvertVideoWithFfmpegNodeLocalInput>

export const ConvertVideoWithFfmpegNodeLocalInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeLocalInput> => {
    if (!ConvertVideoWithFfmpegNodeLocalInputModel) {
      ConvertVideoWithFfmpegNodeLocalInputModel = z.object({
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
    return ConvertVideoWithFfmpegNodeLocalInputModel!
  }

let ConvertVideoWithFfmpegNodeLocalInternalInputModel: z.ZodType<ConvertVideoWithFfmpegNodeLocalInternalInput>

export const ConvertVideoWithFfmpegNodeLocalInternalInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeLocalInternalInput> => {
    if (!ConvertVideoWithFfmpegNodeLocalInternalInputModel) {
      ConvertVideoWithFfmpegNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertVideoWithFfmpegNodeLocalInternalInputModel!
  }

let ConvertVideoWithFfmpegNodeOutputModel: z.ZodType<ConvertVideoWithFfmpegNodeOutput>

export const ConvertVideoWithFfmpegNodeOutputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeOutput> => {
    if (!ConvertVideoWithFfmpegNodeOutputModel) {
      ConvertVideoWithFfmpegNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return ConvertVideoWithFfmpegNodeOutputModel!
  }

let ConvertVideoWithFfmpegNodeRemoteInputModel: z.ZodType<ConvertVideoWithFfmpegNodeRemoteInput>

export const ConvertVideoWithFfmpegNodeRemoteInputResolver =
  (): z.ZodType<ConvertVideoWithFfmpegNodeRemoteInput> => {
    if (!ConvertVideoWithFfmpegNodeRemoteInputModel) {
      ConvertVideoWithFfmpegNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          format: z.lazy(() => FfmpegFormatResolver()),
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
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
    return ConvertVideoWithFfmpegNodeRemoteInputModel!
  }

let FormatAssemblyNodeClientInputModel: z.ZodType<FormatAssemblyNodeClientInput>

export const FormatAssemblyNodeClientInputResolver =
  (): z.ZodType<FormatAssemblyNodeClientInput> => {
    if (!FormatAssemblyNodeClientInputModel) {
      FormatAssemblyNodeClientInputModel = z.object({
        handle: z.literal('client'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatAssemblyNodeClientInputModel!
  }

let FormatAssemblyNodeExternalInputModel: z.ZodType<FormatAssemblyNodeExternalInput>

export const FormatAssemblyNodeExternalInputResolver =
  (): z.ZodType<FormatAssemblyNodeExternalInput> => {
    if (!FormatAssemblyNodeExternalInputModel) {
      FormatAssemblyNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatAssemblyNodeExternalInputModel!
  }

let FormatAssemblyNodeInputModel: z.ZodType<FormatAssemblyNodeInput>

export const FormatAssemblyNodeInputResolver =
  (): z.ZodType<FormatAssemblyNodeInput> => {
    if (!FormatAssemblyNodeInputModel) {
      FormatAssemblyNodeInputModel = z.union([
        z.lazy(() => FormatAssemblyNodeRemoteInputResolver()),
        z.lazy(() => FormatAssemblyNodeLocalExternalInputResolver()),
        z.lazy(() => FormatAssemblyNodeLocalInternalInputResolver()),
      ])
    }
    return FormatAssemblyNodeInputModel!
  }

let FormatAssemblyNodeLocalExternalInputModel: z.ZodType<FormatAssemblyNodeLocalExternalInput>

export const FormatAssemblyNodeLocalExternalInputResolver =
  (): z.ZodType<FormatAssemblyNodeLocalExternalInput> => {
    if (!FormatAssemblyNodeLocalExternalInputModel) {
      FormatAssemblyNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatAssemblyNodeLocalExternalInputModel!
  }

let FormatAssemblyNodeLocalInputModel: z.ZodType<FormatAssemblyNodeLocalInput>

export const FormatAssemblyNodeLocalInputResolver =
  (): z.ZodType<FormatAssemblyNodeLocalInput> => {
    if (!FormatAssemblyNodeLocalInputModel) {
      FormatAssemblyNodeLocalInputModel = z.object({
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
    return FormatAssemblyNodeLocalInputModel!
  }

let FormatAssemblyNodeLocalInternalInputModel: z.ZodType<FormatAssemblyNodeLocalInternalInput>

export const FormatAssemblyNodeLocalInternalInputResolver =
  (): z.ZodType<FormatAssemblyNodeLocalInternalInput> => {
    if (!FormatAssemblyNodeLocalInternalInputModel) {
      FormatAssemblyNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatAssemblyNodeLocalInternalInputModel!
  }

let FormatAssemblyNodeOutputModel: z.ZodType<FormatAssemblyNodeOutput>

export const FormatAssemblyNodeOutputResolver =
  (): z.ZodType<FormatAssemblyNodeOutput> => {
    if (!FormatAssemblyNodeOutputModel) {
      FormatAssemblyNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatAssemblyNodeOutputModel!
  }

let FormatAssemblyNodeRemoteInputModel: z.ZodType<FormatAssemblyNodeRemoteInput>

export const FormatAssemblyNodeRemoteInputResolver =
  (): z.ZodType<FormatAssemblyNodeRemoteInput> => {
    if (!FormatAssemblyNodeRemoteInputModel) {
      FormatAssemblyNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatAssemblyNodeRemoteInputModel!
  }

let FormatCodeWithClangFormatNodeClientInputModel: z.ZodType<FormatCodeWithClangFormatNodeClientInput>

export const FormatCodeWithClangFormatNodeClientInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeClientInput> => {
    if (!FormatCodeWithClangFormatNodeClientInputModel) {
      FormatCodeWithClangFormatNodeClientInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.literal('client'),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatCodeWithClangFormatNodeClientInputModel!
  }

let FormatCodeWithClangFormatNodeExternalInputModel: z.ZodType<FormatCodeWithClangFormatNodeExternalInput>

export const FormatCodeWithClangFormatNodeExternalInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeExternalInput> => {
    if (!FormatCodeWithClangFormatNodeExternalInputModel) {
      FormatCodeWithClangFormatNodeExternalInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.literal('external'),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatCodeWithClangFormatNodeExternalInputModel!
  }

let FormatCodeWithClangFormatNodeInputModel: z.ZodType<FormatCodeWithClangFormatNodeInput>

export const FormatCodeWithClangFormatNodeInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeInput> => {
    if (!FormatCodeWithClangFormatNodeInputModel) {
      FormatCodeWithClangFormatNodeInputModel = z.union([
        z.lazy(() =>
          FormatCodeWithClangFormatNodeRemoteInputResolver(),
        ),
        z.lazy(() =>
          FormatCodeWithClangFormatNodeLocalExternalInputResolver(),
        ),
        z.lazy(() =>
          FormatCodeWithClangFormatNodeLocalInternalInputResolver(),
        ),
      ])
    }
    return FormatCodeWithClangFormatNodeInputModel!
  }

let FormatCodeWithClangFormatNodeLocalExternalInputModel: z.ZodType<FormatCodeWithClangFormatNodeLocalExternalInput>

export const FormatCodeWithClangFormatNodeLocalExternalInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeLocalExternalInput> => {
    if (!FormatCodeWithClangFormatNodeLocalExternalInputModel) {
      FormatCodeWithClangFormatNodeLocalExternalInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.literal('external'),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatCodeWithClangFormatNodeLocalExternalInputModel!
  }

let FormatCodeWithClangFormatNodeLocalInputModel: z.ZodType<FormatCodeWithClangFormatNodeLocalInput>

export const FormatCodeWithClangFormatNodeLocalInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeLocalInput> => {
    if (!FormatCodeWithClangFormatNodeLocalInputModel) {
      FormatCodeWithClangFormatNodeLocalInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        output: z.object({
          file: z.lazy(() => LocalPathResolver()),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatCodeWithClangFormatNodeLocalInputModel!
  }

let FormatCodeWithClangFormatNodeLocalInternalInputModel: z.ZodType<FormatCodeWithClangFormatNodeLocalInternalInput>

export const FormatCodeWithClangFormatNodeLocalInternalInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeLocalInternalInput> => {
    if (!FormatCodeWithClangFormatNodeLocalInternalInputModel) {
      FormatCodeWithClangFormatNodeLocalInternalInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.optional(z.literal('internal')),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatCodeWithClangFormatNodeLocalInternalInputModel!
  }

let FormatCodeWithClangFormatNodeOutputModel: z.ZodType<FormatCodeWithClangFormatNodeOutput>

export const FormatCodeWithClangFormatNodeOutputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeOutput> => {
    if (!FormatCodeWithClangFormatNodeOutputModel) {
      FormatCodeWithClangFormatNodeOutputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatCodeWithClangFormatNodeOutputModel!
  }

let FormatCodeWithClangFormatNodeRemoteInputModel: z.ZodType<FormatCodeWithClangFormatNodeRemoteInput>

export const FormatCodeWithClangFormatNodeRemoteInputResolver =
  (): z.ZodType<FormatCodeWithClangFormatNodeRemoteInput> => {
    if (!FormatCodeWithClangFormatNodeRemoteInputModel) {
      FormatCodeWithClangFormatNodeRemoteInputModel = (
        ClangStyleAllResolver() as any
      ).extend({
        handle: z.literal('remote'),
        format: z.lazy(() => ClangFormatResolver()),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatCodeWithClangFormatNodeRemoteInputModel!
  }

let FormatKotlinNodeClientInputModel: z.ZodType<FormatKotlinNodeClientInput>

export const FormatKotlinNodeClientInputResolver =
  (): z.ZodType<FormatKotlinNodeClientInput> => {
    if (!FormatKotlinNodeClientInputModel) {
      FormatKotlinNodeClientInputModel = z.object({
        handle: z.literal('client'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatKotlinNodeClientInputModel!
  }

let FormatKotlinNodeExternalInputModel: z.ZodType<FormatKotlinNodeExternalInput>

export const FormatKotlinNodeExternalInputResolver =
  (): z.ZodType<FormatKotlinNodeExternalInput> => {
    if (!FormatKotlinNodeExternalInputModel) {
      FormatKotlinNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatKotlinNodeExternalInputModel!
  }

let FormatKotlinNodeInputModel: z.ZodType<FormatKotlinNodeInput>

export const FormatKotlinNodeInputResolver =
  (): z.ZodType<FormatKotlinNodeInput> => {
    if (!FormatKotlinNodeInputModel) {
      FormatKotlinNodeInputModel = z.union([
        z.lazy(() => FormatKotlinNodeRemoteInputResolver()),
        z.lazy(() => FormatKotlinNodeLocalExternalInputResolver()),
        z.lazy(() => FormatKotlinNodeLocalInternalInputResolver()),
      ])
    }
    return FormatKotlinNodeInputModel!
  }

let FormatKotlinNodeLocalExternalInputModel: z.ZodType<FormatKotlinNodeLocalExternalInput>

export const FormatKotlinNodeLocalExternalInputResolver =
  (): z.ZodType<FormatKotlinNodeLocalExternalInput> => {
    if (!FormatKotlinNodeLocalExternalInputModel) {
      FormatKotlinNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatKotlinNodeLocalExternalInputModel!
  }

let FormatKotlinNodeLocalInputModel: z.ZodType<FormatKotlinNodeLocalInput>

export const FormatKotlinNodeLocalInputResolver =
  (): z.ZodType<FormatKotlinNodeLocalInput> => {
    if (!FormatKotlinNodeLocalInputModel) {
      FormatKotlinNodeLocalInputModel = z.object({
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
    return FormatKotlinNodeLocalInputModel!
  }

let FormatKotlinNodeLocalInternalInputModel: z.ZodType<FormatKotlinNodeLocalInternalInput>

export const FormatKotlinNodeLocalInternalInputResolver =
  (): z.ZodType<FormatKotlinNodeLocalInternalInput> => {
    if (!FormatKotlinNodeLocalInternalInputModel) {
      FormatKotlinNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatKotlinNodeLocalInternalInputModel!
  }

let FormatKotlinNodeOutputModel: z.ZodType<FormatKotlinNodeOutput>

export const FormatKotlinNodeOutputResolver =
  (): z.ZodType<FormatKotlinNodeOutput> => {
    if (!FormatKotlinNodeOutputModel) {
      FormatKotlinNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatKotlinNodeOutputModel!
  }

let FormatKotlinNodeRemoteInputModel: z.ZodType<FormatKotlinNodeRemoteInput>

export const FormatKotlinNodeRemoteInputResolver =
  (): z.ZodType<FormatKotlinNodeRemoteInput> => {
    if (!FormatKotlinNodeRemoteInputModel) {
      FormatKotlinNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatKotlinNodeRemoteInputModel!
  }

let FormatPythonNodeClientInputModel: z.ZodType<FormatPythonNodeClientInput>

export const FormatPythonNodeClientInputResolver =
  (): z.ZodType<FormatPythonNodeClientInput> => {
    if (!FormatPythonNodeClientInputModel) {
      FormatPythonNodeClientInputModel = z.object({
        handle: z.literal('client'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatPythonNodeClientInputModel!
  }

let FormatPythonNodeExternalInputModel: z.ZodType<FormatPythonNodeExternalInput>

export const FormatPythonNodeExternalInputResolver =
  (): z.ZodType<FormatPythonNodeExternalInput> => {
    if (!FormatPythonNodeExternalInputModel) {
      FormatPythonNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatPythonNodeExternalInputModel!
  }

let FormatPythonNodeInputModel: z.ZodType<FormatPythonNodeInput>

export const FormatPythonNodeInputResolver =
  (): z.ZodType<FormatPythonNodeInput> => {
    if (!FormatPythonNodeInputModel) {
      FormatPythonNodeInputModel = z.union([
        z.lazy(() => FormatPythonNodeRemoteInputResolver()),
        z.lazy(() => FormatPythonNodeLocalExternalInputResolver()),
        z.lazy(() => FormatPythonNodeLocalInternalInputResolver()),
      ])
    }
    return FormatPythonNodeInputModel!
  }

let FormatPythonNodeLocalExternalInputModel: z.ZodType<FormatPythonNodeLocalExternalInput>

export const FormatPythonNodeLocalExternalInputResolver =
  (): z.ZodType<FormatPythonNodeLocalExternalInput> => {
    if (!FormatPythonNodeLocalExternalInputModel) {
      FormatPythonNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatPythonNodeLocalExternalInputModel!
  }

let FormatPythonNodeLocalInputModel: z.ZodType<FormatPythonNodeLocalInput>

export const FormatPythonNodeLocalInputResolver =
  (): z.ZodType<FormatPythonNodeLocalInput> => {
    if (!FormatPythonNodeLocalInputModel) {
      FormatPythonNodeLocalInputModel = z.object({
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
    return FormatPythonNodeLocalInputModel!
  }

let FormatPythonNodeLocalInternalInputModel: z.ZodType<FormatPythonNodeLocalInternalInput>

export const FormatPythonNodeLocalInternalInputResolver =
  (): z.ZodType<FormatPythonNodeLocalInternalInput> => {
    if (!FormatPythonNodeLocalInternalInputModel) {
      FormatPythonNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatPythonNodeLocalInternalInputModel!
  }

let FormatPythonNodeOutputModel: z.ZodType<FormatPythonNodeOutput>

export const FormatPythonNodeOutputResolver =
  (): z.ZodType<FormatPythonNodeOutput> => {
    if (!FormatPythonNodeOutputModel) {
      FormatPythonNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatPythonNodeOutputModel!
  }

let FormatPythonNodeRemoteInputModel: z.ZodType<FormatPythonNodeRemoteInput>

export const FormatPythonNodeRemoteInputResolver =
  (): z.ZodType<FormatPythonNodeRemoteInput> => {
    if (!FormatPythonNodeRemoteInputModel) {
      FormatPythonNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatPythonNodeRemoteInputModel!
  }

let FormatRustNodeClientInputModel: z.ZodType<FormatRustNodeClientInput>

export const FormatRustNodeClientInputResolver =
  (): z.ZodType<FormatRustNodeClientInput> => {
    if (!FormatRustNodeClientInputModel) {
      FormatRustNodeClientInputModel = z.object({
        handle: z.literal('client'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatRustNodeClientInputModel!
  }

let FormatRustNodeExternalInputModel: z.ZodType<FormatRustNodeExternalInput>

export const FormatRustNodeExternalInputResolver =
  (): z.ZodType<FormatRustNodeExternalInput> => {
    if (!FormatRustNodeExternalInputModel) {
      FormatRustNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatRustNodeExternalInputModel!
  }

let FormatRustNodeInputModel: z.ZodType<FormatRustNodeInput>

export const FormatRustNodeInputResolver =
  (): z.ZodType<FormatRustNodeInput> => {
    if (!FormatRustNodeInputModel) {
      FormatRustNodeInputModel = z.union([
        z.lazy(() => FormatRustNodeRemoteInputResolver()),
        z.lazy(() => FormatRustNodeLocalExternalInputResolver()),
        z.lazy(() => FormatRustNodeLocalInternalInputResolver()),
      ])
    }
    return FormatRustNodeInputModel!
  }

let FormatRustNodeLocalExternalInputModel: z.ZodType<FormatRustNodeLocalExternalInput>

export const FormatRustNodeLocalExternalInputResolver =
  (): z.ZodType<FormatRustNodeLocalExternalInput> => {
    if (!FormatRustNodeLocalExternalInputModel) {
      FormatRustNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatRustNodeLocalExternalInputModel!
  }

let FormatRustNodeLocalInputModel: z.ZodType<FormatRustNodeLocalInput>

export const FormatRustNodeLocalInputResolver =
  (): z.ZodType<FormatRustNodeLocalInput> => {
    if (!FormatRustNodeLocalInputModel) {
      FormatRustNodeLocalInputModel = z.object({
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
    return FormatRustNodeLocalInputModel!
  }

let FormatRustNodeLocalInternalInputModel: z.ZodType<FormatRustNodeLocalInternalInput>

export const FormatRustNodeLocalInternalInputResolver =
  (): z.ZodType<FormatRustNodeLocalInternalInput> => {
    if (!FormatRustNodeLocalInternalInputModel) {
      FormatRustNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatRustNodeLocalInternalInputModel!
  }

let FormatRustNodeOutputModel: z.ZodType<FormatRustNodeOutput>

export const FormatRustNodeOutputResolver =
  (): z.ZodType<FormatRustNodeOutput> => {
    if (!FormatRustNodeOutputModel) {
      FormatRustNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatRustNodeOutputModel!
  }

let FormatRustNodeRemoteInputModel: z.ZodType<FormatRustNodeRemoteInput>

export const FormatRustNodeRemoteInputResolver =
  (): z.ZodType<FormatRustNodeRemoteInput> => {
    if (!FormatRustNodeRemoteInputModel) {
      FormatRustNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatRustNodeRemoteInputModel!
  }

let FormatSwiftNodeClientInputModel: z.ZodType<FormatSwiftNodeClientInput>

export const FormatSwiftNodeClientInputResolver =
  (): z.ZodType<FormatSwiftNodeClientInput> => {
    if (!FormatSwiftNodeClientInputModel) {
      FormatSwiftNodeClientInputModel = z.object({
        handle: z.literal('client'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatSwiftNodeClientInputModel!
  }

let FormatSwiftNodeExternalInputModel: z.ZodType<FormatSwiftNodeExternalInput>

export const FormatSwiftNodeExternalInputResolver =
  (): z.ZodType<FormatSwiftNodeExternalInput> => {
    if (!FormatSwiftNodeExternalInputModel) {
      FormatSwiftNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({}),
      })
    }
    return FormatSwiftNodeExternalInputModel!
  }

let FormatSwiftNodeInputModel: z.ZodType<FormatSwiftNodeInput>

export const FormatSwiftNodeInputResolver =
  (): z.ZodType<FormatSwiftNodeInput> => {
    if (!FormatSwiftNodeInputModel) {
      FormatSwiftNodeInputModel = z.union([
        z.lazy(() => FormatSwiftNodeRemoteInputResolver()),
        z.lazy(() => FormatSwiftNodeLocalExternalInputResolver()),
        z.lazy(() => FormatSwiftNodeLocalInternalInputResolver()),
      ])
    }
    return FormatSwiftNodeInputModel!
  }

let FormatSwiftNodeLocalExternalInputModel: z.ZodType<FormatSwiftNodeLocalExternalInput>

export const FormatSwiftNodeLocalExternalInputResolver =
  (): z.ZodType<FormatSwiftNodeLocalExternalInput> => {
    if (!FormatSwiftNodeLocalExternalInputModel) {
      FormatSwiftNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatSwiftNodeLocalExternalInputModel!
  }

let FormatSwiftNodeLocalInputModel: z.ZodType<FormatSwiftNodeLocalInput>

export const FormatSwiftNodeLocalInputResolver =
  (): z.ZodType<FormatSwiftNodeLocalInput> => {
    if (!FormatSwiftNodeLocalInputModel) {
      FormatSwiftNodeLocalInputModel = z.object({
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
    return FormatSwiftNodeLocalInputModel!
  }

let FormatSwiftNodeLocalInternalInputModel: z.ZodType<FormatSwiftNodeLocalInternalInput>

export const FormatSwiftNodeLocalInternalInputResolver =
  (): z.ZodType<FormatSwiftNodeLocalInternalInput> => {
    if (!FormatSwiftNodeLocalInternalInputModel) {
      FormatSwiftNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatSwiftNodeLocalInternalInputModel!
  }

let FormatSwiftNodeOutputModel: z.ZodType<FormatSwiftNodeOutput>

export const FormatSwiftNodeOutputResolver =
  (): z.ZodType<FormatSwiftNodeOutput> => {
    if (!FormatSwiftNodeOutputModel) {
      FormatSwiftNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return FormatSwiftNodeOutputModel!
  }

let FormatSwiftNodeRemoteInputModel: z.ZodType<FormatSwiftNodeRemoteInput>

export const FormatSwiftNodeRemoteInputResolver =
  (): z.ZodType<FormatSwiftNodeRemoteInput> => {
    if (!FormatSwiftNodeRemoteInputModel) {
      FormatSwiftNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        format: z.string(),
        input: z.object({
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return FormatSwiftNodeRemoteInputModel!
  }

let SanitizeHtmlNodeClientInputModel: z.ZodType<SanitizeHtmlNodeClientInput>

export const SanitizeHtmlNodeClientInputResolver =
  (): z.ZodType<SanitizeHtmlNodeClientInput> => {
    if (!SanitizeHtmlNodeClientInputModel) {
      SanitizeHtmlNodeClientInputModel = z.object({
        handle: z.literal('client'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
      })
    }
    return SanitizeHtmlNodeClientInputModel!
  }

let SanitizeHtmlNodeExternalInputModel: z.ZodType<SanitizeHtmlNodeExternalInput>

export const SanitizeHtmlNodeExternalInputResolver =
  (): z.ZodType<SanitizeHtmlNodeExternalInput> => {
    if (!SanitizeHtmlNodeExternalInputModel) {
      SanitizeHtmlNodeExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
      })
    }
    return SanitizeHtmlNodeExternalInputModel!
  }

let SanitizeHtmlNodeInputModel: z.ZodType<SanitizeHtmlNodeInput>

export const SanitizeHtmlNodeInputResolver =
  (): z.ZodType<SanitizeHtmlNodeInput> => {
    if (!SanitizeHtmlNodeInputModel) {
      SanitizeHtmlNodeInputModel = z.union([
        z.lazy(() => SanitizeHtmlNodeRemoteInputResolver()),
        z.lazy(() => SanitizeHtmlNodeLocalExternalInputResolver()),
        z.lazy(() => SanitizeHtmlNodeLocalInternalInputResolver()),
      ])
    }
    return SanitizeHtmlNodeInputModel!
  }

let SanitizeHtmlNodeLocalExternalInputModel: z.ZodType<SanitizeHtmlNodeLocalExternalInput>

export const SanitizeHtmlNodeLocalExternalInputResolver =
  (): z.ZodType<SanitizeHtmlNodeLocalExternalInput> => {
    if (!SanitizeHtmlNodeLocalExternalInputModel) {
      SanitizeHtmlNodeLocalExternalInputModel = z.object({
        handle: z.literal('external'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => RemoteInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return SanitizeHtmlNodeLocalExternalInputModel!
  }

let SanitizeHtmlNodeLocalInputModel: z.ZodType<SanitizeHtmlNodeLocalInput>

export const SanitizeHtmlNodeLocalInputResolver =
  (): z.ZodType<SanitizeHtmlNodeLocalInput> => {
    if (!SanitizeHtmlNodeLocalInputModel) {
      SanitizeHtmlNodeLocalInputModel = z.object({
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
    return SanitizeHtmlNodeLocalInputModel!
  }

let SanitizeHtmlNodeLocalInternalInputModel: z.ZodType<SanitizeHtmlNodeLocalInternalInput>

export const SanitizeHtmlNodeLocalInternalInputResolver =
  (): z.ZodType<SanitizeHtmlNodeLocalInternalInput> => {
    if (!SanitizeHtmlNodeLocalInternalInputModel) {
      SanitizeHtmlNodeLocalInternalInputModel = z.object({
        handle: z.optional(z.literal('internal')),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return SanitizeHtmlNodeLocalInternalInputModel!
  }

let SanitizeHtmlNodeOutputModel: z.ZodType<SanitizeHtmlNodeOutput>

export const SanitizeHtmlNodeOutputResolver =
  (): z.ZodType<SanitizeHtmlNodeOutput> => {
    if (!SanitizeHtmlNodeOutputModel) {
      SanitizeHtmlNodeOutputModel = z.object({
        file: z.lazy(() => FilePathResolver()),
      })
    }
    return SanitizeHtmlNodeOutputModel!
  }

let SanitizeHtmlNodeRemoteInputModel: z.ZodType<SanitizeHtmlNodeRemoteInput>

export const SanitizeHtmlNodeRemoteInputResolver =
  (): z.ZodType<SanitizeHtmlNodeRemoteInput> => {
    if (!SanitizeHtmlNodeRemoteInputModel) {
      SanitizeHtmlNodeRemoteInputModel = z.object({
        handle: z.literal('remote'),
        input: z.object({
          format: z.string(),
          file: z.union([
            z.lazy(() => FileInputPathResolver()),
            z.lazy(() => FileContentWithSha256Resolver()),
          ]),
        }),
        output: z.object({
          file: z.optional(z.lazy(() => LocalOutputPathResolver())),
        }),
        pathScope: z.optional(z.string()),
      })
    }
    return SanitizeHtmlNodeRemoteInputModel!
  }
