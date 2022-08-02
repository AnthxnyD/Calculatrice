var btn = document.querySelectorAll(".num");
var display=document.getElementById("txtDisplay");
var btncanc=document.getElementById("canc");
var currentOp=document.querySelectorAll(".operazione");
var resul=document.getElementById("equal");
var OP = null;

function pressnum(){
    var num = this.innerHTML;
    display.value=display.value+num;
}

for (let i = 0; i < btn.length; i++) {
    const btnNum = btn[i];
    btnNum.addEventListener("click", pressnum);
}
function cancella(){
    display.value= "";
}

btncanc.addEventListener("click", cancella);

function pressOp() {
    prevNumber = parseInt(display.value);
    currentOp = this.innerHTML;
    display.value = "";
  }
  
for (let i = 0; i < currentOp.length; i++) {
    const Op = currentOp[i];
    Op.addEventListener("click", pressOp); 
}


function executeCalc() {
    var currentNumber = parseInt(display.value);
    var result;

    switch (currentOp) {
        case '+':
            result = prevNumber + currentNumber;
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
    }
    display.value = result;

}

resul.addEventListener("click", executeCalc);