const options = ["zastanów się dwa razy", "zapomnij"];
const btnAdd = document.querySelector(".add");
const input = document.querySelector("input");
const btnClean = document.querySelector(".clean");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowOptions = document.querySelector(".showOptions");
const h1 = document.querySelector("h1")

btnAdd.addEventListener("click", () => {
    e.preventDefault();
    options.push(input.value);
    input.value = "";
});

btnClean.addEventListener("click", (e) => {
    e.preventDefault();
    options.length = 0;
    h1.textContent = "";
})

btnShowAdvice.addEventListener("click", () => {
    const index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
})

btnShowOptions.addEventListener("click", () => {
    alert(options.join("; "));   
})