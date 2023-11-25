import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('reviews')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 30,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    clickable: true
                }
            })
        }
        else if (section.classList.contains('trust')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 16,
                centeredSlides: true,

                pagination: {
                    el: pagination,
                    clickable: true
                },
                on: {
                    resize: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    },
                    init: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    }
                }
            })
        }
        else if (section.classList.contains('works')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                slidesPerView: 1,
                spaceBetween: 60,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    type: 'fraction',
                    clickable: true
                }
            })
        }
        else if (section.classList.contains('why')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,

                pagination: {
                    el: pagination,
                    clickable: true
                },
                on: {
                    resize: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    },
                    init: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    }
                }
            })
        }
        else if (section.classList.contains('steps')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 30,

                pagination: {
                    el: pagination,
                    clickable: true
                },
                on: {
                    resize: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    },
                    init: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    }
                }
            })
        }
    })
}
