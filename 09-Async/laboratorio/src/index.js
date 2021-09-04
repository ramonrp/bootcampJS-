import "./styles.css";
import {
  createCharacterRow,
  showCharacter,
  showFamousSentences,
} from "./utils";
import { getData } from "./data-business";

const charactersEndPoint = "https://www.breakingbadapi.com/api/characters";
const quoteEndPoint = "https://www.breakingbadapi.com/api/quote?author=";
let charactersArray = [];

getData(charactersEndPoint).then((characters) => {
  charactersArray = characters;
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  for (let character of characters) {
    const characterElement = createCharacterRow(character);
    characterElement.addEventListener("click", handleShowCharacter);
    rootElement.appendChild(characterElement);
  }
});

function handleShowCharacter(e) {
  const divLink = e.target.closest("div");
  const char_id = divLink.dataset.id;
  const characterName = divLink.dataset.name.split(" ").join("+");
  const endpoint = quoteEndPoint + characterName;
  showCharacter(
    charactersArray.find((character) => character.char_id == char_id)
  );

  getData(endpoint).then((data) => {
    showFamousSentences(data);
  });
}
