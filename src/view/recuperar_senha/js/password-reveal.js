const txtPassword = document.getElementById("password");

document.getElementById("pass-reveal-png").addEventListener("click", () => {
   if (txtPassword.type === "password") {
      txtPassword.type = "text";
   } else {
      txtPassword.type = "password";
   }
});
