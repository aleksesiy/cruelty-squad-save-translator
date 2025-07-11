import { translateToEng } from '../scripts/translate-to-eng'
import { createElement } from './element-creator'
import './main.css'
console.log('hi')

const heading = createElement({
    tag: 'h1',
    text: 'Переводчик сохранений для Cruelty Squad',
    parent: document.body
})

const main = createElement({
    tag: 'div',
    parent: document.body,
    classes: ['main']
})

const inputCont = createElement({
    tag: 'div',
    parent: main
})
const inputContH1 = createElement({
    tag: 'h4',
    text: 'Содержимое файла',
    parent: inputCont
})
const inputContInput = createElement({
    tag: 'textarea',
    parent: inputCont,
})
inputContInput.rows = 30;
inputContInput.cols = 30;
inputContInput.placeholder = 'savegameru.save'
const outputCont = createElement({
    tag: 'div',
    parent: main
})
const outputContH1 = createElement({
    tag: 'h4',
    text: 'Перевод',
    parent: outputCont
})
const outputContOutput = createElement({
    tag: 'textarea',
    parent: outputCont,
})
outputContOutput.rows = 30;
outputContOutput.cols = 30;
outputContOutput.placeholder = 'savegame.save'


const translateBtn = createElement({
    tag: 'button',
    text: 'Перевести',
    parent: document.body,
    classes: ['translateBtn']
})
translateBtn.addEventListener('click', () => {
    outputContOutput.value = translateToEng(JSON.parse(inputContInput.value))
})