export default class UserInput {
  cc: string;
  ActiveMilPer1000: number;
  AvgTempC: number;
  AvgTempF: number;
  DemoIndex: number;
  EngProficiency: number;
  GiniCoeff: number;
  MeatEatenKgPersonYr: number;
  MdnInternetSpdMbps: number;
  PctImmigrant: number;
  PopDensKm2: number;
  PopDensMi2: number;
  PriceLvlIndex: number;
  ShortName: string;
  VehiclesPer1000: number;

  constructor() {
    this.cc = "UI";
    this.ActiveMilPer1000 = 0;
    this.AvgTempC = 0;
    this.AvgTempF = this.AvgTempC * (9 / 5) + 32;
    this.DemoIndex = 0;
    this.EngProficiency = 0;
    this.GiniCoeff = 0;
    this.MdnInternetSpdMbps = 0;
    this.MeatEatenKgPersonYr = 0;
    this.PctImmigrant = 0;
    this.PopDensKm2 = 0;
    this.PopDensMi2 = this.PopDensKm2 * 0.386102;
    this.PriceLvlIndex = 0;
    this.ShortName = "User Input";
    this.VehiclesPer1000 = 0;
  }
}
