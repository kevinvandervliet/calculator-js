// Globale variable 'calcu'. Wordt gebruikt om de variable properties te geven o.i.d

var calcu = {};

// Javascript voor Rekenmachine

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

// Onthoud Rekenmachine input

calcu.storeInput = function () {
    if (calcu.input !== ""){
        if (calcu.firstNum === "") {
            calcu.firstNum = calcu.input;
        }
        else calcu.secondNum = calcu.input;
    }
}

// Refresh Rekenmachine input. Dus je kan opnieuw een som invoeren.

calcu.clearInput = function () {
    calcu.input = "";
    calcu.hasDecimal = false;
}

// Reken het antwoord uit

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

// Funtie om op de buttons te klikken (en wat het doet)

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

  // Laten we de gehele functie loggen

    console.log(calcu);
}

calcu.init();