import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  public getAll(): ICountry[] {
    return [{name: 'Deutschland'}, {name: 'Austria'}]
  }
}

export interface ICountry {
  name: string
}
