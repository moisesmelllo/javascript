function Contar() {
    var txtinicio = document.getElementById("inicio").value;
    var txtfim = document.getElementById("fim").value;
    var txtpasso = document.getElementById("passo").value;
    var contagem = document.getElementById("contagem");

    var inicio = Number(txtinicio)
    var fim = Number(txtfim)
    var passo = Number(txtpasso)
    contagem.innerHTML - ''
    for (inicio; inicio <= fim; inicio += passo) {

        contagem.innerHTML += inicio + ' - '
    }
    contagem.innerHTML += 'fim!!'
}