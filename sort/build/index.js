"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbers = new NumbersCollection_1.NumbersCollection([50, -3, -5, 0]);
numbers.sort();
console.log(numbers.data);
var strings = new CharactersCollection_1.CharactersCollection('xxxxxbxxaz');
strings.sort();
console.log(strings.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(20);
linkedList.add(1);
linkedList.sort();
linkedList.print();
=======
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([50, -3, -5, 0]);
var sortnumbers = new Sorter_1.Sorter(numbers);
sortnumbers.sort();
console.log(sortnumbers);
var strings = new CharactersCollection_1.CharactersCollection('xxxxxbxxaz');
var sortstrings = new Sorter_1.Sorter(strings);
sortstrings.sort();
console.log(sortstrings);
>>>>>>> d7ec145ba5deb9fcd5535cb2d173e42deffa3fbf
