function gerarAnalise(){

let nome = document.getElementById("nome").value
let nascimento = document.getElementById("nascimento").value

if(nome === "" || nascimento === ""){

alert("Preencha todos os campos")

return

}

let numero = calcularNumeroNascimento(nascimento)

let texto = textosNumerologia[numero]

let cerebro = mapaCerebro[numero]

let resultadoHTML = `

<h2>${nome}</h2>

<p><strong>Número numerológico:</strong> ${numero}</p>

<p>${texto}</p>

<hr>

<h3>Neurociência associada</h3>

<p><strong>Região cerebral:</strong> ${cerebro.regiao}</p>

<p><strong>Função:</strong> ${cerebro.funcao}</p>

<p><strong>Nutrientes importantes:</strong> ${cerebro.nutrientes}</p>

<p><strong>Alimentos recomendados:</strong> ${cerebro.alimentos}</p>

`

document.getElementById("resultado").innerHTML = resultadoHTML

}