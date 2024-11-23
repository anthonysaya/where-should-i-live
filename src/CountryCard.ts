import CountryData from "./CountryData.json";
export default class CountryCard {
  cc: keyof typeof CountryData;
  Capital: Promise<string>;
  Currency: Promise<string[]>;
  Demonym: Promise<string>;
  FlagUrl: string;
  Languages: Promise<string[]>;
  LongName: Promise<string>;
  Population: Promise<number>;
  Region: Promise<string>;

  constructor(code: keyof typeof CountryData) {
    this.cc = code;
    this.Capital = this.getCapital(this.cc);
    this.Currency = this.getCurrency(this.cc);
    this.Demonym = this.getDemonym(this.cc);
    this.FlagUrl = "https://flagcdn.com/" + [this.cc] + ".svg";
    this.Languages = this.getLanguages(this.cc);
    this.LongName = this.getOfficialName(this.cc);
    this.Population = this.getPopulation(this.cc);
    this.Region = this.getSubregion(this.cc);
  }

  async getCapital(cc: string): Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.capital;
  }
  async getCurrency(cc: string): Promise<string[]> {
    let currArray: string[] = [];
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    jsonResponse.currencies.forEach((currency: any) => {
      currArray.push(currency.name);
    });
    return currArray;
  }
  async getDemonym(cc: string): Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.demonyms.eng.m;
  }
  async getLanguages(cc: string): Promise<string[]> {
    let langArray: string[] = [];
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    jsonResponse.languages.forEach((language: any) => {
      langArray.push(jsonResponse.languages.language);
    });
    return langArray;
  }
  async getOfficialName(cc: string): Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.name.official;
  }
  async getPopulation(cc: string): Promise<number> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.population;
  }
  async getSubregion(cc: string): Promise<string> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`);
    if (!response.ok) {
      throw new Error(`API call failed for ${cc}.`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.subregion;
  }
}
