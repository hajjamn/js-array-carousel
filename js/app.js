const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]
console.log(images)

//definisco il contenitore del carosello
const containerElement = document.querySelector('.carousel-container')
console.log(containerElement)
//aggiungo i div con le immagini dentro

for (let i = 0; i < images.length; i++) {
    //ad ogni ciclo aggiungo un div con l-immagine relativa all indice
    containerElement.innerHTML += `
    <div class="img-container">
        <img src="./img/0${i + 1}.webp" alt="">
    </div>`
}

//Creo variabile per prima immagine
const imageElement = document.querySelector('.img-container')
console.log(imageElement)

//Aggiungo classe .active
imageElement.classList.add('my-active')

//Metto costante ai pulsanti

const nextElement = document.querySelector('.next')
const prevvElement = document.querySelector('.prev')
