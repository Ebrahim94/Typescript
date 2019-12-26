"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data.split('');
        var left = temp[leftIndex];
        temp[leftIndex] = temp[rightIndex];
        temp[rightIndex] = left;
        this.data = temp.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
