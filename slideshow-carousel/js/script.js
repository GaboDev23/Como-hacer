let number = document.getElementById('number');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let images = document.querySelectorAll('.img');
let buttons = document.querySelectorAll('.button');
let caption = document.getElementById('caption');

const opacidad = (image) => {
    let computedStyle = getComputedStyle(image);
    let opacity = computedStyle.getPropertyValue('opacity');

    return opacity;
}

const establecerTexto = (image) => {
    if (image == 0) return 'Caption Text';

    if (image == 1) return 'Caption Two';

    if (image == 2) return 'Caption Three';

    if (image == 3) return 'Caption Four';
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (let j = 0; j < images.length; j++) {
            let establecerOpacidad = opacidad(images[j]);

            if (establecerOpacidad == '1') {
                images[j].style.opacity = '0';
                images[i].style.opacity = '1';
                number.textContent = `${i+1} / 4`;
                caption.textContent = establecerTexto(i);
                break;
            }
            
        }
    });
}

arrowLeft.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        let establecerOpacidad = opacidad(images[i]);

        if (establecerOpacidad == '1' && i == 0) {
            number.textContent = `${images.length} / 4`;
            images[i].style.opacity = '0';
            images[images.length-1].style.opacity = '1';
            caption.textContent = establecerTexto(images.length-1);
            break;
        } 

        if (establecerOpacidad == '1' && i > 0) {
            number.textContent = `${i} / 4`;
            images[i].style.opacity = '0';
            images[i-1].style.opacity = '1';
            caption.textContent = establecerTexto(i-1);
            break;
        }
    }
});

arrowRight.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        let establecerOpacidad = opacidad(images[i]);

        if (establecerOpacidad == '1' && i == images.length - 1) {
            number.textContent = `1 / 4`;
            images[i].style.opacity = '0';
            images[0].style.opacity = '1';
            caption.textContent = establecerTexto(0);
            break;
        } 

        if (establecerOpacidad == '1' && i < images.length - 1) {
            images[i].style.opacity = '0';
            images[i+1].style.opacity = '1';
            number.textContent = `${i+2} / 4`;
            caption.textContent = establecerTexto(i+1);
            break;
        }
    }
});