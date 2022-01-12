'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

 
 
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const wherAmI = function (latitude, longitude) {
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(function (response) {
      console.log(response);
      if (response.ok === false)
        throw new Error(`You have refreshed more times`);

      // const vari = typeof response.json();
      // console.log(vari);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      const country = data.country;
      if (!country) throw new Error('not a valid country');
      return fetch(`https://restcountries.com/v2/name/${country}`);
      // https://restcountries.com/v2/
    })
    .then(function (response1) {
      return response1.json();
    })
    .then(function (data1) {
      return renderCountry(data1[0]);
    })
    .catch(function (error) {
      console.log(`error occured ${error}`);
    });
};
btn.addEventListener('click', function () {
  wherAmI(52.508, 13.381);
  wherAmI(19.037, 72.873);
  wherAmI(-33.933, 18.474);
});
