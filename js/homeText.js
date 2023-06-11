let text = document.getElementById('text')

// console.log(text)

function changeText(){
    text.innerHTML = 'Wishing you a wonderful day'
    text.style.fontFamily = 'Courier New'
    text.style.animation = 'typewritingEnglish 10s steps(27) infinite'
}

function changeText2(){
    text.innerHTML = '祝你拥有美好的一天'
    text.style.fontFamily = ''
    text.style.animation = 'typewriting 10s steps(9) infinite'
}

setInterval(changeText,10000)

setInterval(changeText2,20000)