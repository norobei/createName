import { delay } from "./common.js"

const cards = [4,5,6,7,8,9,10]
const allChar = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']

let card, name

// ゲームスタート
document.getElementById('cardDraw').addEventListener('click', async () => {
  const cards = [4,5,6,7,8,9,10]
  card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById('card').textContent = card
  name = new Array(card);
  document.getElementById('titleDisplay').classList.remove('active')
  document.getElementById('cardDisplay').classList.add('active')
  gameStart()
})

async function gameStart() {
  let char = allChar[Math.floor(Math.random() * allChar.length)]
  await delay(1000)
  document.getElementById('card').textContent = char
}