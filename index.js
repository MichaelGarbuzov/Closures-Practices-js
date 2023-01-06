const popup = (function () {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const ageInput = document.querySelector("#age");
  const modal = document.querySelector(".modal");
  const nameSpan = document.querySelector("#modal-name");
  const emailSpan = document.querySelector("#modal-email");
  const ageSpan = document.querySelector("#modal-age");

  function isEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function validateForm() {
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    if (name.length < 2) {
      alert("Name must be at least 2 characters long");
      return false;
    } else if (isNaN(age)) {
      alert("Age must be a number");
      return false;
    } else if (!isEmail(email)) {
      alert("Email must be a valid email address");
      return false;
    }
    return true;
  }

  function openModal() {
    nameSpan.textContent = nameInput.value;
    emailSpan.textContent = emailInput.value;
    ageSpan.textContent = ageInput.value;
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      openModal();
    }
  }

  form.addEventListener("submit", handleFormSubmit);
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  return {
    openModal: openModal,
    closeModal: closeModal,
  };
})();
