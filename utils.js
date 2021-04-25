const $arenas = document.querySelector(".arenas")

export const createElement = (tag, className) => {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

export const getRandom = (num) => {
    return Math.ceil(Math.random() * num)
}

export const createPlayer = (obj) => {
    const $player = createElement('div', `player${obj.player}`)
    const $progressbar = createElement('div', 'progressbar')
    const $character = createElement('div', 'character')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $img = createElement('img')

    $life.style.width = obj.hp + "%"
    $name.innerHTML = obj.name
    $img.src = obj.img

    $progressbar.appendChild($name)
    $progressbar.appendChild($life)

    $character.appendChild($img)

    $player.appendChild($character)
    $player.appendChild($progressbar)

    return $player
}

export const createReloadButton = () => {
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

export const showTitle = (name) => {
    const $winTitle = createElement('div', 'winTitle')
    if (name) {
        $winTitle.innerText = name + ' wins!'
    }
    else {
        $winTitle.innerText = 'DRAW!'
    }
    return $winTitle
}