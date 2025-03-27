let signo;

function suma(){
    signo = "+";
}
function resta(){
    signo = "-";
}
function mult(){
    signo = "*";
}
function divi(){
    signo = "/";
}

function operar(signo,operando_1,operando_2){

    let solucion;
    const operando_1 = document.getElementById("operando_1");
    const operando_2 = document.getElementById("operando_2");
    
    switch (signo) {
        case "+":
            solucion = operando_1 + operando_2;
            break;
        case "-":
            solucion = operando_1 - operando_2;
            break;
        case "*":
            solucion = operando_1 * operando_2;
            break;
        case "/":
            solucion = operando_1 / operando_2;
            break;
        default:
            console.log("Error")
            break;
    }

    resultado.innerHTML = solucion;
}