
function countNumbers(number) {
  number = document.getElementById("input").value;
  let result = [];

    for (i=0;i<=number;i++) {
      result.push(i);
  };
  return result;
};

function changeWord(number) {
  const result = [];
  for (let i=0;i<number.length;i++) {
    const input = number[i].toString();
    let newString = "";

    for (let s=0;s<input.length;s++) {
      if (input.includes("1")) {
        newString = "beep!";
      } else {
        newString = input;
      }
    }
    result.push(newString);
  }
    return result;
};


function handleFormSubmission (event) {
  event.preventDefault();
  number = document.getElementById("input").value;
  robogerArray = countNumbers(number);
  let beepArray = changeWord(robogerArray);
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.setAttribute("id","output")
  body.append(div);
  div.append(output);
  output.innerText = beepArray.join(", ");;
};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 

