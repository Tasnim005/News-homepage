const body =document.querySelector("body")
const hamburger = document.querySelector('.primary')
const navLinks = document.querySelector('nav ul')
const images = document.querySelectorAll('img')
console.log(body)

hamburger.addEventListener('click', runEvent)

function runEvent(){
    const currentState = hamburger.getAttribute("data-state")
    if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
        navLinks.classList.toggle("open")
        hamburger.classList.toggle("close")
        body.classList.toggle("dark")
        for(let i=0; i<images.length; i++){
          images[i].style.filter = 'brightness(50%)'
        }
      } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.classList.toggle("open")
        hamburger.classList.toggle("close")
        body.classList.toggle("dark")
        for(let i=0; i<images.length; i++){
          images[i].style.filter = 'brightness(100%)'
        }
      }
    
}