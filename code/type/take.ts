import { z } from 'zod'
import * as Cast from './cast.js'
import { MAKE, TEST } from '@termsurf/form'
import * as code from './code.js'

export const AddAudioToVideoWithFfmpegModel: z.ZodType<Cast.AddAudioToVideoWithFfmpeg> =
  z.object({
    inputVideoPath: z.string(),
    inputAudioPath: z.string(),
    outputPath: z.string(),
    audioCodec: z.string(),
    fit: z.boolean(),
  })

export const ArchiveFormatModel: z.ZodType<Cast.ArchiveFormat> = z.enum(
  Cast.ARCHIVE_FORMAT,
)

export const ArchiveWithRarModel: z.ZodType<Cast.ArchiveWithRar> =
  z.object({
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

export const ArchiveWithZipModel: z.ZodType<Cast.ArchiveWithZip> =
  z.object({
    input: z.object({
      path: z.string(),
    }),
    output: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const AssemblySyntaxModel: z.ZodType<Cast.AssemblySyntax> =
  z.enum(Cast.ASSEMBLY_SYNTAX)

export const BackendCompilationOutputModel: z.ZodType<Cast.BackendCompilationOutput> =
  z.enum(Cast.BACKEND_COMPILATION_OUTPUT)

export const BuildBaseFileInputModel: z.ZodType<Cast.BuildBaseFileInput> =
  z
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

export const BuildBaseInputDirectoryOrFileOutputFileModel: z.ZodType<Cast.BuildBaseInputDirectoryOrFileOutputFile> =
  z
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

export const BuildBaseInputFileOutputDirectoryModel: z.ZodType<Cast.BuildBaseInputFileOutputDirectory> =
  z
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

export const BuildCommandToOptimizeGifWithGifsicleModel: z.ZodType<Cast.BuildCommandToOptimizeGifWithGifsicle> =
  z.object({
    lossy: z.optional(z.number().int().gte(0)),
    background: z.optional(z.string()),
    left: z.optional(z.number().int()),
    right: z.optional(z.number().int()),
    top: z.optional(z.number().int()),
    bottom: z.optional(z.number().int()),
    flip: z.optional(z.lazy(() => FlipModel)),
    transparent: z.optional(z.string()),
    optimize: z.optional(z.lazy(() => GifsicleOptimizeOptionModel)),
    scale: z.optional(z.number()),
    output: z.object({
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const BuildFormatInputOutputModel: z.ZodType<Cast.BuildFormatInputOutput> =
  z
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

export const CalibreInputFormatModel: z.ZodType<Cast.CalibreInputFormat> =
  z.enum(Cast.CALIBRE_INPUT_FORMAT)

export const CalibreInputProfileModel: z.ZodType<Cast.CalibreInputProfile> =
  z.enum(Cast.CALIBRE_INPUT_PROFILE)

export const CalibreOutputFormatModel: z.ZodType<Cast.CalibreOutputFormat> =
  z.enum(Cast.CALIBRE_OUTPUT_FORMAT)

export const CalibreOutputProfileModel: z.ZodType<Cast.CalibreOutputProfile> =
  z.enum(Cast.CALIBRE_OUTPUT_PROFILE)

export const CheckFileTypeUsingMagicBytesModel: z.ZodType<Cast.CheckFileTypeUsingMagicBytes> =
  z.object({
    input: z.object({
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const CipherKeyModel: z.ZodType<Cast.CipherKey> = z.enum(
  Cast.CIPHER_KEY,
)

export const ClangStyleAllModel: z.ZodType<Cast.ClangStyleAll> =
  z.object({
    basedOnStyle: z.optional(z.string()),
    alignAfterOpenBracket: z.optional(
      z.enum(['align', 'dontAlign', 'alwaysBreak', 'blockIndent']),
    ),
    alignArrayOfStructures: z.optional(
      z.enum(['left', 'right', 'none']),
    ),
    alignConsecutiveAssignments: z.optional(
      z.object({
        enabled: z.boolean(),
        acrossEmptyLines: z.boolean(),
        acrossComments: z.boolean(),
        alignCompound: z.boolean(),
        alignFunctionPointers: z.boolean(),
        padOperators: z.boolean(),
      }),
    ),
    alignConsecutiveBitFields: z.optional(
      z.object({
        enabled: z.boolean(),
        acrossEmptyLines: z.boolean(),
        acrossComments: z.boolean(),
        alignCompound: z.boolean(),
        alignFunctionPointers: z.boolean(),
        padOperators: z.boolean(),
      }),
    ),
    alignConsecutiveDeclarations: z.optional(
      z.object({
        enabled: z.boolean(),
        acrossEmptyLines: z.boolean(),
        acrossComments: z.boolean(),
        alignCompound: z.boolean(),
        alignFunctionPointers: z.boolean(),
        padOperators: z.boolean(),
      }),
    ),
    alignConsecutiveMacros: z.optional(
      z.object({
        enabled: z.boolean(),
        acrossEmptyLines: z.boolean(),
        acrossComments: z.boolean(),
        alignCompound: z.boolean(),
        alignFunctionPointers: z.boolean(),
        padOperators: z.boolean(),
      }),
    ),
    alignConsecutiveShortCaseStatements: z.optional(
      z.object({
        enabled: z.boolean(),
        acrossEmptyLines: z.boolean(),
        acrossComments: z.boolean(),
        alignCaseColons: z.boolean(),
      }),
    ),
    alignEscapedNewlines: z.optional(
      z.enum(['dontAlign', 'left', 'right']),
    ),
    alignOperands: z.optional(
      z.enum(['dontAlign', 'align', 'alignAfterOperator']),
    ),
    alignTrailingComments: z.optional(
      z.object({
        kind: z.object({}),
        overEmptyLines: z.number().int(),
      }),
    ),
    allowAllArgumentsOnNextLine: z.optional(z.boolean()),
    allowAllConstructorInitializersOnNextLine: z.optional(z.boolean()),
    allowAllParametersOfDeclarationOnNextLine: z.optional(z.boolean()),
    allowBreakBeforeNoexceptSpecifier: z.optional(
      z.enum(['never', 'onlyWithParen', 'always']),
    ),
    allowShortBlocksOnASingleLine: z.optional(
      z.enum(['never', 'empty', 'always']),
    ),
    allowShortCaseLabelsOnASingleLine: z.optional(z.boolean()),
    allowShortCompoundRequirementOnASingleLine: z.optional(z.boolean()),
    allowShortEnumsOnASingleLine: z.optional(z.boolean()),
    allowShortFunctionsOnASingleLine: z.optional(
      z.enum(['none', 'inlineOnly', 'empty', 'inline', 'all']),
    ),
    allowShortIfStatementsOnASingleLine: z.optional(
      z.enum(['never', 'withoutElse', 'onlyFirstIf', 'allIfsAndElse']),
    ),
    allowShortLambdasOnASingleLine: z.optional(
      z.enum(['none', 'empty', 'inline', 'all']),
    ),
    allowShortLoopsOnASingleLine: z.optional(z.boolean()),
    alwaysBreakAfterDefinitionReturnType: z.optional(
      z.enum(['none', 'all', 'topLevel']),
    ),
    alwaysBreakAfterReturnType: z.optional(
      z.enum([
        'none',
        'all',
        'topLevel',
        'allDefinitions',
        'topLevelDefinitions',
      ]),
    ),
    alwaysBreakBeforeMultilineStrings: z.optional(z.boolean()),
    alwaysBreakTemplateDeclarations: z.optional(
      z.enum(['no', 'multiLine', 'yes']),
    ),
    attributeMacros: z.optional(z.array(z.string())),
    binPackArguments: z.optional(z.boolean()),
    binPackParameters: z.optional(z.boolean()),
    bitFieldColonSpacing: z.optional(
      z.enum(['both', 'none', 'before', 'after']),
    ),
    braceWrapping: z.optional(
      z.object({
        afterCaseLabel: z.boolean(),
        afterClass: z.boolean(),
        afterControlStatement: z.object({}),
        afterEnum: z.boolean(),
        afterFunction: z.boolean(),
        afterNamespace: z.boolean(),
        afterObjCDeclaration: z.boolean(),
        afterStruct: z.boolean(),
        afterUnion: z.boolean(),
        afterExternBlock: z.boolean(),
        beforeCatch: z.boolean(),
        beforeElse: z.boolean(),
        beforeLambdaBody: z.boolean(),
        beforeWhile: z.boolean(),
        indentBraces: z.boolean(),
        splitEmptyFunction: z.boolean(),
        splitEmptyRecord: z.boolean(),
        splitEmptyNamespace: z.boolean(),
      }),
    ),
    bracedInitializerIndentWidth: z.optional(z.number().int()),
    breakAdjacentStringLiterals: z.optional(z.boolean()),
    breakAfterAttributes: z.optional(
      z.enum(['always', 'leave', 'never']),
    ),
    breakArrays: z.optional(z.boolean()),
    breakBeforeBinaryOperators: z.optional(
      z.enum(['none', 'nonAssignment', 'all']),
    ),
    breakBeforeBraces: z.optional(
      z.enum([
        'attach',
        'linux',
        'mozilla',
        'stroustrup',
        'allman',
        'whitesmiths',
        'gnu',
        'webKit',
        'custom',
      ]),
    ),
    breakBeforeConceptDeclarations: z.optional(
      z.enum(['never', 'allowed', 'always']),
    ),
    breakBeforeInlineAsmColon: z.optional(
      z.enum(['never', 'onlyMultiline', 'always']),
    ),
    breakBeforeTernaryOperators: z.optional(z.boolean()),
    breakConstructorInitializers: z.optional(
      z.enum(['beforeColon', 'beforeComma', 'afterColon']),
    ),
    breakInheritanceList: z.optional(
      z.enum([
        'beforeColon',
        'beforeComma',
        'afterColon',
        'afterComma',
      ]),
    ),
    breakStringLiterals: z.optional(z.boolean()),
    columnLimit: z.optional(z.number().int()),
    commentPragmas: z.optional(z.string()),
    compactNamespaces: z.optional(z.boolean()),
    constructorInitializerAllOnOneLineOrOnePerLine: z.optional(
      z.boolean(),
    ),
    constructorInitializerIndentWidth: z.optional(z.number().int()),
    continuationIndentWidth: z.optional(z.number().int()),
    deriveLineEnding: z.optional(z.boolean()),
    derivePointerAlignment: z.optional(z.boolean()),
    disableFormat: z.optional(z.boolean()),
    emptyLineAfterAccessModifier: z.optional(
      z.enum(['never', 'leave', 'always']),
    ),
    emptyLineBeforeAccessModifier: z.optional(
      z.enum(['never', 'leave', 'logicalBlock', 'always']),
    ),
    experimentalAutoDetectBinPacking: z.optional(z.boolean()),
    fixNamespaceComments: z.optional(z.boolean()),
    forEachMacros: z.optional(z.array(z.string())),
    ifMacros: z.optional(z.array(z.string())),
    includeBlocks: z.optional(z.enum(['preserve', 'merge', 'regroup'])),
    includeIsMainRegex: z.optional(z.string()),
    includeIsMainSourceRegex: z.optional(z.string()),
    indentAccessModifiers: z.optional(z.boolean()),
    indentCaseBlocks: z.optional(z.boolean()),
    indentCaseLabels: z.optional(z.boolean()),
    indentExternBlock: z.optional(
      z.enum(['afterExternBlock', 'noIndent', 'indent']),
    ),
    indentGotoLabels: z.optional(z.boolean()),
    indentPpDirectives: z.optional(
      z.enum(['none', 'afterHash', 'beforeHash']),
    ),
    indentRequiresClause: z.optional(z.boolean()),
    indentWidth: z.optional(z.number().int()),
    indentWrappedFunctionNames: z.optional(z.boolean()),
    insertBraces: z.optional(z.boolean()),
    insertNewlineAtEof: z.optional(z.boolean()),
    insertTrailingCommas: z.optional(z.enum(['none', 'wrapped'])),
    integerLiteralSeparator: z.optional(z.object({})),
    keepEmptyLinesAtEof: z.optional(z.boolean()),
    keepEmptyLinesAtTheStartOfBlocks: z.optional(z.boolean()),
    lambdaBodyIndentation: z.optional(
      z.enum(['signature', 'outerScope']),
    ),
    language: z.optional(
      z.enum([
        'none',
        'cpp',
        'cSharp',
        'java',
        'javaScript',
        'json',
        'objC',
        'proto',
        'tableGen',
        'textProto',
        'verilog',
      ]),
    ),
    lineEnding: z.optional(
      z.enum(['lf', 'crlf', 'deriveLf', 'deriveCrlf']),
    ),
    macroBlockBegin: z.optional(z.string()),
    macroBlockEnd: z.optional(z.string()),
    macros: z.optional(z.array(z.string())),
    maxEmptyLinesToKeep: z.optional(z.number().int()),
    namespaceIndentation: z.optional(z.enum(['none', 'inner', 'all'])),
    namespaceMacros: z.optional(z.array(z.string())),
    packConstructorInitializers: z.optional(
      z.enum([
        'never',
        'binPack',
        'currentLine',
        'nextLine',
        'nextLineOnly',
      ]),
    ),
    penaltyBreakAssignment: z.optional(z.number().int()),
    penaltyBreakBeforeFirstCallParameter: z.optional(z.number().int()),
    penaltyBreakComment: z.optional(z.number().int()),
    penaltyBreakFirstLessLess: z.optional(z.number().int()),
    penaltyBreakOpenParenthesis: z.optional(z.number().int()),
    penaltyBreakString: z.optional(z.number().int()),
    penaltyBreakTemplateDeclaration: z.optional(z.number().int()),
    penaltyExcessCharacter: z.optional(z.number().int()),
    penaltyIndentedWhitespace: z.optional(z.number().int()),
    penaltyReturnTypeOnItsOwnLine: z.optional(z.number().int()),
    pointerAlignment: z.optional(z.enum(['left', 'right', 'middle'])),
    qualifierAlignment: z.optional(
      z.enum(['leave', 'left', 'right', 'custom']),
    ),
    qualifierOrder: z.optional(z.array(z.string())),
    referenceAlignment: z.optional(
      z.enum(['pointer', 'left', 'right', 'middle']),
    ),
    reflowComments: z.optional(z.boolean()),
    removeBracesLlvm: z.optional(z.boolean()),
    removeParentheses: z.optional(
      z.enum(['leave', 'multipleParentheses', 'returnStatement']),
    ),
    removeSemicolon: z.optional(z.boolean()),
    requiresClausePosition: z.optional(
      z.enum([
        'ownLine',
        'withPreceding',
        'withFollowing',
        'singleLine',
      ]),
    ),
    requiresExpressionIndentation: z.optional(
      z.enum(['outerScope', 'keyword']),
    ),
    separateDefinitionBlocks: z.optional(
      z.enum(['leave', 'always', 'never']),
    ),
    shortNamespaceLines: z.optional(z.number().int()),
    sortIncludes: z.optional(
      z.enum(['never', 'caseSensitive', 'caseInsensitive']),
    ),
    sortUsingDeclarations: z.optional(
      z.enum(['never', 'lexicographic', 'lexicographicNumeric']),
    ),
    spaceAfterCStyleCast: z.optional(z.boolean()),
    spaceAfterLogicalNot: z.optional(z.boolean()),
    spaceAfterTemplateKeyword: z.optional(z.boolean()),
    spaceAroundPointerQualifiers: z.optional(
      z.enum(['default', 'before', 'after', 'both']),
    ),
    spaceBeforeAssignmentOperators: z.optional(z.boolean()),
    spaceBeforeCaseColon: z.optional(z.boolean()),
    spaceBeforeCtorInitializerColon: z.optional(z.boolean()),
    spaceBeforeInheritanceColon: z.optional(z.boolean()),
    spaceBeforeJsonColon: z.optional(z.boolean()),
    spaceBeforeParens: z.optional(
      z.enum([
        'never',
        'controlStatements',
        'controlStatementsExceptControlMacros',
        'nonEmptyParentheses',
        'always',
        'custom',
      ]),
    ),
    spaceBeforeParensOptions: z.optional(
      z.object({
        afterControlStatements: z.boolean(),
        afterForeachMacros: z.boolean(),
        afterFunctionDeclarationName: z.boolean(),
        afterFunctionDefinitionName: z.boolean(),
        afterIfMacros: z.boolean(),
        afterOverloadedOperator: z.boolean(),
        afterPlacementOperator: z.object({}),
        afterRequiresInClause: z.boolean(),
        afterRequiresInExpression: z.boolean(),
        beforeNonEmptyParentheses: z.boolean(),
      }),
    ),
    spaceBeforeRangeBasedForLoopColon: z.optional(z.boolean()),
    spaceBeforeSquareBrackets: z.optional(z.boolean()),
    spaceInEmptyBlock: z.optional(z.boolean()),
    spaceInEmptyParentheses: z.optional(z.boolean()),
    spacesBeforeTrailingComments: z.optional(z.number().int()),
    spacesInAngles: z.optional(z.enum(['never', 'always', 'leave'])),
    spacesInCStyleCastParentheses: z.optional(z.boolean()),
    spacesInConditionalStatement: z.optional(z.boolean()),
    spacesInContainerLiterals: z.optional(z.boolean()),
    spacesInLineCommentPrefix: z.optional(
      z.object({
        minimum: z.number().int(),
        maximum: z.number().int(),
      }),
    ),
    spacesInParens: z.optional(z.enum(['never', 'custom'])),
    spacesInParensOptions: z.optional(
      z.object({
        inConditionalStatements: z.boolean(),
        inCStyleCasts: z.boolean(),
        inEmptyParentheses: z.boolean(),
        other: z.boolean(),
      }),
    ),
    spacesInParentheses: z.optional(z.boolean()),
    spacesInSquareBrackets: z.optional(z.boolean()),
    standard: z.optional(
      z.enum([
        'lsCpp03',
        'lsCpp11',
        'lsCpp14',
        'lsCpp17',
        'lsCpp20',
        'latest',
        'auto',
      ]),
    ),
    statementAttributeLikeMacros: z.optional(z.array(z.string())),
    statementMacros: z.optional(z.array(z.string())),
    tabWidth: z.optional(z.number().int()),
    typeNames: z.optional(z.array(z.string())),
    typenameMacros: z.optional(z.array(z.string())),
    useCrlf: z.optional(z.boolean()),
    useTab: z.optional(
      z.enum([
        'never',
        'forIndentation',
        'forContinuationAndIndentation',
        'alignWithSpaces',
        'always',
      ]),
    ),
    verilogBreakBetweenInstancePorts: z.optional(z.boolean()),
    whitespaceSensitiveMacros: z.optional(z.array(z.string())),
  })

export const ClangStyleCppModel: z.ZodType<Cast.ClangStyleCpp> = (
  ClangStyleAllModel as z.ZodObject<z.ZodRawShape>
).extend({
  cpp11BracedListStyle: z.optional(z.boolean()),
  spaceBeforeCpp11BracedList: z.optional(z.boolean()),
})

export const ClangStyleJavaModel: z.ZodType<Cast.ClangStyleJava> = (
  ClangStyleAllModel as z.ZodObject<z.ZodRawShape>
).extend({
  breakAfterJavaFieldAnnotations: z.optional(z.boolean()),
  javaImportGroups: z.optional(z.array(z.string())),
  sortJavaStaticImport: z.optional(z.enum(['before', 'after'])),
})

export const ClangStyleJavascriptModel: z.ZodType<Cast.ClangStyleJavascript> =
  (ClangStyleAllModel as z.ZodObject<z.ZodRawShape>).extend({
    javaScriptQuotes: z.optional(z.enum(['leave', 'single', 'double'])),
    javaScriptWrapImports: z.optional(z.boolean()),
  })

export const ClangStyleObjcModel: z.ZodType<Cast.ClangStyleObjc> = (
  ClangStyleAllModel as z.ZodObject<z.ZodRawShape>
).extend({
  objCBinPackProtocolList: z.optional(
    z.enum(['auto', 'always', 'never']),
  ),
  objCBlockIndentWidth: z.optional(z.number().int()),
  objCBreakBeforeNestedBlockParam: z.optional(z.boolean()),
  objCPropertyAttributeOrder: z.optional(z.array(z.string())),
  objCSpaceAfterProperty: z.optional(z.boolean()),
  objCSpaceBeforeProtocolList: z.optional(z.boolean()),
})

export const CompileAsmModel: z.ZodType<Cast.CompileAsm> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
})

export const CompileCModel: z.ZodType<Cast.CompileC> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
  output: z.object({
    format: z.lazy(() => BackendCompilationOutputModel),
    syntax: z.optional(z.lazy(() => AssemblySyntaxModel)),
    architecture: z.lazy(() => LlvmArchitectureModel),
    file: z.object({
      path: z.string(),
    }),
  }),
  optimizationLevel: z.optional(
    z.lazy(() => LlvmOptimizationLevelModel).default('0'),
  ),
  fastMath: z.optional(z.boolean()).default(false),
})

export const CompileCppModel: z.ZodType<Cast.CompileCpp> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
  output: z.object({
    architecture: z.lazy(() => LlvmArchitectureModel),
    format: z.lazy(() => BackendCompilationOutputModel),
    syntax: z.optional(z.lazy(() => AssemblySyntaxModel)),
    file: z.object({
      path: z.string(),
    }),
  }),
  optimizationLevel: z.optional(
    z.lazy(() => LlvmOptimizationLevelModel).default('0'),
  ),
  fastMath: z.optional(z.boolean()).default(false),
})

export const CompileJavaModel: z.ZodType<Cast.CompileJava> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
})

export const CompileLlvmModel: z.ZodType<Cast.CompileLlvm> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
})

export const CompileLlvmIrToAssemblyModel: z.ZodType<Cast.CompileLlvmIrToAssembly> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      syntax: z.optional(
        z.lazy(() => AssemblySyntaxModel).default('intel'),
      ),
      architecture: z.optional(
        z.lazy(() => LlvmArchitectureModel).default('x86_64'),
      ),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const CompileRustModel: z.ZodType<Cast.CompileRust> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
  explain: z.optional(z.boolean()).default(false),
  output: z.object({
    format: z.lazy(() => RustOutputFormatModel),
    optimize: z.optional(z.boolean()).default(false),
    target: z.optional(z.lazy(() => RustCompilerTargetModel)),
    file: z.object({
      path: z.string(),
    }),
  }),
})

export const CompileSwiftModel: z.ZodType<Cast.CompileSwift> = z.object(
  {
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      format: z.lazy(() => BackendCompilationOutputModel),
      file: z.object({
        path: z.string(),
      }),
    }),
  },
)

export const CompileToAstModel: z.ZodType<Cast.CompileToAst> = z.object(
  {
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
  },
)

export const CompileWastModel: z.ZodType<Cast.CompileWast> = z.object({
  input: z.object({
    format: z.string(),
    file: z.object({
      path: z.string(),
    }),
  }),
})

export const CompressMp4WithFfmpegModel: z.ZodType<Cast.CompressMp4WithFfmpeg> =
  z.object({
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
    audioCodec: z.optional(
      z.lazy(() => FfmpegCodecAudioModel).default('aac'),
    ),
    videoCodec: z.optional(
      z.lazy(() => FfmpegCodecVideoModel).default('h264'),
    ),
  })

export const ConvertAiToSvgWithInkscapeModel: z.ZodType<Cast.ConvertAiToSvgWithInkscape> =
  z.object({
    input: z.object({
      file: z.object({
        path: z.optional(z.string()),
      }),
    }),
    output: z.object({
      file: z.object({
        path: z.string(),
        format: z.string(),
      }),
    }),
  })

export const ConvertArchiveWithUnarchiverModel: z.ZodType<Cast.ConvertArchiveWithUnarchiver> =
  z.object({
    temporary: z.object({
      directory: z.object({
        path: z.string(),
      }),
    }),
    input: z.object({
      format: z.lazy(() => UnarchiverFormatModel),
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
  })

export const ConvertDocumentWithCalibreModel: z.ZodType<Cast.ConvertDocumentWithCalibre> =
  z.object({
    input: z.object({
      format: z.lazy(() => CalibreInputFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      format: z.lazy(() => CalibreOutputFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const ConvertDocumentWithJupyterModel: z.ZodType<Cast.ConvertDocumentWithJupyter> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      format: z.string(),
      file: z.object({
        format: z.string(),
      }),
    }),
  })

export const ConvertDocumentWithLibreOfficeModel: z.ZodType<Cast.ConvertDocumentWithLibreOffice> =
  z.object({
    input: z.object({
      format: z.lazy(() => LibreOfficeInputFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      format: z.lazy(() => LibreOfficeOutputFormatModel),
      directory: z.object({
        path: z.string(),
      }),
    }),
  })

export const ConvertDocumentWithPandocModel: z.ZodType<Cast.ConvertDocumentWithPandoc> =
  z.object({
    input: z.object({
      format: z.lazy(() => PandocInputFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      file: z.object({
        path: z.string(),
      }),
      format: z.lazy(() => PandocOutputFormatModel),
    }),
  })

export const ConvertFontWithFontForgeModel: z.ZodType<Cast.ConvertFontWithFontForge> =
  z.object({
    input: z.object({
      format: z.lazy(() => FontFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      format: z.lazy(() => FontFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const ConvertHtmlToPdfWithPuppeteerModel: z.ZodType<Cast.ConvertHtmlToPdfWithPuppeteer> =
  z.object({
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
    viewport: z.object({
      width: z.optional(z.number().int().gte(0)),
      height: z.optional(z.number().int().gte(0)),
    }),
    proxy: z.optional(z.string()),
    waitUntil: z.optional(z.lazy(() => PuppeteerLifeCycleEventModel)),
  })

export const ConvertHtmlToPngWithPuppeteerModel: z.ZodType<Cast.ConvertHtmlToPngWithPuppeteer> =
  z.object({
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
    viewport: z.object({
      width: z.optional(z.number().int().gte(0)),
      height: z.optional(z.number().int().gte(0)),
    }),
    proxy: z.optional(z.string()),
    waitUntil: z.optional(z.lazy(() => PuppeteerLifeCycleEventModel)),
  })

export const ConvertImageWithImageMagickModel: z.ZodType<Cast.ConvertImageWithImageMagick> =
  z.object({
    surf: z.boolean(),
    work: z.boolean(),
    note: z.boolean(),
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
    colorCount: z.optional(z.number().int().gte(0)),
    colorMatrix: z.optional(
      z
        .lazy(() => ImageMagicColorMatrixModel)
        .refine(
          TEST('colorMatrix', code.test_image_magic_color_matrix.test),
        ),
    ),
    colorSpace: z.optional(z.lazy(() => ImageMagickColorSpaceModel)),
    compare: z.optional(z.boolean()),
    compression: z.optional(z.lazy(() => ImageMagickCompressionModel)),
  })

export const ConvertLatexToPdfWithPdfLatexModel: z.ZodType<Cast.ConvertLatexToPdfWithPdfLatex> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      directory: z.object({
        path: z.string(),
      }),
      file: z.object({
        name: z.string(),
      }),
    }),
  })

export const ConvertMp4ToGifWithFfmpegModel: z.ZodType<Cast.ConvertMp4ToGifWithFfmpeg> =
  z.object({
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
      z.string().refine(TEST('startTime', code.test_time_string.test)),
    ]),
    endTime: z.union([
      z
        .number()
        .int()
        .refine(TEST('endTime', code.test_time_integer.test)),
      z.string().refine(TEST('endTime', code.test_time_string.test)),
    ]),
    duration: z.union([
      z
        .number()
        .int()
        .refine(TEST('duration', code.test_time_integer.test)),
      z.string().refine(TEST('duration', code.test_time_string.test)),
    ]),
  })

export const ConvertTimeZoneModel: z.ZodType<Cast.ConvertTimeZone> =
  z.object({
    input: z.object({
      date: z.string(),
    }),
    output: z.object({
      timezone: z.lazy(() => TimeZoneModel),
      format: z.string(),
    }),
  })

export const ConvertVideoToAudioWithFfmpegModel: z.ZodType<Cast.ConvertVideoToAudioWithFfmpeg> =
  z.object({
    inputPath: z.string(),
    outputPath: z.string(),
  })

export const ConvertVideoWithFfmpegModel: z.ZodType<Cast.ConvertVideoWithFfmpeg> =
  z.object({
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
    audioCodec: z.optional(z.lazy(() => FfmpegCodecAudioModel)),
    videoCodec: z.optional(z.lazy(() => FfmpegCodecVideoModel)),
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
        z.string().refine(TEST('endTime', code.test_time_string.test)),
      ]),
    ),
    strict: z.optional(
      z.lazy(() => FfmpegStrictOptionModel).default('strict'),
    ),
    overwrite: z.optional(z.boolean()).default(false),
    progress: z.optional(z.boolean()).default(false),
    scaleWidth: z.optional(z.number().int()),
    scaleHeight: z.optional(z.number().int()),
    audioChannels: z.optional(z.number().int()),
    audioSamplingFrequency: z.optional(z.number().int()),
    subtitleCodec: z.optional(z.lazy(() => FfmpegCodecSubtitleModel)),
    duration: z.optional(
      z.union([
        z
          .number()
          .int()
          .refine(TEST('duration', code.test_time_integer.test)),
        z.string().refine(TEST('duration', code.test_time_string.test)),
      ]),
    ),
    rotation: z.optional(z.number()),
  })

export const ConvertVideoWithFfmpegBaseModel: z.ZodType<Cast.ConvertVideoWithFfmpegBase> =
  z.object({
    audioCodec: z.optional(z.lazy(() => FfmpegCodecAudioModel)),
    videoCodec: z.optional(z.lazy(() => FfmpegCodecVideoModel)),
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
        z.string().refine(TEST('endTime', code.test_time_string.test)),
      ]),
    ),
    strict: z.optional(
      z.lazy(() => FfmpegStrictOptionModel).default('strict'),
    ),
    overwrite: z.optional(z.boolean()).default(false),
    progress: z.optional(z.boolean()).default(false),
    scaleWidth: z.optional(z.number().int()),
    scaleHeight: z.optional(z.number().int()),
    audioChannels: z.optional(z.number().int()),
    audioSamplingFrequency: z.optional(z.number().int()),
    subtitleCodec: z.optional(z.lazy(() => FfmpegCodecSubtitleModel)),
    duration: z.optional(
      z.union([
        z
          .number()
          .int()
          .refine(TEST('duration', code.test_time_integer.test)),
        z.string().refine(TEST('duration', code.test_time_string.test)),
      ]),
    ),
    rotation: z.optional(z.number()),
  })

export const DecompressWith7ZModel: z.ZodType<Cast.DecompressWith7Z> =
  z.object({
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

export const DecompressWithUnarchiverModel: z.ZodType<Cast.DecompressWithUnarchiver> =
  z.object({
    output: z.object({
      overwrite: z.optional(z.boolean()).default(false),
      directory: z.object({
        path: z.string(),
      }),
    }),
    input: z.object({
      password: z.optional(z.string()),
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const DisassembleBinaryWithObjdumpModel: z.ZodType<Cast.DisassembleBinaryWithObjdump> =
  z.object({
    show: z.array(z.lazy(() => ObjdumpShowOptionModel)),
    demangleStyle: z.lazy(() => ObjdumpDemangleStyleModel),
    disassembleAll: z.boolean(),
    hide: z.lazy(() => ObjdumpHideOptionModel),
    color: z.boolean(),
  })

export const ExiftoolFamilyContentKeyModel: z.ZodType<Cast.ExiftoolFamilyContentKey> =
  z.enum(Cast.EXIFTOOL_FAMILY_CONTENT_KEY)

export const ExiftoolImageFormatContentKeyModel: z.ZodType<Cast.ExiftoolImageFormatContentKey> =
  z.enum(Cast.EXIFTOOL_IMAGE_FORMAT_CONTENT_KEY)

export const ExiftoolTagContentKeyModel: z.ZodType<Cast.ExiftoolTagContentKey> =
  z.enum(Cast.EXIFTOOL_TAG_CONTENT_KEY)

export const FfmpegCodecAudioModel: z.ZodType<Cast.FfmpegCodecAudio> =
  z.enum(Cast.FFMPEG_CODEC_AUDIO)

export const FfmpegCodecContentKeyModel: z.ZodType<Cast.FfmpegCodecContentKey> =
  z.enum(Cast.FFMPEG_CODEC_CONTENT_KEY)

export const FfmpegCodecSubtitleModel: z.ZodType<Cast.FfmpegCodecSubtitle> =
  z.enum(Cast.FFMPEG_CODEC_SUBTITLE)

export const FfmpegCodecVideoModel: z.ZodType<Cast.FfmpegCodecVideo> =
  z.enum(Cast.FFMPEG_CODEC_VIDEO)

export const FfmpegDecoderAudioModel: z.ZodType<Cast.FfmpegDecoderAudio> =
  z.enum(Cast.FFMPEG_DECODER_AUDIO)

export const FfmpegDecoderContentKeyModel: z.ZodType<Cast.FfmpegDecoderContentKey> =
  z.enum(Cast.FFMPEG_DECODER_CONTENT_KEY)

export const FfmpegDecoderSubtitleModel: z.ZodType<Cast.FfmpegDecoderSubtitle> =
  z.enum(Cast.FFMPEG_DECODER_SUBTITLE)

export const FfmpegDecoderVideoModel: z.ZodType<Cast.FfmpegDecoderVideo> =
  z.enum(Cast.FFMPEG_DECODER_VIDEO)

export const FfmpegEncoderAudioModel: z.ZodType<Cast.FfmpegEncoderAudio> =
  z.enum(Cast.FFMPEG_ENCODER_AUDIO)

export const FfmpegEncoderContentKeyModel: z.ZodType<Cast.FfmpegEncoderContentKey> =
  z.enum(Cast.FFMPEG_ENCODER_CONTENT_KEY)

export const FfmpegEncoderSubtitleModel: z.ZodType<Cast.FfmpegEncoderSubtitle> =
  z.enum(Cast.FFMPEG_ENCODER_SUBTITLE)

export const FfmpegEncoderVideoModel: z.ZodType<Cast.FfmpegEncoderVideo> =
  z.enum(Cast.FFMPEG_ENCODER_VIDEO)

export const FfmpegFormatModel: z.ZodType<Cast.FfmpegFormat> = z.enum(
  Cast.FFMPEG_FORMAT,
)

export const FfmpegFormatContentKeyModel: z.ZodType<Cast.FfmpegFormatContentKey> =
  z.enum(Cast.FFMPEG_FORMAT_CONTENT_KEY)

export const FfmpegStrictOptionModel: z.ZodType<Cast.FfmpegStrictOption> =
  z.enum(Cast.FFMPEG_STRICT_OPTION)

export const FlipModel: z.ZodType<Cast.Flip> = z.enum(Cast.FLIP)

export const FontFormatModel: z.ZodType<Cast.FontFormat> = z.enum(
  Cast.FONT_FORMAT,
)

export const FormatAssemblyModel: z.ZodType<Cast.FormatAssembly> =
  z.object({
    input: z.object({
      format: z.string(),
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

export const FormatCModel: z.ZodType<Cast.FormatC> = z.object({
  input: z.object({
    format: z.string(),
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

export const FormatCodeWithClangFormatModel: z.ZodType<Cast.FormatCodeWithClangFormat> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      file: z.object({
        path: z.string(),
      }),
    }),
    style: z.optional(z.lazy(() => ClangStyleAllModel)),
  })

export const FormatCppModel: z.ZodType<Cast.FormatCpp> = z.object({
  input: z.object({
    format: z.string(),
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

export const FormatJavaModel: z.ZodType<Cast.FormatJava> = z.object({
  input: z.object({
    format: z.string(),
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

export const FormatKotlinModel: z.ZodType<Cast.FormatKotlin> = z.object(
  {
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      file: z.object({
        path: z.string(),
      }),
    }),
  },
)

export const FormatPythonModel: z.ZodType<Cast.FormatPython> = z.object(
  {
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
    output: z.object({
      file: z.object({
        path: z.string(),
      }),
    }),
  },
)

export const FormatRubyModel: z.ZodType<Cast.FormatRuby> = z.object({
  input: z.object({
    format: z.string(),
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

export const FormatRustModel: z.ZodType<Cast.FormatRust> = z.object({
  input: z.object({
    format: z.string(),
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

export const FormatSqlWithContentModel: z.ZodType<Cast.FormatSqlWithContent> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        content: z.union([z.instanceof(ArrayBuffer), z.string()]),
      }),
    }),
  })

export const FormatSwiftModel: z.ZodType<Cast.FormatSwift> = z.object({
  input: z.object({
    format: z.string(),
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

export const GenerateMurmurHashModel: z.ZodType<Cast.GenerateMurmurHash> =
  z.object({
    input: z.string(),
    seed: z.number().int(),
    version: z.optional(z.string()).default('3'),
  })

export const GifsicleOptimizeOptionModel: z.ZodType<Cast.GifsicleOptimizeOption> =
  z.enum(Cast.GIFSICLE_OPTIMIZE_OPTION)

export const ImageMagicColorMatrixModel: z.ZodType<Cast.ImageMagicColorMatrix> =
  z.object({
    row: z.number().int().gte(0),
    column: z.number().int().gte(0),
    value: z.array(z.number()),
  })

export const ImageMagickChannelModel: z.ZodType<Cast.ImageMagickChannel> =
  z.enum(Cast.IMAGE_MAGICK_CHANNEL)

export const ImageMagickColorSpaceModel: z.ZodType<Cast.ImageMagickColorSpace> =
  z.enum(Cast.IMAGE_MAGICK_COLOR_SPACE)

export const ImageMagickCompressionModel: z.ZodType<Cast.ImageMagickCompression> =
  z.enum(Cast.IMAGE_MAGICK_COMPRESSION)

export const ImageMagickFormatModel: z.ZodType<Cast.ImageMagickFormat> =
  z.enum(Cast.IMAGE_MAGICK_FORMAT)

export const ImageMagickGravityModel: z.ZodType<Cast.ImageMagickGravity> =
  z.enum(Cast.IMAGE_MAGICK_GRAVITY)

export const ImageMagickInputFormatModel: z.ZodType<Cast.ImageMagickInputFormat> =
  z.enum(Cast.IMAGE_MAGICK_INPUT_FORMAT)

export const ImageMagickOutputFormatModel: z.ZodType<Cast.ImageMagickOutputFormat> =
  z.enum(Cast.IMAGE_MAGICK_OUTPUT_FORMAT)

export const InkscapeExportFormatModel: z.ZodType<Cast.InkscapeExportFormat> =
  z.enum(Cast.INKSCAPE_EXPORT_FORMAT)

export const InkscapeImportFormatModel: z.ZodType<Cast.InkscapeImportFormat> =
  z.enum(Cast.INKSCAPE_IMPORT_FORMAT)

export const InspectColorModel: z.ZodType<Cast.InspectColor> = z.object(
  {
    value: z.string(),
  },
)

export const InspectMetadataFromImageModel: z.ZodType<Cast.InspectMetadataFromImage> =
  z.object({
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

export const LibreOfficeInputFormatModel: z.ZodType<Cast.LibreOfficeInputFormat> =
  z.enum(Cast.LIBRE_OFFICE_INPUT_FORMAT)

export const LibreOfficeOutputFormatModel: z.ZodType<Cast.LibreOfficeOutputFormat> =
  z.enum(Cast.LIBRE_OFFICE_OUTPUT_FORMAT)

export const LlvmArchitectureModel: z.ZodType<Cast.LlvmArchitecture> =
  z.enum(Cast.LLVM_ARCHITECTURE)

export const LlvmCpuModel: z.ZodType<Cast.LlvmCpu> = z.enum(
  Cast.LLVM_CPU,
)

export const LlvmFeatureModel: z.ZodType<Cast.LlvmFeature> = z.enum(
  Cast.LLVM_FEATURE,
)

export const LlvmOptimizationLevelModel: z.ZodType<Cast.LlvmOptimizationLevel> =
  z.enum(Cast.LLVM_OPTIMIZATION_LEVEL)

export const ObjdumpDemangleStyleModel: z.ZodType<Cast.ObjdumpDemangleStyle> =
  z.enum(Cast.OBJDUMP_DEMANGLE_STYLE)

export const ObjdumpHideOptionModel: z.ZodType<Cast.ObjdumpHideOption> =
  z.enum(Cast.OBJDUMP_HIDE_OPTION)

export const ObjdumpShowOptionModel: z.ZodType<Cast.ObjdumpShowOption> =
  z.enum(Cast.OBJDUMP_SHOW_OPTION)

export const PandocFormatContentKeyModel: z.ZodType<Cast.PandocFormatContentKey> =
  z.enum(Cast.PANDOC_FORMAT_CONTENT_KEY)

export const PandocInputFormatModel: z.ZodType<Cast.PandocInputFormat> =
  z.enum(Cast.PANDOC_INPUT_FORMAT)

export const PandocOutputFormatModel: z.ZodType<Cast.PandocOutputFormat> =
  z.enum(Cast.PANDOC_OUTPUT_FORMAT)

export const PatoolFormatModel: z.ZodType<Cast.PatoolFormat> = z.enum(
  Cast.PATOOL_FORMAT,
)

export const PuppeteerLifeCycleEventModel: z.ZodType<Cast.PuppeteerLifeCycleEvent> =
  z.enum(Cast.PUPPETEER_LIFE_CYCLE_EVENT)

export const RemoveAudioFromVideoWithFfmpegModel: z.ZodType<Cast.RemoveAudioFromVideoWithFfmpeg> =
  z.object({
    inputPath: z.string(),
    outputPath: z.string(),
  })

export const RemoveImageMetadataModel: z.ZodType<Cast.RemoveImageMetadata> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const ReplaceImageColorWithImageMagickModel: z.ZodType<Cast.ReplaceImageColorWithImageMagick> =
  z.object({
    inputPath: z.string(),
    outputPath: z.string(),
    startColor: z.string(),
    endColor: z.string(),
    fuzz: z.number(),
  })

export const ResizeImageWithImageMagickModel: z.ZodType<Cast.ResizeImageWithImageMagick> =
  z.object({
    inputPath: z.string(),
    outputPath: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    stretch: z.boolean(),
    gravity: z.lazy(() => ImageMagickGravityModel),
  })

export const RustCompilerTargetModel: z.ZodType<Cast.RustCompilerTarget> =
  z.enum(Cast.RUST_COMPILER_TARGET)

export const RustOutputFormatModel: z.ZodType<Cast.RustOutputFormat> =
  z.enum(Cast.RUST_OUTPUT_FORMAT)

export const SanitizeHtmlFromContentModel: z.ZodType<Cast.SanitizeHtmlFromContent> =
  z.object({
    input: z.object({
      format: z.string(),
      content: z.string(),
    }),
  })

export const SharedGematriaLanguageModel: z.ZodType<Cast.SharedGematriaLanguage> =
  z.enum(Cast.SHARED_GEMATRIA_LANGUAGE)

export const SlicePdfModel: z.ZodType<Cast.SlicePdf> = z.object({
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

export const SlicePdfWithDataModel: z.ZodType<Cast.SlicePdfWithData> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        data: z.instanceof(ArrayBuffer),
      }),
    }),
    startPage: z.number().int().gte(0),
    endPage: z.number().int().gte(0),
  })

export const TaskModel: z.ZodType<Cast.Task> = z.enum(Cast.TASK)

export const TimeZoneModel: z.ZodType<Cast.TimeZone> = z.enum(
  Cast.TIME_ZONE,
)

export const TimeZoneAbbreviationModel: z.ZodType<Cast.TimeZoneAbbreviation> =
  z.enum(Cast.TIME_ZONE_ABBREVIATION)

export const TimeZoneLocationModel: z.ZodType<Cast.TimeZoneLocation> =
  z.enum(Cast.TIME_ZONE_LOCATION)

export const UnarchiverFormatModel: z.ZodType<Cast.UnarchiverFormat> =
  z.enum(Cast.UNARCHIVER_FORMAT)

export const ValidatePdfWithDataModel: z.ZodType<Cast.ValidatePdfWithData> =
  z.object({
    input: z.object({
      format: z.string(),
      file: z.object({
        data: z.instanceof(ArrayBuffer),
      }),
    }),
  })

export const VerifyImageWithImageMagickModel: z.ZodType<Cast.VerifyImageWithImageMagick> =
  z.object({
    input: z.object({
      format: z.lazy(() => ImageMagickFormatModel),
      file: z.object({
        path: z.string(),
      }),
    }),
  })

export const WriteMetadataToImageModel: z.ZodType<Cast.WriteMetadataToImage> =
  z.object({
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
