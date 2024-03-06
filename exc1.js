
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
        res.innerHTML = ''
   } else{
    alert('numero invalido ou já está na lista')
   }
   num.value = ''
   num.focus()
}

function verificar(){
    if(valores.length == 0){
        alert("adicione alguma coisa para finalizar")
    }else{
        let tdn = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma = soma + valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
             if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = soma/tdn

        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tdn} numeros cadastrados.`
        res.innerHTML += `<p>o maior numero foi ${maior}.</p>`
        res.innerHTML += `<p>o menor numero foi ${menor}.</p>`
        res.innerHTML += `<p>a soma deles são ${soma}.</p>`
        res.innerHTML += `<p>a media dos numeros são ${media}</p>`
    }
}