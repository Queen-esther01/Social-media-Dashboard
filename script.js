let html = document.documentElement;
let mode = document.getElementsByClassName('dark-mode').textContent;
let checkbox = document.querySelector('input[type=checkbox]');
checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        mode = 'Light Mode';
        transition()
        html.setAttribute('data-theme', 'light');
    } else{
        transition()
        html.setAttribute('data-theme', 'dark');
    }
})

let transition = () => {
    html.classList.add('transition');
    window.setTimeout(() => {
        html.classList.remove('transition');
    }, 1000);
}
