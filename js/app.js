'use strict'

// console.log('hi');

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

let seattleContainer = document.getElementById('seattleList');
console.log(seattleContainer)
let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],

    getRandomNumberOfCustomers: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }, //<<<<
    calcCookiePerHour: function(){
        // Memorize this formula for loop
        for (let i = 0; i < hours.length - 1; i++) {
        let randomCustomers = this.getRandomNumberOfCustomers();
        console.log(randomCustomers);
            
        let calcCookiePerHour = Math.floor(randomCustomers * this.avg);
        this.dailyTotal += calcCookiePerHour
        console.log(calcCookiePerHour);
        this.cookiesSoldEachHourArray.push(calcCookiePerHour)
        }
    },

    // This is called a method
    render: function(){
      this.calcCookiePerHour();
      
      for (let i = 0; i < hours.length - 1; i++){

      

        // create element
        let li = document.createElement('li');

        // get content
        li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`

        // append list item elements. Append to a container, first you'll need to make one in this case.
        seattleContainer.appendChild(li)
        // list element is within object function, so we do not need quotes.
      }
      let li = document.createElement('li');
      li.textContent = `total: ${this.dailyTotal}`
      seattleContainer.appendChild(li)
    }
}



seattle.render();












// 'use strict';

// let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

// let seattleContainer = document.getElementById("seattleList");

// let seattleStore = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       seattleContainer.appendChild(li);
//     } let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleContainer.appendChild(li);
//   }
// }


// seattleStore.calculateCookiesPerHour();

// seattleStore.renderList();

// // TOKYO

// let tokyoContainer = document.getElementById("tokyoList");

// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoContainer.appendChild(li);
//   }
// }


// tokyoStore.calculateCookiesPerHour();

// tokyoStore.renderList();

// // DUBAI 

// let dubaiContainer = document.getElementById("dubaiList");

// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiContainer.appendChild(li);
//   }
// }


// dubaiStore.calculateCookiesPerHour();

// dubaiStore.renderList();

// // PARIS 

// let parisContainer = document.getElementById("parisList");

// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisContainer.appendChild(li);
//   }
// }


// parisStore.calculateCookiesPerHour();

// parisStore.renderList();

// // LIMA


// let limaContainer = document.getElementById("limaList");

// let limaStore = {
//   name: 'Lima',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaContainer.appendChild(li);
//   }
// }


// limaStore.calculateCookiesPerHour();

// limaStore.renderList();

// NOTES???

// let storeArticle = document.createElement('article');

// storeInfo.appendChild(storeContainer);

// let storeTwo = document.createElement('h3');

// storeTwo.textContent = 'Store 2'

// storeContainer.appendChild(storeTwo);

// let p = document.createElement('p');
// p.textContent = `${hours[i]}: ${cookiesSoldPerHourArray[i]} cookies`;
// storeContainer.appendChild(p);

// let img = document.createElement('img');
// img.src = 'img/';
// img.alt = 'alt text';
// storeContainer.appendChild(img);

// let li = document.createElement('li');
// li.textContent = '6am: ${seattle.sumValueInAnArray[i]} cookies';