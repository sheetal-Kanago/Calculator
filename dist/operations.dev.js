"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//variables
var leftOperand = 0,
    rightOperand = 0,
    operator = "";
var displayStr = "";
var binaryOperators = ["÷", "×", "−", "+"]; //get each button and attach listener.

var display = document.querySelector(".display");
var buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  return button.addEventListener("click", function () {
    return handleClick(button.innerHTML);
  });
}); //-------------------------------------------
//MUST HAVE:
//DONE//Take left and right operands and evaluate when = is clicked
//DONE//When +/- or % is clicked, evaluate the expr and then apply these operators. 
//Q//how do I write a generic split and evaluate instead of if/else for each operator? -- regex to be discssed next week. Ignore for now
//DONE//chained operations - when second operator is clicked, evaluate prev expr and store result in left operand
//handle decimals - trailing zeros. Multiple decimal places. //004.000500
//e- for small decimals
//GOOD TO HAVE
// deal with 0.1+0.2 = 0.30000003
//add comma at thousands place. USe set/get method for display and convert every time
//handle length of input > display - reduce font? till when??. Handle this in set display function above.
//long numbers using e and limit to 20 characters

function handleClick(strKey) {
  //console.log("Starting handleClick(" + strKey + ")");
  switch (strKey) {
    case "C":
      displayStr = "0";
      setDisplay(displayStr); // display.value=displayStr;

      return;

    case "±":
      //evaluate and then applu -/+
      //console.log("strKey => ", strKey);
      result = evaluateExpr() * -1;
      displayStr = result.toString(); //console.log(displayStr);

      setDisplay(displayStr); // display.value=displayStr; 

      return;

    case "%":
      //evaluate and then appl;y %
      //console.log("strKey => ", strKey);
      result = evaluateExpr() / 100;
      displayStr = result.toString(); //console.log(displayStr);

      setDisplay(displayStr); // display.value=displayStpr; 

      return;

    case "÷":
    case "×":
    case "−":
    case "+":
      //chained operations
      //If displayStr does not contains any of the 4 operators: Evaluate and display.
      if (binaryOperators.every(function (binaryOperator) {
        return displayStr.indexOf(binaryOperator) < 0;
      })) {
        displayStr = displayStr + strKey;
        display.value = displayStr;
        return;
      } else {
        //If an operator (assuming only 1) is already present in displayStr then...
        //Evaluate displayStr
        result = evaluateExpr(); //console.log("chained op - result=", result);
        //Put it in Left operand

        leftOperand = result.toString(); //console.log("chained op - leftOperand=", leftOperand);
        //display left operand and the new operator

        displayStr = leftOperand + strKey;
        setDisplay(displayStr); // display.value=displayStr;        
      }

      return;
    //end chained operations

    case "=":
      //evaluate expr and display
      result = evaluateExpr();
      displayStr = result.toString(); //console.log(displayStr);

      setDisplay(displayStr); // display.value=displayStr;     

      return;

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      // console.log("strKey => ", strKey);
      if (displayStr === "0") {
        //console.log("in displayStr=0");
        displayStr = strKey;
      } else {
        displayStr = displayStr + strKey;
      }

      setDisplay(displayStr); // display.value=displayStr;

      return;

    case ".":
      //console.log("strKey => ", strKey);
      //if operator exists, split string and chk if 2nd operand has decimal. If yes - ignore the decimal, if not, add it.
      //If operator does not exist, check if decimal exists, if yes ignore this key else add it
      if (binaryOperators.every(function (binaryOperator) {
        return displayStr.indexOf(binaryOperator) < 0;
      })) {
        //operator does not exist
        if (displayStr.indexOf(".") < 0) {
          //decimal does not exist
          displayStr = displayStr + strKey;
          setDisplay(displayStr);
          return;
        } else {
          //decimalalready exists - ignore.
          return;
        }
      } else {
        //operator exists - consider only right operand
        var index = displayStr.indexOf("+") + displayStr.indexOf("−") + displayStr.indexOf("×") + displayStr.indexOf("÷") + 3;
        rightOperand = displayStr.substring(index - 1);

        if (rightOperand.indexOf(".") < 0) {
          //decimal does not exist
          displayStr = displayStr + strKey;
          setDisplay(displayStr);
          return;
        } else {
          //decimalalready exists - ignore.
          return;
        }
      }

      return;

    default:
      //console.log("Default case");
      return;
  }
} //


function evaluateExpr() {
  var result = 0; //how do I write a generic split and evaluate instead of if/else for each operator?
  // [leftOperand,operator,rightOperand]=displayStr.split("[\+]");
  // console.log(leftOperand,operator,rightOperand);
  //Assumptions: Only 1 operator!!!!
  //             Integers only  !!!!

  if (displayStr.indexOf("+") > 0) {
    operator = "+";

    var _displayStr$split = displayStr.split(operator);

    var _displayStr$split2 = _slicedToArray(_displayStr$split, 2);

    leftOperand = _displayStr$split2[0];
    rightOperand = _displayStr$split2[1];
    //console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result = parseFloat(leftOperand) + parseFloat(rightOperand);
  } else if (displayStr.indexOf("−") > 0) {
    operator = "−";

    var _displayStr$split3 = displayStr.split(operator);

    var _displayStr$split4 = _slicedToArray(_displayStr$split3, 2);

    leftOperand = _displayStr$split4[0];
    rightOperand = _displayStr$split4[1];
    //console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result = parseFloat(leftOperand) - parseFloat(rightOperand);
  } else if (displayStr.indexOf("×") > 0) {
    operator = "×";

    var _displayStr$split5 = displayStr.split(operator);

    var _displayStr$split6 = _slicedToArray(_displayStr$split5, 2);

    leftOperand = _displayStr$split6[0];
    rightOperand = _displayStr$split6[1];
    //console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result = parseFloat(leftOperand) * parseFloat(rightOperand);
  } else if (displayStr.indexOf("÷") > 0) {
    operator = "÷";

    var _displayStr$split7 = displayStr.split(operator);

    var _displayStr$split8 = _slicedToArray(_displayStr$split7, 2);

    leftOperand = _displayStr$split8[0];
    rightOperand = _displayStr$split8[1];
    //console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result = parseFloat(leftOperand) / parseFloat(rightOperand);
  } else {
    result = parseFloat(displayStr);
  }

  return result;
}

function setDisplay(result) {
  //add commas and set value
  if (typeof result == 'number') {
    display.value = result.toString();
    return;
  }

  display.value = result;
  return;
}

function getDisplay() {
  //remove commas and return the value
  return displayStr;
}