var config = {
    apiKey: "AIzaSyA5ujDaEM8ldh0vWpENpViVWqxoGz0mP6U",
    authDomain: "covid-awareness-42048.firebaseapp.com",
    databaseURL: "https://covid-awareness-42048-default-rtdb.firebaseio.com",
    projectId: "covid-awareness-42048",
    storageBucket: "covid-awareness-42048.appspot.com",
    messagingSenderId: "1012543185820",
    appId: "1:1012543185820:web:bc34d10350067b13a81e59",
    measurementId: "G-25085KK4ZM"
};
firebase.initializeApp(config);

//Reference for form collection
let formMessage = firebase.database().ref("covid-app");

//listen for submit event
document.getElementById("form").addEventListener("submit", formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let phonenumber = document.querySelector("#phoneNumber").value;
  let email = document.querySelector("#email").value;
  let option = document.querySelector("#option").value;
  let textarea = document.querySelector("#textarea").value;

  //send message values
  sendMessage(firstName,lastName,phonenumber, email, option, textarea);

  //Show Alert Message
  document.querySelector(".alert").style.display = "block";

  //Hide Alert Message After Seven Seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 7000);

  //Form Reset After Submission
  document.getElementById("form").reset();

  //Scroll to the top of the page
  window.scrollTo(0,0);
}

//Send Message to Firebase

function sendMessage(firstName,lastName,phonenumber, email, option, textarea) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    firstName: firstName,
    lastName: lastName,
    phonenumber: phonenumber,
    email: email,
    option: option,
    textarea: textarea,
  });
}
