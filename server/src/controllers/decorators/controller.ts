import 'reflect-metadata';

export function controller(routePrefix: string) {
  return function(target: Function) {
    //the class decorator takes in a constructor function
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
    }
  };
}
