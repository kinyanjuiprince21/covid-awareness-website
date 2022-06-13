const email = document.getElementById("email");

function emailValidation() {
    let form = document.getElementById("form");
    let emailValue = email.value;
    let message = document.getElementById("message");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(emailValue.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        message.innerHTML = "Your Email is valid"
        message.style.color = '#00ff00'
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid');
        message.innerHTML = "Please Enter a Valid Email address"
        message.style.color = '#ff0000'
    }
    if(emailValue == '') {
        form.classList.remove('valid')
        form.classList.add('invalid')
        message.innerHTML = ""
        message.style.color = '#00ff00'
    }
}

email.onkeydown = emailValidation;