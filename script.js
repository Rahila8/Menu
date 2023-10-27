import tabs from './src/modules/tabs';
import modal from './src/modules/modal';
import timer from './src/modules/timer';
import cards from './src/modules/cards';
import calc from './src/modules/calc';
import forms from './src/modules/forms';
import slider from './src/modules/slider';
import { openModal } from './src/modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});
