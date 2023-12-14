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

    if (targetEl.closest('.marks__cats') && targetEl.hasAttribute('data-cat')) {
        if (!targetEl.classList.contains('_active')) {

            const allCats = document.querySelectorAll('.marks__cats [data-cat]');
            const allMarksGrid = document.querySelectorAll('.marks__cats-content .grid');

            allCats.forEach(cat => cat.classList.remove('_active'))
            allMarksGrid.forEach(grid => {
                if (grid.dataset.id == targetEl.dataset.cat) {
                    grid.classList.add('_active')

                    marksBottom.querySelector('button').textContent = marksBottom.querySelector('button').dataset.showText;
                }
                else {
                    grid.classList.remove('_active')
                    grid.classList.remove('more-marks')
                }
            })

            targetEl.classList.add('_active');


        }

    }

    if (targetEl.classList.contains('_more-marks')) {
        const showText = targetEl.dataset.showText;

        const grid = targetEl.closest('section').querySelector('.grid._active')
        grid.classList.toggle('more-marks');

        if (grid.classList.contains('more-marks')) targetEl.textContent = 'Скрыть';
        else targetEl.textContent = showText;
    }
})

const marksBottom = document.querySelector('.marks .section__bottom');
function checkMarksCount() {
    const activeMarks = document.querySelectorAll('.marks__cats-content .grid._active .grid__item');
    if (!activeMarks.length) return

    if (activeMarks.length > 27) {
        marksBottom.classList.remove('_hide')
    }
    else {
        marksBottom.classList.add('_hide')
    }
}

console.log(checkMarksCount());