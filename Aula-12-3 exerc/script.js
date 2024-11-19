function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number (fano.value)
       res.innerHTML = `<p> Idade Calculada: ${idade} </p>`
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src' , 'HomemCriança.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'HomemJovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'HomemAdulto.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'HomemIdoso.png')
            }
       } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src' , 'MulherCriança.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'MulherJovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'MulherAdulta.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'MulherIdosa.png')
            }
       }
       res.style.textAlign = 'center'
       img.style.align= 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
} 