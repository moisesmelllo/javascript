function Contar() {
    var txtinicio = document.getElementById("inicio").value;
    var txtfim = document.getElementById("fim").value;
    var txtpasso = document.getElementById("passo").value;
    var contagem = document.getElementById("contagem");

    if (txtinicio.length == 0 || txtfim.length == 0 || txtpasso.length == 0) {
        contagem.innerHTML = 'IMPOSSIVEL CONTAR!'
    } else {
        

        var inicio = Number(txtinicio)
        var fim = Number(txtfim)
        var passo = Number(txtpasso)
        contagem.innerHTML = ''
        if (passo == 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {

                contagem.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo) {
                contagem.innerHTML += `${c} \u{1f449}`
            } 
        }
        
        contagem.innerHTML += `\u{1f3c1}`
    }
}