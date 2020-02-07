const squere = document.createElement("div");

document.body.appendChild(squere);

let grow = true;
let size = 100;
squere.style.width = size + "px";
squere.style.height = size + "px";

window.addEventListener("scroll", function () {

    if (size >= window.innerWidth / 2) {
        grow = !grow;

    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size++;
        squere.style.width = size + "px";
        squere.style.height = size + "px";

    } else {
        size--;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }

})