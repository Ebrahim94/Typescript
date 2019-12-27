import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      //we have to initialize the location and everything inside of it
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent() {
    return `
    <div>
    <h1>${this.companyName}</h1>
    <h4>Catch Phrase: ${this.catchPhrase}</h4>
    </div>`;
  }
}
