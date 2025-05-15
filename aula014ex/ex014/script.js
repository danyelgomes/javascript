var btn = document.getElementsByTagName('button')[0]
var res = document.getElementById('res')

btn.addEventListener('click', contar)
btn.addEventListener('onkeydown', contar)

function contar() {
var start = Number(document.getElementById('istart').value)
var end = Number(document.getElementById('ifim').value)
var passo = Number(document.getElementById('passo').value)

    res.innerHTML = ''

 if (passo == 0 || passo == '') {
    passo = 1
 }
    while (start <= end) {
        res.innerHTML += `<p>${start}</p>`
        start = start + passo
    }
}