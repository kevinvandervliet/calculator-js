var calcu = {};

calcu.init = function () {
    calcu.opr = "",
    calcu.firstNum = "",
    calcu.secondNum = "",
    calcu.input = "",
    calcu.calculated = false,
    calcu.first = true,
    calcu.hasDecimal = false,
    calcu.screen = document.getElementById("screen"),
    calcu.screen.innerText = "0";
}

calcu.storeInput = function () {
    if (calcu.input !== ""){
        if (calcu.firstNum === "") {
            calcu.firstNum = calcu.input;
        }
        else calcu.secondNum = calcu.input;
    }
}

calcu.clearInput = function () {
    calcu.input = "";
    calcu.hasDecimal = false;
}

calcu.calculate = function () {
    switch (calcu.opr) {
        case "+":
            calcu.firstNum = String(Number(calcu.firstNum) + Number(calcu.secondNum));
            break;
        case "-":
            calcu.firstNum = String(Number(calcu.firstNum) - Number(calcu.secondNum));
            break;
        case "*":
            calcu.firstNum = String(Number(calcu.firstNum) * Number(calcu.secondNum));
            break;
        case "/":
            calcu.firstNum = String(Number(calcu.firstNum) / Number(calcu.secondNum));
            break;
    }
}

calcu.buttonClick = function (button) {
    if (button === "C" || button === "=" || button === "*" || button === "/" || button === "+" || button === "-") {
        calcu.storeInput();
        
        switch (button) {
            case "C":
                calcu.init();
                break;
            case "=":
                calcu.calculate();
                calcu.calculated = true;
                break;
            default:
                
                calcu.opr = button;
                if (!calcu.calculated && calcu.firstNum !== "" && calcu.secondNum !== ""){
                    calcu.calculate();
                }
                calcu.calculated = false;
        }
        calcu.clearInput();
    }
    else if (button === ".") {
         if (!calcu.hasDecimal){
             calcu.input = calcu.input + button;
             calcu.hasDecimal = true;
         }
    }
    else {
        if (calcu.calculated) {
            calcu.init();
        }
        calcu.input = calcu.input + button;
    }
    //Update screen
    if(calcu.input !== ""){
        calcu.screen.innerText = calcu.input;
    } else calcu.screen.innerText = +(Number(calcu.firstNum)).toFixed(9);

    console.log(calcu);
}

calcu.init();