function popup() {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const ageInput = document.querySelector("#age");
  const modal = document.querySelector(".modal");
  const nameSpan = document.querySelector("#modal-name");
  const emailSpan = document.querySelector("#modal-email");
  const ageSpan = document.querySelector("#modal-age");

  async function getGitHubProfile(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function isEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function validateForm() {
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;
    const gitHubUsername = document.querySelector("#gitHubUsername").value;

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

  async function openModal() {
    const gitHubUsername = document.querySelector("#gitHubUsername").value;
    const gitHubProfile = await getGitHubProfile(gitHubUsername);
    nameSpan.textContent = nameInput.value;
    emailSpan.textContent = emailInput.value;
    ageSpan.textContent = ageInput.value;
    document.querySelector("#modal-avatar").src = gitHubProfile.avatar_url;
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  async function handleFormSubmit(event) {
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
}

const popupManager = popup();
