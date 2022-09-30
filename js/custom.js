console.log("the script is properly referenced");

var alertFname = $("#alert-fname-msg"); // alert div for show alert message
var alertLname = $("#alert-lname-msg"); // alert div for show alert message
var alertEmail = $("#alert-email-msg"); // alert div for show alert message
var alertSubject = $("#alert-subject-msg"); // alert div for show alert message
var alertMessage = $("#alert-message-msg"); // alert div for show alert message

$("#email").on("keyup", function () {
  let isValid = validateEmail($("#email").val());
  if (isValid) {
    alertEmail.fadeOut("slow");
  } else {
    alertEmail
      .html("<small style='float:right'>Email is invalid</small>")
      .css("color", "red")
      .fadeIn("slow");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateForm() {
  var fnameIs = document.forms["contactForm"]["fname"].value;
  var lnameIs = document.forms["contactForm"]["lname"].value;
  var emailIs = document.forms["contactForm"]["email"].value;
  var subjectIs = document.forms["contactForm"]["subject"].value;
  var messageIs = document.forms["contactForm"]["message"].value;

  if (emailIs === "" || emailIs === null) {
    alertEmail
      .html("<small style='float:right'>Your email is required</small>")
      .css("color", "red")
      .fadeIn("slow");
  }
  if (fnameIs === "" || fnameIs === null) {
    alertFname
      .html("<small style='float:right'>Your firstname is required</small>")
      .css("color", "red")
      .fadeIn("slow");
  }
  if (lnameIs === "" || lnameIs === null) {
    alertLname
      .html("<small style='float:right'>Your lastname is required</small>")
      .css("color", "red")
      .fadeIn("slow");
  }
  if (subjectIs === "" || subjectIs === null) {
    alertSubject
      .html("<small style='float:right'>Your subject is required</small>")
      .css("color", "red")
      .fadeIn("slow");
  }
  if (messageIs === "" || messageIs === null) {
    alertMessage
      .html("<small style='float:right'>Your message is required</small>")
      .css("color", "red")
      .fadeIn("slow");
  }

  $("#email").on("keyup", function () {
    let isValid = validateEmail($("#email").val());

    isValid && alertEmail.fadeOut("slow");
  });

  $("#fname").keyup(function () {
    console.log("skhfks");
    alertFname.fadeOut("slow");
  });
  $("#lname").keyup(function () {
    alertLname.fadeOut("slow");
  });
  $("#subject").on("keyup", function () {
    alertSubject.fadeOut("slow");
  });
  $("#message").on("keyup", function () {
    alertMessage.fadeOut("slow");
  });
}


