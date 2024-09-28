
//How to stop submitting the page  or stop reload the page when we click the submit button
// var forms = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// forms.addEventListener("Submit", function (ev) {
//     ev.preventDefault();
//     if(inp1.value.trim() ==="" || inp2.value.trim() === ""){
//         console.log("error");
//     }
// })



document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear any previous error messages
    clearErrors();

    // Check if fields are empty
    let isValid = true;

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");

    if (nameField.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (emailField.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    }

    // If form is valid, you can submit the form or perform other actions
    if (isValid) {
        alert("Form submitted successfully!");
        // You can use this line if you want to actually submit the form
        // event.target.submit();
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(span) {
        span.textContent = "";
    });
}
