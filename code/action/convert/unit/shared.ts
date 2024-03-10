import convertUnits from 'convert-units'
import {
  ConvertMillimeterResolver,
  ConvertCentimeterResolver,
  ConvertMeterResolver,
  ConvertKilometerResolver,
  ConvertInchResolver,
  ConvertYardResolver,
  ConvertUsSurveyFootResolver,
  ConvertFootResolver,
  ConvertMileResolver,
  ConvertSquareMillimeterResolver,
  ConvertSquareCentimeterResolver,
  ConvertSquareMeterResolver,
  ConvertHectareResolver,
  ConvertSquareKilometerResolver,
  ConvertSquareInchResolver,
  ConvertSquareYardResolver,
  ConvertSquareFootResolver,
  ConvertAcreResolver,
  ConvertSquareMileResolver,
  ConvertMicrogramResolver,
  ConvertMilligramResolver,
  ConvertGramResolver,
  ConvertKilogramResolver,
  ConvertMetricTonneResolver,
  ConvertOunceResolver,
  ConvertPoundResolver,
  ConvertTonResolver,
  ConvertCubicMillimeterResolver,
  ConvertCubicCentimeterResolver,
  ConvertMillilitreResolver,
  ConvertCentilitreResolver,
  ConvertDecilitreResolver,
  ConvertLitreResolver,
  ConvertKilolitreResolver,
  ConvertCubicMeterResolver,
  ConvertCubicKilometerResolver,
  ConvertTeskedResolver,
  ConvertMatskedResolver,
  ConvertKaffekoppResolver,
  ConvertGlasResolver,
  ConvertKannaResolver,
  ConvertTeaspoonResolver,
  ConvertTablespoonResolver,
  ConvertCubicInchResolver,
  ConvertFluidOunceResolver,
  ConvertCupResolver,
  ConvertPintResolver,
  ConvertQuartResolver,
  ConvertGallonResolver,
  ConvertCubicFootResolver,
  ConvertCubicYardResolver,
  ConvertEachResolver,
  ConvertDozenResolver,
  ConvertCelsiusResolver,
  ConvertKelvinResolver,
  ConvertFahrenheitResolver,
  ConvertRankineResolver,
  ConvertNanosecondResolver,
  ConvertMicrosecondResolver,
  ConvertMillisecondResolver,
  ConvertSecondResolver,
  ConvertMinuteResolver,
  ConvertHourResolver,
  ConvertDayResolver,
  ConvertWeekResolver,
  ConvertMonthResolver,
  ConvertYearResolver,
  ConvertBitResolver,
  ConvertKilobitResolver,
  ConvertMegabitResolver,
  ConvertGigabitResolver,
  ConvertTerabitResolver,
  ConvertByteResolver,
  ConvertKilobyteResolver,
  ConvertMegabyteResolver,
  ConvertGigabyteResolver,
  ConvertTerabyteResolver,
  ConvertPartPerMillionResolver,
  ConvertPartPerBillionResolver,
  ConvertPartPerTrillionResolver,
  ConvertPartPerQuadrillionResolver,
  ConvertMetrePerSecondResolver,
  ConvertKilometrePerHourResolver,
  ConvertMilePerHourResolver,
  ConvertKnotResolver,
  ConvertFootPerSecondResolver,
  ConvertMinutePerKilometreResolver,
  ConvertSecondPerMetreResolver,
  ConvertMinutePerMileResolver,
  ConvertSecondPerFootResolver,
  ConvertPascalResolver,
  ConvertKilopascalResolver,
  ConvertMegapascalResolver,
  ConvertHectopascalResolver,
  ConvertBarResolver,
  ConvertTorrResolver,
  ConvertPoundPerSquareInchResolver,
  ConvertKilopoundPerSquareInchResolver,
  ConvertAmpereResolver,
  ConvertMilliampereResolver,
  ConvertKiloampereResolver,
  ConvertVoltResolver,
  ConvertMillivoltResolver,
  ConvertKilovoltResolver,
  ConvertWattResolver,
  ConvertMilliwattResolver,
  ConvertKilowattResolver,
  ConvertMegawattResolver,
  ConvertGigawattResolver,
  ConvertVoltAmpereReactiveResolver,
  ConvertMillivoltAmpereReactiveResolver,
  ConvertKilovoltAmpereReactiveResolver,
  ConvertMegavoltAmpereReactiveResolver,
  ConvertGigavoltAmpereReactiveResolver,
  ConvertVoltAmpereResolver,
  ConvertMillivoltAmpereResolver,
  ConvertKilovoltAmpereResolver,
  ConvertMegavoltAmpereResolver,
  ConvertGigavoltAmpereResolver,
  ConvertWattHourResolver,
  ConvertMilliwattHourResolver,
  ConvertKilowattHourResolver,
  ConvertMegawattHourResolver,
  ConvertGigawattHourResolver,
  ConvertJouleResolver,
  ConvertKilojouleResolver,
  ConvertVoltAmpereReactiveHourResolver,
  ConvertMillivoltAmpereReactiveHourResolver,
  ConvertKilovoltAmpereReactiveHourResolver,
  ConvertMegavoltAmpereReactiveHourResolver,
  ConvertGigavoltAmpereReactiveHourResolver,
  ConvertCubicMillimeterPerSecondResolver,
  ConvertCubicCentimeterPerSecondResolver,
  ConvertMillilitrePerSecondResolver,
  ConvertCentilitrePerSecondResolver,
  ConvertDecilitrePerSecondResolver,
  ConvertLitrePerSecondResolver,
  ConvertLitrePerMinuteResolver,
  ConvertLitrePerHourResolver,
  ConvertKilolitrePerSecondResolver,
  ConvertKilolitrePerMinuteResolver,
  ConvertKilolitrePerHourResolver,
  ConvertCubicMeterPerSecondResolver,
  ConvertCubicMeterPerMinuteResolver,
  ConvertCubicMeterPerHourResolver,
  ConvertCubicKilometerPerSecondResolver,
  ConvertTeaspoonPerSecondResolver,
  ConvertTablespoonPerSecondResolver,
  ConvertCubicInchPerSecondResolver,
  ConvertCubicInchPerMinuteResolver,
  ConvertCubicInchPerHourResolver,
  ConvertFluidOuncePerSecondResolver,
  ConvertFluidOuncePerMinuteResolver,
  ConvertFluidOuncePerHourResolver,
  ConvertCupPerSecondResolver,
  ConvertPintPerSecondResolver,
  ConvertPintPerMinuteResolver,
  ConvertPintPerHourResolver,
  ConvertQuartPerSecondResolver,
  ConvertGallonPerSecondResolver,
  ConvertGallonPerMinuteResolver,
  ConvertGallonPerHourResolver,
  ConvertCubicFootPerSecondResolver,
  ConvertCubicFootPerMinuteResolver,
  ConvertCubicFootPerHourResolver,
  ConvertCubicYardPerSecondResolver,
  ConvertCubicYardPerMinuteResolver,
  ConvertCubicYardPerHourResolver,
  ConvertLuxResolver,
  ConvertFootCandleResolver,
  ConvertMillihertzResolver,
  ConvertHertzResolver,
  ConvertKilohertzResolver,
  ConvertMegahertzResolver,
  ConvertGigahertzResolver,
  ConvertTerahertzResolver,
  ConvertRotationPerMinuteResolver,
  ConvertDegreePerSecondResolver,
  ConvertRadianPerSecondResolver,
  ConvertRadianResolver,
  ConvertDegreeResolver,
  ConvertGradianResolver,
  ConvertArcminuteResolver,
  ConvertArcsecondResolver,
  ConvertMillimeter,
  ConvertCentimeter,
  ConvertMeter,
  ConvertKilometer,
  ConvertInch,
  ConvertYard,
  ConvertUsSurveyFoot,
  ConvertFoot,
  ConvertMile,
  ConvertSquareMillimeter,
  ConvertSquareCentimeter,
  ConvertSquareMeter,
  ConvertHectare,
  ConvertSquareKilometer,
  ConvertSquareInch,
  ConvertSquareYard,
  ConvertSquareFoot,
  ConvertAcre,
  ConvertSquareMile,
  ConvertMicrogram,
  ConvertMilligram,
  ConvertGram,
  ConvertKilogram,
  ConvertMetricTonne,
  ConvertOunce,
  ConvertPound,
  ConvertTon,
  ConvertCubicMillimeter,
  ConvertCubicCentimeter,
  ConvertMillilitre,
  ConvertCentilitre,
  ConvertDecilitre,
  ConvertLitre,
  ConvertKilolitre,
  ConvertCubicMeter,
  ConvertCubicKilometer,
  ConvertTesked,
  ConvertMatsked,
  ConvertKaffekopp,
  ConvertGlas,
  ConvertKanna,
  ConvertTeaspoon,
  ConvertTablespoon,
  ConvertCubicInch,
  ConvertFluidOunce,
  ConvertCup,
  ConvertPint,
  ConvertQuart,
  ConvertGallon,
  ConvertCubicFoot,
  ConvertCubicYard,
  ConvertEach,
  ConvertDozen,
  ConvertCelsius,
  ConvertKelvin,
  ConvertFahrenheit,
  ConvertRankine,
  ConvertNanosecond,
  ConvertMicrosecond,
  ConvertMillisecond,
  ConvertSecond,
  ConvertMinute,
  ConvertHour,
  ConvertDay,
  ConvertWeek,
  ConvertMonth,
  ConvertYear,
  ConvertBit,
  ConvertKilobit,
  ConvertMegabit,
  ConvertGigabit,
  ConvertTerabit,
  ConvertByte,
  ConvertKilobyte,
  ConvertMegabyte,
  ConvertGigabyte,
  ConvertTerabyte,
  ConvertPartPerMillion,
  ConvertPartPerBillion,
  ConvertPartPerTrillion,
  ConvertPartPerQuadrillion,
  ConvertMetrePerSecond,
  ConvertKilometrePerHour,
  ConvertMilePerHour,
  ConvertKnot,
  ConvertFootPerSecond,
  ConvertMinutePerKilometre,
  ConvertSecondPerMetre,
  ConvertMinutePerMile,
  ConvertSecondPerFoot,
  ConvertPascal,
  ConvertKilopascal,
  ConvertMegapascal,
  ConvertHectopascal,
  ConvertBar,
  ConvertTorr,
  ConvertPoundPerSquareInch,
  ConvertKilopoundPerSquareInch,
  ConvertAmpere,
  ConvertMilliampere,
  ConvertKiloampere,
  ConvertVolt,
  ConvertMillivolt,
  ConvertKilovolt,
  ConvertWatt,
  ConvertMilliwatt,
  ConvertKilowatt,
  ConvertMegawatt,
  ConvertGigawatt,
  ConvertVoltAmpereReactive,
  ConvertMillivoltAmpereReactive,
  ConvertKilovoltAmpereReactive,
  ConvertMegavoltAmpereReactive,
  ConvertGigavoltAmpereReactive,
  ConvertVoltAmpere,
  ConvertMillivoltAmpere,
  ConvertKilovoltAmpere,
  ConvertMegavoltAmpere,
  ConvertGigavoltAmpere,
  ConvertWattHour,
  ConvertMilliwattHour,
  ConvertKilowattHour,
  ConvertMegawattHour,
  ConvertGigawattHour,
  ConvertJoule,
  ConvertKilojoule,
  ConvertVoltAmpereReactiveHour,
  ConvertMillivoltAmpereReactiveHour,
  ConvertKilovoltAmpereReactiveHour,
  ConvertMegavoltAmpereReactiveHour,
  ConvertGigavoltAmpereReactiveHour,
  ConvertCubicMillimeterPerSecond,
  ConvertCubicCentimeterPerSecond,
  ConvertMillilitrePerSecond,
  ConvertCentilitrePerSecond,
  ConvertDecilitrePerSecond,
  ConvertLitrePerSecond,
  ConvertLitrePerMinute,
  ConvertLitrePerHour,
  ConvertKilolitrePerSecond,
  ConvertKilolitrePerMinute,
  ConvertKilolitrePerHour,
  ConvertCubicMeterPerSecond,
  ConvertCubicMeterPerMinute,
  ConvertCubicMeterPerHour,
  ConvertCubicKilometerPerSecond,
  ConvertTeaspoonPerSecond,
  ConvertTablespoonPerSecond,
  ConvertCubicInchPerSecond,
  ConvertCubicInchPerMinute,
  ConvertCubicInchPerHour,
  ConvertFluidOuncePerSecond,
  ConvertFluidOuncePerMinute,
  ConvertFluidOuncePerHour,
  ConvertCupPerSecond,
  ConvertPintPerSecond,
  ConvertPintPerMinute,
  ConvertPintPerHour,
  ConvertQuartPerSecond,
  ConvertGallonPerSecond,
  ConvertGallonPerMinute,
  ConvertGallonPerHour,
  ConvertCubicFootPerSecond,
  ConvertCubicFootPerMinute,
  ConvertCubicFootPerHour,
  ConvertCubicYardPerSecond,
  ConvertCubicYardPerMinute,
  ConvertCubicYardPerHour,
  ConvertLux,
  ConvertFootCandle,
  ConvertMillihertz,
  ConvertHertz,
  ConvertKilohertz,
  ConvertMegahertz,
  ConvertGigahertz,
  ConvertTerahertz,
  ConvertRotationPerMinute,
  ConvertDegreePerSecond,
  ConvertRadianPerSecond,
  ConvertRadian,
  ConvertDegree,
  ConvertGradian,
  ConvertArcminute,
  ConvertArcsecond,
  ConvertUnit,
  ConvertUnitResolver,
} from '~/code/type/shared'

export function convertUnit(source: ConvertUnit) {
  const input = ConvertUnitResolver().parse(source) as any

  switch (source.input.format) {
    case 'millimeter':
      return convertMillimeter(input)
    case 'centimeter':
      return convertCentimeter(input)
    case 'meter':
      return convertMeter(input)
    case 'kilometer':
      return convertKilometer(input)
    case 'inch':
      return convertInch(input)
    case 'yard':
      return convertYard(input)
    case 'us-survey-foot':
      return convertUsSurveyFoot(input)
    case 'foot':
      return convertFoot(input)
    case 'mile':
      return convertMile(input)
    case 'square-millimeter':
      return convertSquareMillimeter(input)
    case 'square-centimeter':
      return convertSquareCentimeter(input)
    case 'square-meter':
      return convertSquareMeter(input)
    case 'hectare':
      return convertHectare(input)
    case 'square-kilometer':
      return convertSquareKilometer(input)
    case 'square-inch':
      return convertSquareInch(input)
    case 'square-yard':
      return convertSquareYard(input)
    case 'square-foot':
      return convertSquareFoot(input)
    case 'acre':
      return convertAcre(input)
    case 'square-mile':
      return convertSquareMile(input)
    case 'microgram':
      return convertMicrogram(input)
    case 'milligram':
      return convertMilligram(input)
    case 'gram':
      return convertGram(input)
    case 'kilogram':
      return convertKilogram(input)
    case 'metric-tonne':
      return convertMetricTonne(input)
    case 'ounce':
      return convertOunce(input)
    case 'pound':
      return convertPound(input)
    case 'ton':
      return convertTon(input)
    case 'cubic-millimeter':
      return convertCubicMillimeter(input)
    case 'cubic-centimeter':
      return convertCubicCentimeter(input)
    case 'millilitre':
      return convertMillilitre(input)
    case 'centilitre':
      return convertCentilitre(input)
    case 'decilitre':
      return convertDecilitre(input)
    case 'litre':
      return convertLitre(input)
    case 'kilolitre':
      return convertKilolitre(input)
    case 'cubic-meter':
      return convertCubicMeter(input)
    case 'cubic-kilometer':
      return convertCubicKilometer(input)
    case 'tesked':
      return convertTesked(input)
    case 'matsked':
      return convertMatsked(input)
    case 'kaffekopp':
      return convertKaffekopp(input)
    case 'glas':
      return convertGlas(input)
    case 'kanna':
      return convertKanna(input)
    case 'teaspoon':
      return convertTeaspoon(input)
    case 'tablespoon':
      return convertTablespoon(input)
    case 'cubic-inch':
      return convertCubicInch(input)
    case 'fluid-ounce':
      return convertFluidOunce(input)
    case 'cup':
      return convertCup(input)
    case 'pint':
      return convertPint(input)
    case 'quart':
      return convertQuart(input)
    case 'gallon':
      return convertGallon(input)
    case 'cubic-foot':
      return convertCubicFoot(input)
    case 'cubic-yard':
      return convertCubicYard(input)
    case 'each':
      return convertEach(input)
    case 'dozen':
      return convertDozen(input)
    case 'celsius':
      return convertCelsius(input)
    case 'kelvin':
      return convertKelvin(input)
    case 'fahrenheit':
      return convertFahrenheit(input)
    case 'rankine':
      return convertRankine(input)
    case 'nanosecond':
      return convertNanosecond(input)
    case 'microsecond':
      return convertMicrosecond(input)
    case 'millisecond':
      return convertMillisecond(input)
    case 'second':
      return convertSecond(input)
    case 'minute':
      return convertMinute(input)
    case 'hour':
      return convertHour(input)
    case 'day':
      return convertDay(input)
    case 'week':
      return convertWeek(input)
    case 'month':
      return convertMonth(input)
    case 'year':
      return convertYear(input)
    case 'bit':
      return convertBit(input)
    case 'kilobit':
      return convertKilobit(input)
    case 'megabit':
      return convertMegabit(input)
    case 'gigabit':
      return convertGigabit(input)
    case 'terabit':
      return convertTerabit(input)
    case 'byte':
      return convertByte(input)
    case 'kilobyte':
      return convertKilobyte(input)
    case 'megabyte':
      return convertMegabyte(input)
    case 'gigabyte':
      return convertGigabyte(input)
    case 'terabyte':
      return convertTerabyte(input)
    case 'part-per-million':
      return convertPartPerMillion(input)
    case 'part-per-billion':
      return convertPartPerBillion(input)
    case 'part-per-trillion':
      return convertPartPerTrillion(input)
    case 'part-per-quadrillion':
      return convertPartPerQuadrillion(input)
    case 'metre-per-second':
      return convertMetrePerSecond(input)
    case 'kilometre-per-hour':
      return convertKilometrePerHour(input)
    case 'mile-per-hour':
      return convertMilePerHour(input)
    case 'knot':
      return convertKnot(input)
    case 'foot-per-second':
      return convertFootPerSecond(input)
    case 'minute-per-kilometre':
      return convertMinutePerKilometre(input)
    case 'second-per-metre':
      return convertSecondPerMetre(input)
    case 'minute-per-mile':
      return convertMinutePerMile(input)
    case 'second-per-foot':
      return convertSecondPerFoot(input)
    case 'pascal':
      return convertPascal(input)
    case 'kilopascal':
      return convertKilopascal(input)
    case 'megapascal':
      return convertMegapascal(input)
    case 'hectopascal':
      return convertHectopascal(input)
    case 'bar':
      return convertBar(input)
    case 'torr':
      return convertTorr(input)
    case 'pound-per-square-inch':
      return convertPoundPerSquareInch(input)
    case 'kilopound-per-square-inch':
      return convertKilopoundPerSquareInch(input)
    case 'ampere':
      return convertAmpere(input)
    case 'milliampere':
      return convertMilliampere(input)
    case 'kiloampere':
      return convertKiloampere(input)
    case 'volt':
      return convertVolt(input)
    case 'millivolt':
      return convertMillivolt(input)
    case 'kilovolt':
      return convertKilovolt(input)
    case 'watt':
      return convertWatt(input)
    case 'milliwatt':
      return convertMilliwatt(input)
    case 'kilowatt':
      return convertKilowatt(input)
    case 'megawatt':
      return convertMegawatt(input)
    case 'gigawatt':
      return convertGigawatt(input)
    case 'volt-ampere-reactive':
      return convertVoltAmpereReactive(input)
    case 'millivolt-ampere-reactive':
      return convertMillivoltAmpereReactive(input)
    case 'kilovolt-ampere-reactive':
      return convertKilovoltAmpereReactive(input)
    case 'megavolt-ampere-reactive':
      return convertMegavoltAmpereReactive(input)
    case 'gigavolt-ampere-reactive':
      return convertGigavoltAmpereReactive(input)
    case 'volt-ampere':
      return convertVoltAmpere(input)
    case 'millivolt-ampere':
      return convertMillivoltAmpere(input)
    case 'kilovolt-ampere':
      return convertKilovoltAmpere(input)
    case 'megavolt-ampere':
      return convertMegavoltAmpere(input)
    case 'gigavolt-ampere':
      return convertGigavoltAmpere(input)
    case 'watt-hour':
      return convertWattHour(input)
    case 'milliwatt-hour':
      return convertMilliwattHour(input)
    case 'kilowatt-hour':
      return convertKilowattHour(input)
    case 'megawatt-hour':
      return convertMegawattHour(input)
    case 'gigawatt-hour':
      return convertGigawattHour(input)
    case 'joule':
      return convertJoule(input)
    case 'kilojoule':
      return convertKilojoule(input)
    case 'volt-ampere-reactive-hour':
      return convertVoltAmpereReactiveHour(input)
    case 'millivolt-ampere-reactive-hour':
      return convertMillivoltAmpereReactiveHour(input)
    case 'kilovolt-ampere-reactive-hour':
      return convertKilovoltAmpereReactiveHour(input)
    case 'megavolt-ampere-reactive-hour':
      return convertMegavoltAmpereReactiveHour(input)
    case 'gigavolt-ampere-reactive-hour':
      return convertGigavoltAmpereReactiveHour(input)
    case 'cubic-millimeter-per-second':
      return convertCubicMillimeterPerSecond(input)
    case 'cubic-centimeter-per-second':
      return convertCubicCentimeterPerSecond(input)
    case 'millilitre-per-second':
      return convertMillilitrePerSecond(input)
    case 'centilitre-per-second':
      return convertCentilitrePerSecond(input)
    case 'decilitre-per-second':
      return convertDecilitrePerSecond(input)
    case 'litre-per-second':
      return convertLitrePerSecond(input)
    case 'litre-per-minute':
      return convertLitrePerMinute(input)
    case 'litre-per-hour':
      return convertLitrePerHour(input)
    case 'kilolitre-per-second':
      return convertKilolitrePerSecond(input)
    case 'kilolitre-per-minute':
      return convertKilolitrePerMinute(input)
    case 'kilolitre-per-hour':
      return convertKilolitrePerHour(input)
    case 'cubic-meter-per-second':
      return convertCubicMeterPerSecond(input)
    case 'cubic-meter-per-minute':
      return convertCubicMeterPerMinute(input)
    case 'cubic-meter-per-hour':
      return convertCubicMeterPerHour(input)
    case 'cubic-kilometer-per-second':
      return convertCubicKilometerPerSecond(input)
    case 'teaspoon-per-second':
      return convertTeaspoonPerSecond(input)
    case 'tablespoon-per-second':
      return convertTablespoonPerSecond(input)
    case 'cubic-inch-per-second':
      return convertCubicInchPerSecond(input)
    case 'cubic-inch-per-minute':
      return convertCubicInchPerMinute(input)
    case 'cubic-inch-per-hour':
      return convertCubicInchPerHour(input)
    case 'fluid-ounce-per-second':
      return convertFluidOuncePerSecond(input)
    case 'fluid-ounce-per-minute':
      return convertFluidOuncePerMinute(input)
    case 'fluid-ounce-per-hour':
      return convertFluidOuncePerHour(input)
    case 'cup-per-second':
      return convertCupPerSecond(input)
    case 'pint-per-second':
      return convertPintPerSecond(input)
    case 'pint-per-minute':
      return convertPintPerMinute(input)
    case 'pint-per-hour':
      return convertPintPerHour(input)
    case 'quart-per-second':
      return convertQuartPerSecond(input)
    case 'gallon-per-second':
      return convertGallonPerSecond(input)
    case 'gallon-per-minute':
      return convertGallonPerMinute(input)
    case 'gallon-per-hour':
      return convertGallonPerHour(input)
    case 'cubic-foot-per-second':
      return convertCubicFootPerSecond(input)
    case 'cubic-foot-per-minute':
      return convertCubicFootPerMinute(input)
    case 'cubic-foot-per-hour':
      return convertCubicFootPerHour(input)
    case 'cubic-yard-per-second':
      return convertCubicYardPerSecond(input)
    case 'cubic-yard-per-minute':
      return convertCubicYardPerMinute(input)
    case 'cubic-yard-per-hour':
      return convertCubicYardPerHour(input)
    case 'lux':
      return convertLux(input)
    case 'foot-candle':
      return convertFootCandle(input)
    case 'millihertz':
      return convertMillihertz(input)
    case 'hertz':
      return convertHertz(input)
    case 'kilohertz':
      return convertKilohertz(input)
    case 'megahertz':
      return convertMegahertz(input)
    case 'gigahertz':
      return convertGigahertz(input)
    case 'terahertz':
      return convertTerahertz(input)
    case 'rotation-per-minute':
      return convertRotationPerMinute(input)
    case 'degree-per-second':
      return convertDegreePerSecond(input)
    case 'radian-per-second':
      return convertRadianPerSecond(input)
    case 'radian':
      return convertRadian(input)
    case 'degree':
      return convertDegree(input)
    case 'gradian':
      return convertGradian(input)
    case 'arcminute':
      return convertArcminute(input)
    case 'arcsecond':
      return convertArcsecond(input)
  }
}

export function convertMillimeter(source: ConvertMillimeter) {
  const input = ConvertMillimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('mm')
    .to(input.output.format) as number
}

export function convertCentimeter(source: ConvertCentimeter) {
  const input = ConvertCentimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('cm')
    .to(input.output.format) as number
}

export function convertMeter(source: ConvertMeter) {
  const input = ConvertMeterResolver().parse(source)
  return convertUnits(input.input)
    .from('m')
    .to(input.output.format) as number
}

export function convertKilometer(source: ConvertKilometer) {
  const input = ConvertKilometerResolver().parse(source)
  return convertUnits(input.input)
    .from('km')
    .to(input.output.format) as number
}

export function convertInch(source: ConvertInch) {
  const input = ConvertInchResolver().parse(source)
  return convertUnits(input.input)
    .from('in')
    .to(input.output.format) as number
}

export function convertYard(source: ConvertYard) {
  const input = ConvertYardResolver().parse(source)
  return convertUnits(input.input)
    .from('yd')
    .to(input.output.format) as number
}

export function convertUsSurveyFoot(source: ConvertUsSurveyFoot) {
  const input = ConvertUsSurveyFootResolver().parse(source)
  return convertUnits(input.input)
    .from('ft-us')
    .to(input.output.format) as number
}

export function convertFoot(source: ConvertFoot) {
  const input = ConvertFootResolver().parse(source)
  return convertUnits(input.input)
    .from('ft')
    .to(input.output.format) as number
}

export function convertMile(source: ConvertMile) {
  const input = ConvertMileResolver().parse(source)
  return convertUnits(input.input)
    .from('mi')
    .to(input.output.format) as number
}

export function convertSquareMillimeter(
  source: ConvertSquareMillimeter,
) {
  const input = ConvertSquareMillimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('mm2')
    .to(input.output.format) as number
}

export function convertSquareCentimeter(
  source: ConvertSquareCentimeter,
) {
  const input = ConvertSquareCentimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('cm2')
    .to(input.output.format) as number
}

export function convertSquareMeter(source: ConvertSquareMeter) {
  const input = ConvertSquareMeterResolver().parse(source)
  return convertUnits(input.input)
    .from('m2')
    .to(input.output.format) as number
}

export function convertHectare(source: ConvertHectare) {
  const input = ConvertHectareResolver().parse(source)
  return convertUnits(input.input)
    .from('ha')
    .to(input.output.format) as number
}

export function convertSquareKilometer(source: ConvertSquareKilometer) {
  const input = ConvertSquareKilometerResolver().parse(source)
  return convertUnits(input.input)
    .from('km2')
    .to(input.output.format) as number
}

export function convertSquareInch(source: ConvertSquareInch) {
  const input = ConvertSquareInchResolver().parse(source)
  return convertUnits(input.input)
    .from('in2')
    .to(input.output.format) as number
}

export function convertSquareYard(source: ConvertSquareYard) {
  const input = ConvertSquareYardResolver().parse(source)
  return convertUnits(input.input)
    .from('yd2')
    .to(input.output.format) as number
}

export function convertSquareFoot(source: ConvertSquareFoot) {
  const input = ConvertSquareFootResolver().parse(source)
  return convertUnits(input.input)
    .from('ft2')
    .to(input.output.format) as number
}

export function convertAcre(source: ConvertAcre) {
  const input = ConvertAcreResolver().parse(source)
  return convertUnits(input.input)
    .from('ac')
    .to(input.output.format) as number
}

export function convertSquareMile(source: ConvertSquareMile) {
  const input = ConvertSquareMileResolver().parse(source)
  return convertUnits(input.input)
    .from('mi2')
    .to(input.output.format) as number
}

export function convertMicrogram(source: ConvertMicrogram) {
  const input = ConvertMicrogramResolver().parse(source)
  return convertUnits(input.input)
    .from('mcg')
    .to(input.output.format) as number
}

export function convertMilligram(source: ConvertMilligram) {
  const input = ConvertMilligramResolver().parse(source)
  return convertUnits(input.input)
    .from('mg')
    .to(input.output.format) as number
}

export function convertGram(source: ConvertGram) {
  const input = ConvertGramResolver().parse(source)
  return convertUnits(input.input)
    .from('g')
    .to(input.output.format) as number
}

export function convertKilogram(source: ConvertKilogram) {
  const input = ConvertKilogramResolver().parse(source)
  return convertUnits(input.input)
    .from('kg')
    .to(input.output.format) as number
}

export function convertMetricTonne(source: ConvertMetricTonne) {
  const input = ConvertMetricTonneResolver().parse(source)
  return convertUnits(input.input)
    .from('mt')
    .to(input.output.format) as number
}

export function convertOunce(source: ConvertOunce) {
  const input = ConvertOunceResolver().parse(source)
  return convertUnits(input.input)
    .from('oz')
    .to(input.output.format) as number
}

export function convertPound(source: ConvertPound) {
  const input = ConvertPoundResolver().parse(source)
  return convertUnits(input.input)
    .from('lb')
    .to(input.output.format) as number
}

export function convertTon(source: ConvertTon) {
  const input = ConvertTonResolver().parse(source)
  return convertUnits(input.input)
    .from('t')
    .to(input.output.format) as number
}

export function convertCubicMillimeter(source: ConvertCubicMillimeter) {
  const input = ConvertCubicMillimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('mm3')
    .to(input.output.format) as number
}

export function convertCubicCentimeter(source: ConvertCubicCentimeter) {
  const input = ConvertCubicCentimeterResolver().parse(source)
  return convertUnits(input.input)
    .from('cm3')
    .to(input.output.format) as number
}

export function convertMillilitre(source: ConvertMillilitre) {
  const input = ConvertMillilitreResolver().parse(source)
  return convertUnits(input.input)
    .from('ml')
    .to(input.output.format) as number
}

export function convertCentilitre(source: ConvertCentilitre) {
  const input = ConvertCentilitreResolver().parse(source)
  return convertUnits(input.input)
    .from('cl')
    .to(input.output.format) as number
}

export function convertDecilitre(source: ConvertDecilitre) {
  const input = ConvertDecilitreResolver().parse(source)
  return convertUnits(input.input)
    .from('dl')
    .to(input.output.format) as number
}

export function convertLitre(source: ConvertLitre) {
  const input = ConvertLitreResolver().parse(source)
  return convertUnits(input.input)
    .from('l')
    .to(input.output.format) as number
}

export function convertKilolitre(source: ConvertKilolitre) {
  const input = ConvertKilolitreResolver().parse(source)
  return convertUnits(input.input)
    .from('kl')
    .to(input.output.format) as number
}

export function convertCubicMeter(source: ConvertCubicMeter) {
  const input = ConvertCubicMeterResolver().parse(source)
  return convertUnits(input.input)
    .from('m3')
    .to(input.output.format) as number
}

export function convertCubicKilometer(source: ConvertCubicKilometer) {
  const input = ConvertCubicKilometerResolver().parse(source)
  return convertUnits(input.input)
    .from('km3')
    .to(input.output.format) as number
}

export function convertTesked(source: ConvertTesked) {
  const input = ConvertTeskedResolver().parse(source)
  return convertUnits(input.input)
    .from('tsk')
    .to(input.output.format) as number
}

export function convertMatsked(source: ConvertMatsked) {
  const input = ConvertMatskedResolver().parse(source)
  return convertUnits(input.input)
    .from('msk')
    .to(input.output.format) as number
}

export function convertKaffekopp(source: ConvertKaffekopp) {
  const input = ConvertKaffekoppResolver().parse(source)
  return convertUnits(input.input)
    .from('kkp')
    .to(input.output.format) as number
}

export function convertGlas(source: ConvertGlas) {
  const input = ConvertGlasResolver().parse(source)
  return convertUnits(input.input)
    .from('glas')
    .to(input.output.format) as number
}

export function convertKanna(source: ConvertKanna) {
  const input = ConvertKannaResolver().parse(source)
  return convertUnits(input.input)
    .from('kanna')
    .to(input.output.format) as number
}

export function convertTeaspoon(source: ConvertTeaspoon) {
  const input = ConvertTeaspoonResolver().parse(source)
  return convertUnits(input.input)
    .from('tsp')
    .to(input.output.format) as number
}

export function convertTablespoon(source: ConvertTablespoon) {
  const input = ConvertTablespoonResolver().parse(source)
  return convertUnits(input.input)
    .from('Tbs')
    .to(input.output.format) as number
}

export function convertCubicInch(source: ConvertCubicInch) {
  const input = ConvertCubicInchResolver().parse(source)
  return convertUnits(input.input)
    .from('in3')
    .to(input.output.format) as number
}

export function convertFluidOunce(source: ConvertFluidOunce) {
  const input = ConvertFluidOunceResolver().parse(source)
  return convertUnits(input.input)
    .from('fl-oz')
    .to(input.output.format) as number
}

export function convertCup(source: ConvertCup) {
  const input = ConvertCupResolver().parse(source)
  return convertUnits(input.input)
    .from('cup')
    .to(input.output.format) as number
}

export function convertPint(source: ConvertPint) {
  const input = ConvertPintResolver().parse(source)
  return convertUnits(input.input)
    .from('pnt')
    .to(input.output.format) as number
}

export function convertQuart(source: ConvertQuart) {
  const input = ConvertQuartResolver().parse(source)
  return convertUnits(input.input)
    .from('qt')
    .to(input.output.format) as number
}

export function convertGallon(source: ConvertGallon) {
  const input = ConvertGallonResolver().parse(source)
  return convertUnits(input.input)
    .from('gal')
    .to(input.output.format) as number
}

export function convertCubicFoot(source: ConvertCubicFoot) {
  const input = ConvertCubicFootResolver().parse(source)
  return convertUnits(input.input)
    .from('ft3')
    .to(input.output.format) as number
}

export function convertCubicYard(source: ConvertCubicYard) {
  const input = ConvertCubicYardResolver().parse(source)
  return convertUnits(input.input)
    .from('yd3')
    .to(input.output.format) as number
}

export function convertEach(source: ConvertEach) {
  const input = ConvertEachResolver().parse(source)
  return convertUnits(input.input)
    .from('ea')
    .to(input.output.format) as number
}

export function convertDozen(source: ConvertDozen) {
  const input = ConvertDozenResolver().parse(source)
  return convertUnits(input.input)
    .from('dz')
    .to(input.output.format) as number
}

export function convertCelsius(source: ConvertCelsius) {
  const input = ConvertCelsiusResolver().parse(source)
  return convertUnits(input.input)
    .from('C')
    .to(input.output.format) as number
}

export function convertKelvin(source: ConvertKelvin) {
  const input = ConvertKelvinResolver().parse(source)
  return convertUnits(input.input)
    .from('K')
    .to(input.output.format) as number
}

export function convertFahrenheit(source: ConvertFahrenheit) {
  const input = ConvertFahrenheitResolver().parse(source)
  return convertUnits(input.input)
    .from('F')
    .to(input.output.format) as number
}

export function convertRankine(source: ConvertRankine) {
  const input = ConvertRankineResolver().parse(source)
  return convertUnits(input.input)
    .from('R')
    .to(input.output.format) as number
}

export function convertNanosecond(source: ConvertNanosecond) {
  const input = ConvertNanosecondResolver().parse(source)
  return convertUnits(input.input)
    .from('ns')
    .to(input.output.format) as number
}

export function convertMicrosecond(source: ConvertMicrosecond) {
  const input = ConvertMicrosecondResolver().parse(source)
  return convertUnits(input.input)
    .from('mu')
    .to(input.output.format) as number
}

export function convertMillisecond(source: ConvertMillisecond) {
  const input = ConvertMillisecondResolver().parse(source)
  return convertUnits(input.input)
    .from('ms')
    .to(input.output.format) as number
}

export function convertSecond(source: ConvertSecond) {
  const input = ConvertSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('s')
    .to(input.output.format) as number
}

export function convertMinute(source: ConvertMinute) {
  const input = ConvertMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('min')
    .to(input.output.format) as number
}

export function convertHour(source: ConvertHour) {
  const input = ConvertHourResolver().parse(source)
  return convertUnits(input.input)
    .from('h')
    .to(input.output.format) as number
}

export function convertDay(source: ConvertDay) {
  const input = ConvertDayResolver().parse(source)
  return convertUnits(input.input)
    .from('d')
    .to(input.output.format) as number
}

export function convertWeek(source: ConvertWeek) {
  const input = ConvertWeekResolver().parse(source)
  return convertUnits(input.input)
    .from('week')
    .to(input.output.format) as number
}

export function convertMonth(source: ConvertMonth) {
  const input = ConvertMonthResolver().parse(source)
  return convertUnits(input.input)
    .from('month')
    .to(input.output.format) as number
}

export function convertYear(source: ConvertYear) {
  const input = ConvertYearResolver().parse(source)
  return convertUnits(input.input)
    .from('year')
    .to(input.output.format) as number
}

export function convertBit(source: ConvertBit) {
  const input = ConvertBitResolver().parse(source)
  return convertUnits(input.input)
    .from('b')
    .to(input.output.format) as number
}

export function convertKilobit(source: ConvertKilobit) {
  const input = ConvertKilobitResolver().parse(source)
  return convertUnits(input.input)
    .from('Kb')
    .to(input.output.format) as number
}

export function convertMegabit(source: ConvertMegabit) {
  const input = ConvertMegabitResolver().parse(source)
  return convertUnits(input.input)
    .from('Mb')
    .to(input.output.format) as number
}

export function convertGigabit(source: ConvertGigabit) {
  const input = ConvertGigabitResolver().parse(source)
  return convertUnits(input.input)
    .from('Gb')
    .to(input.output.format) as number
}

export function convertTerabit(source: ConvertTerabit) {
  const input = ConvertTerabitResolver().parse(source)
  return convertUnits(input.input)
    .from('Tb')
    .to(input.output.format) as number
}

export function convertByte(source: ConvertByte) {
  const input = ConvertByteResolver().parse(source)
  return convertUnits(input.input)
    .from('B')
    .to(input.output.format) as number
}

export function convertKilobyte(source: ConvertKilobyte) {
  const input = ConvertKilobyteResolver().parse(source)
  return convertUnits(input.input)
    .from('KB')
    .to(input.output.format) as number
}

export function convertMegabyte(source: ConvertMegabyte) {
  const input = ConvertMegabyteResolver().parse(source)
  return convertUnits(input.input)
    .from('MB')
    .to(input.output.format) as number
}

export function convertGigabyte(source: ConvertGigabyte) {
  const input = ConvertGigabyteResolver().parse(source)
  return convertUnits(input.input)
    .from('GB')
    .to(input.output.format) as number
}

export function convertTerabyte(source: ConvertTerabyte) {
  const input = ConvertTerabyteResolver().parse(source)
  return convertUnits(input.input)
    .from('TB')
    .to(input.output.format) as number
}

export function convertPartPerMillion(source: ConvertPartPerMillion) {
  const input = ConvertPartPerMillionResolver().parse(source)
  return convertUnits(input.input)
    .from('ppm')
    .to(input.output.format) as number
}

export function convertPartPerBillion(source: ConvertPartPerBillion) {
  const input = ConvertPartPerBillionResolver().parse(source)
  return convertUnits(input.input)
    .from('ppb')
    .to(input.output.format) as number
}

export function convertPartPerTrillion(source: ConvertPartPerTrillion) {
  const input = ConvertPartPerTrillionResolver().parse(source)
  return convertUnits(input.input)
    .from('ppt')
    .to(input.output.format) as number
}

export function convertPartPerQuadrillion(
  source: ConvertPartPerQuadrillion,
) {
  const input = ConvertPartPerQuadrillionResolver().parse(source)
  return convertUnits(input.input)
    .from('ppq')
    .to(input.output.format) as number
}

export function convertMetrePerSecond(source: ConvertMetrePerSecond) {
  const input = ConvertMetrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('m/s')
    .to(input.output.format) as number
}

export function convertKilometrePerHour(
  source: ConvertKilometrePerHour,
) {
  const input = ConvertKilometrePerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('km/h')
    .to(input.output.format) as number
}

export function convertMilePerHour(source: ConvertMilePerHour) {
  const input = ConvertMilePerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('m/h')
    .to(input.output.format) as number
}

export function convertKnot(source: ConvertKnot) {
  const input = ConvertKnotResolver().parse(source)
  return convertUnits(input.input)
    .from('knot')
    .to(input.output.format) as number
}

export function convertFootPerSecond(source: ConvertFootPerSecond) {
  const input = ConvertFootPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('ft/s')
    .to(input.output.format) as number
}

export function convertMinutePerKilometre(
  source: ConvertMinutePerKilometre,
) {
  const input = ConvertMinutePerKilometreResolver().parse(source)
  return convertUnits(input.input)
    .from('min/km')
    .to(input.output.format) as number
}

export function convertSecondPerMetre(source: ConvertSecondPerMetre) {
  const input = ConvertSecondPerMetreResolver().parse(source)
  return convertUnits(input.input)
    .from('s/m')
    .to(input.output.format) as number
}

export function convertMinutePerMile(source: ConvertMinutePerMile) {
  const input = ConvertMinutePerMileResolver().parse(source)
  return convertUnits(input.input)
    .from('min/mi')
    .to(input.output.format) as number
}

export function convertSecondPerFoot(source: ConvertSecondPerFoot) {
  const input = ConvertSecondPerFootResolver().parse(source)
  return convertUnits(input.input)
    .from('s/ft')
    .to(input.output.format) as number
}

export function convertPascal(source: ConvertPascal) {
  const input = ConvertPascalResolver().parse(source)
  return convertUnits(input.input)
    .from('Pa')
    .to(input.output.format) as number
}

export function convertKilopascal(source: ConvertKilopascal) {
  const input = ConvertKilopascalResolver().parse(source)
  return convertUnits(input.input)
    .from('kPa')
    .to(input.output.format) as number
}

export function convertMegapascal(source: ConvertMegapascal) {
  const input = ConvertMegapascalResolver().parse(source)
  return convertUnits(input.input)
    .from('MPa')
    .to(input.output.format) as number
}

export function convertHectopascal(source: ConvertHectopascal) {
  const input = ConvertHectopascalResolver().parse(source)
  return convertUnits(input.input)
    .from('hPa')
    .to(input.output.format) as number
}

export function convertBar(source: ConvertBar) {
  const input = ConvertBarResolver().parse(source)
  return convertUnits(input.input)
    .from('bar')
    .to(input.output.format) as number
}

export function convertTorr(source: ConvertTorr) {
  const input = ConvertTorrResolver().parse(source)
  return convertUnits(input.input)
    .from('torr')
    .to(input.output.format) as number
}

export function convertPoundPerSquareInch(
  source: ConvertPoundPerSquareInch,
) {
  const input = ConvertPoundPerSquareInchResolver().parse(source)
  return convertUnits(input.input)
    .from('psi')
    .to(input.output.format) as number
}

export function convertKilopoundPerSquareInch(
  source: ConvertKilopoundPerSquareInch,
) {
  const input = ConvertKilopoundPerSquareInchResolver().parse(source)
  return convertUnits(input.input)
    .from('ksi')
    .to(input.output.format) as number
}

export function convertAmpere(source: ConvertAmpere) {
  const input = ConvertAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('A')
    .to(input.output.format) as number
}

export function convertMilliampere(source: ConvertMilliampere) {
  const input = ConvertMilliampereResolver().parse(source)
  return convertUnits(input.input)
    .from('mA')
    .to(input.output.format) as number
}

export function convertKiloampere(source: ConvertKiloampere) {
  const input = ConvertKiloampereResolver().parse(source)
  return convertUnits(input.input)
    .from('kA')
    .to(input.output.format) as number
}

export function convertVolt(source: ConvertVolt) {
  const input = ConvertVoltResolver().parse(source)
  return convertUnits(input.input)
    .from('V')
    .to(input.output.format) as number
}

export function convertMillivolt(source: ConvertMillivolt) {
  const input = ConvertMillivoltResolver().parse(source)
  return convertUnits(input.input)
    .from('mV')
    .to(input.output.format) as number
}

export function convertKilovolt(source: ConvertKilovolt) {
  const input = ConvertKilovoltResolver().parse(source)
  return convertUnits(input.input)
    .from('kV')
    .to(input.output.format) as number
}

export function convertWatt(source: ConvertWatt) {
  const input = ConvertWattResolver().parse(source)
  return convertUnits(input.input)
    .from('W')
    .to(input.output.format) as number
}

export function convertMilliwatt(source: ConvertMilliwatt) {
  const input = ConvertMilliwattResolver().parse(source)
  return convertUnits(input.input)
    .from('mW')
    .to(input.output.format) as number
}

export function convertKilowatt(source: ConvertKilowatt) {
  const input = ConvertKilowattResolver().parse(source)
  return convertUnits(input.input)
    .from('kW')
    .to(input.output.format) as number
}

export function convertMegawatt(source: ConvertMegawatt) {
  const input = ConvertMegawattResolver().parse(source)
  return convertUnits(input.input)
    .from('MW')
    .to(input.output.format) as number
}

export function convertGigawatt(source: ConvertGigawatt) {
  const input = ConvertGigawattResolver().parse(source)
  return convertUnits(input.input)
    .from('GW')
    .to(input.output.format) as number
}

export function convertVoltAmpereReactive(
  source: ConvertVoltAmpereReactive,
) {
  const input = ConvertVoltAmpereReactiveResolver().parse(source)
  return convertUnits(input.input)
    .from('VAR')
    .to(input.output.format) as number
}

export function convertMillivoltAmpereReactive(
  source: ConvertMillivoltAmpereReactive,
) {
  const input = ConvertMillivoltAmpereReactiveResolver().parse(source)
  return convertUnits(input.input)
    .from('mVAR')
    .to(input.output.format) as number
}

export function convertKilovoltAmpereReactive(
  source: ConvertKilovoltAmpereReactive,
) {
  const input = ConvertKilovoltAmpereReactiveResolver().parse(source)
  return convertUnits(input.input)
    .from('kVAR')
    .to(input.output.format) as number
}

export function convertMegavoltAmpereReactive(
  source: ConvertMegavoltAmpereReactive,
) {
  const input = ConvertMegavoltAmpereReactiveResolver().parse(source)
  return convertUnits(input.input)
    .from('MVAR')
    .to(input.output.format) as number
}

export function convertGigavoltAmpereReactive(
  source: ConvertGigavoltAmpereReactive,
) {
  const input = ConvertGigavoltAmpereReactiveResolver().parse(source)
  return convertUnits(input.input)
    .from('GVAR')
    .to(input.output.format) as number
}

export function convertVoltAmpere(source: ConvertVoltAmpere) {
  const input = ConvertVoltAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('VA')
    .to(input.output.format) as number
}

export function convertMillivoltAmpere(source: ConvertMillivoltAmpere) {
  const input = ConvertMillivoltAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('mVA')
    .to(input.output.format) as number
}

export function convertKilovoltAmpere(source: ConvertKilovoltAmpere) {
  const input = ConvertKilovoltAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('kVA')
    .to(input.output.format) as number
}

export function convertMegavoltAmpere(source: ConvertMegavoltAmpere) {
  const input = ConvertMegavoltAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('MVA')
    .to(input.output.format) as number
}

export function convertGigavoltAmpere(source: ConvertGigavoltAmpere) {
  const input = ConvertGigavoltAmpereResolver().parse(source)
  return convertUnits(input.input)
    .from('GVA')
    .to(input.output.format) as number
}

export function convertWattHour(source: ConvertWattHour) {
  const input = ConvertWattHourResolver().parse(source)
  return convertUnits(input.input)
    .from('Wh')
    .to(input.output.format) as number
}

export function convertMilliwattHour(source: ConvertMilliwattHour) {
  const input = ConvertMilliwattHourResolver().parse(source)
  return convertUnits(input.input)
    .from('mWh')
    .to(input.output.format) as number
}

export function convertKilowattHour(source: ConvertKilowattHour) {
  const input = ConvertKilowattHourResolver().parse(source)
  return convertUnits(input.input)
    .from('kWh')
    .to(input.output.format) as number
}

export function convertMegawattHour(source: ConvertMegawattHour) {
  const input = ConvertMegawattHourResolver().parse(source)
  return convertUnits(input.input)
    .from('MWh')
    .to(input.output.format) as number
}

export function convertGigawattHour(source: ConvertGigawattHour) {
  const input = ConvertGigawattHourResolver().parse(source)
  return convertUnits(input.input)
    .from('GWh')
    .to(input.output.format) as number
}

export function convertJoule(source: ConvertJoule) {
  const input = ConvertJouleResolver().parse(source)
  return convertUnits(input.input)
    .from('J')
    .to(input.output.format) as number
}

export function convertKilojoule(source: ConvertKilojoule) {
  const input = ConvertKilojouleResolver().parse(source)
  return convertUnits(input.input)
    .from('kJ')
    .to(input.output.format) as number
}

export function convertVoltAmpereReactiveHour(
  source: ConvertVoltAmpereReactiveHour,
) {
  const input = ConvertVoltAmpereReactiveHourResolver().parse(source)
  return convertUnits(input.input)
    .from('VARh')
    .to(input.output.format) as number
}

export function convertMillivoltAmpereReactiveHour(
  source: ConvertMillivoltAmpereReactiveHour,
) {
  const input =
    ConvertMillivoltAmpereReactiveHourResolver().parse(source)
  return convertUnits(input.input)
    .from('mVARh')
    .to(input.output.format) as number
}

export function convertKilovoltAmpereReactiveHour(
  source: ConvertKilovoltAmpereReactiveHour,
) {
  const input =
    ConvertKilovoltAmpereReactiveHourResolver().parse(source)
  return convertUnits(input.input)
    .from('kVARh')
    .to(input.output.format) as number
}

export function convertMegavoltAmpereReactiveHour(
  source: ConvertMegavoltAmpereReactiveHour,
) {
  const input =
    ConvertMegavoltAmpereReactiveHourResolver().parse(source)
  return convertUnits(input.input)
    .from('MVARh')
    .to(input.output.format) as number
}

export function convertGigavoltAmpereReactiveHour(
  source: ConvertGigavoltAmpereReactiveHour,
) {
  const input =
    ConvertGigavoltAmpereReactiveHourResolver().parse(source)
  return convertUnits(input.input)
    .from('GVARh')
    .to(input.output.format) as number
}

export function convertCubicMillimeterPerSecond(
  source: ConvertCubicMillimeterPerSecond,
) {
  const input = ConvertCubicMillimeterPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('mm3/s')
    .to(input.output.format) as number
}

export function convertCubicCentimeterPerSecond(
  source: ConvertCubicCentimeterPerSecond,
) {
  const input = ConvertCubicCentimeterPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('cm3/s')
    .to(input.output.format) as number
}

export function convertMillilitrePerSecond(
  source: ConvertMillilitrePerSecond,
) {
  const input = ConvertMillilitrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('ml/s')
    .to(input.output.format) as number
}

export function convertCentilitrePerSecond(
  source: ConvertCentilitrePerSecond,
) {
  const input = ConvertCentilitrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('cl/s')
    .to(input.output.format) as number
}

export function convertDecilitrePerSecond(
  source: ConvertDecilitrePerSecond,
) {
  const input = ConvertDecilitrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('dl/s')
    .to(input.output.format) as number
}

export function convertLitrePerSecond(source: ConvertLitrePerSecond) {
  const input = ConvertLitrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('l/s')
    .to(input.output.format) as number
}

export function convertLitrePerMinute(source: ConvertLitrePerMinute) {
  const input = ConvertLitrePerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('l/min')
    .to(input.output.format) as number
}

export function convertLitrePerHour(source: ConvertLitrePerHour) {
  const input = ConvertLitrePerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('l/h')
    .to(input.output.format) as number
}

export function convertKilolitrePerSecond(
  source: ConvertKilolitrePerSecond,
) {
  const input = ConvertKilolitrePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('kl/s')
    .to(input.output.format) as number
}

export function convertKilolitrePerMinute(
  source: ConvertKilolitrePerMinute,
) {
  const input = ConvertKilolitrePerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('kl/min')
    .to(input.output.format) as number
}

export function convertKilolitrePerHour(
  source: ConvertKilolitrePerHour,
) {
  const input = ConvertKilolitrePerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('kl/h')
    .to(input.output.format) as number
}

export function convertCubicMeterPerSecond(
  source: ConvertCubicMeterPerSecond,
) {
  const input = ConvertCubicMeterPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('m3/s')
    .to(input.output.format) as number
}

export function convertCubicMeterPerMinute(
  source: ConvertCubicMeterPerMinute,
) {
  const input = ConvertCubicMeterPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('m3/min')
    .to(input.output.format) as number
}

export function convertCubicMeterPerHour(
  source: ConvertCubicMeterPerHour,
) {
  const input = ConvertCubicMeterPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('m3/h')
    .to(input.output.format) as number
}

export function convertCubicKilometerPerSecond(
  source: ConvertCubicKilometerPerSecond,
) {
  const input = ConvertCubicKilometerPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('km3/s')
    .to(input.output.format) as number
}

export function convertTeaspoonPerSecond(
  source: ConvertTeaspoonPerSecond,
) {
  const input = ConvertTeaspoonPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('tsp/s')
    .to(input.output.format) as number
}

export function convertTablespoonPerSecond(
  source: ConvertTablespoonPerSecond,
) {
  const input = ConvertTablespoonPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('Tbs/s')
    .to(input.output.format) as number
}

export function convertCubicInchPerSecond(
  source: ConvertCubicInchPerSecond,
) {
  const input = ConvertCubicInchPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('in3/s')
    .to(input.output.format) as number
}

export function convertCubicInchPerMinute(
  source: ConvertCubicInchPerMinute,
) {
  const input = ConvertCubicInchPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('in3/min')
    .to(input.output.format) as number
}

export function convertCubicInchPerHour(
  source: ConvertCubicInchPerHour,
) {
  const input = ConvertCubicInchPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('in3/h')
    .to(input.output.format) as number
}

export function convertFluidOuncePerSecond(
  source: ConvertFluidOuncePerSecond,
) {
  const input = ConvertFluidOuncePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('fl-oz/s')
    .to(input.output.format) as number
}

export function convertFluidOuncePerMinute(
  source: ConvertFluidOuncePerMinute,
) {
  const input = ConvertFluidOuncePerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('fl-oz/min')
    .to(input.output.format) as number
}

export function convertFluidOuncePerHour(
  source: ConvertFluidOuncePerHour,
) {
  const input = ConvertFluidOuncePerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('fl-oz/h')
    .to(input.output.format) as number
}

export function convertCupPerSecond(source: ConvertCupPerSecond) {
  const input = ConvertCupPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('cup/s')
    .to(input.output.format) as number
}

export function convertPintPerSecond(source: ConvertPintPerSecond) {
  const input = ConvertPintPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('pnt/s')
    .to(input.output.format) as number
}

export function convertPintPerMinute(source: ConvertPintPerMinute) {
  const input = ConvertPintPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('pnt/min')
    .to(input.output.format) as number
}

export function convertPintPerHour(source: ConvertPintPerHour) {
  const input = ConvertPintPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('pnt/h')
    .to(input.output.format) as number
}

export function convertQuartPerSecond(source: ConvertQuartPerSecond) {
  const input = ConvertQuartPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('qt/s')
    .to(input.output.format) as number
}

export function convertGallonPerSecond(source: ConvertGallonPerSecond) {
  const input = ConvertGallonPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('gal/s')
    .to(input.output.format) as number
}

export function convertGallonPerMinute(source: ConvertGallonPerMinute) {
  const input = ConvertGallonPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('gal/min')
    .to(input.output.format) as number
}

export function convertGallonPerHour(source: ConvertGallonPerHour) {
  const input = ConvertGallonPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('gal/h')
    .to(input.output.format) as number
}

export function convertCubicFootPerSecond(
  source: ConvertCubicFootPerSecond,
) {
  const input = ConvertCubicFootPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('ft3/s')
    .to(input.output.format) as number
}

export function convertCubicFootPerMinute(
  source: ConvertCubicFootPerMinute,
) {
  const input = ConvertCubicFootPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('ft3/min')
    .to(input.output.format) as number
}

export function convertCubicFootPerHour(
  source: ConvertCubicFootPerHour,
) {
  const input = ConvertCubicFootPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('ft3/h')
    .to(input.output.format) as number
}

export function convertCubicYardPerSecond(
  source: ConvertCubicYardPerSecond,
) {
  const input = ConvertCubicYardPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('yd3/s')
    .to(input.output.format) as number
}

export function convertCubicYardPerMinute(
  source: ConvertCubicYardPerMinute,
) {
  const input = ConvertCubicYardPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('yd3/min')
    .to(input.output.format) as number
}

export function convertCubicYardPerHour(
  source: ConvertCubicYardPerHour,
) {
  const input = ConvertCubicYardPerHourResolver().parse(source)
  return convertUnits(input.input)
    .from('yd3/h')
    .to(input.output.format) as number
}

export function convertLux(source: ConvertLux) {
  const input = ConvertLuxResolver().parse(source)
  return convertUnits(input.input)
    .from('lx')
    .to(input.output.format) as number
}

export function convertFootCandle(source: ConvertFootCandle) {
  const input = ConvertFootCandleResolver().parse(source)
  return convertUnits(input.input)
    .from('ft-cd')
    .to(input.output.format) as number
}

export function convertMillihertz(source: ConvertMillihertz) {
  const input = ConvertMillihertzResolver().parse(source)
  return convertUnits(input.input)
    .from('mHz')
    .to(input.output.format) as number
}

export function convertHertz(source: ConvertHertz) {
  const input = ConvertHertzResolver().parse(source)
  return convertUnits(input.input)
    .from('Hz')
    .to(input.output.format) as number
}

export function convertKilohertz(source: ConvertKilohertz) {
  const input = ConvertKilohertzResolver().parse(source)
  return convertUnits(input.input)
    .from('kHz')
    .to(input.output.format) as number
}

export function convertMegahertz(source: ConvertMegahertz) {
  const input = ConvertMegahertzResolver().parse(source)
  return convertUnits(input.input)
    .from('MHz')
    .to(input.output.format) as number
}

export function convertGigahertz(source: ConvertGigahertz) {
  const input = ConvertGigahertzResolver().parse(source)
  return convertUnits(input.input)
    .from('GHz')
    .to(input.output.format) as number
}

export function convertTerahertz(source: ConvertTerahertz) {
  const input = ConvertTerahertzResolver().parse(source)
  return convertUnits(input.input)
    .from('THz')
    .to(input.output.format) as number
}

export function convertRotationPerMinute(
  source: ConvertRotationPerMinute,
) {
  const input = ConvertRotationPerMinuteResolver().parse(source)
  return convertUnits(input.input)
    .from('rpm')
    .to(input.output.format) as number
}

export function convertDegreePerSecond(source: ConvertDegreePerSecond) {
  const input = ConvertDegreePerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('deg/s')
    .to(input.output.format) as number
}

export function convertRadianPerSecond(source: ConvertRadianPerSecond) {
  const input = ConvertRadianPerSecondResolver().parse(source)
  return convertUnits(input.input)
    .from('rad/s')
    .to(input.output.format) as number
}

export function convertRadian(source: ConvertRadian) {
  const input = ConvertRadianResolver().parse(source)
  return convertUnits(input.input)
    .from('rad')
    .to(input.output.format) as number
}

export function convertDegree(source: ConvertDegree) {
  const input = ConvertDegreeResolver().parse(source)
  return convertUnits(input.input)
    .from('deg')
    .to(input.output.format) as number
}

export function convertGradian(source: ConvertGradian) {
  const input = ConvertGradianResolver().parse(source)
  return convertUnits(input.input)
    .from('grad')
    .to(input.output.format) as number
}

export function convertArcminute(source: ConvertArcminute) {
  const input = ConvertArcminuteResolver().parse(source)
  return convertUnits(input.input)
    .from('arcmin')
    .to(input.output.format) as number
}

export function convertArcsecond(source: ConvertArcsecond) {
  const input = ConvertArcsecondResolver().parse(source)
  return convertUnits(input.input)
    .from('arcsec')
    .to(input.output.format) as number
}

export type ConvertUnitTest = {
  input: {
    format: string
    value: number
  }
  output: {
    format: string
  }
}

export function testConvertUnit(input: any): input is ConvertUnit {
  if (!input) {
    return false
  }

  if (!('input' in input)) {
    return false
  }
  if (!('format' in input.input)) {
    return false
  }
  if (!('value' in input.input)) {
    return false
  }
  if (!('output' in input)) {
    return false
  }
  if (!('format' in input.output)) {
    return false
  }
  return true
}
