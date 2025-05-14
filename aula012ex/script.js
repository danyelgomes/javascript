var corpo = document.getElementsByTagName('body')[0]
var hora = new Date()
var hsist = hora.getHours()

var titulo = document.querySelector('section div h3')
titulo.innerHTML = `Agora são ${hsist} horas.`
var img = document.getElementsByTagName('img')[0]

if(hsist >= 5 && hsist < 12) {
    corpo.style.backgroundColor = 'wheat'
    img.src = 'pexels-manha.jpg'
} else if (hsist >= 12 && hsist < 18) {
    corpo.style.backgroundColor = 'red'
    img.src = 'pexels-tarde.jpg'
} else {
    corpo.style.backgroundColor = 'grey'
    img.src = 'pexels-noite.jpg'
}

