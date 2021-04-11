const $arenas = document.querySelector(".arenas")
const $randomButton = document.querySelector(".button")

const player1 = {
    player: 1,
    name: "Scorpio",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai on a chain'],
    attack() {
        console.log(this.name + "Fight...")
    }
}

const player2 = {
    player: 2,
    name: "SubZero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice scepter'],
    attack() {
        console.log(this.name + "Fight...")
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)

    if (className) {
        $tag.classList.add(className)
    }

    return $tag
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' ' + '.life');
    player.hp -= Math.ceil(Math.random() * 20)
    if (player.hp <= 0) {
        player.hp = 0
    }
    console.log(player1.name + " is on " + player1.hp + " hp")
    console.log(player2.name + " is on " + player2.hp + " hp")
    $playerLife.style.width = player.hp + "%"
}

$randomButton.addEventListener('click', function () {
    changeHP(player1)
    changeHP(player2)

    if (player1.hp <= 0) {
        console.log(player2.name + " won")
        console.log(player1.name + " lost")
    } else if (player2.hp <= 0) {
        console.log(player1.name + " won")
        console.log(player2.name + " lost")
    }
})

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