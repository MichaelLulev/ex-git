var ballSize = 100
var ballColor

function onBallClick(elBall, maxDiameter) {
    ballSize += getRandomIntInclusive(20, 60)
    ballColor = getRandomColor()
    if (maxDiameter < ballSize) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.backgroundColor = ballColor
    elBall.innerText = ballSize
}