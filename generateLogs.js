import { getRandom } from './getRandom.js';
import { logs } from './logs.js';

const $chat = document.querySelector('.chat')

export const generateLogs = (type, player1, player2, damage) => {
    let text = ''

    const date = `${new Date().getHours()} : ${new Date().getMinutes()}`
    const phrase = getRandom(logs[type].length - 1)

    switch (type) {
        case 'start':
            text = logs[type]
                .replace('[time]', date)
                .replace('[player1]', player1.name)
                .replace('[player2]', player2.name)
            break
        case 'hit':
            text = logs[type][phrase]
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name)
            text = `${date} - ${text}
                <span style='color:#ac1b13c7;'>[-${damage}] </span>
            <span style='color:#8cf820;'> [${player2.hp}/100]</span>
            `;
            break
        case 'defence':
            text = logs[type][phrase]
                .replace('[playerKick]', player2.name)
                .replace('[playerDefence]', player1.name)
                text = `${date} - ${text}
            
                <span style='color:#c1c40e;'>[Blocked]</span>
                <span style='color:#8cf820;'>[${player2.hp}/100]</span>
                `;
            break
        case 'end':
            text = logs[type][phrase]
                .replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name)
            break
        case 'draw':
            text = logs[type]
            break
    }

    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}