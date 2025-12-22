// Step 1: Select required elements
const resultScreen = document.getElementById("resultScreen");
const buttons = document.querySelectorAll(".cta-button");

let currentInput = ""; // Tracks current input
let firstOperand = null; // Stores the first number
let operator = null; // Stores the operator
let awaitingSecondOperand = false; // Tracks when awaiting the second number

// Step 2: Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.value;
      console.log("Button clicked:", value);
  
      // Step 3: Handle digit and decimal input
      if (!isNaN(value) || value === "dot") {
        console.log("1.");
        handleNumberInput(value);
      }
  
      // Step 4: Handle operator input
      else if (["+", "-", "*", "/"].includes(value)) {
        console.log("2.");
        handleOperatorInput(value);
      }
  
      // Step 5: Handle equal button
      else if (value === "=") {
        calculateResult();
      }
  
      // Step 6: Handle clear (C)
      else if (value === "delete") {
        clearCalculator();
      }
    });
  });

// Step 3: Update the display for numbers
function handleNumberInput(value) {
    if (value === "dot" && currentInput.includes(".")) return; // Prevent multiple dots
    if (awaitingSecondOperand) {
        console.log("3.1");
      currentInput = value === "dot" ? "0." : value; // Start new input
      awaitingSecondOperand = false;
    } else {
      console.log("1.2");
      currentInput += value === "dot" ? "." : value; // Append to input
    }
    updateDisplay();
  }

  // Step 4: Store operator and first operand
function handleOperatorInput(selectedOperator) {
    if (operator && awaitingSecondOperand) {
        operator = selectedOperator; // Change operator without calculating
        return;
    }
    if (!firstOperand && currentInput) {
        console.log("2.1");
        firstOperand = parseFloat(currentInput);
    }
    
    console.log("2.2");
    operator = selectedOperator;
    awaitingSecondOperand = true;
    currentInput = ""; // Reset for the next input
  }

  // Step 5: Calculate the result
function calculateResult() {
    if (!operator || !firstOperand || !currentInput) return;
    const secondOperand = parseFloat(currentInput);
    const result = performOperation(firstOperand, secondOperand, operator);
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    awaitingSecondOperand = false;
    updateDisplay();
  }

  // Step 5 (Helper): Perform basic arithmetic
function performOperation(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Error"; // Prevent division by zero
      default: return 0;
    }
  }
  
  // Step 6: Clear everything
  function clearCalculator() {
    currentInput = "";
    firstOperand = null;
    operator = null;
    awaitingSecondOperand = false;
    updateDisplay();
  }

  // Utility: Update the display
function updateDisplay() {
    resultScreen.textContent = currentInput || "0";