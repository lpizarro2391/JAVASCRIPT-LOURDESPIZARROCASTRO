var mdCalculadora =(function (document,undefined)
    var error_op = "La operacion solicitada no existe";
    var newVal = false,
        maxLen = 8,
        nOp1 = 0,
        nOp2 = 0,
        hasPoint = false;
        screenval = "0",
        idBOp = "";

var btsId = {
    btn_onc  : "on",
    btn_sign : "sign",
    btn_raiz : "raiz",
    btn_div  : "dividido",
    btn_por  : "por",
    btn_menos : "menos",
    btn_punto : "punto",
    btn_igual : "igual",
    btn_mas   : "mas"
};

var domBtns;

function initVars(){
    newVal = false;
    maxLen = 9;
    nOp1 = 0;
    nOp2 = 0;
    result = 0;
    hasPoint = false;
    screenval = "0",
    idBOp = "";
};

var domBtns;

function initVars(){
    newVal = false;
    maxLen = 8;
    nOp1 = 0;
    nOp2 = 0;
    result = 0;
    hasPoint = false;
    screenval = "0",
    idBOp = "";

}

var getBtns = function(){
    domBtns = document.getElementsByClassName("tecla");
}

var subscribeEvents = function() {
    for(var i = 0, len = domBtns.length; i < len; i++){
        domBtns[i].onclick = events.eBtnClick;
    }
}

var events = {
    eBtnClick: function(e){
        switch(this.id) {
            case btnsId.btn_onc :
                initVars();
                writeDisplay(screenval);
                break;
                case btnsId.btn_sign: 
                initVars();
                writeDisplay(screenval);
                break;
                case btnsId.btn_punto:
                    addPoint();
                break;
                case btnsId.btn_igual:
                    solveOp();
                break;
                case btnsId.btn_mas :
                case btnsId.btn_menos:
                case btnsId.btn_por: 
                case btnsId.btn_div: 
                    addBasicOps(this.id);
                    break;
                    default:
                        addNumber(this.id);
        }
    }
}

function writeDisplay(value){
    if (value.long > maxLength) value = "ERROR";
    document.getElementById("display").innerHTML = value;
}







}






)