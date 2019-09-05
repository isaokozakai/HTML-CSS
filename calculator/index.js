
window.onload = function () {
  let resultValue = "";

  document.getElementById("clear").onclick = function (e) {
    resultValue = "";
    result.textContent = "";
  };

  document.getElementById("addition").onclick = function (e) {
    addButtonValueToTextBox("+");
  };
  document.getElementById("substruction").onclick = function (e) {
    addButtonValueToTextBox("-");
  };
  document.getElementById("multiplication").onclick = function (e) {
    addButtonValueToTextBox("×");
  };
  document.getElementById("division").onclick = function (e) {
    addButtonValueToTextBox("÷");
  };

  document.getElementById("zero").onclick = function (e) {
    addButtonValueToTextBox(0);
  };
  document.getElementById("one").onclick = function (e) {
    addButtonValueToTextBox(1);
  };
  document.getElementById("two").onclick = function (e) {
    addButtonValueToTextBox(2);
  };
  document.getElementById("three").onclick = function (e) {
    addButtonValueToTextBox(3);
  };
  document.getElementById("four").onclick = function (e) {
    addButtonValueToTextBox(4);
  };
  document.getElementById("five").onclick = function (e) {
    addButtonValueToTextBox(5);
  };
  document.getElementById("six").onclick = function (e) {
    addButtonValueToTextBox(6);
  };
  document.getElementById("seven").onclick = function (e) {
    addButtonValueToTextBox(7);
  };
  document.getElementById("eight").onclick = function (e) {
    addButtonValueToTextBox(8);
  };
  document.getElementById("nine").onclick = function (e) {
    addButtonValueToTextBox(9);
  };

  document.getElementById("dot").onclick = function (e) {
    addButtonValueToTextBox(".");
  };
  document.getElementById("equal").onclick = function (e) {
    equalsAnswer();
  };

  function addButtonValueToTextBox(whichButton) {
    let resultBox = document.getElementById("result");
    let value = whichButton;

    switch (whichButton) {
      case "+":
      case ".":
        if (resultBox.textContent && isOperator(resultBox.textContent.slice(-1))) {
          whichButton = "";
          value = "";
        }
        break;
      case "×":
        if (resultBox.textContent && !isOperator(resultBox.textContent.slice(-1))) {
          value = "*";
        } else {
          whichButton = "";
          value = "";
        }
        break;
      case "÷":
        if (resultBox.textContent && !isOperator(resultBox.textContent.slice(-1))) {
          value = "/";
        } else {
          whichButton = "";
          value = "";
        }
        break;
      case "-":
        if (!resultBox.textContent) {
          value += "0-"
        } else if (resultBox.textContent.slice(-1) == "+" || resultBox.textContent.slice(-1) == "-") {
          whichButton = "";
          value = "";
        }
        break;
      default:
        break;
    }
    resultValue += value;
    resultBox.textContent += whichButton;
  };

  function isOperator(value) {
    switch (value) {
      case "+":
      case "-":
      case "×":
      case "÷":
      case ".":
        return true;
      default:
        return false;
    }
  }

  function equalsAnswer() {
    result.textContent = eval(resultValue);
    resultValue = result.textContent;
  };
};