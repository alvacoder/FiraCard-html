
const toggle = document.querySelector('.toggle')
const close = document.querySelector('.close')
const hideLink = document.querySelector('.hideLinks')
const hideBtn = document.querySelector('.hideBtn')

document.addEventListener('click', () => {
    
    if(toggle){
        console.log('toggle');
        // (toggle.style.display = 'none') && (close.style.display = 'block')
        hideLink.style.display = 'block'
        hideBtn.style.display = 'block'
    } else if (toggle) {
        hideBtn.style.display = 'none'
    }
})

