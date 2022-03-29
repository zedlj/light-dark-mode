const currentTheme = localStorage.getItem('theme');
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let textBox = document.getElementById('text-box');
let theme = {};

const light = {
    backgroundColor: 'rgb(255 255 255 /50%)',
    mode: 'Light Mode',
    addIcon: 'fa-sun',
    removeIcon: 'fa-moon',
    image1: 'img/undraw_proud_coder_light.svg',
    image2: 'img/undraw_feeling_proud_light.svg',
    image3: 'img/undraw_conceptual_idea_light.svg',
    textBox: 'rgb(0 0 0 / 50%)'
}

const dark = {
    backgroundColor: 'rgb(0 0 0 /50%)',
    mode: 'Dark Mode',
    removeIcon: 'fa-sun',
    addIcon: 'fa-moon',
    image1: 'img/undraw_proud_coder_dark.svg',
    image2: 'img/undraw_feeling_proud_dark.svg',
    image3: 'img/undraw_conceptual_idea_dark.svg',
    textBox: 'rgb(255 255 255 / 50%)'

}

// Check local storage for theme, toggleSwitch.checked = light toggle true
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);  
    if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    switchMode(theme=dark);
    } else {
    switchMode(theme=light);
    }
}


function switchMode(theme) {
    nav.style.backgroundColor = theme.backgroundColor;
    textBox.style.backgroundColor = theme.textBox;
    toggleIcon.children[0].textContent = theme.mode;
    toggleIcon.children[1].classList.remove(theme.removeIcon);
    toggleIcon.children[1].classList.add(theme.addIcon);
    image1.src = theme.image1;
    image2.src = theme.image2;
    image3.src = theme.image3;
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        theme = dark;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        theme = light;
    }

    switchMode(theme);
}

toggleSwitch.addEventListener('change', switchTheme);