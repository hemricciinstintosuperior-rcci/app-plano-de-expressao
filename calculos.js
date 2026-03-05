function reduzirNumero(numero){

while(numero > 9){

numero = numero
.toString()
.split("")
.reduce((a,b)=>a + Number(b),0)

}

return numero

}

function calcularNumeroNascimento(data){

let numeros = data.replaceAll("-","")

let soma = numeros
.split("")
.reduce((a,b)=>a + Number(b),0)

return reduzirNumero(soma)

}