'use strict'

function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.dataset.size
    ballSize += getRandomIntInclusive(20, 60)
    if (maxDiameter < ballSize) ballSize = 100
    const ballColor = getRandomColor()
    elBall.dataset.size = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = ballColor
}

function onThirdBallClick() {
    const firstTwoBalls = document.querySelectorAll('.ball-1, .ball-2')
    console.log(firstTwoBalls)
    firstTwoBalls.forEach(ball => ball.click())
}