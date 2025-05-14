// script.js
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const successMessage = document.getElementById("success-massage");

  let valid = true;

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Nama wajib diisi.";
    valid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email wajib diisi.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Email tidak valid.";
    valid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    messageError.textContent = "Pesan tidak boleh kosong.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Pesan berhasil dikirim!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
