import API from './api.js'

const api = new API()

const $characterContainer = document.getElementById('character-container')


class Character {
  constructor({name, image, species, status, gender}) {
    this.name = name
    this.image = image
    this.species = species
    this.status = status
    this.gender = gender
    this.render()
  }

  build() {
    return `
      <p class="name">NAME</p>
      <h2 class="character-name">${this.name}</h2>
      <img src=${this.image} alt="${this.name}" class="character-img">
      <p class="about">ABOUT</p>
      <div class="character-labels">
        <p class="character-label">
          Gender: ${this.gender}
        </p>
        <p class="character-label">
          Species: ${this.species}
        </p>
        <p class="character-label">
          Status: ${this.status}
        </p>
      </div>
      <div class="learn-more">
        <a href=""">LEARN MORE</a>
      </div>
    `
  }

  render() {
    $characterContainer.innerHTML = this.build()
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


async function initApp(initId) {
  const characterData = await api.getCharacter(initId)
  const rick = new Character(characterData)
}

initApp(getRandomInt(1, 500))

const arrowUp = document.getElementById('arrow-up')
const arrowDown = document.getElementById('arrow-down')
let characterId = 1

arrowUp.onclick = (() => {
  characterId =characterId - 1
  if (characterId > 0) {
    initApp(characterId)
  }
})
arrowDown.onclick = (() => {
  characterId = characterId + 1
  if (characterId > 0) {
    initApp(characterId)
  }
})