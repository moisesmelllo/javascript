function calculartabuada() {
    var txtnumero = document.getElementById("numero");
    var numero = Number(txtnumero.value);
    var tabuada = document.getElementById("tabuada");
    tabuada.value = ""; // Clear the previous content of tabuada

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        tabuada.value += numero + " x " + i + " = " + resultado + "\n";
    }
}
