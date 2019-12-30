import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  get<k extends keyof T>(key: k): T[k];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
}
