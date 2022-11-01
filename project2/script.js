//for transition:
let pro1_img = document.getElementById('back-link');
let ship = document.getElementById('ship');

pro1_img.onclick = (e) => {
    e.preventDefault();
    ship.style.animation = "moveShip 6s";
    setTimeout(function(){
        window.location = "../index.html";
    }, 4000);
}