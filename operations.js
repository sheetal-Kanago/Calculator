//variables
let leftOperand = 0,
  rightOperand = 0,
  operator = "";
let displayStr = "";

//get each DOM element in a const.
const display = document.querySelector(".display");
//  const buttonC = document.querySelector(".button--C");
// const buttonPlusMinus = document.querySelector(".button--plusMinus");
// const buttonPercent = document.querySelector(".button--percent");
// const buttonDivide = document.querySelector(".button--divide");
//  const buttonNum7 = document.querySelector(".button--num7");
// const buttonNum8 = document.querySelector(".button--num8");
// const buttonNum9 = document.querySelector(".button--num9");
// const buttonMultiply = document.querySelector(".button--multiply");
// const buttonNum4 = document.querySelector(".button--num4");
// const buttonNum5 = document.querySelector(".button--num5");
// const buttonNum6 = document.querySelector(".button--num6");
// const buttonMinus = document.querySelector(".button--minus");
// const buttonNum1 = document.querySelector(".button--num1");
// const buttonNum2 = document.querySelector(".button--num2");
// const buttonNum3 = document.querySelector(".button--num3");
// const buttonPlus = document.querySelector(".button--plus");
// const buttonNum0 = document.querySelector(".button--num0");
// const buttonDecimal = document.querySelector(".button--decimal");
// const buttonEquals = document.querySelector(".button--equals");
const buttons = document.querySelectorAll(".button");
// console.log(buttons);
buttons.forEach(button => button.addEventListener("click", () => handleClick(button.innerHTML)));


//On number click - display it
// buttonNum0.addEventListener("click",() => {  
//   console.log("Button buttonNum0 clicked", buttonNum0.innerHTML);
//   displayStr=displayStr+buttonNum0.innerHTML;
//   display.value=displayStr;
// });
//-------------------------------------------




//-------------------------------------------
//MUST HAVE:
//Take left and right operands and evaluate when = is clicked
//Q//how do I write a generic split and evaluate instead of if/else for each operator?
//chained operations - when second operator is clicked, evaluate prev expr and store result in left operand
//handle decimals

//GOOD TO HAVE
//add comma at thousands place.
//handle length of input > display - reduce font? till when??
//
function handleClick(strKey) {
  console.log("Starting handleClick(" + strKey + ")");
  switch (strKey) {
    case ("C"):
      displayStr="0";
      display.value=displayStr;
      return;
    case ("±")://evaluate and then applu -/+
      console.log("strKey => ", strKey);
      return;
    case ("%")://evaluate and then appl;y %
      console.log("strKey => ", strKey);
      return;

    case ("÷"):
    case ("×"):
    case ("−"):
    case ("+"):
      displayStr=displayStr+strKey;
      display.value=displayStr;
      return;
    case ("="):
    //evaluate expr and display
    evalAndDisplay();  
    // console.log("strKey => ", strKey);
      
      return;

    case ("0"):      
    case ("1"):
    case ("2"):
    case ("3"):
    case ("4"):
    case ("5"):
    case ("6"):
    case ("7"):
    case ("8"):
    case ("9"):
      // console.log("strKey => ", strKey);
      if (displayStr==="0"){
        console.log("in displayStr=0");
        displayStr=strKey;
      }else{
        displayStr=displayStr+strKey;
      }
      
      display.value=displayStr;
      return;
    case ("."):
      console.log("strKey => ", strKey);
      return;
    default:
      console.log("Default case");
      return;
  }
}

function evalAndDisplay(){
  let result=0;
  //how do I write a generic split and evaluate instead of if/else for each operator?
  
  // [leftOperand,operator,rightOperand]=displayStr.split("[\+]");
  // console.log(leftOperand,operator,rightOperand);
  
  //Assumptions: Only 1 operator!!!!
  //             Integers only  !!!!
  if(displayStr.indexOf("+") > 0){
    operator="+";
    [leftOperand,rightOperand]=displayStr.split("+");
    console.log(leftOperand,operator,rightOperand);
    result=parseInt(leftOperand)+parseInt(rightOperand);
    displayStr=result.toString();
    console.log(displayStr);
    display.value=displayStr;
  }



}