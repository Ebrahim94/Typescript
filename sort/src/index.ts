import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
<<<<<<< HEAD
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([50, -3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const strings = new CharactersCollection('xxxxxbxxaz');
strings.sort();
console.log(strings.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(20);
linkedList.add(1);

linkedList.sort();
linkedList.print();
=======

const numbers = new NumbersCollection([50, -3, -5, 0]);
const sortnumbers = new Sorter(numbers);
sortnumbers.sort();
console.log(sortnumbers);

const strings = new CharactersCollection('xxxxxbxxaz');
const sortstrings = new Sorter(strings);
sortstrings.sort();
console.log(sortstrings);
>>>>>>> d7ec145... added sorter
