document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    // alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;
    
    if (!fullname) {
        alert("You need to enter your name.");
        return;
    }

    // if (!firstname || !lastname) {
    //     alert('First Name and Last Name cannot be blank,');
    //     return;
    // }

    if (!age || age<18) {
        alert("You need to be 18");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: pass,
        age: age,
        state: state,
        comments: comments,           
    };

    console.log(formData)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

});