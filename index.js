import Decimal from "./break_infinity.js"

const getCookie = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

function roughScale(x, base = 10) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}

let dropCoins = getCookie("dropCoins") === "" ? new Decimal(0) : new Decimal(roughScale(getCookie("dropCoins"))) // if cookie exists, read it, else 0
let dropCoinsPerClick = new Decimal(1)
let obstacleLevels = getCookie("obstacleLvl") === "" ? new Decimal(0) : new Decimal(roughScale(getCookie("obstacleLvl"))) // if cookie exists, read it, else 0
var obstPrice = Decimal.pow(2, (obstacleLevels + 1)) // exponential function 2^(x+1) or e^(ln2*(x+1)) for calc students

var dropAmt = $("dropAmt")
var obstText = $("obstacles")
var obstPriceText = $("obstaclePrice")
var btn = $("btn")
var obstBtn = $("aObstacle")

const d = new Date();

function dropPlayer() {
    dropCoins += dropCoinsPerClick
}
    
    function aObstacle() {
        if (dropCoins >= obstPrice) {
        dropCoins -= obstPrice
        Decimal.add(obstacleLevels, 1)
        obstPrice = Decimal.pow(2, (obstacleLevels + 1))
    }
}

function checkIfNOU(variable, prefix = "", suffix = "", value = Decimal(0)) {
    if (variable) {
        variable.innerHTML = `${prefix} ${value} ${suffix}`
    }
}

btn.addEventListener("click", dropPlayer())
obstBtn.addEventListener("click", aObstacle())

window.setTimeout(function () {
    checkIfNOU(dropAmt, "DropCoins:", "", dropCoins)
    checkIfNOU(obstText, "Totally safe! Obstacles added:", "lvls", obstacleLevels)
    checkIfNOU(obstPriceText, "DropCoins needed:", "$", obstPrice)

    // Save Cookie
    d.setTime(d.getTime() + 31556926000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "dropCoins=" + dropCoins + ";obstacleLvl=" + obstacleLevels + ";" + expires + ";path=/";
}, 100)
