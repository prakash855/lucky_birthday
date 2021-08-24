const dateOfBirth = document.querySelector("#date");
const luckyNumber = document.querySelector("#number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output");

function compareValues(sum, luckyNumber) {
  return sum % luckyNumber
    ? (outputBox.innerText = "I am sorry, Your Birthday is not Lucky!") && (outputBox.style.color="red")
    : (outputBox.innerText = "Hey, Congratulations!!!. Your birthday is Lucky!") && (outputBox.style.color="green")
}

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  sum && dob
    ? compareValues(sum, luckyNumber.value)
    : (outputBox.innerText = "Please enter both the fields");
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum += Number(dob[index]);
  }
  return sum;
}

checkNumber.addEventListener("click", checkBirthdayIsLucky);
