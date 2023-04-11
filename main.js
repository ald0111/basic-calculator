let numbers;
let value1 = "";
let value1Sign = "+";
let value2 = "";
let value2Sign = "+";
let oneOrTwo = true;
let result = "0";
let op = "";
let output;
// let
if (value1.length) {
  console.log("hiiiiii");
}
const numberHandler = (event) => {
  if (oneOrTwo) {
    value1 = value1 + event.target.value;
  } else {
    value2 = value2 + event.target.value;
  }
  updateUI();
  console.log(value1 + " --- " + value2);
};

const updateUI = (res = false) => {
  //   console.error(sign);
  //   if (res) {
  //     console.error(result);
  //     return;
  //   }
  //   if (oneOrTwo && value1.length) {
  //     console.error(value1Sign, value1);
  //   } else if (value2.length) {
  //     console.error(value2Sign, value2);
  //   }
  if (res) {
    output.innerText = `${result}`;
    return;
  }
  if (oneOrTwo && value1.length) {
    if (value1Sign === "-") {
      output.innerText = `${value1Sign}${value1}`;
    } else {
      output.innerText = `${value1}`;
    }
  } else if (value2.length) {
    if (value2Sign === "-") {
      output.innerText = `${value2Sign}${value2}`;
    } else {
      output.innerText = `${value2}`;
    }
  }
};

document.addEventListener("DOMContentLoaded", (d, e) => {
  numbers = document.getElementsByClassName("numbers");
  Array.from(numbers).forEach((number) => {
    console.log(number);
    number.addEventListener("click", numberHandler);
  });
  let add = document.getElementById("add");
  let calc = document.getElementById("calc");
  let dot = document.getElementById("dot");
  let sub = document.getElementById("sub");
  let mul = document.getElementById("mul");
  let div = document.getElementById("div");
  let mod = document.getElementById("mod");
  let ac = document.getElementById("ac");
  output = document.getElementById("output");
  let signBtn = document.getElementById("sign");
  let sqrt = document.getElementById("sqrt");
  //   add.addEventListener("click", () => {
  //     if (value2.length) {
  //       value1 = eval(value1 + " + " + value2).toString();
  //       value2 = "";
  //     } else {
  //       oneOrTwo = false;
  //     }
  //   });
  dot.addEventListener("click", () => {
    if (oneOrTwo) {
      value1 = value1 + ".";
    } else {
      value2 = value2 + ".";
    }
    updateUI();
  });
  ac.addEventListener("click", () => {
    value1 = "";
    value1Sign = "+";
    value2 = "";
    value2Sign = "+";
    oneOrTwo = true;
    result = "0";
    op = "";
    updateUI((res = true));
  });
  signBtn.addEventListener("click", () => {
    if (oneOrTwo) {
      if (value1Sign === "+") {
        value1Sign = "-";
      } else {
        value1Sign = "+";
      }
    } else {
      if (value2Sign === "+") {
        value2Sign = "-";
      } else {
        value2Sign = "+";
      }
    }
    updateUI();
  });
  sqrt.addEventListener("click", () => {
    if (value1.length) {
      result = eval(`(${value1Sign}${value1})**(1/2)`);
      value1Sign = "+";
      value2Sign = "+";
      result =
        Math.round((result + Number.EPSILON) * 100000000000000) /
        100000000000000;
      result = result.toString();
      value1 = "";
      value2 = "";
      updateUI((res = true));
    } else if (result.length) {
      result = eval(`(${result})**(1/2)`) | "";
      value1Sign = "+";
      value2Sign = "+";
      result =
        Math.round((result + Number.EPSILON) * 100000000000000) /
        100000000000000;
      result = result.toString();
      value1 = "";
      value2 = "";
      updateUI((res = true));
    }
    console.log(value1 + " --- " + value2);
  });
  add.addEventListener("click", () => {
    op = "+";
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //value1 = value1Sign + value1;

      oneOrTwo = false;
      if (value2.length) {
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})+(${value2Sign}${value2})`) | "";
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = result;
        value2 = "";
      }
      //   value1 = "";
    }
    updateUI();
    console.log(value1 + " --- " + value2);
  });

  sub.addEventListener("click", () => {
    op = "-";
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //value1 = value1Sign + value1;

      oneOrTwo = false;
      if (value2.length) {
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})-(${value2Sign}${value2})`) | "";
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = result;
        value2 = "";
      }
      //   value1 = "";
    }
    updateUI();
    console.log(value1 + " --- " + value2);
  });

  mul.addEventListener("click", () => {
    op = "*";
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //value1 = value1Sign + value1;

      oneOrTwo = false;
      if (value2.length) {
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})*(${value2Sign}${value2})`) | "";
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = result;
        value2 = "";
      }
      //   value1 = "";
    }
    updateUI();
    console.log(value1 + " --- " + value2);
  });

  div.addEventListener("click", () => {
    op = "/";
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //value1 = value1Sign + value1;

      oneOrTwo = false;
      if (value2.length) {
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})/(${value2Sign}${value2})`) | "";
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = result;
        value2 = "";
      }
      //   value1 = "";
    }
    updateUI();
    console.log(value1 + " --- " + value2);
  });

  mod.addEventListener("click", () => {
    op = "%";
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //value1 = value1Sign + value1;

      oneOrTwo = false;
      if (value2.length) {
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})%(${value2Sign}${value2})`) | "";
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = result;
        value2 = "";
      }
      //   value1 = "";
    }
    updateUI();
    console.log(value1 + " --- " + value2);
  });

  calc.addEventListener("click", () => {
    if (value1.length) {
      //   value2 = value2 + value1 + "+";
      //   oneOrTwo = false;
      if (value2.length) {
        // //value1 = value1Sign + value1;
        //
        //value2 = value2Sign + value2;

        result = eval(`(${value1Sign}${value1})${op}(${value2Sign}${value2})`);
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = "";
        value2 = "";
        oneOrTwo = true;
        op = "";
        updateUI((res = true));

        console.log(result);
        return;
      }
      if (op.length) {
        //value1 = value1Sign + value1;

        result = eval(`(${result})${op}(${value1Sign}${value1})`);
        value1Sign = "+";
        value2Sign = "+";
        result =
          Math.round((result + Number.EPSILON) * 100000000000000) /
          100000000000000;
        result = result.toString();
        value1 = "";
        value2 = "";
        oneOrTwo = true;
        op = "";
        value1 = "";
        updateUI((res = true));

        console.log(result);
        return;
      }
      result = value1;
    }
    updateUI((res = true));

    console.log(result);
  });

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "1":
        console.error("one");
        numbers[6].click();
        break;

      case "2":
        console.error("one");
        numbers[7].click();
        break;

      case "3":
        console.error("one");
        numbers[8].click();
        break;

      case "4":
        console.error("one");
        numbers[3].click();
        break;
      case "5":
        console.error("one");
        numbers[4].click();
        break;
      case "6":
        console.error("one");
        numbers[5].click();
        break;
      case "7":
        console.error("one");
        numbers[0].click();
        break;
      case "8":
        console.error("one");
        numbers[1].click();
        break;
      case "9":
        console.error("one");
        numbers[3].click();
        break;
      case "0":
        console.error("one");
        numbers[9].click();
        break;
      case ".":
        console.error("one");
        dot.click();
        break;
      case "+":
        console.error("one");
        add.click();
        break;
      case "-":
        console.error("one");
        sub.click();
        break;
      case "*":
        console.error("one");
        mul.click();
        break;
      case "/":
        console.error("one");
        div.click();
        break;
      case "%":
        console.error("one");
        mod.click();
        break;
      case "Enter":
      case "=":
        console.error("one");
        calc.click();
        break;
      case "C":
      case "c":
        console.error("one");
        ac.click();
        break;

      default:
        console.error(event.key);
        break;
    }
  });
});
