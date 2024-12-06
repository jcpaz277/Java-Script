function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else  {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considere Passo 1')
            p = 1
        }
        if (i < f){
            //Comtagem crescente
          for(let c = i; c <= f; c  += p ){
              res.innerHTML += `${c} <span id="emoji">\u{1F600}</span> `
            
          }
            } else {
                // Contagem regressiva
                for(let c = i; c >= f; c  -= p ){
                    res.innerHTML += `${c} <span id="emoji">\u{1F600}</span> `	
                }
            }
            res.innerHTML += `<span id="emoji">\u{1F3C1}</span> `
       }    
  }