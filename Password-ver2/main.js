// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]


// forEach 

// passwords.forEach((password, index) => {
//     passwords[index] = password.toLowerCase();
// })

// const showMessage = (e) => {
//     div.textContent = "";
//     const text = e.target.value.toLowerCase();
//     passwords.forEach((password, index) => {
//         if(password === text) {
//             div.textContent = messages[index];
//         }
//     }) 
// }

// input.addEventListener("input", showMessage)


// map

const LCPassword = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for(let i=0; i< LCPassword.length; i++) {
        if(textInput === LCPassword[i]) {
            div.innerHTML = messages[i]
        }
    }
}

input.addEventListener("input", showMessage)
