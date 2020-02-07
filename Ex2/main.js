const btn = document.querySelector('button');
let number = 1;

btn.addEventListener('click', () => {
    const newLi = document.createElement("li");

    newLi.textContent = number;

    document.querySelector("ul").appendChild(newLi);

    if (number % 3 == 0) {
        newLi.classList.add('big');
    }
    number += 2;
});