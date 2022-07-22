function getCookie(cname) {
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

var luckAmounts = {
    L1A: 0,
    L2A: 0,
    L3A: 0,
    L4A: 0,
    L5A: 0,
    L6A: 0,
    L7A: 0,
    L8A: 0,
    L9A: 0,
    L10A: 0,
    L11A: 0,
    L12A: 0,
    L13A: 0,
    L14A: 0,
    L15A: 0,
    L16A: 0
}

function checkIfNOU(variable, prefix = "", suffix = "", value = 0) {
    if (variable) {
        variable.innerHTML = `${prefix} ${value} ${suffix}`
    }
}

function fLEq(max = 16, prefixStr = "Luck "){
    for (i = 1; i <= max; i++) {
        var variable = document.getElementById(`L${i}`)
        checkIfNOU(variable,prefixStr+i+":","",luckAmounts[`L${i}A`])
    }
}

function giveRandom() {
    var i = 1
    while (Math.round(Math.random()+1) == 2 && i <= 15){
        i++
    }
    luckAmounts[`L${i}A`]++
    return i
}

window.setInterval(function () {
    giveRandom()
    fLEq()
}, 100)
