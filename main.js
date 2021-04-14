const $arenas = document.querySelector(".arenas")
const $formFight = document.querySelector('.control')

const HIT = {
    head: 30,
    body: 25,
    feet: 20
}

const ATTACK = ['head', 'body', 'feet']

const player1 = {
    player: 1,
    name: "Scorpio",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai on a chain'],
    attack() {
        console.log(this.name + "Fight...")
    },
    changeHP,
    elHP,
    renderHP
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
    changeHP,
    elHP,
    renderHP,
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function changeHP(HP) {
    this.hp -= HP;
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
    $arenas.appendChild($reloadWrap)

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    })

    return $reloadWrap
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const block = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom(HIT[hit]),
        hit,
        block
    }
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault()
    const enemy = enemyAttack()

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

    if (enemy.hit != gamer.block) {
        player1.changeHP(enemy.value)
        player1.renderHP()
    }
    if (gamer.hit != enemy.block) {
        player2.changeHP(gamer.value)
        player2.renderHP()
    }

    if (player1.hp === 0 || player1.hp === 0) {
        createReloadButton()
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(showResult(player1.name))
    } else if (player1.hp === 0 && player1.hp === 0) {
        $arenas.appendChild(showResult())
    }

    console.log(enemy)
    console.log(gamer)

})