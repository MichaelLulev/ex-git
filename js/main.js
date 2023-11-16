'use strict'

var isGrow = true

function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.dataset.size
    const diff = getRandomIntInclusive(20, 60)
    ballSize += isGrow ? +diff : -diff
    if (maxDiameter < ballSize) ballSize = 100
    if (ballSize < 100) ballSize = 100
    const ballColor = getRandomColor()
    elBall.dataset.size = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = ballColor
}

function onThirdBallClick() {
    const firstTwoBalls = document.querySelectorAll('.ball-1, .ball-2')
    firstTwoBalls.forEach(ball => ball.click())
}

function onFourthBallClick() {
    const firstTwoBalls = document.querySelectorAll('.ball-1, .ball-2')
    isGrow = false
    firstTwoBalls.forEach(ball => ball.click())
    isGrow = true
}