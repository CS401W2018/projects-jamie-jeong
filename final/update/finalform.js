/*
document.getElementById("tripForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").style.display = "block";
    this.reset();
  });
  */





  document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    // alert("Form Submitted");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const season = document.getElementById('season').value;
    const beenToKorea = document.getElementById('been').value;
    const comments = document.getElementById('comments').value;
    
    if (!name) {
        alert("You need to enter your name.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        destination: destination,
        season: season,
        been: beenToKorea,
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