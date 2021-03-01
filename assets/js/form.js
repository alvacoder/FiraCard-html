const email = document.querySelector('.emailContainer');
const hideSign = document.querySelector('.signOnlyContainer')
const hideForm = document.querySelector('.hideForm')

document.addEventListener('click', () => {
    if(email){
        console.log('email was clicked');
        (hideSign.style.display = 'none') && (hideForm.style.display = 'block')
    }
})