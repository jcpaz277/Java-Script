let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function InLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }   
}

function adicionar() {
    if(IsNumero(num.value) && ! InLista(num.value, valores)) {
        window.alert('Tudo ok')
    } else {
        window.alert(`Valor inválido ou já encontrado na lista`)
       
    }

}