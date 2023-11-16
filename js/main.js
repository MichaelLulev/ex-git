'use strict'

var firstTwoBalls
var isGrow

function onInit() {
    firstTwoBalls = document.querySelectorAll('.ball-1, .ball-2')
    firstTwoBalls.forEach(ball => {
        ball.dataset.size = 100
        ball.innerText = ball.dataset.size
    })
    isGrow = true
}

function onGrowBall(elBall, maxDiameter) {
    var ballSize = +elBall.dataset.size
    const diff = getRandomIntInclusive(20, 60)
    ballSize += isGrow ? +diff : -diff
    if (maxDiameter < ballSize) ballSize = 100
    if (ballSize < 100) ballSize = 100
    const ballColor = getRandomColor()
    renderBalls(elBall, ballSize, ballColor)
}

function renderBalls(elBall, ballSize, ballColor) {
    elBall.dataset.size = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = ballColor
}

function onGrowBalls() {
    firstTwoBalls.forEach(ball => ball.click())
}

function onShrinkBalls() {
    isGrow = false
    firstTwoBalls.forEach(ball => ball.click())
    isGrow = true
}

function onChangeBackground() {
    const body = document.querySelector('body')
    body.style.backgroundColor = getRandomColor()
}