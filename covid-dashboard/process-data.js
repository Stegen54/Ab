
import covidData from './covid-data.js'

export default function processData(covidData, countryName, selectedDate){
  const totalStat= []  
  if(countryName){
    for (const data of covidData) {
      if(data.country.toLowerCase().includes(countryName.toLowerCase())){
        const cases = data.statistics.reduce((acc, curr) => acc + curr.cases, 0)
        const deaths = data.statistics.reduce((acc, curr) => acc + curr.deaths, 0)
        const recoveries = data.statistics.reduce((acc, curr) => acc + curr.recoveries, 0)
        totalStat.push({
          country: data.country,
          cases,
          deaths,
          recoveries
        })
      }
    }
    return totalStat
  }
  if(selectedDate){
    for(let i=0; i < covidData.length; i++){
      const data = covidData[i];
      const statistics = data.statistics;
      const filteredStatByTime = statistics.filter((stat)=> stat.time === selectedDate);
      if(filteredStatByTime.length > 0){
        const cases = filteredStatByTime.reduce((acc, curr) => acc + curr.cases, 0)
        const deaths = filteredStatByTime.reduce((acc, curr) => acc + curr.deaths, 0)
        const recoveries = filteredStatByTime.reduce((acc, curr) => acc + curr.recoveries, 0)
        totalStat.push({
          country: data.country,
          cases,
          deaths,
          recoveries
        })
      }
    }
    return totalStat
  }
  for (const data of covidData) {
    const cases = data.statistics.reduce((acc, curr) => acc + curr.cases, 0)
    const deaths = data.statistics.reduce((acc, curr) => acc + curr.deaths, 0)
    const recoveries = data.statistics.reduce((acc, curr) => acc + curr.recoveries, 0)

    totalStat.push({
      country: data.country,
      cases,
      deaths,
      recoveries
    })



  }
  return totalStat;
  // console.log(covidData)
}







processData(covidData)





