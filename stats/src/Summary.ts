import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReports } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  static printHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReports());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    let analyzed = this.analyzer.run(matches);
    this.output.print(analyzed);
  }
}
