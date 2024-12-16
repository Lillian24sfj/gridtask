document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (email === "") {
    document.getElementById("email").style.border =
      "2px solid hsl(4, 100%, 67%)";
    document.getElementById("email").style.backgroundColor =
      "hsla(4, 100%, 67%, 0.299";
    document.getElementById("email").placeholder = "Please enter your email";
    document.getElementById("email").style.color = "hsl(4, 100%, 67%)";
    return;
  }

  window.location.href = "sucsess.html";
});
