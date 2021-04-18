const $arenas = document.querySelector(".arenas")
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

const HIT = {
    head: 30,
    body: 25,
    feet: 20
}

const ATTACK = ['head', 'body', 'feet']

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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
    // console.log(this.name + ' is on ' + this.hp);
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

function playerAttack() {
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

function gameResult() {
    if (player1.hp === 0 || player1.hp === 0) {
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

let text = ''

function generateLogs(type, player1, player2) {
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
            break
        case 'defence':
            text = logs[type][phrase]
                .replace('[playerKick]', player2.name)
                .replace('[playerDefence]', player1.name)
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

window.onload = function () {
    generateLogs('start', player1, player2);
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault()
    const enemy = enemyAttack()
    const player = playerAttack()

    if (enemy.hit !== player.block) {
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit', player2, player1)
    } else {
        generateLogs('defence', player1, player2)
    }
    if (player.hit !== enemy.block) {
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player1, player2)
    }
    else {
        generateLogs('defence', player2, player1)
    }

    gameResult()

    // console.log(enemy)
    // console.log(player)

})