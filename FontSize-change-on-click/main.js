const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let fontSize = 10;

// pętla for

// const showLiItems = () => {

//     for (let i = 0; i < liItems.length; i++) {

//         liItems[i].style.display = "block";  
//         liItems[i].style.fontSize = `${fontSize}px`;     
//     }
//      fontSize ++;
// }

// btn.addEventListener("click", showLiItems);

// forEach

const showLiItems = () => {

    liItems.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = `${fontSize}px`;
    })
    fontSize++;
}

btn.addEventListener("click", showLiItems);