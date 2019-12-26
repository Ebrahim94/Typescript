import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbers = new NumbersCollection([50, -3, -5, 0]);
const sortnumbers = new Sorter(numbers);
sortnumbers.sort();
console.log(sortnumbers);

const strings = new CharactersCollection('xxxxxbxxaz');
const sortstrings = new Sorter(strings);
sortstrings.sort();
console.log(sortstrings);
