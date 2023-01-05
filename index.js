(function formModal() {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const ageInput = document.querySelector("#age");

  form.addEventListener("submit", function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    if (name.length < 2) {
      alert("Name must be at least 2 characters long");
    } else if (isNaN(age)) {
      alert("Age must be a number");
    } else if (!isEmail(email)) {
      alert("Email must be a valid email address");
    } else {
      const modal = document.querySelector(".modal");
      const nameSpan = document.querySelector("#modal-name");
      const emailSpan = document.querySelector("#modal-email");
      const ageSpan = document.querySelector("#modal-age");

      nameSpan.textContent = name;
      emailSpan.textContent = email;
      ageSpan.textContent = age;

      // Display the modal
      modal.style.display = "block";
    }
  });

  // When the user clicks anywhere outside the modal, close it
  window.addEventListener("click", function (event) {
    const modal = document.querySelector(".modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function isEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }
})();
