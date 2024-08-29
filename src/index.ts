let conteudo = document.querySelector("#text")

document.addEventListener('DOMContentLoaded', () => {
    conteudo = document.querySelector("#text")
})

class Editor {

    public bold(text: string | number) {
        if (conteudo?.classList.contains('negrito'))
            conteudo?.classList.remove('negrito')
        else
            conteudo?.classList.add('negrito')
    }

    public italico(text: string | number) {
        if (conteudo?.classList.contains('italico'))
            conteudo?.classList.remove('italico')
        else
            conteudo?.classList.add('italico')
    }

    public underlined(text: number | string) {
        if (conteudo?.classList.contains('underlined'))
            conteudo?.classList.remove('underlined')
        else 
        conteudo?.classList.add('underlined')
    } 

    
}

const editor = new Editor