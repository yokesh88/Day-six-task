// A) Get all the countries from Asia continent /region using Filter method

// var a = new XMLHttpRequest();
// a.open("GET", "https://restcountries.com/v3.1/all", "true");
// a.send();
// a.onload = function () {
//   var y = JSON.parse(this.response);
//   let Asia = y.filter((e) => {
//     if (e.region === "Asia") {
//       return e.name;
//     }
//   });
//   console.log(Asia);
// };

// B)Get all the countries with a population of less than 2 lakhs using Filter method

// var a = new XMLHttpRequest();
// a.open("GET", "https://restcountries.com/v3.1/all", "true");
// a.send();
// a.onload = function () {
//   var y = JSON.parse(this.response);
//   let population = y.filter((e) => {
//     return e.population<200000;
//   });
//   console.log(population);
// };

// C)Print the following details name, capital, flag, using forEach method

// var a = new XMLHttpRequest();
// a.open("GET", "https://restcountries.com/v3.1/all", "true");
// a.send();
// a.onload = function () {
//   var countries = JSON.parse(this.response);
//   countries.forEach((e) => {
//     console.log(e.name,e.capital,e.flag);
//   })}

// D)Print the total population of countries using reduce method

// var a = new XMLHttpRequest();
// a.open("GET", "https://restcountries.com/v3.1/all", "true");
// a.send();
// a.onload = function () {
//   var y = JSON.parse(this.response);
//   let population = y.reduce((acc,e) => {
//     return acc+e.population;
//   },0);
//   console.log(population);
// };

// E)Print the country that uses US dollars as currency.

// var a = new XMLHttpRequest();
// a.open("GET", "https://restcountries.com/v3.1/all", "true");
// a.send();
// a.onload = function() {
//     var data = a.response;
//     var result = JSON.parse(data);

//     var countriesWithUSD = result.filter(country => {
//         return country.currencies && country.currencies.USD;
//     });

//     countriesWithUSD.forEach(country => {
//         console.log(`${country.name.common} : " USES US DOLLARS AS CURRENCY."`);
//     });
// }
