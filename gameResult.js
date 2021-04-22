import { createReloadButton } from './createReloadButton.js';
import {player1, player2} from './players.js'
import { generateLogs } from './generateLogs.js';
import { showResult } from './showResult.js';


const $arenas = document.querySelector(".arenas")

export const gameResult = () => {
    if (player1.hp === 0 || player2.hp === 0) {
        createReloadButton()
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name));
        generateLogs('end', player2, player1)
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(showResult(player1.name))
        generateLogs('end', player1, player2)
    } else if (player1.hp === 0 && player1.hp === 0) {
        $arenas.appendChild(showResult())
        generateLogs('draw')
    }
}