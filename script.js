let Cookies = 0;
let CookieGain = 1;
window.onload = changeCookieDisplay();
function changeCookieDisplay() {
    document.getElementById('CookieDisplay').innerHTML = 'Your Cookies: ' + Cookies;
    document.getElementById('CookieGainDisplay').innerHTML = 'Cookie Gain: ' + CookieGain;
}
function gainCookies() {
    Cookies += CookieGain;
    changeCookieDisplay()
}
function increaseCookieGain() {
    if (Cookies >= 50) {
        Cookies -= 50
        CookieGain += 1
        changeCookieDisplay()
    }
}