import { createElement } from './createElement.js'
import { getRandom } from './getRandom.js';
import { HIT, ATTACK, player1, player2 } from './players.js'
import { generateLogs } from './generateLogs.js';
import { gameResult } from './gameResult.js';

const $arenas = document.querySelector(".arenas")
const $formFight = document.querySelector('.control')

function createPlayer(obj) {
    const $player = createElement('div', 'player' + obj.player)
    const $progressbar = createElement('div', 'progressbar')
    const $character = createElement('div', 'character')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $img = createElement('img')

    $player.appendChild($progressbar)
    $player.appendChild($character)

    $life.style.width = "100%"
    $life.style.width = obj.hp + "%"
    $progressbar.appendChild($life)

    $name.innerHTML = obj.name
    $progressbar.appendChild($name)

    $img.src = obj.img
    $character.appendChild($img)

    return $player
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1]
    const block = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom(HIT[hit]),
        hit,
        block
    }
}

const playerAttack = () => {
    const gamer = {}

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            gamer.value = getRandom(HIT[item.value])
            gamer.hit = item.value
        }

        if (item.checked && item.name === 'defence') {
            gamer.block = item.value
        }
        item.checked = false
    }

    return gamer
}

window.onload = () => {
    generateLogs('start', player1, player2);
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault()
    const enemy = enemyAttack()
    const player = playerAttack()

    if (enemy.hit !== player.block) {
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit', player2, player1, enemy.value)
    } else {
        generateLogs('defence', player1, player2)
    }
    if (player.hit !== enemy.block) {
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player1, player2, player.value)
    }
    else {
        generateLogs('defence', player2, player1)
    }

    gameResult()

    // console.log(enemy)
    // console.log(player)

})