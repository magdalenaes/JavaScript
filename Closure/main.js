const clock = () => {
    let time = 0;
    document.body.textContent = `aktualny czas spędzony na stronie ${time} sekund`;

    const timer = () => {
        time++;
        document.body.textContent = `aktualny czas spędzony na stronie ${time} sekund`;
    }
    return timer
}

const start = clock();

setInterval(start, 1000);