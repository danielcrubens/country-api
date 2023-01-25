let searchBtn = document.querySelector('#search-btn')
let countryInp = document.querySelector('#country-inp')
const apiUnsplash = "https://source.unsplash.com/1920x1080/?"

searchBtn.addEventListener('click', () => {
  let countryName = countryInp.value
  let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  console.log(apiURL)
  fetch(apiURL)
    .then((Response) => Response.json())
    .then((data) => {
      result.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
      <div class="data-wrapper">
        <h4> Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>
        <div class="wrapper">
      <div class="data-wrapper">
        <h4> Continente:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>
        <div class="data-wrapper">
        <h4> População:</h4>
        <span>${data[0].population}</span>
        </div>
        </div>
        <div class="data-wrapper">
        <h4> Moeda:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4> Linguas:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>
    `
    document.body.style.backgroundImage = `url("${apiUnsplash + countryName}")`;
    }).catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>O campo de entrada não pode estar vazio</h3>`
      } else {
        result.innerHTML = `<h3>Por favor, introduza um nome de país válido.</h3>`
      }
    })
})