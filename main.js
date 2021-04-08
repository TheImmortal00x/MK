const player1 = {
    name: "Scorpio",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai on a chain'],
    attack(){
        console.log(this.name + "Fight...")
    }
}

const player2 = {
    name: "SubZero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice scepter'],
    attack(){
        console.log(this.name + "Fight...")
    }
}

function createPlayer(player, obj){
    const $player1 = document.createElement('div');
    $player1.classList.add(player)

    const $progressbar = document.createElement('div');
    $progressbar.classList.add("progressbar")
    $player1.appendChild($progressbar)

    const $character = document.createElement('div');
    $character.classList.add("character")
    $player1.appendChild($character)

    const $life = document.createElement('div');
    $life.classList.add("life")
    $life.style.width = "100%"
    $life.style.width = obj.hp + "%"
    $progressbar.appendChild($life)

    const $name = document.createElement('div');
    $name.classList.add("name")
    $name.innerHTML = obj.name
    $progressbar.appendChild($name)

    const $img = document.createElement('img');
    $img.src = obj.img
    $character.appendChild($img)

    const $arenas = document.querySelector(".arenas")
    $arenas.appendChild($player1)
}

createPlayer("player1", player1)
createPlayer("player2", player2)