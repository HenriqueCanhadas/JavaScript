function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'Imagens/BebeHomem.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'Imagens/JovemHomem.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'Imagens/AdultoHomem.png')
            }
            else{
                img.setAttribute('src', 'Imagens/IdosoHomem.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'Imagens/BebeMulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'Imagens/JovemMulher.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'Imagens/AdultoMulher.png');
            } else {
                img.setAttribute('src', 'Imagens/IdosoMulher.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}
