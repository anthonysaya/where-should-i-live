import CountryData from "./CountryData.json";
export default class Country {
  cc: keyof typeof CountryData;
  ActiveMilPer1000: number;
  AvgTempC: number;
  AvgTempF: number;
  Capital?: string;
  Currency?: string;
  DemoIndex: number;
  Demonym?: string;
  EngProficiency: number;
  FlagUrl?: string;
  GiniCoeff: number;
  Languages?: string;
  LongName?: string;
  MeatEatenKgPersonYr: number;
  MdnInternetSpdMbps: number;
  PctImmigrant: number;
  PopDensKm2: number;
  PopDensMi2: number;
  Population?: string;
  PriceLvlIndex: number;
  Region?: string;
  ShortName: string;
  VehiclesPer1000: number;
  WikiDesc: string;
  WikiLink: string;

  constructor(code: keyof typeof CountryData) {
    this.cc = code;
    this.ActiveMilPer1000 = CountryData[this.cc].Active_Military_per_1000;
    this.AvgTempC = CountryData[this.cc].Avg_Temp_C;
    this.AvgTempF = this.AvgTempC * (9 / 5) + 32;
    this.DemoIndex = CountryData[this.cc].Democracy_Index;
    this.EngProficiency = CountryData[this.cc].English_Proficiency;
    this.GiniCoeff = CountryData[this.cc].Gini_Coefficient;
    this.MdnInternetSpdMbps = CountryData[this.cc].Mdn_Internet_Mbps;
    this.MeatEatenKgPersonYr = CountryData[this.cc].Meat_Consumption_kgpersonyr;
    this.PctImmigrant = CountryData[this.cc].Pct_Immigrants;
    this.PopDensKm2 = CountryData[this.cc].Pop_Dens_Km2;
    this.PopDensMi2 = this.PopDensKm2 * 0.386102;
    this.PriceLvlIndex = CountryData[this.cc].Price_Level_Index;
    this.ShortName = CountryData[this.cc].Name;
    this.VehiclesPer1000 = CountryData[this.cc].Vehicles_per_1000;
    this.WikiDesc = CountryData[this.cc].Wikipedia_Description;
    this.WikiLink = CountryData[this.cc].Wikipedia_Link;
  }

  async init(): Promise<void> {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${this.cc}`
    );
    if (!response.ok) {
      throw new Error(`API call failed for ${this.cc}.`);
    }
    const jsonResponse: RESTCountriesResponse = await response.json();

    this.Capital = jsonResponse[0].capital;
    this.Currency = Object.values(jsonResponse[0].currencies)[0].name;
    this.FlagUrl = jsonResponse[0].flags.svg;
    this.Demonym = jsonResponse[0].demonyms.eng.m;
    this.Languages = Object.values(jsonResponse[0].languages)
      .map((lang) => `${lang}`)
      .join(", ");
    this.LongName = jsonResponse[0].name.official;
    this.Population = jsonResponse[0].population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.Region = jsonResponse[0].subregion;
  }
}

type RESTCountriesResponse = {
  capital: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  flags: {
    svg: string;
  };
  demonyms: {
    eng: {
      m: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  name: {
    official: string;
  };
  population: number;
  subregion: string;
}[];
