import { getDiceRollArray, setDicePlaceholderHtml, getPercentage } from './utils.js'

//creating a class for the 4 characters in the game
class Character {

    /*the class attributes that copies the character object data
    adding two additional attributes calculated from the passed data 
    */
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = setDicePlaceholderHtml(this.diceCount)
    }

    /*a method to set that maps the array of dice rolls to html elements
    will be called when rendering*/
    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

    /*a method to reduce the character's health depending on the dice rolls
     of the opponent and decides if the character is dead 
     will be called when the attack button clicked*/
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    /*a method to set the html element for the health bar and 
    styles its width and color relative to character's health*/
    setHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`
    }

    /* a method to set the html element for the character card*/
    setCharacterHtml() {
        const { elementId, name, avatar, health, diceCount, diceHtml } = this
        const healthBar = this.setHealthBarHtml()
        return `<div class="character-card">
                    <h4 class="name"> ${name} </h4>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceHtml}
                    </div>
                </div>`
    }
}

export default Character