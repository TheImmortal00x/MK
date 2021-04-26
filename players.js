class Player {
    constructor(props) {
        this.player = props.player
        this.name = props.name
        this.hp = props.hp
        this.img = props.img
        this.weapon = props.weapon
    }

    changeHP = (HP) => {
        this.hp -= HP;
        if (this.hp <= 0) {
            this.hp = 0;
        }
        return this.hp;
    }

    elHP = () => {
        const $playerLife = document.querySelector('.player' + this.player + ' .life');
        return $playerLife;
    };

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    attack = () => {
        console.log(this.name + "Fight...")
    }

}

export const player1 = new Player({
    player: 1,
    name: "Scorpio",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai on a chain']
})

export const player2 = new Player({
    player: 2,
    name: "SubZero",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice scepter']
})