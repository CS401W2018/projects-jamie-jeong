document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const full = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const age = parseInt(document.getElementById("age").value,10);
    const state = document.getElementById("state").value;

    if (!full) {
        alert("Please provide your full name.");
        return;
    }

    if (!email) {
        alert("Please provide your email.");
        return;
    }

    if (!pass || pass.length <6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    if (isNaN(age) || age < 18) {
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    if (state === "Select") {
        alert("Please select your state.");
        return;
    }
    
    const data = {
        fullname: full,
        email: email,
        password: pass,
        age: age,
        state: state
    };

    console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});
