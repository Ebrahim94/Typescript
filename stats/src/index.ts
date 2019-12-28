import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//Create an instance of MatchReader and pass in something satisfying
const matchReader = MatchReader.fromCsv('./football.csv');
matchReader.load();

const summary = Summary.printHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
