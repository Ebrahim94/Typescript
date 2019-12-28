"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    Summary.printHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReports());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var analyzed = this.analyzer.run(matches);
        this.output.print(analyzed);
    };
    return Summary;
}());
exports.Summary = Summary;
