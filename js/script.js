var slider = document.querySelector('.slider')
var backButton = document.querySelector('#back')
var forWordButton = document.querySelector('#forword')
var slidItems = document.querySelectorAll('.slide-item')

const redircte = (r) => {
    if(r !== 'r') {
        document.querySelectorAll('.slide-item').forEach(el => {
            el.style.left = '250px';
        })
        document.querySelector('.slide-item.active').style.left = 0;
    } else {
        document.querySelectorAll('.slide-item').forEach(el => {
            el.style.left = '-250px';
        })
        document.querySelector('.slide-item.active').style.left = 0;
    }
}


const callBackSlider = (redir) => {
    let x = document.querySelector('.slide-item.active')
    let list = Array.from(slidItems)
    x.classList.remove('active');
    if(redir === 'r') {
        if(list.indexOf(x) === slidItems.length-1) {
            slidItems[0].classList.add('active')
        } else {
            slidItems[list.indexOf(x)+1].classList.add('active')
        }
    } else {
        if(list.indexOf(x) === 0) {
            slidItems[slidItems.length-1].classList.add('active')
        } else {
            slidItems[list.indexOf(x)-1].classList.add('active')
        }
    } 
    
    
    redircte(redir);
}

const auto_slide = () => {   
  document.getElementById("back").click();
}

var i ;
window.onload = () => {
  i = setInterval("auto_slide()",3000);
};

slider.addEventListener('mouseover', () => clearInterval(i) )
slider.addEventListener('mouseover', () => {
    i = setInterval("auto_slide()",3000);
})

backButton.addEventListener('click', () => callBackSlider('r') )
forWordButton.addEventListener('click', () => callBackSlider('l'))


var sections = document.querySelectorAll('section'), 
    fragement = document.createDocumentFragment();

window.addEventListener("scroll", () => {

    sections.forEach((secElement, i) => {
        var secDim = secElement.getBoundingClientRect();
        if(secDim.top > -(secDim.height /2) && secDim.top < (window.innerHeight/2) ) {
            setActive(secElement, 'your-active-class');
        } 
    });
    
})

function setActive(el, className) {
    if(document.getElementsByClassName(className).length == 1) {
        document.getElementsByClassName(className)[0].classList.remove(className);
        el.classList.add(className);
    } else {
        el.classList.add(className);
    }
}