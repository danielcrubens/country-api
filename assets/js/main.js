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

const popupTexts = [
  "<strong>Brazil </strong>", "<strong>Japan</strong>",
  "<strong>France</strong>", "<strong>Germany</strong>",
  "<strong>China</strong>","<strong>Tanzania</strong>"
]

const popupTextsWithFlags = [
  popupTexts[0]+ "<img src='https://flagcdn.com/16x12/br.png'>",
  popupTexts[1]+ "<img src='https://flagcdn.com/16x12/jp.png'>",
  popupTexts[2]+ "<img src='https://flagcdn.com/16x12/fr.png'>" ,
  popupTexts[3]+ "<img src='https://flagcdn.com/16x12/de.png'>",
  popupTexts[4]+ "<img src='https://flagcdn.com/16x12/cn.png'>",
  popupTexts[5]+ "<img src='https://flagcdn.com/16x12/tz.png'>"
];

setTimeout(function () {
  let delayedPopup = document.querySelector("#delayedPopup")
  let randomText = popupTextsWithFlags[Math.floor(Math.random() * popupTextsWithFlags.length)];
  let additionalText = "Hey, uma sugestão! pesquise por ";
  delayedPopup.querySelector(".popup-text").innerHTML = additionalText + " " + randomText;
  delayedPopup.style.display = "block"
}, 3400)

document.querySelector("#btnClose").addEventListener("click", function (e) {
  HidePopup()
  e.preventDefault()
})

function HidePopup() {
  let delayedPopup = document.querySelector("#delayedPopup")
  setTimeout(function () {
    delayedPopup.style.display = "none"
  }, 100)
}
