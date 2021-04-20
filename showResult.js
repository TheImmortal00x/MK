import {createElement} from './createElement.js'

export const showResult = (name) => {
    const $winTitle = createElement('div', 'winTitle')
    if (name) {
        $winTitle.innerText = name + ' wins!'
    }
    else {
        $winTitle.innerText = 'DRAW!'
    }
    return $winTitle
}