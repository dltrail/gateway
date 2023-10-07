let btn = document.getElementById('menu-btn');
let menu = document.getElementById('menu-container');

function hamburger(){
    btn.classList.toggle('open')

    if(btn.classList.contains('open')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')

    }
}

btn.addEventListener('click', hamburger)
