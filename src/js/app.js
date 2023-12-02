import { accorden } from "./static/accordeon.js";
import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";

import "./parts/sliders.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/read-more.js";
import "./parts/filters.js";

import { scrollDown } from "./parts/scroll-down.js";
import { stickyHeader } from "./parts/header.js";
import { animateAction } from "./parts/animations.js";
import { Fancybox } from "@fancyapps/ui";
import { starRating } from "./parts/rating.js";

stickyHeader()
replaceDomElements();
accorden();
scrollDown();
animateAction()
starRating();

maskInputs('+7 (999) 999-99-99', '._phone-mask')

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});



document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
}) 