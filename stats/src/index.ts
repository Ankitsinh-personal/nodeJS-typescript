import fs from "fs";
// import { CsvFileReader } from "./CsvFileReader";
// import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// const reader = new MatchReader('football.csv')
// const reader = new CsvFileReader('football.csv')

// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()

const matchReader = MatchReader.fromCsv('football.csv')

// reader.read()

//matchReader.matches
// let manUnitedWins = 0;

// for(let match of matchReader.reader.data){
//     if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
//         manUnitedWins++;
//     }
//     else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++;
//     }
// }
// console.log(`man united won ${manUnitedWins} game`);

// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new HtmlReport(),
// )

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
matchReader.load()

summary.buildAndPrintReport(matchReader.matches)