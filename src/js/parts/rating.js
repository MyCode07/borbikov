const starRatings = document.querySelectorAll('.star-rating');

let fixedStars = false;

function setStarsCount(stars, i, field) {
    stars.forEach(item => { item.classList.remove('_active') })

    let index = 0;
    while (index < (i + 1)) {
        stars[index].classList.add('_active')
        index++;
    }

    field.value = i + 1;
}

export const starRating = () => {
    if (!starRatings.length) return;

    starRatings.forEach(rating => {
        const hiddenRatingInput = rating.closest('section').querySelector('input[name="rating"]');
        const stars = rating.querySelectorAll('i');

        stars.forEach((star, i) => {
            star.addEventListener('mouseenter', () => {
                if (fixedStars === false) setStarsCount(stars, i, hiddenRatingInput)
            })

            star.addEventListener('click', () => {
                setStarsCount(stars, i, hiddenRatingInput)
                fixedStars = true
            })
        })
    })
}