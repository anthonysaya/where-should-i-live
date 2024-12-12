import React from "react";
import logo from "./logo.png";
import "./Credits.css";

function Credits(props: { onBack: () => void }) {
  function handleBack() {
    props.onBack();
  }
  return (
    <>
      <section className="credits-container">
        <header className="credits-header">
          <img src={logo} />
        </header>
        <main className="credits-main">
          <div className="credits-div">
            <b>
              <u>Credits / Data Sources:</u>
            </b>
          </div>
          <div className="credits-div">
            <b>Active Military per 1,000 Inhabitants (2019-2024):</b> &nbsp;
            <a
              href="https://www.iiss.org/publications/the-military-balance/"
              target="_blank"
            >
              <i>The Military Balance (2019-2024 editions)</i>
            </a>
            , International Institute for Strategic Studies (IISS). Routledge:
            London, UK.
          </div>
          <div className="credits-div">
            <b>Democracy Index (2023):</b>&nbsp;<i>The Economist</i>
            &nbsp; Data Intelligence Unit,&nbsp;
            <a
              href="https://www.eiu.com/n/campaigns/democracy-index-2023/"
              target="_blank"
            >
              eiu.com/n/campaigns/democracy-index-2023/
            </a>
            .
          </div>
          <div className="credits-div">
            <b>English Profiency Index (2024):</b> &nbsp;
            <i>EF EPI 2024 Report</i>, EF Education First,&nbsp;
            <a href="https://www.ef.edu/epi/" target="_blank">
              ef.edu/epi/
            </a>
            .
          </div>
          <div className="credits-div">
            <b>GDP Price Level Index (2021):</b>&nbsp;
            <i>International Comparison Program Data 2021</i>, World Bank
            Group,&nbsp;
            <a
              href="https://www.worldbank.org/en/programs/icp/data"
              target="_blank"
            >
              worldbank.org/en/programs/icp/data
            </a>
            .
          </div>
          <div className="credits-div">
            <b>Gini Coefficients (2023):</b>&nbsp;
            <i>Global Wealth Report</i>, UBS,&nbsp;
            <a
              href="https://www.ubs.com/us/en/wealth-management/insights/global-wealth-report.html"
              target="_blank"
            >
              ubs.com/us/en/ .../global-wealth-report.html
            </a>
            .
          </div>
          <div className="credits-div">
            <b>International Migrant Stock Estimates (2019):</b> &nbsp;
            <i>2019 Excel Database File</i>, United Nations Department of
            Economic & Social Affairs,&nbsp;
            <a
              href="http://un.org/en/development/desa/population/migration/data/estimates2/data/UN_MigrantStockTotal_2019.xlsx"
              target="_blank"
            >
              un.org/en/development/desa/.../UN_MigrantStockTotal_2019.xlsx
            </a>
            .
          </div>
          <div className="credits-div">
            <b>Kg Meat Consumed Per Person Per Yr (2017):</b>&nbsp;
            <i>FAOSTAT</i>, Food & Agriculture Organization of the United
            Nations,&nbsp;
            <a href="https://www.fao.org/faostat/en/#data/FBS">
              fao.org/faostat/en/#data/FBS
            </a>
            .
          </div>
          <div className="credits-div">
            <b>Mean Annual Temperature Data (1991-2020):</b>&nbsp;
            <i>Climate Change Knowledge Portal</i>, World Bank Group,&nbsp;
            <a
              href="http://climateknowledgeportal.worldbank.org"
              target="_blank"
            >
              climateknowledgeportal.worldbank.org
            </a>
            .
          </div>
          <div className="credits-div">
            <b>Median Broadband Internet Speeds (2024):</b>&nbsp;
            <i>Speedtest.net Global Index</i>, Ookla, LLC,&nbsp;
            <a href="http://speedtest.net/global-index#fixed" target="_blank">
              speedtest.net/global-index#fixed
            </a>
            .
          </div>
          <div className="credits-div">
            <b>Motor Vehicles per 1,000 Inhabitants (2015-2024):</b>&nbsp;United
            Nations Statistics Division via Wikipedia,&nbsp;
            <a
              href="https://en.wikipedia.org/wiki/List_of_countries_and_territories_by_motor_vehicles_per_capita"
              target="_blank"
            >
              en.wikipedia.org/wiki/List_of_countries_and_territories_by_motor_vehicles_per_capita
            </a>
          </div>
          <div className="credits-div">
            <b>Population Density Estimates (2022):</b>&nbsp;
            <i>World Population Prospects</i>, United Nations,&nbsp;
            <a href="http://population.un.org/wpp/" target="_blank">
              population.un.org/wpp/
            </a>
            .
          </div>
          <div className="credits-div">
            Additional data powered by&nbsp;
            <b>
              <a href="https://restcountries.com/" target="_blank">
                REST Countries API
              </a>
              .
            </b>
          </div>
          <button className="credits-button" id="back" onClick={handleBack}>
            Back
          </button>
        </main>
      </section>
    </>
  );
}

export default Credits;
