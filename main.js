const $arenas = document.querySelector(".arenas")
const $control = document.querySelector(".control")
const $randomButton = document.querySelector(".button")

const player1 = {
    player: 1,
    name: "Scorpio",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai on a chain'],
    attack() {
        console.log(this.name + "Fight...")
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}

const player2 = {
    player: 2,
    name: "SubZero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice scepter'],
    attack() {
        console.log(this.name + "Fight...")
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function changeHP(HP) {
    this.hp -= getRandom(HP);
    if (this.hp <= 0) {
        this.hp = 0;
    }
    return this.hp;
}

function elHP() {
    const $playerLife = document.querySelector('.player' + this.player + ' .life ');
    return $playerLife;
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
    console.log(this.name + ' is on ' + this.hp);
}

function showResult(name) {
    const $winTitle = createElement('div', 'winTitle')
    if (name) {
        $winTitle.innerText = name + ' wins!'
    }
    else {
        $winTitle.innerText = 'DRAW!'
    }
    return $winTitle
}

function getRandom(num) {
    return Math.ceil(Math.random() * num)
}

$randomButton.addEventListener('click', function () {
    player1.changeHP(20)
    player1.renderHP()
    player2.changeHP(20)
    player2.renderHP()

    if (player1.hp === 0 || player1.hp === 0) {
        $randomButton.disabled = true
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(showResult(player1.name))
    } else if (player1.hp === 0 && player1.hp === 0) {
        $arenas.appendChild(showResult())
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

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $reloadButton = createElement('button', 'button')
    $reloadButton.innerHTML = "Restart"
    $reloadWrap.appendChild($reloadButton)

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })

    return $reloadWrap
}


$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
$control.appendChild(createReloadButton())

