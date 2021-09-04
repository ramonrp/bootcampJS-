const createCharacterRow = (character) => {
  const element = document.createElement("div");
  element.dataset.id = character.char_id;
  element.dataset.name = character.name;
  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.img;

  return element;
};

const showCharacter = (character) => {
  const characterDetail = document.getElementById("character-detail");
  characterDetail.classList.add("active");
  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

function showFamousSentences(characterSentences) {
  if (characterSentences.length == 0) return;
  const characterDetail = document.getElementById("character-detail");
  const pElement = createParagraph("Famous Sentences:");
  const ulElement = document.createElement("ul");
  for (let sentence of characterSentences) {
    const li = document.createElement("li");
    li.innerText = sentence.quote;
    ulElement.appendChild(li);
  }
  characterDetail.appendChild(pElement);
  characterDetail.appendChild(ulElement);
}
export { createCharacterRow, showCharacter, showFamousSentences };
