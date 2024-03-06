
let num = document.querySelector('input#tab')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}


function adicionar(){
   if(isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
   } else{
    alert('numero invalido ou já está na lista')
   } 
}