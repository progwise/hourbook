import { Component } from '@angular/core';
import { CountryService, ICountry } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hourbook-angular';
  countries: ICountry[] = []

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
    this.countries = this.countryService.getAll()
  }
}
