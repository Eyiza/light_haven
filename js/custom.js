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

function submitForm() {
  $("#submitButton").html("<i class = 'fa fa-spinner fa-spin'></i> Sending...").css('margin', '10px');
  $("#submitButton").attr("disabled", "disabled");
  var formData = new FormData(document.forms[0]);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://script.google.com/macros/s/AKfycbzf9Hz7ynGg6lJIL_JqIlBMqS8d5JR6lxBFGa1sLRcyevRK-B0pED15dJcYD9qfjQnc/exec", true);
  xhr.send(formData);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;
      swal("Message has been sent", "", "success");
      $("#submitButton").removeAttr("disabled");
      $("#submitButton").html("Leave Message");
      $("#fname").val("");
      $("#lname").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");
    }
    else {
      swal("Message has not been sent", "Try again later", "error");
      $("#submitButton").removeAttr("disabled");
      $("#submitButton").html("Leave Message");
    }
  };
}


$('#contactForm').submit(function (e) {
  e.preventDefault();
  $("#alert-msg").hide();
  validateForm();
  fname = $("#fname").val();
  lname = $("#lname").val();
  email = $("#email").val();
  subject = $("#subject").val();
  message = $("#message").val();
  if (
    fname !== "" &&
    lname !== "" &&
    email !== "" &&
    validateEmail(email) == true &&
    subject !== "" &&
    message !== ""
  ) {
    submitForm();
  }
  else {
    return false;
  }
});
