window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./js/modules/tabs'),
        modal = require('./js/modules/modal'),
        timer = require('./js/modules/timer'),
        cards = require('./js/modules/cards'),
        calc = require('./js/modules/calc'),
        forms = require('./js/modules/forms'),
        slider = require('./js/modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});

