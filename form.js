document.addEventListener("DOMContentLoaded", function () {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const signupFormContainer = document.getElementById("signupFormContainer");
    const showSignupFormLink = document.getElementById("showSignupForm");

    showSignupFormLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginFormContainer.style.display = "none";
        signupFormContainer.style.display = "block";
    });
});