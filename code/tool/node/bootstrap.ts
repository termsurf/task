import {
  ARCHIVE_FORMAT,
  ASSEMBLY_SYNTAX,
  BACKEND_COMPILATION_OUTPUT,
  C_INPUT_FORMAT,
  CALIBRE_INPUT_FORMAT,
  CALIBRE_INPUT_PROFILE,
  CALIBRE_OUTPUT_FORMAT,
  CALIBRE_OUTPUT_PROFILE,
  CALL_HANDLE,
  CIPHER,
  CLANG_FORMAT,
  CLI_LOG_FORMAT,
  COMMAND_KEY,
  COMMAND_NAME,
  CONVERSION_UNIT_ACRE,
  CONVERSION_UNIT_AMPERE,
  CONVERSION_UNIT_ARCMINUTE,
  CONVERSION_UNIT_ARCSECOND,
  CONVERSION_UNIT_BAR,
  CONVERSION_UNIT_BIT,
  CONVERSION_UNIT_BYTE,
  CONVERSION_UNIT_CELSIUS,
  CONVERSION_UNIT_CENTILITRE,
  CONVERSION_UNIT_CENTILITRE_PER_SECOND,
  CONVERSION_UNIT_CENTIMETER,
  CONVERSION_UNIT_CUBIC_CENTIMETER,
  CONVERSION_UNIT_CUBIC_CENTIMETER_PER_SECOND,
  CONVERSION_UNIT_CUBIC_FOOT,
  CONVERSION_UNIT_CUBIC_FOOT_PER_HOUR,
  CONVERSION_UNIT_CUBIC_FOOT_PER_MINUTE,
  CONVERSION_UNIT_CUBIC_FOOT_PER_SECOND,
  CONVERSION_UNIT_CUBIC_INCH,
  CONVERSION_UNIT_CUBIC_INCH_PER_HOUR,
  CONVERSION_UNIT_CUBIC_INCH_PER_MINUTE,
  CONVERSION_UNIT_CUBIC_INCH_PER_SECOND,
  CONVERSION_UNIT_CUBIC_KILOMETER,
  CONVERSION_UNIT_CUBIC_KILOMETER_PER_SECOND,
  CONVERSION_UNIT_CUBIC_METER,
  CONVERSION_UNIT_CUBIC_METER_PER_HOUR,
  CONVERSION_UNIT_CUBIC_METER_PER_MINUTE,
  CONVERSION_UNIT_CUBIC_METER_PER_SECOND,
  CONVERSION_UNIT_CUBIC_MILLIMETER,
  CONVERSION_UNIT_CUBIC_MILLIMETER_PER_SECOND,
  CONVERSION_UNIT_CUBIC_YARD,
  CONVERSION_UNIT_CUBIC_YARD_PER_HOUR,
  CONVERSION_UNIT_CUBIC_YARD_PER_MINUTE,
  CONVERSION_UNIT_CUBIC_YARD_PER_SECOND,
  CONVERSION_UNIT_CUP,
  CONVERSION_UNIT_CUP_PER_SECOND,
  CONVERSION_UNIT_DAY,
  CONVERSION_UNIT_DECILITRE,
  CONVERSION_UNIT_DECILITRE_PER_SECOND,
  CONVERSION_UNIT_DEGREE,
  CONVERSION_UNIT_DEGREE_PER_SECOND,
  CONVERSION_UNIT_DOZEN,
  CONVERSION_UNIT_EACH,
  CONVERSION_UNIT_FAHRENHEIT,
  CONVERSION_UNIT_FLUID_OUNCE,
  CONVERSION_UNIT_FLUID_OUNCE_PER_HOUR,
  CONVERSION_UNIT_FLUID_OUNCE_PER_MINUTE,
  CONVERSION_UNIT_FLUID_OUNCE_PER_SECOND,
  CONVERSION_UNIT_FOOT,
  CONVERSION_UNIT_FOOT_CANDLE,
  CONVERSION_UNIT_FOOT_PER_SECOND,
  CONVERSION_UNIT_GALLON,
  CONVERSION_UNIT_GALLON_PER_HOUR,
  CONVERSION_UNIT_GALLON_PER_MINUTE,
  CONVERSION_UNIT_GALLON_PER_SECOND,
  CONVERSION_UNIT_GIGABIT,
  CONVERSION_UNIT_GIGABYTE,
  CONVERSION_UNIT_GIGAHERTZ,
  CONVERSION_UNIT_GIGAVOLT_AMPERE,
  CONVERSION_UNIT_GIGAVOLT_AMPERE_REACTIVE,
  CONVERSION_UNIT_GIGAVOLT_AMPERE_REACTIVE_HOUR,
  CONVERSION_UNIT_GIGAWATT,
  CONVERSION_UNIT_GIGAWATT_HOUR,
  CONVERSION_UNIT_GLAS,
  CONVERSION_UNIT_GRADIAN,
  CONVERSION_UNIT_GRAM,
  CONVERSION_UNIT_HECTARE,
  CONVERSION_UNIT_HECTOPASCAL,
  CONVERSION_UNIT_HERTZ,
  CONVERSION_UNIT_HOUR,
  CONVERSION_UNIT_INCH,
  CONVERSION_UNIT_JOULE,
  CONVERSION_UNIT_KAFFEKOPP,
  CONVERSION_UNIT_KANNA,
  CONVERSION_UNIT_KELVIN,
  CONVERSION_UNIT_KILOAMPERE,
  CONVERSION_UNIT_KILOBIT,
  CONVERSION_UNIT_KILOBYTE,
  CONVERSION_UNIT_KILOGRAM,
  CONVERSION_UNIT_KILOHERTZ,
  CONVERSION_UNIT_KILOJOULE,
  CONVERSION_UNIT_KILOLITRE,
  CONVERSION_UNIT_KILOLITRE_PER_HOUR,
  CONVERSION_UNIT_KILOLITRE_PER_MINUTE,
  CONVERSION_UNIT_KILOLITRE_PER_SECOND,
  CONVERSION_UNIT_KILOMETER,
  CONVERSION_UNIT_KILOMETRE_PER_HOUR,
  CONVERSION_UNIT_KILOPASCAL,
  CONVERSION_UNIT_KILOPOUND_PER_SQUARE_INCH,
  CONVERSION_UNIT_KILOVOLT,
  CONVERSION_UNIT_KILOVOLT_AMPERE,
  CONVERSION_UNIT_KILOVOLT_AMPERE_REACTIVE,
  CONVERSION_UNIT_KILOVOLT_AMPERE_REACTIVE_HOUR,
  CONVERSION_UNIT_KILOWATT,
  CONVERSION_UNIT_KILOWATT_HOUR,
  CONVERSION_UNIT_KNOT,
  CONVERSION_UNIT_LITRE,
  CONVERSION_UNIT_LITRE_PER_HOUR,
  CONVERSION_UNIT_LITRE_PER_MINUTE,
  CONVERSION_UNIT_LITRE_PER_SECOND,
  CONVERSION_UNIT_LUX,
  CONVERSION_UNIT_MATSKED,
  CONVERSION_UNIT_MEGABIT,
  CONVERSION_UNIT_MEGABYTE,
  CONVERSION_UNIT_MEGAHERTZ,
  CONVERSION_UNIT_MEGAPASCAL,
  CONVERSION_UNIT_MEGAVOLT_AMPERE,
  CONVERSION_UNIT_MEGAVOLT_AMPERE_REACTIVE,
  CONVERSION_UNIT_MEGAVOLT_AMPERE_REACTIVE_HOUR,
  CONVERSION_UNIT_MEGAWATT,
  CONVERSION_UNIT_MEGAWATT_HOUR,
  CONVERSION_UNIT_METER,
  CONVERSION_UNIT_METRE_PER_SECOND,
  CONVERSION_UNIT_METRIC_TONNE,
  CONVERSION_UNIT_MICROGRAM,
  CONVERSION_UNIT_MICROSECOND,
  CONVERSION_UNIT_MILE,
  CONVERSION_UNIT_MILE_PER_HOUR,
  CONVERSION_UNIT_MILLIAMPERE,
  CONVERSION_UNIT_MILLIGRAM,
  CONVERSION_UNIT_MILLIHERTZ,
  CONVERSION_UNIT_MILLILITRE,
  CONVERSION_UNIT_MILLILITRE_PER_SECOND,
  CONVERSION_UNIT_MILLIMETER,
  CONVERSION_UNIT_MILLISECOND,
  CONVERSION_UNIT_MILLIVOLT,
  CONVERSION_UNIT_MILLIVOLT_AMPERE,
  CONVERSION_UNIT_MILLIVOLT_AMPERE_REACTIVE,
  CONVERSION_UNIT_MILLIVOLT_AMPERE_REACTIVE_HOUR,
  CONVERSION_UNIT_MILLIWATT,
  CONVERSION_UNIT_MILLIWATT_HOUR,
  CONVERSION_UNIT_MINUTE,
  CONVERSION_UNIT_MINUTE_PER_KILOMETRE,
  CONVERSION_UNIT_MINUTE_PER_MILE,
  CONVERSION_UNIT_MONTH,
  CONVERSION_UNIT_NANOSECOND,
  CONVERSION_UNIT_OUNCE,
  CONVERSION_UNIT_PART_PER_BILLION,
  CONVERSION_UNIT_PART_PER_MILLION,
  CONVERSION_UNIT_PART_PER_QUADRILLION,
  CONVERSION_UNIT_PART_PER_TRILLION,
  CONVERSION_UNIT_PASCAL,
  CONVERSION_UNIT_PINT,
  CONVERSION_UNIT_PINT_PER_HOUR,
  CONVERSION_UNIT_PINT_PER_MINUTE,
  CONVERSION_UNIT_PINT_PER_SECOND,
  CONVERSION_UNIT_POUND,
  CONVERSION_UNIT_POUND_PER_SQUARE_INCH,
  CONVERSION_UNIT_QUART,
  CONVERSION_UNIT_QUART_PER_SECOND,
  CONVERSION_UNIT_RADIAN,
  CONVERSION_UNIT_RADIAN_PER_SECOND,
  CONVERSION_UNIT_RANKINE,
  CONVERSION_UNIT_ROTATION_PER_MINUTE,
  CONVERSION_UNIT_SECOND,
  CONVERSION_UNIT_SECOND_PER_FOOT,
  CONVERSION_UNIT_SECOND_PER_METRE,
  CONVERSION_UNIT_SQUARE_CENTIMETER,
  CONVERSION_UNIT_SQUARE_FOOT,
  CONVERSION_UNIT_SQUARE_INCH,
  CONVERSION_UNIT_SQUARE_KILOMETER,
  CONVERSION_UNIT_SQUARE_METER,
  CONVERSION_UNIT_SQUARE_MILE,
  CONVERSION_UNIT_SQUARE_MILLIMETER,
  CONVERSION_UNIT_SQUARE_YARD,
  CONVERSION_UNIT_TABLESPOON,
  CONVERSION_UNIT_TABLESPOON_PER_SECOND,
  CONVERSION_UNIT_TEASPOON,
  CONVERSION_UNIT_TEASPOON_PER_SECOND,
  CONVERSION_UNIT_TERABIT,
  CONVERSION_UNIT_TERABYTE,
  CONVERSION_UNIT_TERAHERTZ,
  CONVERSION_UNIT_TESKED,
  CONVERSION_UNIT_TON,
  CONVERSION_UNIT_TORR,
  CONVERSION_UNIT_US_SURVEY_FOOT,
  CONVERSION_UNIT_VOLT,
  CONVERSION_UNIT_VOLT_AMPERE,
  CONVERSION_UNIT_VOLT_AMPERE_REACTIVE,
  CONVERSION_UNIT_VOLT_AMPERE_REACTIVE_HOUR,
  CONVERSION_UNIT_WATT,
  CONVERSION_UNIT_WATT_HOUR,
  CONVERSION_UNIT_WEEK,
  CONVERSION_UNIT_YARD,
  CONVERSION_UNIT_YEAR,
  CONVERT_LATEX_TO_PNG_INPUT_FORMAT,
  CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT,
  CPP_INPUT_FORMAT,
  ENSCRIPT_INPUT_FORMAT,
  ENSCRIPT_OUTPUT_FORMAT,
  FFMPEG_CODEC_AUDIO,
  FFMPEG_CODEC_SUBTITLE,
  FFMPEG_CODEC_VIDEO,
  FFMPEG_DECODER_AUDIO,
  FFMPEG_DECODER_SUBTITLE,
  FFMPEG_DECODER_VIDEO,
  FFMPEG_ENCODER_AUDIO,
  FFMPEG_ENCODER_SUBTITLE,
  FFMPEG_ENCODER_VIDEO,
  FFMPEG_FORMAT,
  FFMPEG_STRICT_OPTION,
  FILE_READER_ENCODING,
  FLIP,
  FONT_FORMAT,
  FORGE_MESSAGE_DIGEST,
  FORMAT_CODE_FORMAT,
  GIFSICLE_OPTIMIZE_OPTION,
  IMAGE_MAGICK_CHANNEL,
  IMAGE_MAGICK_COLOR_SPACE,
  IMAGE_MAGICK_COMPRESSION,
  IMAGE_MAGICK_FORMAT,
  IMAGE_MAGICK_GRAVITY,
  IMAGE_MAGICK_INPUT_FORMAT,
  IMAGE_MAGICK_OUTPUT_FORMAT,
  INKSCAPE_EXPORT_FORMAT,
  INKSCAPE_IMPORT_FORMAT,
  LIBRE_OFFICE_INPUT_FORMAT,
  LIBRE_OFFICE_OUTPUT_FORMAT,
  LLVM_ARCHITECTURE,
  LLVM_CPU,
  LLVM_FEATURE,
  LLVM_OPTIMIZATION_LEVEL,
  OBJDUMP_DEMANGLE_STYLE,
  OBJDUMP_HIDE_OPTION,
  OBJDUMP_SHOW_OPTION,
  PANDOC_INPUT_FORMAT,
  PANDOC_OUTPUT_FORMAT,
  PATOOL_FORMAT,
  PDF_LATEX_INPUT_FORMAT,
  PDF_LATEX_OUTPUT_FORMAT,
  PLEASANT_ADJECTIVE,
  PLEASANT_NOUN,
  PRETTIER_ARROW_PARENS_OPTION,
  PRETTIER_END_OF_LINE_OPTION,
  PRETTIER_HTML_WHITESPACE_SENSITIVITY_OPTION,
  PRETTIER_PLUGIN,
  PRETTIER_PROSE_WRAP_OPTION,
  PRETTIER_TYPESCRIPT_TRAILING_COMMA_OPTION,
  PRETTIER_XML_QUOTE_ATTRIBUTES_OPTION,
  PRETTIER_XML_WHITESPACE_SENSITIVITY_OPTION,
  PUPPETEER_INPUT_FORMAT,
  PUPPETEER_LIFE_CYCLE_EVENT,
  PUPPETEER_MARKDOWN_INPUT_FORMAT,
  PUPPETEER_OUTPUT_FORMAT,
  PUPPETEER_TXT_INPUT_FORMAT,
  QR_CODE_ERROR_CORRECTION_LEVEL,
  QR_CODE_FORMAT,
  RUST_COMPILER_TARGET,
  RUST_INPUT_FORMAT,
  RUST_OUTPUT_FORMAT,
  SHARED_GEMATRIA_LANGUAGE,
  SWIFT_INPUT_FORMAT,
  SYMBOL_SET,
  TASK,
  TIME_ZONE,
  TIME_ZONE_ABBREVIATION,
  TIME_ZONE_LOCATION,
  UNARCHIVER_FORMAT,
  UNIT,
  WAST_INPUT_FORMAT,
  WAST_OUTPUT_FORMAT,
  WORD_SET,
} from '~/code/type/node/base'
import { configure } from '../shared/config'

configure('archive-format', ARCHIVE_FORMAT)
configure('assembly-syntax', ASSEMBLY_SYNTAX)
configure('backend-compilation-output', BACKEND_COMPILATION_OUTPUT)
configure('c-input-format', C_INPUT_FORMAT)
configure('calibre-input-format', CALIBRE_INPUT_FORMAT)
configure('calibre-input-profile', CALIBRE_INPUT_PROFILE)
configure('calibre-output-format', CALIBRE_OUTPUT_FORMAT)
configure('calibre-output-profile', CALIBRE_OUTPUT_PROFILE)
configure('call-handle', CALL_HANDLE)
configure('cipher', CIPHER)
configure('clang-format', CLANG_FORMAT)
configure('cli-log-format', CLI_LOG_FORMAT)
configure('command-key', COMMAND_KEY)
configure('command-name', COMMAND_NAME)
configure('conversion-unit-acre', CONVERSION_UNIT_ACRE)
configure('conversion-unit-ampere', CONVERSION_UNIT_AMPERE)
configure('conversion-unit-arcminute', CONVERSION_UNIT_ARCMINUTE)
configure('conversion-unit-arcsecond', CONVERSION_UNIT_ARCSECOND)
configure('conversion-unit-bar', CONVERSION_UNIT_BAR)
configure('conversion-unit-bit', CONVERSION_UNIT_BIT)
configure('conversion-unit-byte', CONVERSION_UNIT_BYTE)
configure('conversion-unit-celsius', CONVERSION_UNIT_CELSIUS)
configure('conversion-unit-centilitre', CONVERSION_UNIT_CENTILITRE)
configure(
  'conversion-unit-centilitre-per-second',
  CONVERSION_UNIT_CENTILITRE_PER_SECOND,
)
configure('conversion-unit-centimeter', CONVERSION_UNIT_CENTIMETER)
configure(
  'conversion-unit-cubic-centimeter',
  CONVERSION_UNIT_CUBIC_CENTIMETER,
)
configure(
  'conversion-unit-cubic-centimeter-per-second',
  CONVERSION_UNIT_CUBIC_CENTIMETER_PER_SECOND,
)
configure('conversion-unit-cubic-foot', CONVERSION_UNIT_CUBIC_FOOT)
configure(
  'conversion-unit-cubic-foot-per-hour',
  CONVERSION_UNIT_CUBIC_FOOT_PER_HOUR,
)
configure(
  'conversion-unit-cubic-foot-per-minute',
  CONVERSION_UNIT_CUBIC_FOOT_PER_MINUTE,
)
configure(
  'conversion-unit-cubic-foot-per-second',
  CONVERSION_UNIT_CUBIC_FOOT_PER_SECOND,
)
configure('conversion-unit-cubic-inch', CONVERSION_UNIT_CUBIC_INCH)
configure(
  'conversion-unit-cubic-inch-per-hour',
  CONVERSION_UNIT_CUBIC_INCH_PER_HOUR,
)
configure(
  'conversion-unit-cubic-inch-per-minute',
  CONVERSION_UNIT_CUBIC_INCH_PER_MINUTE,
)
configure(
  'conversion-unit-cubic-inch-per-second',
  CONVERSION_UNIT_CUBIC_INCH_PER_SECOND,
)
configure(
  'conversion-unit-cubic-kilometer',
  CONVERSION_UNIT_CUBIC_KILOMETER,
)
configure(
  'conversion-unit-cubic-kilometer-per-second',
  CONVERSION_UNIT_CUBIC_KILOMETER_PER_SECOND,
)
configure('conversion-unit-cubic-meter', CONVERSION_UNIT_CUBIC_METER)
configure(
  'conversion-unit-cubic-meter-per-hour',
  CONVERSION_UNIT_CUBIC_METER_PER_HOUR,
)
configure(
  'conversion-unit-cubic-meter-per-minute',
  CONVERSION_UNIT_CUBIC_METER_PER_MINUTE,
)
configure(
  'conversion-unit-cubic-meter-per-second',
  CONVERSION_UNIT_CUBIC_METER_PER_SECOND,
)
configure(
  'conversion-unit-cubic-millimeter',
  CONVERSION_UNIT_CUBIC_MILLIMETER,
)
configure(
  'conversion-unit-cubic-millimeter-per-second',
  CONVERSION_UNIT_CUBIC_MILLIMETER_PER_SECOND,
)
configure('conversion-unit-cubic-yard', CONVERSION_UNIT_CUBIC_YARD)
configure(
  'conversion-unit-cubic-yard-per-hour',
  CONVERSION_UNIT_CUBIC_YARD_PER_HOUR,
)
configure(
  'conversion-unit-cubic-yard-per-minute',
  CONVERSION_UNIT_CUBIC_YARD_PER_MINUTE,
)
configure(
  'conversion-unit-cubic-yard-per-second',
  CONVERSION_UNIT_CUBIC_YARD_PER_SECOND,
)
configure('conversion-unit-cup', CONVERSION_UNIT_CUP)
configure(
  'conversion-unit-cup-per-second',
  CONVERSION_UNIT_CUP_PER_SECOND,
)
configure('conversion-unit-day', CONVERSION_UNIT_DAY)
configure('conversion-unit-decilitre', CONVERSION_UNIT_DECILITRE)
configure(
  'conversion-unit-decilitre-per-second',
  CONVERSION_UNIT_DECILITRE_PER_SECOND,
)
configure('conversion-unit-degree', CONVERSION_UNIT_DEGREE)
configure(
  'conversion-unit-degree-per-second',
  CONVERSION_UNIT_DEGREE_PER_SECOND,
)
configure('conversion-unit-dozen', CONVERSION_UNIT_DOZEN)
configure('conversion-unit-each', CONVERSION_UNIT_EACH)
configure('conversion-unit-fahrenheit', CONVERSION_UNIT_FAHRENHEIT)
configure('conversion-unit-fluid-ounce', CONVERSION_UNIT_FLUID_OUNCE)
configure(
  'conversion-unit-fluid-ounce-per-hour',
  CONVERSION_UNIT_FLUID_OUNCE_PER_HOUR,
)
configure(
  'conversion-unit-fluid-ounce-per-minute',
  CONVERSION_UNIT_FLUID_OUNCE_PER_MINUTE,
)
configure(
  'conversion-unit-fluid-ounce-per-second',
  CONVERSION_UNIT_FLUID_OUNCE_PER_SECOND,
)
configure('conversion-unit-foot', CONVERSION_UNIT_FOOT)
configure('conversion-unit-foot-candle', CONVERSION_UNIT_FOOT_CANDLE)
configure(
  'conversion-unit-foot-per-second',
  CONVERSION_UNIT_FOOT_PER_SECOND,
)
configure('conversion-unit-gallon', CONVERSION_UNIT_GALLON)
configure(
  'conversion-unit-gallon-per-hour',
  CONVERSION_UNIT_GALLON_PER_HOUR,
)
configure(
  'conversion-unit-gallon-per-minute',
  CONVERSION_UNIT_GALLON_PER_MINUTE,
)
configure(
  'conversion-unit-gallon-per-second',
  CONVERSION_UNIT_GALLON_PER_SECOND,
)
configure('conversion-unit-gigabit', CONVERSION_UNIT_GIGABIT)
configure('conversion-unit-gigabyte', CONVERSION_UNIT_GIGABYTE)
configure('conversion-unit-gigahertz', CONVERSION_UNIT_GIGAHERTZ)
configure(
  'conversion-unit-gigavolt-ampere',
  CONVERSION_UNIT_GIGAVOLT_AMPERE,
)
configure(
  'conversion-unit-gigavolt-ampere-reactive',
  CONVERSION_UNIT_GIGAVOLT_AMPERE_REACTIVE,
)
configure(
  'conversion-unit-gigavolt-ampere-reactive-hour',
  CONVERSION_UNIT_GIGAVOLT_AMPERE_REACTIVE_HOUR,
)
configure('conversion-unit-gigawatt', CONVERSION_UNIT_GIGAWATT)
configure(
  'conversion-unit-gigawatt-hour',
  CONVERSION_UNIT_GIGAWATT_HOUR,
)
configure('conversion-unit-glas', CONVERSION_UNIT_GLAS)
configure('conversion-unit-gradian', CONVERSION_UNIT_GRADIAN)
configure('conversion-unit-gram', CONVERSION_UNIT_GRAM)
configure('conversion-unit-hectare', CONVERSION_UNIT_HECTARE)
configure('conversion-unit-hectopascal', CONVERSION_UNIT_HECTOPASCAL)
configure('conversion-unit-hertz', CONVERSION_UNIT_HERTZ)
configure('conversion-unit-hour', CONVERSION_UNIT_HOUR)
configure('conversion-unit-inch', CONVERSION_UNIT_INCH)
configure('conversion-unit-joule', CONVERSION_UNIT_JOULE)
configure('conversion-unit-kaffekopp', CONVERSION_UNIT_KAFFEKOPP)
configure('conversion-unit-kanna', CONVERSION_UNIT_KANNA)
configure('conversion-unit-kelvin', CONVERSION_UNIT_KELVIN)
configure('conversion-unit-kiloampere', CONVERSION_UNIT_KILOAMPERE)
configure('conversion-unit-kilobit', CONVERSION_UNIT_KILOBIT)
configure('conversion-unit-kilobyte', CONVERSION_UNIT_KILOBYTE)
configure('conversion-unit-kilogram', CONVERSION_UNIT_KILOGRAM)
configure('conversion-unit-kilohertz', CONVERSION_UNIT_KILOHERTZ)
configure('conversion-unit-kilojoule', CONVERSION_UNIT_KILOJOULE)
configure('conversion-unit-kilolitre', CONVERSION_UNIT_KILOLITRE)
configure(
  'conversion-unit-kilolitre-per-hour',
  CONVERSION_UNIT_KILOLITRE_PER_HOUR,
)
configure(
  'conversion-unit-kilolitre-per-minute',
  CONVERSION_UNIT_KILOLITRE_PER_MINUTE,
)
configure(
  'conversion-unit-kilolitre-per-second',
  CONVERSION_UNIT_KILOLITRE_PER_SECOND,
)
configure('conversion-unit-kilometer', CONVERSION_UNIT_KILOMETER)
configure(
  'conversion-unit-kilometre-per-hour',
  CONVERSION_UNIT_KILOMETRE_PER_HOUR,
)
configure('conversion-unit-kilopascal', CONVERSION_UNIT_KILOPASCAL)
configure(
  'conversion-unit-kilopound-per-square-inch',
  CONVERSION_UNIT_KILOPOUND_PER_SQUARE_INCH,
)
configure('conversion-unit-kilovolt', CONVERSION_UNIT_KILOVOLT)
configure(
  'conversion-unit-kilovolt-ampere',
  CONVERSION_UNIT_KILOVOLT_AMPERE,
)
configure(
  'conversion-unit-kilovolt-ampere-reactive',
  CONVERSION_UNIT_KILOVOLT_AMPERE_REACTIVE,
)
configure(
  'conversion-unit-kilovolt-ampere-reactive-hour',
  CONVERSION_UNIT_KILOVOLT_AMPERE_REACTIVE_HOUR,
)
configure('conversion-unit-kilowatt', CONVERSION_UNIT_KILOWATT)
configure(
  'conversion-unit-kilowatt-hour',
  CONVERSION_UNIT_KILOWATT_HOUR,
)
configure('conversion-unit-knot', CONVERSION_UNIT_KNOT)
configure('conversion-unit-litre', CONVERSION_UNIT_LITRE)
configure(
  'conversion-unit-litre-per-hour',
  CONVERSION_UNIT_LITRE_PER_HOUR,
)
configure(
  'conversion-unit-litre-per-minute',
  CONVERSION_UNIT_LITRE_PER_MINUTE,
)
configure(
  'conversion-unit-litre-per-second',
  CONVERSION_UNIT_LITRE_PER_SECOND,
)
configure('conversion-unit-lux', CONVERSION_UNIT_LUX)
configure('conversion-unit-matsked', CONVERSION_UNIT_MATSKED)
configure('conversion-unit-megabit', CONVERSION_UNIT_MEGABIT)
configure('conversion-unit-megabyte', CONVERSION_UNIT_MEGABYTE)
configure('conversion-unit-megahertz', CONVERSION_UNIT_MEGAHERTZ)
configure('conversion-unit-megapascal', CONVERSION_UNIT_MEGAPASCAL)
configure(
  'conversion-unit-megavolt-ampere',
  CONVERSION_UNIT_MEGAVOLT_AMPERE,
)
configure(
  'conversion-unit-megavolt-ampere-reactive',
  CONVERSION_UNIT_MEGAVOLT_AMPERE_REACTIVE,
)
configure(
  'conversion-unit-megavolt-ampere-reactive-hour',
  CONVERSION_UNIT_MEGAVOLT_AMPERE_REACTIVE_HOUR,
)
configure('conversion-unit-megawatt', CONVERSION_UNIT_MEGAWATT)
configure(
  'conversion-unit-megawatt-hour',
  CONVERSION_UNIT_MEGAWATT_HOUR,
)
configure('conversion-unit-meter', CONVERSION_UNIT_METER)
configure(
  'conversion-unit-metre-per-second',
  CONVERSION_UNIT_METRE_PER_SECOND,
)
configure('conversion-unit-metric-tonne', CONVERSION_UNIT_METRIC_TONNE)
configure('conversion-unit-microgram', CONVERSION_UNIT_MICROGRAM)
configure('conversion-unit-microsecond', CONVERSION_UNIT_MICROSECOND)
configure('conversion-unit-mile', CONVERSION_UNIT_MILE)
configure(
  'conversion-unit-mile-per-hour',
  CONVERSION_UNIT_MILE_PER_HOUR,
)
configure('conversion-unit-milliampere', CONVERSION_UNIT_MILLIAMPERE)
configure('conversion-unit-milligram', CONVERSION_UNIT_MILLIGRAM)
configure('conversion-unit-millihertz', CONVERSION_UNIT_MILLIHERTZ)
configure('conversion-unit-millilitre', CONVERSION_UNIT_MILLILITRE)
configure(
  'conversion-unit-millilitre-per-second',
  CONVERSION_UNIT_MILLILITRE_PER_SECOND,
)
configure('conversion-unit-millimeter', CONVERSION_UNIT_MILLIMETER)
configure('conversion-unit-millisecond', CONVERSION_UNIT_MILLISECOND)
configure('conversion-unit-millivolt', CONVERSION_UNIT_MILLIVOLT)
configure(
  'conversion-unit-millivolt-ampere',
  CONVERSION_UNIT_MILLIVOLT_AMPERE,
)
configure(
  'conversion-unit-millivolt-ampere-reactive',
  CONVERSION_UNIT_MILLIVOLT_AMPERE_REACTIVE,
)
configure(
  'conversion-unit-millivolt-ampere-reactive-hour',
  CONVERSION_UNIT_MILLIVOLT_AMPERE_REACTIVE_HOUR,
)
configure('conversion-unit-milliwatt', CONVERSION_UNIT_MILLIWATT)
configure(
  'conversion-unit-milliwatt-hour',
  CONVERSION_UNIT_MILLIWATT_HOUR,
)
configure('conversion-unit-minute', CONVERSION_UNIT_MINUTE)
configure(
  'conversion-unit-minute-per-kilometre',
  CONVERSION_UNIT_MINUTE_PER_KILOMETRE,
)
configure(
  'conversion-unit-minute-per-mile',
  CONVERSION_UNIT_MINUTE_PER_MILE,
)
configure('conversion-unit-month', CONVERSION_UNIT_MONTH)
configure('conversion-unit-nanosecond', CONVERSION_UNIT_NANOSECOND)
configure('conversion-unit-ounce', CONVERSION_UNIT_OUNCE)
configure(
  'conversion-unit-part-per-billion',
  CONVERSION_UNIT_PART_PER_BILLION,
)
configure(
  'conversion-unit-part-per-million',
  CONVERSION_UNIT_PART_PER_MILLION,
)
configure(
  'conversion-unit-part-per-quadrillion',
  CONVERSION_UNIT_PART_PER_QUADRILLION,
)
configure(
  'conversion-unit-part-per-trillion',
  CONVERSION_UNIT_PART_PER_TRILLION,
)
configure('conversion-unit-pascal', CONVERSION_UNIT_PASCAL)
configure('conversion-unit-pint', CONVERSION_UNIT_PINT)
configure(
  'conversion-unit-pint-per-hour',
  CONVERSION_UNIT_PINT_PER_HOUR,
)
configure(
  'conversion-unit-pint-per-minute',
  CONVERSION_UNIT_PINT_PER_MINUTE,
)
configure(
  'conversion-unit-pint-per-second',
  CONVERSION_UNIT_PINT_PER_SECOND,
)
configure('conversion-unit-pound', CONVERSION_UNIT_POUND)
configure(
  'conversion-unit-pound-per-square-inch',
  CONVERSION_UNIT_POUND_PER_SQUARE_INCH,
)
configure('conversion-unit-quart', CONVERSION_UNIT_QUART)
configure(
  'conversion-unit-quart-per-second',
  CONVERSION_UNIT_QUART_PER_SECOND,
)
configure('conversion-unit-radian', CONVERSION_UNIT_RADIAN)
configure(
  'conversion-unit-radian-per-second',
  CONVERSION_UNIT_RADIAN_PER_SECOND,
)
configure('conversion-unit-rankine', CONVERSION_UNIT_RANKINE)
configure(
  'conversion-unit-rotation-per-minute',
  CONVERSION_UNIT_ROTATION_PER_MINUTE,
)
configure('conversion-unit-second', CONVERSION_UNIT_SECOND)
configure(
  'conversion-unit-second-per-foot',
  CONVERSION_UNIT_SECOND_PER_FOOT,
)
configure(
  'conversion-unit-second-per-metre',
  CONVERSION_UNIT_SECOND_PER_METRE,
)
configure(
  'conversion-unit-square-centimeter',
  CONVERSION_UNIT_SQUARE_CENTIMETER,
)
configure('conversion-unit-square-foot', CONVERSION_UNIT_SQUARE_FOOT)
configure('conversion-unit-square-inch', CONVERSION_UNIT_SQUARE_INCH)
configure(
  'conversion-unit-square-kilometer',
  CONVERSION_UNIT_SQUARE_KILOMETER,
)
configure('conversion-unit-square-meter', CONVERSION_UNIT_SQUARE_METER)
configure('conversion-unit-square-mile', CONVERSION_UNIT_SQUARE_MILE)
configure(
  'conversion-unit-square-millimeter',
  CONVERSION_UNIT_SQUARE_MILLIMETER,
)
configure('conversion-unit-square-yard', CONVERSION_UNIT_SQUARE_YARD)
configure('conversion-unit-tablespoon', CONVERSION_UNIT_TABLESPOON)
configure(
  'conversion-unit-tablespoon-per-second',
  CONVERSION_UNIT_TABLESPOON_PER_SECOND,
)
configure('conversion-unit-teaspoon', CONVERSION_UNIT_TEASPOON)
configure(
  'conversion-unit-teaspoon-per-second',
  CONVERSION_UNIT_TEASPOON_PER_SECOND,
)
configure('conversion-unit-terabit', CONVERSION_UNIT_TERABIT)
configure('conversion-unit-terabyte', CONVERSION_UNIT_TERABYTE)
configure('conversion-unit-terahertz', CONVERSION_UNIT_TERAHERTZ)
configure('conversion-unit-tesked', CONVERSION_UNIT_TESKED)
configure('conversion-unit-ton', CONVERSION_UNIT_TON)
configure('conversion-unit-torr', CONVERSION_UNIT_TORR)
configure(
  'conversion-unit-us-survey-foot',
  CONVERSION_UNIT_US_SURVEY_FOOT,
)
configure('conversion-unit-volt', CONVERSION_UNIT_VOLT)
configure('conversion-unit-volt-ampere', CONVERSION_UNIT_VOLT_AMPERE)
configure(
  'conversion-unit-volt-ampere-reactive',
  CONVERSION_UNIT_VOLT_AMPERE_REACTIVE,
)
configure(
  'conversion-unit-volt-ampere-reactive-hour',
  CONVERSION_UNIT_VOLT_AMPERE_REACTIVE_HOUR,
)
configure('conversion-unit-watt', CONVERSION_UNIT_WATT)
configure('conversion-unit-watt-hour', CONVERSION_UNIT_WATT_HOUR)
configure('conversion-unit-week', CONVERSION_UNIT_WEEK)
configure('conversion-unit-yard', CONVERSION_UNIT_YARD)
configure('conversion-unit-year', CONVERSION_UNIT_YEAR)
configure(
  'convert-latex-to-png-input-format',
  CONVERT_LATEX_TO_PNG_INPUT_FORMAT,
)
configure(
  'convert-latex-to-png-output-format',
  CONVERT_LATEX_TO_PNG_OUTPUT_FORMAT,
)
configure('cpp-input-format', CPP_INPUT_FORMAT)
configure('enscript-input-format', ENSCRIPT_INPUT_FORMAT)
configure('enscript-output-format', ENSCRIPT_OUTPUT_FORMAT)
configure('ffmpeg-codec-audio', FFMPEG_CODEC_AUDIO)
configure('ffmpeg-codec-subtitle', FFMPEG_CODEC_SUBTITLE)
configure('ffmpeg-codec-video', FFMPEG_CODEC_VIDEO)
configure('ffmpeg-decoder-audio', FFMPEG_DECODER_AUDIO)
configure('ffmpeg-decoder-subtitle', FFMPEG_DECODER_SUBTITLE)
configure('ffmpeg-decoder-video', FFMPEG_DECODER_VIDEO)
configure('ffmpeg-encoder-audio', FFMPEG_ENCODER_AUDIO)
configure('ffmpeg-encoder-subtitle', FFMPEG_ENCODER_SUBTITLE)
configure('ffmpeg-encoder-video', FFMPEG_ENCODER_VIDEO)
configure('ffmpeg-format', FFMPEG_FORMAT)
configure('ffmpeg-strict-option', FFMPEG_STRICT_OPTION)
configure('file-reader-encoding', FILE_READER_ENCODING)
configure('flip', FLIP)
configure('font-format', FONT_FORMAT)
configure('forge-message-digest', FORGE_MESSAGE_DIGEST)
configure('format-code-format', FORMAT_CODE_FORMAT)
configure('gifsicle-optimize-option', GIFSICLE_OPTIMIZE_OPTION)
configure('image-magick-channel', IMAGE_MAGICK_CHANNEL)
configure('image-magick-color-space', IMAGE_MAGICK_COLOR_SPACE)
configure('image-magick-compression', IMAGE_MAGICK_COMPRESSION)
configure('image-magick-format', IMAGE_MAGICK_FORMAT)
configure('image-magick-gravity', IMAGE_MAGICK_GRAVITY)
configure('image-magick-input-format', IMAGE_MAGICK_INPUT_FORMAT)
configure('image-magick-output-format', IMAGE_MAGICK_OUTPUT_FORMAT)
configure('inkscape-export-format', INKSCAPE_EXPORT_FORMAT)
configure('inkscape-import-format', INKSCAPE_IMPORT_FORMAT)
configure('libre-office-input-format', LIBRE_OFFICE_INPUT_FORMAT)
configure('libre-office-output-format', LIBRE_OFFICE_OUTPUT_FORMAT)
configure('llvm-architecture', LLVM_ARCHITECTURE)
configure('llvm-cpu', LLVM_CPU)
configure('llvm-feature', LLVM_FEATURE)
configure('llvm-optimization-level', LLVM_OPTIMIZATION_LEVEL)
configure('objdump-demangle-style', OBJDUMP_DEMANGLE_STYLE)
configure('objdump-hide-option', OBJDUMP_HIDE_OPTION)
configure('objdump-show-option', OBJDUMP_SHOW_OPTION)
configure('pandoc-input-format', PANDOC_INPUT_FORMAT)
configure('pandoc-output-format', PANDOC_OUTPUT_FORMAT)
configure('patool-format', PATOOL_FORMAT)
configure('pdf-latex-input-format', PDF_LATEX_INPUT_FORMAT)
configure('pdf-latex-output-format', PDF_LATEX_OUTPUT_FORMAT)
configure('pleasant-adjective', PLEASANT_ADJECTIVE)
configure('pleasant-noun', PLEASANT_NOUN)
configure('prettier-arrow-parens-option', PRETTIER_ARROW_PARENS_OPTION)
configure('prettier-end-of-line-option', PRETTIER_END_OF_LINE_OPTION)
configure(
  'prettier-html-whitespace-sensitivity-option',
  PRETTIER_HTML_WHITESPACE_SENSITIVITY_OPTION,
)
configure('prettier-plugin', PRETTIER_PLUGIN)
configure('prettier-prose-wrap-option', PRETTIER_PROSE_WRAP_OPTION)
configure(
  'prettier-typescript-trailing-comma-option',
  PRETTIER_TYPESCRIPT_TRAILING_COMMA_OPTION,
)
configure(
  'prettier-xml-quote-attributes-option',
  PRETTIER_XML_QUOTE_ATTRIBUTES_OPTION,
)
configure(
  'prettier-xml-whitespace-sensitivity-option',
  PRETTIER_XML_WHITESPACE_SENSITIVITY_OPTION,
)
configure('puppeteer-input-format', PUPPETEER_INPUT_FORMAT)
configure('puppeteer-life-cycle-event', PUPPETEER_LIFE_CYCLE_EVENT)
configure(
  'puppeteer-markdown-input-format',
  PUPPETEER_MARKDOWN_INPUT_FORMAT,
)
configure('puppeteer-output-format', PUPPETEER_OUTPUT_FORMAT)
configure('puppeteer-txt-input-format', PUPPETEER_TXT_INPUT_FORMAT)
configure(
  'qr-code-error-correction-level',
  QR_CODE_ERROR_CORRECTION_LEVEL,
)
configure('qr-code-format', QR_CODE_FORMAT)
configure('rust-compiler-target', RUST_COMPILER_TARGET)
configure('rust-input-format', RUST_INPUT_FORMAT)
configure('rust-output-format', RUST_OUTPUT_FORMAT)
configure('shared-gematria-language', SHARED_GEMATRIA_LANGUAGE)
configure('swift-input-format', SWIFT_INPUT_FORMAT)
configure('symbol-set', SYMBOL_SET)
configure('task', TASK)
configure('time-zone', TIME_ZONE)
configure('time-zone-abbreviation', TIME_ZONE_ABBREVIATION)
configure('time-zone-location', TIME_ZONE_LOCATION)
configure('unarchiver-format', UNARCHIVER_FORMAT)
configure('unit', UNIT)
configure('wast-input-format', WAST_INPUT_FORMAT)
configure('wast-output-format', WAST_OUTPUT_FORMAT)
configure('word-set', WORD_SET)
