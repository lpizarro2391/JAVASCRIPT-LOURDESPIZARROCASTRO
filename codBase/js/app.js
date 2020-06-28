document.addEventListener("cargarpagina", function(){

    var display = document.getElementById("display");

    //array de elementos que reciben un listener

    var listenerBtn = [];

    //teclas adicionales del teclado

    var btnResultado = document.getElementById("igual");
    var btnOn = document.getElementById("on");
    var btnsign = document.getElementById("sign");
    var btnraiz = document.getElementById("raiz");

    listenerBtn.push(document.getElementById("punto"));

    //teclas dos operaciones
    listenerBtn.push(document.getElementById("mas"));
    listenerBtn.push(document.getElementById("menos"));
    listenerBtn.push(document.getElementById("por"));
    listenerBtn.push(document.getElementById("dividido"));

    //techas numericas de la calculadora

    listenerBtn.push(document.getElementById("0"));
    listenerBtn.push(document.getElementById("1"));
    listenerBtn.push(document.getElementById("2"));
    listenerBtn.push(document.getElementById("3"));
    listenerBtn.push(document.getElementById("4"));
    listenerBtn.push(document.getElementById("5"));
    listenerBtn.push(document.getElementById("6"));
    listenerBtn.push(document.getElementById("7"));
    listenerBtn.push(document.getElementById("8"));
    listenerBtn.push(document.getElementById("9"));

    //adicionando evento click
    for (var i =0; 1< listenerBtn.length; i++){
        listenerBtn[i].addEventListener("click", pasarValorplantalla);
    }
    btnResultado.onclick = function (){
        verificarResultado();
    }

    function verificarResultado(){
        try{
            var aux = on.value.
        }
    }




    





})