var charName = document.getElementById("charName");
var birthYear = document.getElementById("birthYear");
var eyeColor = document.getElementById("eyeColor");
var hairColor = document.getElementById("hairColor");
var skinColor = document.getElementById("skinColor");
var charInput = document.getElementById("character");
var searchChar = document.getElementById("searchChar");

function getCharacter() {
  var charSearch = charInput.value;
  var requestUrl = "https://swapi.dev/api/people/?search=" + charSearch;

  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var character = data.results[0];

      charName.textContent = character.name;
      birthYear.textContent = character.birth_year;
      eyeColor.textContent = character.eye_color;
      hairColor.textContent = character.hair_color;
      skinColor.textContent = character.skin_color;

      charInput.value = "";
    });
}

searchChar.addEventListener("click", getCharacter);
