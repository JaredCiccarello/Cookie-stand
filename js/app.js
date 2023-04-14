'use strict'

console.log('hiii')

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

const tableElement = document.getElementById("Table");

let allStores = []

// First we need a object function
function Citys (name, min, max, avg) {
this.Name = name;
this.citymin = min;
this.citymax = max;
this.cityavg = avg;
this.dailyTotal = 0;

this.generateRandomCustomers = function () {
  return Math.floor(Math.random() * (this.citymax - this.citymin + 1) + this.citymin);
};
this.cookiesSoldEachHour = [];
// This replaces the need to set an array with each store
// This could be a problem

// function assigned to an object is a method. This is a method.
this.calculateCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomNumberOfCustomers = this.generateRandomCustomers();
    let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.cityavg);
    this.cookiesSoldEachHour.push(cookiesSoldPerHour);
    //this is adding to dailytotal and staying in dailytotal
    this.dailyTotal += cookiesSoldPerHour;
  }
};
this.tableRender = function(){
  this.calculateCookiesPerHour();
  let firstRow = document.createElement("tr");
  tableElement.appendChild(firstRow);
  let cityName = document.createElement('td');
  cityName.textContent = this.Name;
  firstRow.appendChild(cityName);
  
  for(let i = 0; i < hours.length; i++){
    let firstElem = document.createElement('td');
    firstElem.textContent = `${this.cookiesSoldEachHour[i]}`;
    // console.log(this.cookiesPerHourArray[i]);
    // this.dailyTotal += this.cookiesPerHourArray[i];
    firstRow.appendChild(firstElem);
  }
  // console.log("total: ", this.dailyTotal);
  let total = document.createElement('td');
  total.textContent = this.dailyTotal;
  firstRow.appendChild(total);
};
allStores.push(this);
}

//the renderhours function renders the hours at the top of the table
function renderHours(){
  let tdElem = document.createElement('td');
  tableElement.appendChild(tdElem);
  for(let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hours[i]}`
    tableElement.appendChild(tdElem);
  }
  //only makes total head off to the right
  let total = document.createElement('td');
  total.textContent = "Daily Location Total"
  tableElement.appendChild(total)
}



//this will calculate the number of cookies for each hour
function storeTotal(){
  let footer = document.querySelector('tfoot');
  if (footer){
    footer.innerHTML = '';
  }
  footer = document.createElement('tfoot');
  tableElement.appendChild(footer);
  
  let timeTotal = document.createElement('td');
  timeTotal.textContent = "Total";
  footer.appendChild(timeTotal);
  
  console.log('storeTotal')
  let totalOfTotals = 0;
  for(let i = 0; i < hours.length; i++){
    let hourly = 0;
    console.log(allStores.length)
    for (let j = 0; j < allStores.length; j++){
      console.log(j)
      console.log(allStores[j].cookiesSoldEachHour[i])
      hourly += allStores[j].cookiesSoldEachHour[i];
      totalOfTotals += allStores[j].cookiesSoldEachHour[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    footer.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${totalOfTotals}`;
  footer.appendChild(timeTotal3);
}

renderHours()





// Next we need an object instance
let Seattle = new Citys ('Seattle', 23, 65, 6.3) 
let Tokyo = new Citys ('Tokyo', 3, 24, 1.2) 
let Dubai = new Citys ('Dubai', 11, 38, 3.7)
let Paris = new Citys ('Paris', 20, 38, 2.3)
let Lima = new Citys ('Lima', 2, 16, 4.6)
// Next we need to invoke methods
for (let i = 0; i < allStores.length; i++){
  allStores[i].tableRender();
}
storeTotal()



// Next we will bring in our code from our seperate citys.
// We will need to add Citys.prototype. to ....
// Citys.prototype.getRandomNumberOfCustomers = function() {
//   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// }, //<<<<
// Citys.prototype.calcCookiePerHour = function(){
//   // Memorize this formula for loop
//   for (let i = 0; i < hours.length - 1; i++) {
//   let randomCustomers = this.getRandomNumberOfCustomers();
//   console.log(randomCustomers);
      
//   let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//   this.dailyTotal += calcCookiePerHour
//   console.log(calcCookiePerHour);
//   this.cookiesSoldEachHour.push(calcCookiePerHour)
//   }
// },
// // This is called a method
// Citys.prototype.render = function(){
// this.calcCookiePerHour();

// for (let i = 0; i < hours.length - 1; i++){
//   // create element
//   let li = document.createElement('li');
//   // give text content
//   li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`
//   // append list item elements. Append to a container, first you'll need to make one in this case.
//   seattleContainer.appendChild(li);
//   // list element is within object function, so we do not need quotes.
// }
// let li = document.createElement('li');
// li.textContent = `total: ${this.dailyTotal}`
// seattleContainer.appendChild(li)
// }

// for (let i = 0; i < allStores.length; i++){
//     allStores[i].render();
// }










































// // This is our stores set up with an object constructor


// let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

// const tableElement = document.getElementById("Table");

// let allStores = []

// // First we need a object function

// function Citys (name, min, max, avg) {
// this.studentName = name;
// this.citymin = min;
// this.citymax = max;
// this.cityavg = avg;
// this.cookiesSoldEachHourArray = []
// allStores.push(this)
// }

// // Next we need an object instance
// let Seattle = new Citys ('Seattle', 23, 65, 6.3) 
// let Tokyo = new Citys ('Tokyo', 3, 24, 1.2) 
// let Dubai = new Citys ('Dubai', 11, 38, 3.7)
// let Paris = new Citys ('Paris', 20, 38, 2.3)
// let Lima = new Citys ('Lima', 2, 16, 4.6) 

// Citys.prototype.getRandomNumberOfCustomers = function() {
//   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// }, //<<<<
// Citys.prototype.calcCookiePerHour = function(){
//   // Memorize this formula for loop
//   for (let i = 0; i < hours.length - 1; i++) {
//   let randomCustomers = this.getRandomNumberOfCustomers();
//   console.log(randomCustomers);
      
//   let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
//   this.dailyTotal += calcCookiePerHour
//   console.log(calcCookiePerHour);
//   this.cookiesSoldEachHourArray.push(calcCookiePerHour)
//   }
// },
// // This is called a method
// Citys.prototype.render = function(){
// this.calcCookiePerHour();

// for (let i = 0; i < hours.length - 1; i++){
//   // create element
//   let li = document.createElement('li');
//   // give text content
//   li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`
//   // append list item elements. Append to a container, first you'll need to make one in this case.
//   seattleContainer.appendChild(li)
//   // list element is within object function, so we do not need quotes.
// }
// let li = document.createElement('li');
// li.textContent = `total: ${this.dailyTotal}`
// seattleContainer.appendChild(li)
// }

// for (let i = 0; i < allStores.length; i++){
//     allStores[i].render()





// // These are our individual stores setup without an object constructor


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

