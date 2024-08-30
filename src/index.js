"use strict";
let conteudo = document.querySelector("#text");
document.addEventListener('DOMContentLoaded', () => {
    conteudo = document.querySelector("#text");
});
class Editor {
    bold(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('negrito'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('negrito');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('negrito');
    }
    italico(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('italico'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('italico');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('italico');
    }
    underlined(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('underlined'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('underlined');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('underlined');
    }
    alignLeft(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('align-left'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('align-left');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('align-left');
    }
    alignCenter(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('align-center'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('align-center');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('align-center');
    }
    alignRight(text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('align-right'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('align-right');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('align-right');
    }
}
const editor = new Editor;
