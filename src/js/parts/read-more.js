import { gsap } from "gsap";

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_read-more')) {
        const showText = targetEl.dataset.showText;

        const textContnet = targetEl.closest('.text-content').querySelector('.text-content__hidden')
        if (textContnet) {
            textContnet.classList.toggle('_active');

            if (textContnet.classList.contains('_active')) {
                targetEl.textContent = 'Скрыть';

                gsap.to(textContnet, {
                    height: 'auto',
                    duration: 0.5
                })

            }
            else {
                targetEl.textContent = showText;

                gsap.to(textContnet, {
                    height: 292,
                    duration: 0.5
                })
            }
        }
    }

    if (targetEl.classList.contains('_more-marks')) {
        const showText = targetEl.dataset.showText;

        const grid = targetEl.closest('section').querySelector('.grid')
        grid.classList.toggle('_active');

        if (grid.classList.contains('_active')) targetEl.textContent = 'Скрыть';
        else targetEl.textContent = showText;
    }
})