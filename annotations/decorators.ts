@classDecorator
class Boat {
  @testDecorator
  color: string = 'red'; //property

  @testDecorator
  get formattedColor(): string {
    //accessor
    return `this boats color is ${this.color}`;
  }

  @logError('this does not work')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    console.log(speed);
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
