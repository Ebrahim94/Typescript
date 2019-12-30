type CallBack = () => void;
export class Eventing {
  events: { [key: string]: CallBack[] } = {};
  //eventing system

  on = (eventName: string, callback: CallBack) => {
    const handlers = this.events[eventName] || []; //if there are is an existing array associated with the event name set handlers to that array or else initalize handlers to an empty array
    handlers.push(callback); //add a new function to this array
    this.events[eventName] = handlers; //set the key in the events object to the array of callbacks
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return; //if there are no event handlers associated with the event name then return
    }
    handlers.forEach(callback => {
      callback(); //else call every function in the callback array
    });
  };
}
