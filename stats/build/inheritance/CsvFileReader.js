"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// import { dateStringToDate } from "./utils";
// import { MatchResult } from "./MatchResult";
// type annotation
// type MatchData = [Date, string, string, number, number, MatchResult, string]
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // data: string[][] = []
        this.data = [];
    }
    // this mathod return data of football.csv file = this.data
    //  .split('\n) => full string to => new line ( full string to array [])
    //  .map    => array[]  => array[][] ( every new line string  to array , split by ',' )
    //  .map    => array [] []  => get indivisual data 
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow); // not mapRow()  -> map function
        // .map((row: string[]): MatchData => {
        //     return [
        //         dateStringToDate(row[0]),
        //         row[1],
        //         row[2],
        //         parseInt(row[3]),
        //         parseInt(row[4]),
        //         row[5] as MatchResult,      // 'H' ,'A', 'D'
        //         row[6]
        //     ];
        // })
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
