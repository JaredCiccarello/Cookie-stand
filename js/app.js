'use strict'

// console.log('Hey there friends!');

// Seattle
// let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

// let seattleContainer = document.getElementById('seattleList');
// console.log(seattleContainer)
// let seattle = {
//     name: 'seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     dailyTotal: 0,
//     cookiesSoldEachHourArray: [],

//     getRandomNumberOfCustomers: function() {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     }, //<<<<
//     calcCookiePerHour: function(){
//         // Memorize this formula for loop
//         for (let i = 0; i < hours.length - 1; i++) {
//         let randomCustomers = this.getRandomNumberOfCustomers();
//         console.log(randomCustomers);
            
//         let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//         this.dailyTotal += calcCookiePerHour
//         console.log(calcCookiePerHour);
//         this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//         }
//     },
//     // This is called a method
//     render: function(){
//       this.calcCookiePerHour();
      
//       for (let i = 0; i < hours.length - 1; i++){
//         // create element
//         let li = document.createElement('li');
//         // give text content
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//         // append list item elements. Append to a container, first you'll need to make one in this case.
//         seattleContainer.appendChild(li)
//         // list element is within object function, so we do not need quotes.
//       }
//       let li = document.createElement('li');
//       li.textContent = `total: ${this.dailyTotal}`
//       seattleContainer.appendChild(li)
//     }
// }
// seattle.render();


// // Tokyo
// let tokyoContainer = document.getElementById('seattleList');

// let tokyo = {
//     name: 'tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     dailyTotal: 0,
//     cookiesSoldEachHourArray: [],

//     getRandomNumberOfCustomers: function() {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     }, //<<<<
//     calcCookiePerHour: function(){
//         // Memorize this formula for loop
//         for (let i = 0; i < hours.length - 1; i++) {
//         let randomCustomers = this.getRandomNumberOfCustomers();
//         console.log(randomCustomers);
            
//         let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//         this.dailyTotal += calcCookiePerHour
//         console.log(calcCookiePerHour);
//         this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//         }
//     },

//     // This is called a method
//     render: function(){
//       this.calcCookiePerHour();
      
//       for (let i = 0; i < hours.length - 1; i++){
//         // create element
//         let li = document.createElement('li');
//         // give text content
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//         // append list item elements. Append to a container, first you'll need to make one in this case.
//         seattleContainer.appendChild(li)
//         // list element is within object function, so we do not need quotes.
//       }
//       let li = document.createElement('li');
//       li.textContent = `total: ${this.dailyTotal}`
//       seattleContainer.appendChild(li)
//     }
// }
// tokyo.render();




// // Dubai
// let dubaiContainer = document.getElementById('seattleList');

// let dubai = {
//     name: 'dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     dailyTotal: 0,
//     cookiesSoldEachHourArray: [],

//     getRandomNumberOfCustomers: function() {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     }, //<<<<
//     calcCookiePerHour: function(){
//         // Memorize this formula for loop
//         for (let i = 0; i < hours.length - 1; i++) {
//         let randomCustomers = this.getRandomNumberOfCustomers();
//         console.log(randomCustomers);
            
//         let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//         this.dailyTotal += calcCookiePerHour
//         console.log(calcCookiePerHour);
//         this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//         }
//     },
//     // This is called a method
//     render: function(){
//       this.calcCookiePerHour();
      
//       for (let i = 0; i < hours.length - 1; i++){
//         // create element
//         let li = document.createElement('li');
//         // give text content
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//         // append list item elements. Append to a container, first you'll need to make one in this case.
//         seattleContainer.appendChild(li)
//         // list element is within object function, so we do not need quotes.
//       }
//       let li = document.createElement('li');
//       li.textContent = `total: ${this.dailyTotal}`
//       seattleContainer.appendChild(li)
//     }
// }
// dubai.render();




// // Paris
// let parisContainer = document.getElementById('seattleList');

// let paris = {
//     name: 'paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     dailyTotal: 0,
//     cookiesSoldEachHourArray: [],

//     getRandomNumberOfCustomers: function() {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     }, //<<<<
//     calcCookiePerHour: function(){
//         // Memorize this formula for loop
//         for (let i = 0; i < hours.length - 1; i++) {
//         let randomCustomers = this.getRandomNumberOfCustomers();
//         console.log(randomCustomers);
            
//         let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//         this.dailyTotal += calcCookiePerHour
//         console.log(calcCookiePerHour);
//         this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//         }
//     },
//     // This is called a method
//     render: function(){
//       this.calcCookiePerHour();
      
//       for (let i = 0; i < hours.length - 1; i++){
//         // create element
//         let li = document.createElement('li');
//         // give text content
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//         // append list item elements. Append to a container, first you'll need to make one in this case.
//         seattleContainer.appendChild(li)
//         // list element is within object function, so we do not need quotes.
//       }
//       let li = document.createElement('li');
//       li.textContent = `total: ${this.dailyTotal}`
//       seattleContainer.appendChild(li)
//     }
// }
// paris.render();



// // Lima
// let limaContainer = document.getElementById('seattleList');

// let lima = {
//     name: 'lima',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     dailyTotal: 0,
//     cookiesSoldEachHourArray: [],

//     getRandomNumberOfCustomers: function() {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     }, //<<<<
//     calcCookiePerHour: function(){
//         // Memorize this formula for loop
//         for (let i = 0; i < hours.length - 1; i++) {
//         let randomCustomers = this.getRandomNumberOfCustomers();
//         console.log(randomCustomers);
            
//         let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//         this.dailyTotal += calcCookiePerHour
//         console.log(calcCookiePerHour);
//         this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//         }
//     },
//     // This is called a method
//     render: function(){
//       this.calcCookiePerHour();
      
//       for (let i = 0; i < hours.length - 1; i++){
//         // create element
//         let li = document.createElement('li');
//         // give text content
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//         // append list item elements. Append to a container, first you'll need to make one in this case.
//         seattleContainer.appendChild(li)
//         // list element is within object function, so we do not need quotes.
//       }
//       let li = document.createElement('li');
//       li.textContent = `total: ${this.dailyTotal}`
//       seattleContainer.appendChild(li)
//     }
// }
// dubai.render();







// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.
// Declare a constructor function
// function Kitten (name, likes, src, alt) {
//     this.name = name;
//     this.about = about;
// }

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

//array for hours
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

const storeTableBody = document.querySelector('tbody');
const storeTableHead = document.querySelector('thead');

let storeArray = []

const tableElement = document.getElementById("Table");

function Store(name, min, max, avg) {
    this.name = name,
    this.min = min,
    this.max = max,
    this.avg = avg,
    this.cookiesPerHourArray = [],
    this.dailyTotal = 0,
    storeArray.push(this)
  this.render = function () {

  }
  this.generateRandomNumberOfC = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
    this.calculateCookiesPerHour = function () {
      for (let i = 0; i < hours.length; i++) {
        let randomNumberOfCustomers = this.generateRandomNumberOfC();
        let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
        this.cookiesPerHourArray.push(cookiesSoldPerHour);
        //this is adding to dailytotal and staying in dailytotal
        this.dailyTotal += cookiesSoldPerHour;
      }
    },
    
    this.tableRender = function(){
      this.calculateCookiesPerHour();
      let firstRow = document.createElement("tr");
      tableElement.appendChild(firstRow);
      let cityName = document.createElement('td')
      cityName.textContent = this.name;
      firstRow.appendChild(cityName)
      for(let i = 0; i < hours.length; i++){
        let firstElem = document.createElement('td');
        firstElem.textContent = `${this.cookiesPerHourArray[i]}`
        console.log(this.cookiesPerHourArray[i]);
        // this.dailyTotal += this.cookiesPerHourArray[i];
        firstRow.appendChild(firstElem);
      }
      // console.log("total: ", this.dailyTotal);
      let total = document.createElement('td');
      total.textContent = this.dailyTotal;
      firstRow.appendChild(total);
    }
  }

function renderHours(){
  let tdElem = document.createElement('td');
  tableElement.appendChild(tdElem);
  for(let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hours[i]}`
    tableElement.appendChild(tdElem);
  }
  //only makes total head to right
  let total = document.createElement('td');
  total.textContent = "total"
  tableElement.appendChild(total)
}

Store.prototype.render = function(){
  return randomInRange(3, 12) + ' months';
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

renderHours();

Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();