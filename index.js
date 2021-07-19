let firstHeader = document.getElementById('meet')

firstHeader.addEventListener('click', ()=> {
    let dis = firstHeader.innerHTML += `
    <div>
    <h3>Tyler & Kelli are a creative couple who have a love of faith, family & art!</h3>
    </div>
    `
})


let emailSub = document.querySelector('#emailSub').addEventListener('submit', (e)=> {
    e.preventDefault()
    alert('Subscribed!')
})

let aboutBtn = document.querySelector('#social1').addEventListener('click', (e)=> {
    e.preventDefault()
    document.body.innerHTML = ''
    debugger
    document.body.innerHTML += `
    <div>
        <div class='fixed-top p-3 pl-4 ' style="color: rgb(6,110,255); text-shadow: 2rem; letter-spacing: 1rem; ">THE JORDANS CREATE</div>
        <ul id="links" class="fixed-top pt-3" style="display: flex; justify-content: flex-end; ">
            <li><a href="#" class="col-1"><i class="fab fa-instagram fa-lg" style="color: rgb(252,212,2)" ></i></a></li>
            <li><a href="#" class="col-1"><i class="fab fa-facebook fa-lg" style="color: rgb(252,212,2)"></i></a></li>
            <li><a href="#" class="col-1" ><i class="fas fa-envelope fa-lg" style="color: rgb(252,212,2)"></i></a></li>
            <li><a href="#" class="col-1"><i class="fab fa-youtube fa-lg" style="color: rgb(252,212,2)"></i></a></li>
        </ul>
        <nav id="webpage-content" class="d-flex justify-content-lg-between float-right mt-5 pt-1">
            <a id="social1" class="h5 p-4 pl-lg-5" style="color: rgb(252,212,2)"  href="/about">ABOUT</a>
            <a id="social2" class="h5 p-4 pl-lg-5" style="color: rgb(252,212,2)" href="/contact">CONTACT</a>
            <a id="social3" class="h5 p-4 pl-lg-5" style="color: rgb(252,212,2)" href="#videos">VIDEOS</a>
            <a id="social4" class="h5 p-4 pl-lg-5" style="color: rgb(252,212,2)" href="/photos">PHOTOS</a>
        </nav>
    </div>

    `
})

window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150

        if (revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}
window.addEventListener('scroll', slide)

function slide() {
    let slides = document.querySelectorAll('.slide')

    for(let i = 0; i < slides.length; i++){
        let windowHeight = window.innerHeight
        let slideTop = slides[i].getBoundingClientRect().top
        let slidePoint = 150

        if (slideTop < windowHeight - slidePoint){
            slides[i].classList.add('sliding')
        } else {
            slides[i].classList.remove('sliding')
        }
    }
}
window.addEventListener('DOMContentLoaded', transition2)

function transition2() {
    let slips = document.querySelector('.transition2')
    slips.classList.add('transition2-active')
}





