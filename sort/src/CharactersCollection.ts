<<<<<<< HEAD
import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
=======
export class CharactersCollection {
  constructor(public data: string) {}
>>>>>>> d7ec145ba5deb9fcd5535cb2d173e42deffa3fbf

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.data.split('');
    let left = temp[leftIndex];
    temp[leftIndex] = temp[rightIndex];
    temp[rightIndex] = left;
    this.data = temp.join('');
  }
}
