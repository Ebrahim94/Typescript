import 'reflect-metadata';

export function get(path: string) {
  return function(target: any, key: String, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
