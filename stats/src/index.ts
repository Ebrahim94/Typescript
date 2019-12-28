import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('./football.csv');
reader.read();
//primary goal is to signal to other engineers that these are all closely related
//values
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

MatchResult.Draw;

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
