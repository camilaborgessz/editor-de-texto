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
    
    public alignLeft(text: number | string) {
        if (conteudo?.classList.contains('align-left'))
            conteudo?.classList.remove('align-left')
        else 
        conteudo?.classList.add('align-left')
    } 

    public alignCenter(text: number | string) {
        if (conteudo?.classList.contains('align-center'))
            conteudo?.classList.remove('align-center')
        else 
        conteudo?.classList.add('align-center')
    } 
    
    public alignRight(text: number | string) {
        if (conteudo?.classList.contains('align-right'))
            conteudo?.classList.remove('align-right')
        else 
        conteudo?.classList.add('align-right')
    } 
    
}

const editor = new Editor