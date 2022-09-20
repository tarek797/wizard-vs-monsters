//Outputs array of length diceCount, Whose elements are random numbers from 1 to 6
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    )
}

//outputs the percentage of the remaining health
const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

//setting an html element for the dice rolls place holder
function setDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}

export { getDiceRollArray, setDicePlaceholderHtml, getPercentage }