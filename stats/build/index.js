"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from "./CsvFileReader";
// import { MatchResult } from "./MatchResult";
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// const reader = new MatchReader('football.csv')
// const reader = new CsvFileReader('football.csv')
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
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
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
