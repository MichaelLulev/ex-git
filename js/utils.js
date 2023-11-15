'use strict'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomIntInclusive(min, max) {
    return getRandomInt(min, max + 1)
}

function getRandomColor() {
    const r = getRandomInt(0, 256)
    const g = getRandomInt(0, 256)
    const b = getRandomInt(0, 256)
    return `rgb(${r}, ${g}, ${b})`
}