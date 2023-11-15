var ballSize = 100

function onBallClick(elBall) {
    ballSize += 50
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}