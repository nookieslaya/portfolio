const text = document.querySelector('.hero-title');
const strText = text.textContent;
const splitText = strText.split("");
const footerYear = document.querySelector('.footer-year')


// year

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear()



// hero text animation
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;
}

sal();