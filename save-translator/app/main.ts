import { createElement } from './element-creator'
import './main.css'
console.log('hi')

const heading = createElement({
    tag: 'h1',
    text: 'Переводчик сохранений для Cruelty Squad',
    parent: document.body
})