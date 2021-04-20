import {createElement} from './createElement.js'

const $arenas = document.querySelector(".arenas")

export function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $reloadButton = createElement('button', 'button')
    $reloadButton.innerHTML = "Restart"
    $reloadWrap.appendChild($reloadButton)
    $arenas.appendChild($reloadWrap)

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })

    return $reloadWrap
}