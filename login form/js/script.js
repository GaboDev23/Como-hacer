let button = document.getElementById('button');
let modal = document.getElementById('modal');
let form = document.getElementById('form');
let cancel = document.getElementById('cancel');
let forgot = document.getElementById('forgot');

if (form) {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 700) {
            form.style.width = '50%';
        } else {
            form.style.width = '70%';
        }
    });
}

button.addEventListener('click', () => {
    modal.style.display = 'flex';
    if (window.innerWidth >= 700) {
        form.style.width = '70%';
    } else {
        form.style.width = '50%';
    }
    form.style.height = '90%';
    form.style.animation = 'tamaño .5s ease';
});

modal.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
});

forgot.addEventListener('click', () => {
    modal.style.display = 'none';
});