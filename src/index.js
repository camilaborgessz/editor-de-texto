var conteudo = document.querySelector("#text");
document.addEventListener('DOMContentLoaded', function () {
    conteudo = document.querySelector("#text");
});
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.bold = function (text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('negrito'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('negrito');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('negrito');
    };
    Editor.prototype.italico = function (text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('italico'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('italico');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('italico');
    };
    Editor.prototype.underlined = function (text) {
        if (conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.contains('underlined'))
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.remove('underlined');
        else
            conteudo === null || conteudo === void 0 ? void 0 : conteudo.classList.add('underlined');
    };
    return Editor;
}());
var editor = new Editor;
