import { changeHP, elHP, renderHP } from './playerFunctions.js'

export const HIT = {
    head: 30,
    body: 25,
    feet: 20
}

export const ATTACK = ['head', 'body', 'feet']

export const player1 = {
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

export const player2 = {
    player: 2,
    name: "SubZero",
    hp: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice scepter'],
    attack() {
        console.log(this.name + "Fight...")
    },
    changeHP,
    elHP,
    renderHP,
}