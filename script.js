import { delay } from "./common.js"

const cards = [4, 5, 6, 7, 8, 9, 10]
const allChar = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']

let card, name, char

// ゲームスタート
document.getElementById('cardDraw').addEventListener('click', async () => {
  const cards = [4, 5, 6, 7, 8, 9]
  card = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById('titleDisplay').classList.remove('active')
  document.getElementById('cardDisplay').classList.add('active')
  cardStart()
})

// カードを引く
async function cardStart() {

  await delay(1000)
  document.getElementById('card').textContent = card
  await delay(1000)
  document.getElementById('cardDisplay').classList.remove('active')
  document.getElementById('gameDisplay').classList.add('active')
  gameStart()
}

function gameStart() {
  name = new Array(card);
  for (let i = 0; i < name.length; i++) {

    const item = document.createElement('div')
    item.classList = 'charArea'
    item.id = `charArea${i}`
    item.addEventListener('click', () => {
      wordPush(i)
    })

    document.getElementById('wordContainer').appendChild(item)
  }
  char = allChar[Math.floor(Math.random() * allChar.length)]
  document.getElementById('selectWord').textContent = char
}

function wordPush(selectIndex) {
  console.log(selectIndex);
  document.getElementById(`charArea${selectIndex}`).textContent = char
  char = allChar[Math.floor(Math.random() * allChar.length)]
  document.getElementById('selectWord').textContent = char
}