function validateRegistrationForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

function validateLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}

function validateProfileEditForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" ||password==="") {
        alert("Username and email must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
