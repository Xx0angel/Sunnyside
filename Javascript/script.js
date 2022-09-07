
// Interaccion para abrir y cerrar el menu
document.querySelector(".movil__button-hamburger").addEventListener('click', () => {
    document.querySelector('#Menu').classList.toggle('show__menu');
})

// Active del Menu
const select = document.querySelectorAll('.nav__list-item')

select.forEach(selection => {
    selection.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove("active")
        this.classList.add('active')
    })
})



