import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // Metadata which is a key value pair was added
// //to the object plane the key here is 'note' and the value is 'hi there'
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);
// console.log(plane);

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('flying');
  }
}

function get(path: string) {
  return function(target: Plane, key: string, dis: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
  }
}
