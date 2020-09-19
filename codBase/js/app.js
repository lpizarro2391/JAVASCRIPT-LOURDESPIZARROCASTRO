var mdCalculadora =(function (document,undefined){
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
                setSign();
                writeDisplay(screenval);
                break;
                case btnsId.btn_raiz:
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
    if (value.long > maxLen) value = "ERROR";
    document.getElementById("display").innerHTML = value;
}

function solveOp(){
    if (screnVal.endsWith(".")) screenval.substring(0,screnVal.length-1);
    if (screenVal.length > maxLen) return;
    if (idBOp ==""){
        return;
    } else {
        nOp2 = Number(screnVal);
        switch (idBOp) {
            case btnsId.btn_mas:
                result = add(nOp1, nOp2);
                break;
            case btnsId.btn_menos:
                result = substract(nOp1, nOp2);
                break;
            case btnsId.btn_por:
                result = multiply(nOp1, nOp2);
                break;
            case btnsId.btn_div:
                result = divide(nOp1, nOp2);
                break;
            default:
                alert(error_op);
                return;
        }
        nOp2 = 0;
        screnVal = String(result);
        nOp1 = result;
    }
    if(screenVal.search(".") == -1) maxLen = 8;
    else maxLen = 10;
    newVal = true;
    writeDisplay(screnVal);
    hasPoint = false;
    idBOp = "";
    maxLen = 8;
}

function setSign(){
    result = Number(screnVal);
    result = -1 * result;
    screnVal = String(result);
}

function addPoint(){
    if (hasPoint == true) return;
    if (screnVal.length > maxLen) return;
    if (newVal == false && screnVal == "0") screnVal = "0";
    if (newVal == true || screnVal =="0") screnVal = "0";
    screnVal = screnVal + ".";
    writeDisplay(screnVal);
    maxLen = 10;
    hasPoint = true;
    newVal = false;
}

function addNumber(id){
    if (screenval.length> maxLen) return;
    if( newVal == false && screnVal.length ==maxLen) return;
    if (newVal == true || screnVal == "0") screnVal = "";
    screnVal = screnVal + id;
    writeDisplay(screnVal);
    newVal = false;
}
function addBasicOps(id){
    if (screenval.endsWith(".")) screenval = screenVal.substr(0,screenVal.length-1);
    if(screenVal.length > maxLen)return;
    if (idBOp == "") {
        nOp1 = Number(screenVal);
    } else{
        nOp2 = Number(screenVal);
        switch(idBOp){
            case btnsId.btn_mas:
                result = add(nOp1, nOp2);
                break;
            case btnsId.btn_menos:
                result = substract(nOp1, nOp2);
                break;
            case btnsId.btn_por:
                result = multiply(nOp1, nOp2);
                break
            case btnsId.btn_div:
                result = divide(nOp1, nOp2);
                break;
            default:
                alert(error_op);
                return;
        }
        if (id != idBOp) {
            idBOp = id;
        }
        nOp2 = 0;
        screenVal = String(result);
        nOp1 = result;
    }
    if (screenval.search(".") == -1)maxLen = 9;
    else maxLen = 10;
    newVal = true;
    writeDisplay(screenVal);
    hasPoint = false;
    idBOp = id;
}
// INI operaciones suma, resta, multiplicacion, division y raiz cuadrada 
function add (v1, v2){
    return v1 + v2;
}

function substract(v1, v2){
    return v1 - v2;
}

function multiply (v1, v2){
    return v1 * v2;
}
function divide (v1,v2){
    return v1 / v2;
}

// fin operaciones suma, resta , multiplicacion, division y raiz cuadrada

var initialize = function(){
    initVars()
    getBtns();
    subscribeEvents();
}

return{
    init: initialize
}

})(document);

mdCalculadora.init();
