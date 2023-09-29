const elements = document.querySelectorAll('.duvida')

elements.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})

