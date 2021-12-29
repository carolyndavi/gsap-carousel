const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".submit-btn");

const nameField = document.querySelector(".enter-name");
const phoneField = document.querySelector(".enter-phone");
const addressField = document.querySelector(".enter-address");
const emailField = document.querySelector(".enter-email");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  for (let input of inputs) {
    switch (input.name) {
      case "name":
        console.log(input.value);
        nameField.innerText = input.value;
        break;
      case "phone":
        const phoneWithoutZero = input.value.slice(1);
        const phoneWith31 = "+31" + phoneWithoutZero;
        phoneField.innerText = phoneWith31;
        break;
      case "street":
        addressField.innerText = input.value;
        break;
      case "number":
        addressField.innerText = addressField.innerText + " " + input.value;
        break;
      case "postal-code":
        addressField.innerText = addressField.innerText + " " + input.value;
        break;
      case "city":
        addressField.innerText = addressField.innerText + " " + input.value;
        break;
      case "email":
        emailField.innerText = input.value;
        const email = emailField.innerHTML;
        const splitEmail = email.split("@")[1].split(".")[0].toLowerCase();
        if (splitEmail !== "techgrounds") {
          alert(
            `${splitEmail} is not valid. Please login with @techgrounds.nl`
          );
        }
        break;
    }
  }
});
