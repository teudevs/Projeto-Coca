let button = document.getElementById('header-icon')
let getOverlay = document.getElementById('overlay-menu')

button.addEventListener('click', () => {
    getOverlay.style.height = "100vh"    
})

window.addEventListener('keydown', (e) => {
    let keyPress = e.key
    if(keyPress == "Escape") {
        getOverlay.style.height = "0"
    }
})

window.sr = ScrollReveal({ reset: true });

sr.reveal('#main-div-description p', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});

sr.reveal('#main-div-description-two',{
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});

sr.reveal('#main-div-description-three',{
    rotate: { x: 0, y: 80, z: 0},
    duration: 5000
});