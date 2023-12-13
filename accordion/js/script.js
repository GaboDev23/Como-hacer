let titles = document.querySelectorAll('.title');

for (const x of titles) {
    x.addEventListener('click', (e) => {
        let contenido =  e.currentTarget.nextElementSibling;

        e.currentTarget.classList.toggle('change');
        // console.log(e.currentTarget.nextElementSibling);
    });
}