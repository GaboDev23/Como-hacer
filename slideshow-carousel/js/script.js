let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let images = document.querySelectorAll('.img');

arrowLeft.addEventListener('click', () => {
    for (const i in images) {
        console.log(i);
        console.log(images[i]);
        let computedStyle = window.getComputedStyle(images[i]);
        let opacity = computedStyle.getPropertyValue('opacity');
    
        if (opacity == '1') {
            images[i].style.opacity = '0';

            if (images[i] == 0) {
                let previousImage = images[images.length-1];
                previousImage.style.opacity = '1';
            }
        }
    }
});

arrowRight.addEventListener('click', () => {

});

console.log(images);