import fs from 'fs'; //even though file system is build into javascript
//we still have to import a type definition file. In this case we are going
//to import a type definition file for all the libraries that belong in the
//std library
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
