import "./style.css";
import covidData from "./covid-data";
import processData from "./process-data.js";
import Chart from "chart.js/auto";

const countryInput = document.querySelector("#country");
const mainDiv = document.querySelector("#result");
const dateInp = document.querySelector("#filter-date");
const applyFilterBtn = document.querySelector("#applyFilterBtn");
const sortCountryHeader = document.querySelector("#sort-country");
const canvas = document.querySelector("#canvas");
let countryName = "";
let dateTime = "";
let chart;


let totalStat = processData(covidData, countryName);

countryInput.addEventListener("keydown", (event) => {
  countryName = event.target.value;
  totalStat = processData(covidData, countryName);
  insertHTML(totalStat, countryName);
  plotGraph(totalStat);
});

dateInp.addEventListener("change", (e) => {
  const value = e.target.value;
  let [year, month] = value.split("-");
  dateTime = `${year}-${month}`;
});

applyFilterBtn.onclick = () => applyFilter();

sortCountryHeader.onclick = () => sortData();

insertHTML(totalStat);

function applyFilter() {
  totalStat = processData(covidData, countryName, dateTime);
  insertHTML(totalStat);
  plotGraph(totalStat);
}

function sortData() {
  const sortedData = totalStat.sort((a, b) => b.cases - a.cases);
  insertHTML(sortedData);
}

function insertHTML(data) {
  if (data.length === 0) {
    mainDiv.innerHTML = "No Record found.";
    return;
  }
  mainDiv.innerHTML = `
    ${data
      .map((data) => {
        return `
            <tr>
                <td>${data.country}</td>
                <td>${data.cases}</td>
                <td>${data.deaths}</td>
                <td>${data.recoveries}</td>
            </tr>
        `;
      })
      .join("")}
    `;
}


function plotGraph(statData) {
  const countries = statData.map((d) => d.country);
  const dataMap = new Map();
  statData.forEach((d) => {
    if (dataMap.has(d.country)) {
      dataMap.set(d.country, {
        data: [d.cases, d.deaths, d.recoveries],
      });
    } else {
      dataMap.set(d.country, {
        data: [d.cases, d.deaths, d.recoveries],
      });
    }
  });
  const cases = countries.map((country) => dataMap.get(country).data[0]);
  const deaths = countries.map((country) => dataMap.get(country).data[1]);
  const recoveries = countries.map((country) => dataMap.get(country).data[2]);
  const config = {
    type: "bar",
    data: {
      labels: countries,
      datasets: [
        {
          label: "Cases",
          data: cases,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: deaths,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Recoveries",
          data: recoveries,
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  if (chart) {
    chart.destroy(); 
  }
  chart = new Chart(canvas.getContext("2d"), config);
}

plotGraph(totalStat);
