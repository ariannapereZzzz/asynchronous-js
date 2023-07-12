// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
// // ///////////////////////////////////////
// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}/`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const data = JSON.parse(this.responseText);

// //     const [firstData] = data;
// //     console.log('firstData::', firstData);
// //     const { flags, name, region, population, languages, currencies } =
// //       firstData;
// //     const { png: flagImage, alt: flagName } = flags ?? {};
// //     const { common: countryName } =  name;
// //     const populationCount = `${(+population / 1000000).toFixed(1)} M`;
// //     const languageList = Object.values(languages).join(', ');
// //     console.log('languageList::', languageList);
// //     const [firstCurrency] = Object.values(currencies);
// //     const { name: currency } = firstCurrency;

// //     const html = `
// //   <article class="country">
// //   <img class="country__img" src="${flagImage}" alt="${flagName}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${countryName}</h3>
// //     <h4 class="country__region">${region}</h4>
// //     <p class="country__row"><span>👫</span>${populationCount}</p>
// //     <p class="country__row"><span>🗣️</span>${languageList}  </p>
// //     <p class="country__row"><span>💰</span>${currency}</p>
// //   </div>
// // </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('philippines');
// // getCountryData('india');
// // getCountryData('korea');

// ////
// */

const renderCountry = function (data, className = '') {
  console.log('data::', data);
  const [firstData] = data;
  console.log('firstData::', firstData);
  const { flags, name, region, population, languages, currencies } = firstData;
  const { png: flagImage, alt: flagName } = flags ?? {};
  const { common: countryName } = name;
  const populationCount = `${(+population / 1000000).toFixed(1)} M`;
  const languageList = Object.values(languages).join(', ');
  console.log('languageList::', languageList);
  const [firstCurrency] = Object.values(currencies);
  const { name: currency } = firstCurrency;

  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${flagImage}" alt="${flagName}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${populationCount}</p>
      <p class="country__row"><span>🗣️</span>${languageList}  </p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// // const getCountryAndNeighbour = function (country) {
// //   // AJAX call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}/`);
// //   request.send();

// //   // Render country 1
// //   request.addEventListener('load', function () {
// //     const data = JSON.parse(this.responseText);
// //     renderCy--ountry(data);

// //     // Get Neighbour country 2
// //     const [firstData] = data;
// //     const [neighbour] = firstData.borders;

// //     if (!neighbour) return;

// //     // AJAX call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}/`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       console.log('data2::', data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('usa');

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 seconds passed');
// //       setTimeout(() => {
// //         console.log('4 seconds passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // const request = fetch('https://restcountries.com/v3.1/name/philippines/');
// // console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}/`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found ${response.status}`);
//     return response.json();
//   });
// };

// // AJAX Call
// // const getCountryData = function (country) {
// //   // country 1
// //   getJSON(
// //     `https://restcountries.com/v3.1/name/${country}/`,
// //     'Country not found'
// //   )
// //     .then(data => {
// //       renderCountry(data);
// //       const neighbour = data[0].borders[0];
// //       // const neighbour = 'jhjhhjkhj';

// //       if (!neighbour) throw new Error('No neighbour found!');

// //       /// country 2

// //       return getJSON(
// //         `https://restcountries.com/v3.1/alpha/${neighbour}/`,
// //         'Country not found'
// //       );
// //     })

// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err}`);
// //       renderError(`Something went wrong! ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // btn.addEventListener('click', function () {
// //   getCountryData('philippines');
// // });

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=175790950918689391464x81167`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}/`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${response.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.error(`${err.message}`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
// whereAmI(45.6, 24.67);
/*
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You lost your money :('));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res).catch(err => console.error(err)));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => console.log(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return;
//       fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=175790950918689391464x81167`
//       );
//     })

//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}/`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${response.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', whereAmI);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
