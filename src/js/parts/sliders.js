import Swiper from 'swiper';
import { Navigation, Pagination, Manipulation } from 'swiper/modules';

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
                spaceBetween: 16,
                watchSlidesProgress: true,


                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    clickable: true
                },
                breakpoints: {
                    300: {
                        centeredSlides: true,
                        initialSlide: 1
                    },
                    769: {
                        centeredSlides: false,
                        initialSlide: false
                    }
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
                watchSlidesProgress: true,
                initialSlide: 1,
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
                watchSlidesProgress: true,


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
                watchSlidesProgress: true,
                initialSlide: 1,
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
                slidesPerView: 'auto',
                spaceBetween: 30,
                watchSlidesProgress: true,



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
        else if (section.classList.contains('services-slider')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],

                watchSlidesProgress: true,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    clickable: true
                },

                breakpoints: {
                    300: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        centeredSlides: true,
                        initialSlide: 1,
                    },

                    601: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: false,
                        initialSlide: false,
                    },

                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 39,
                        centeredSlides: false
                    },

                }
            })
        }
        else if (section.classList.contains('hero-about')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                spaceBetween: 16,
                slidesPerView: 'auto',
                pagination: {
                    el: pagination,
                    clickable: true
                },
                watchSlidesProgress: true,
                on: {
                    resize: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    },
                    init: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                    }
                },
            })
        }
        else if (section.classList.contains('hero-works')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Manipulation
                ],
                loop: true,
                slidesPerView: 1,
                spaceBetween: 60,
                watchSlidesProgress: true,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    type: 'fraction',
                    clickable: true
                },

                on: {
                    init: (swiper) => {
                        if (window.innerWidth <= 768) swiper.init()
                        else swiper.destroy()
                        console.log('init');
                    }
                },
            })
        }
    })
}
