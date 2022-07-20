import Decimal from "./break_infinity.js"

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

L1A, L2A, L3A, L4A, L5A, L6A, L7A, L8A, L9A, L10A, L11A, L12A, L13A, L14A, L15A, L16A = 0

L1 = $("L1")
L2 = $("L2")
L3 = $("L3")
L4 = $("L4")
L5 = $("L5")
L6 = $("L6")
L7 = $("L7")
L8 = $("L8")
L9 = $("L9")
L10 = $("L10")
L11 = $("L11")
L12 = $("L12")
L13 = $("L13")
L14 = $("L14")
L15 = $("L15")
L16 = $("L16")

function checkIfNOU(variable, prefix = "", suffix = "", value = Decimal(0)) {
    if (variable) {
        variable.innerHTML = `${prefix} ${value} ${suffix}`
    }
}

function fLEq(max = Decimal(16), prefixVar = "L", prefixStr = "Luck"){
    for (i = 1; i <= max; i++) {
        variable = $(`${prefixVar}${i}`)
        checkIfNOU(variable,prefixStr+i+":","",window[`L${i}A`])
    }
}

window.setTimeout(function () {
    fLEq()
    // Save Cookie
    // d.setTime(d.getTime() + 31556926000);
    // let expires = "expires=" + d.toUTCString();
    // document.cookie = "dropCoins=" + dropCoins + ";obstacleLvl=" + obstacleLevels + ";" + expires + ";path=/";
}, 100)
