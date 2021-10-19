//variables
let leftOperand = 0,
  rightOperand = 0,
  operator = "";
let displayStr = "";
const binaryOperators=["÷",  "×",  "−",  "+"]

//get each button and attach listener.
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", () => handleClick(button.innerHTML)));

//-------------------------------------------
//MUST HAVE:
//DONE//Take left and right operands and evaluate when = is clicked
//DONE//When +/- or % is clicked, evaluate the expr and then apply these operators. 
//Q//how do I write a generic split and evaluate instead of if/else for each operator?
//DONE//chained operations - when second operator is clicked, evaluate prev expr and store result in left operand
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
      result=evaluateExpr()*-1; 
      displayStr=result.toString();
      console.log(displayStr);
      display.value=displayStr; 
      return;
    case ("%")://evaluate and then appl;y %
      console.log("strKey => ", strKey);
      result=evaluateExpr()/100; 
      displayStr=result.toString();
      console.log(displayStr);
      display.value=displayStr; 
      return;
    case ("÷"):
    case ("×"):
    case ("−"):
    case ("+"):
      //chained operations
      //If displayStr does not contains any of the 4 operators: Evaluate and display.
      if(binaryOperators.every((binaryOperator)=> displayStr.indexOf(binaryOperator)<0)){
        displayStr=displayStr+strKey;
        display.value=displayStr;
        return;
      }else{ //If an operator (assuming only 1) is already present in displayStr then...
        //Evaluate displayStr
        result=evaluateExpr();
        console.log("chained op - result=", result);
        //Put it in Left operand
        leftOperand=result.toString();
        console.log("chained op - leftOperand=", leftOperand);
        //display left operand and the new operator
        displayStr=leftOperand+strKey;
        display.value=displayStr;        
      }      
      return;
      //end chained operations
    case ("="):
      //evaluate expr and display
      result=evaluateExpr();  
      displayStr=result.toString();
      console.log(displayStr);
      display.value=displayStr;     
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

function evaluateExpr(){
  let result=0;
  //how do I write a generic split and evaluate instead of if/else for each operator?
  // [leftOperand,operator,rightOperand]=displayStr.split("[\+]");
  // console.log(leftOperand,operator,rightOperand);
  
  //Assumptions: Only 1 operator!!!!
  //             Integers only  !!!!
  if(displayStr.indexOf("+") > 0){
    operator="+";
    [leftOperand,rightOperand]=displayStr.split(operator);
    console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result=parseInt(leftOperand)+parseInt(rightOperand);
  }else if(displayStr.indexOf("−") > 0){
    operator="−";
    [leftOperand,rightOperand]=displayStr.split(operator);
    console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result=parseInt(leftOperand)-parseInt(rightOperand);
  }else if(displayStr.indexOf("×") > 0){
    operator="×";
    [leftOperand,rightOperand]=displayStr.split(operator);
    console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result=parseInt(leftOperand)*parseInt(rightOperand);
  }else if(displayStr.indexOf("÷") > 0){
    operator="÷";
    [leftOperand,rightOperand]=displayStr.split(operator);
    console.log("evaluateExpr==>", leftOperand,operator,rightOperand);
    result=parseInt(leftOperand)/parseInt(rightOperand);     
  }else{

    result=parseInt(displayStr);
  }
  return result;
  //
  //



}