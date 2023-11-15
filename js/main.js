var ballSize = 100

function onBallClick(elBall) {
    ballSize += 50
    if (400 < ballSize) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}