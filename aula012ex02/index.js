var res = document.getElementById('res')
var verify = document.getElementById('verificacao')
verify.addEventListener('click', verificar)



function verificar() {
var texto = document.querySelector('div#res p')
var nasc = Number(document.querySelector('input[type="number"]').value)
var img = document.createElement('img')

var data = new Date()
var ano = data.getFullYear()
var s = ano - nasc

var sexo = document.getElementsByName('sexo')
var gênero = ''

    
    if (sexo[0].checked && s >= 11 && s < 40) {
        img.setAttribute('src, pexels-jovem.jpg')
        gênero = 'Homem'
    } else if (sexo[1].checked && s > 10 && s < 40) {
        img.setAttribute('src', 'pexels-mulher.jpg')
        gênero = 'Mulher'
    } else if (sexo[0].checked && s >=1 && s <= 10) {
        img.setAttribute('src', 'pexels-bebe.jpg')
        gênero = 'Homem'
    } else if (sexo[1].checked && s >= 1 && s <=10) {
        img.setAttribute('src', 'pexels-bebe.jpg')
        gênero = 'Mulher'
    } else if (sexo[1].checked && s >= 40) {
        img.setAttribute('src', 'pexels-senhora.jpg')
        gênero = 'Mulher'
    } else if (sexo[0].checked && s >= 40) {
        img.setAttribute('src', 'pexels-senhor.jpg')
        gênero = 'Homem'
    }
    texto.innerText = `Resultado:  Detectamos ${gênero} e a idade é de ${s} anos`
    texto.appendChild(img)
}