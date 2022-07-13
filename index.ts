function getCookie(cname) { // THANK YOU W3SCHOOLS!
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function roughScale(x: string, base: number = 10) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed * 100;
}

let dropCoins = getCookie("dropCoins") === "" ? 0 : roughScale(getCookie("dropCoins")) // if cookie exists, read it, else 0
let dropCoinsPerClick = 1
let obstacleLevels = getCookie("obstacleLvl") === "" ? 0 : roughScale(getCookie("obstacleLvl")) // if cookie exists, read it, else 0
var obstPrice = Math.pow(2, obstacleLevels + 1) // exponential function 2^(x+1) or e^(ln2*(x+1)) for calc students

var dropAmt = document.getElementById("dropAmt")
var obstText = document.getElementById("obstacles")
var obstPriceText = document.getElementById("obstaclePrice")

const d = new Date();

function checkIfNOU(variable:HTMLElement|null|undefined, prefix:String = "", suffix:String = "", value:number = 0) {
    if(variable) {
        variable.innerHTML = `{prefix} {value} {suffix}`
    }
}

window.setTimeout(function () {
    checkIfNOU(dropAmt, "DropCoins:", "", dropCoins)
    checkIfNOU(obstText, "Totally safe! Obstacles added:", "lvls", obstacleLevels)
    checkIfNOU(obstPriceText, "DropCoins needed:", "$", obstPrice)

    // Save Cookie
    d.setTime(d.getTime() + 31556926000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "dropCoins=" + dropCoins + "; obstacleLvl=" + obstacleLevels + ";" + expires + "; path=/";
}, 100)

function dropPlayer() {
    dropCoins += dropCoinsPerClick
}

function aObstacle() {
    if (dropCoins >= obstPrice) {
        dropCoins -= obstPrice
        obstacleLevels++
        obstPrice = Math.pow(2, obstacleLevels + 1)
    }
}