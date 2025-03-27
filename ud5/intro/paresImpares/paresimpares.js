let entrada = prompt("Ingrese números separados por espacios:", "");
let pares = "";
let impares = "";
let noNumeros = "";

if (entrada != null) {
    let valores = entrada.split(" ");
    
    for (let i = 0; i < valores.length; i++) {
        let valor = valores[i];
        let num = Number(valor);
        
        if (num != NaN) {
            if (num % 2 == 0) {
                pares = pares + num + ", ";
            } else {
                impares = impares + num + ", ";
            }
        } else {
            noNumeros = noNumeros + valor + ", ";
        }
    }
    
    document.getElementById("pares").textContent = pares;
    document.getElementById("impares").textContent = impares;
    document.getElementById("no-numeros").textContent = noNumeros;
}