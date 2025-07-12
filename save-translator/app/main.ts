import { translateToEng } from '../scripts/translate-to-eng'
import { translateToRus } from '../scripts/translate-to-rus'
import { createElement } from './element-creator'
import './main.css'

const heading = createElement({
    tag: 'h1',
    text: 'Переводчик сохранений для Cruelty Squad',
    parent: document.body
})
const toggleText = createElement({
    tag: 'p',
    text: 'Режим: ',
    parent: document.body,
    classes: ['toggleText']
})
const toggleBtn = createElement({
    tag: 'button',
    parent: toggleText,
    classes: ['toggleBtn'],
    text: 'rus -> eng 🔄️'
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
const textareaHeight = ((window.innerHeight / 16) * 0.6) < 30 ? ((window.innerHeight / 16) * 0.6) : 30
inputContInput.rows = textareaHeight;
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
const copyBtn = createElement({
    tag: 'div',
    text: 'Нажмите, чтобы скопировать',
    parent: outputCont,
    classes: ['copyBtn']
})
let isReturned = false
outputContOutput.rows = textareaHeight;
outputContOutput.cols = 30;
outputContOutput.placeholder = 'savegame.save'


const translateBtn = createElement({
    tag: 'button',
    text: 'Перевести',
    parent: document.body,
    classes: ['translateBtn']
})
translateBtn.disabled = true

translateBtn.addEventListener('click', () => {
    outputContOutput.value = translateToEng(JSON.parse(inputContInput.value))
    isReturned = true
    copyBtn.classList.add('showup')
})



toggleBtn.addEventListener('click', () => {
    if (toggleBtn.textContent === 'rus -> eng 🔄️') {
        toggleBtn.textContent = 'eng -> rus 🔄️'
        translateBtn.addEventListener('click', () => {
            outputContOutput.value = translateToRus(JSON.parse(inputContInput.value))
            copyBtn.classList.add('showup')
        })
        outputContOutput.placeholder = 'savegameru.save'

        inputContInput.placeholder = 'savegame.save'
    } else {
        toggleBtn.textContent = 'rus -> eng 🔄️'
        translateBtn.addEventListener('click', () => {
            outputContOutput.value = translateToEng(JSON.parse(inputContInput.value))
            isReturned = true
            copyBtn.classList.add('showup')

        })
        inputContInput.placeholder = 'savegameru.save'
        outputContOutput.placeholder = 'savegame.save'

    }
})
async function copyTextToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() =>
            copyBtn.classList.remove('showup'), 1000)

    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}
copyBtn.addEventListener('click', () => copyTextToClipboard(outputContOutput.value))

function validateInput() {
    if (inputContInput.value.length < 7000) {
        translateBtn.disabled = true
    } else {
        translateBtn.disabled = false
    }
}
inputContInput.addEventListener('input', validateInput)


const footer = createElement({
    tag: 'footer',
    parent: document.body
})
const ghLink = createElement({
    tag: 'a',
    parent: footer,
    text: 'мой гитхаб'
})
ghLink.href = "https://github.com/aleksesiy"

const steamLink = createElement({
    tag: 'a',
    parent: footer,
    text: 'ссылка на гайд'
})
steamLink.href = "https://steamcommunity.com/sharedfiles/filedetails/?id=2657599685"

const ghRepoLink = createElement({
    tag: 'a',
    parent: footer,
    text: 'репо проекта'
})
ghRepoLink.href = "https://github.com/aleksesiy/cruelty-squad-save-translator"




