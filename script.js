const img = document.querySelector('#color_img');
const gradient = document.querySelector('#randomGradient');
const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.background = '#ff0000'
            body.style.color = '#000000'
        }else if(color.target.id === 'box2'){
            body.style.background = '#00ff22'
            body.style.color = '#000000'
        }else if(color.target.id === 'box3'){
            body.style.background = '#f081ff'
            body.style.color = '#000000'
        }else if(color.target.id === 'box4'){
            body.style.background = '#00ffee'
            body.style.color = '#000000'
        }else if(color.target.id === 'box5'){
            body.style.background = '#3f3f3f'
            body.style.color = '#ffffff'
        }else{
            body.style.background = '#ffffff'
        body.style.color = '#000000'
        }
    })
})

// Random Color
img.addEventListener('click',function(color){
    if(color.target.id === 'color_img'){
        body.style.background = generateRandomColor();
    }
})


// Gradient Random Color
gradient.addEventListener('click',function(color){
    if(color.target.id === 'randomGradient'){
        body.style.background = generateRandomGradient();
    }
})
    

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function generateRandomGradient() {
    const angle = Math.floor(Math.random() * 360);
    const color1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    return gradient;
}

