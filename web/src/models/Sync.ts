import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  //fetch information from the db.json file acting as a pseudo database
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // if the representation of the user already exists in the database
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //if they are not persisted on the server
      return axios.post(this.rootUrl, data);
    }
  }
}
