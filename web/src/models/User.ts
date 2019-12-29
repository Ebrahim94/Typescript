import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

type CallBack = () => void;

export class User {
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  //eventing system

  on(eventName: string, callback: CallBack) {
    const handlers = this.events[eventName] || []; //if there are is an existing array associated with the event name set handlers to that array or else initalize handlers to an empty array
    handlers.push(callback); //add a new function to this array
    this.events[eventName] = handlers; //set the key in the events object to the array of callbacks
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return; //if there are no event handlers associated with the event name then return
    }
    handlers.forEach(callback => {
      callback(); //else call every function in the callback array
    });
  }

  //fetch information from the db.json file acting as a pseudo database
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      // if the representation of the user already exists in the database
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //if they are not persisted on the server
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
