// import "./static/side-fixed.js";
import { accorden } from "./static/accordeon.js";
import { maskInputs } from "./static/inputmask.js";
// import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
// import { toTop } from "./static/to-top.js";
// import { stickyHeader } from "./parts/header.js";

import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/read-more.js";
// import "./parts/mobile-controll.js";
// import "./parts/login.js";
// import "./parts/category-scroll.js";
import "./parts/sliders.js";
import { scrollDown } from "./parts/scroll-down.js";
import { stickyHeader } from "./parts/header.js";
import { animateAction } from "./parts/animations.js";

stickyHeader()
// toTop();
replaceDomElements();
// runTicker()
accorden();
scrollDown();
animateAction()

maskInputs('+7 999 999 999 999', '.phone')


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})