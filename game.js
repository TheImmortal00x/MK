import { createPlayer, createReloadButton, getRandom, showTitle } from './utils.js'
import { HIT, ATTACK } from './constants.js'
import Player from './players.js'
import { generateLogs } from './generateLogs.js';

const $arenas = document.querySelector(".arenas")
const $formFight = document.querySelector('.control')

let player1;
let player2;

class Game {

    start = async () => {
        const players = await this.getPlayers()
        const p1 = players[getRandom(players.length - 1)]
        const p2 = players[getRandom(players.length - 1)]
        player1 = new Player({
            ...p1,
            player: 1
        })
        player2 = new Player({
            ...p2,
            player: 2
        })
        generateLogs('start', player1, player2);
        this.addPlayers()
        this.fight()
    }

    addPlayers = () => {
        $arenas.appendChild(createPlayer(player1))
        $arenas.appendChild(createPlayer(player2))
    }

    getPlayers = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }


    fight = () => {
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

            if (player1.hp === 0 || player2.hp === 0) {
                createReloadButton()
            }

            if (player1.hp === 0 && player1.hp < player2.hp) {
                $arenas.appendChild(showTitle(player2.name));
                generateLogs('end', player2, player1)
            } else if (player2.hp === 0 && player2.hp < player1.hp) {
                $arenas.appendChild(showTitle(player1.name))
                generateLogs('end', player1, player2)
            } else if (player1.hp === 0 && player1.hp === 0) {
                $arenas.appendChild(showTitle())
                generateLogs('draw')
            }
        })
    }

}

export default Game

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
