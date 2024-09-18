function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var bom = window.document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora>=0 && hora<12){
        imagem.src = 'Imagens/Manha.png'
        document.body.style.background = '#c09770'
        bom.innerHTML = `Bom Dia!`
    }
    else if (hora>=12 && hora<=18){
        imagem.src = 'Imagens/Tarde.png'
        document.body.style.background = '#f7bc2c'
        bom.innerHTML = `Boa Tarde!`
    }
    else{
        imagem.src = 'Imagens/Noite.png'
        document.body.style.background = '#062c61'
        bom.innerHTML = `Boa Noite!`
    }

}
