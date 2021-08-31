const texts = ["Hello!", "Welcome to @salmandotweb"];
let count = 0
let index = 0
let currentText = 0
let letter = 0

const typewriter = () => {

    if(count === texts.length){
        count = 0
    }

    currentText = texts[count]
    letter =  currentText.slice(0, ++index)
 
    const effect = document.querySelector('.effect')
    effect.textContent = letter

    if(letter.length === currentText.length){
        count++
        index = 0
    }

    setTimeout(typewriter, 300)
};

typewriter()
