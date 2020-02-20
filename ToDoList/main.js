const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const taskCounter = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");


// add search

// const inputSearch = document.createElement("input");
// form.appendChild(inputSearch);
// // inputSearch.innerHTML = `<input type="text">`
// inputSearch.className = "search";

// search text
// const searchTask = () => {
//     const searchText = input.value.toLowerCase;
//     console.log(searchText);
//     let tasks = [...liElements];
//     tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
//     ul.textContent = "";
//     tasks.forEach(li => ul.appendChild(li));
// }

// remove task
const removeTask = (e) => {
    e.target.parentNode.remove();
    taskCounter.textContent = liElements.length;
}

// add task
const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if (taskTitle !== "") {
        const taskNew = document.createElement("li");
        taskNew.className = "task";
        taskNew.innerHTML = taskTitle + "<button>Usuń</button>";
        ul.appendChild(taskNew);
        input.value = "";
        taskCounter.textContent = liElements.length;
        taskNew.querySelector("button").addEventListener("click", removeTask);
    }
}


form.addEventListener("submit", addTask);
// input.addEventListener("input", searchTask);
