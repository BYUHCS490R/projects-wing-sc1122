document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !topic || !message){
        alert("Please fill out all fields.");
        return;
    }

    if (message.length < 10){
        alert("Message must be at least 10 characters.");
        return;
    }
    const formData = {
        name: name,
        email: email,
        topic: topic,
        message: message
    };

    alert("Form Submitted");
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('contactForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4){
            alert("Error submitting form.");
        }
    }
    xhr.send(JSON.stringify(formData));
});

