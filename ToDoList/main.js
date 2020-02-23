const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const taskCounter = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");
const trash = document.getElementsByClassName("fas fa-trash");


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


// add task
const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if (taskTitle !== "") {
        const taskNew = document.createElement("li");
        taskNew.className = "task";
        taskNew.innerHTML = `<i class="far fa-circle"></i> ${taskTitle} <i class="fas fa-trash"></i>`
        ul.appendChild(taskNew);
        input.value = "";
        taskCounter.textContent = liElements.length;
        taskNew.querySelector(".fa-trash").addEventListener("click", removeTask);
    }
}

// remove task
const removeTask = (e) => {
    e.target.parentNode.remove();
    taskCounter.textContent = liElements.length;  
}

form.addEventListener("submit", addTask);
// input.addEventListener("input", searchTask);
