let dropCoins = 0
let dropCoinsPerClick = 1
let obstacleLevels = 0

window.onload = function () {
    const dropAmt = document.getElementById('dropAmt')
    const obstText = document.getElementById('obstacles')
    const obstPriceText = document.getElementById('obstaclePrice')
}

window.setInterval(function () {
    dropAmt.innerHTML = "DropCoins: " + droppedKids
    obstText.innerHTML = "Totally safe! Obstacles added: " + legvels
    obstPriceText.innerHTML = "DropCoins needed: " + legPrice
    obstPrice = Math.pow(2, obstacleLevels + 1)
}, 100)

function dropPlayer() {
    droppedKids += droppedPerClick
}

function aObstacle() {
    if (dropCoins >= obstPrice) {
        dropCoins -= obstPrice
        obstacleLevels++
    }
}