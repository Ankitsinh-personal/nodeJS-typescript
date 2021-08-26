import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// type annotation
type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader  {
    data: string[][] = []
    constructor(public filename: string) { }



    // this mathod return data of football.csv file = this.data
    //  .split('\n) => full string to => new line ( full string to array [])
    //  .map    => array[]  => array[][] ( every new line string  to array , split by ',' )
    //  .map    => array [] []  => get indivisual data 

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            // .map(this.mapRow)       // not mapRow()  -> map function
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
    }


}