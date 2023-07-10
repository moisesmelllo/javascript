function calculartabuada() {
    var txtnumero = document.getElementById("numero");
    var tabuada = document.getElementById("tabuada");
    if (txtnumero.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(txtnumero.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}