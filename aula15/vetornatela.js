valores = [1, 5, 7, 9]

for(let  pos=0; pos< valores.length; pos++) {
    console.log(valores[pos]);
}

for(let pos in valores) {
    console.log(`A posição ${pos} temm o valor ${valores[pos]}`)
}