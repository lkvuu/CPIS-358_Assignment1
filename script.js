/* all files */

// show a message inside an element and change its color
function showMessage(id, text, color) {
    document.getElementById(id).innerHTML = text;
    document.getElementById(id).style.color = color;
}

// onfocus
function focusField(field) {
    field.style.background = "lightyellow";
}

// onblur
function blurField(field) {
    field.style.background = "white";
}

// onreset
function formReset() {
    window.alert("The form was cleared");
}

// signup + profile
function checkPasswords() {
    var password = document.getElementById("signup-password").value;
    var confirmPass = document.getElementById("confirm-password").value;

    if (password == "") {
        window.alert("Please enter a password.");
        return false;
    }
    else if (password != confirmPass) {
        window.alert("Passwords do not match!");
        document.getElementById("confirm-password").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("confirm-password").style.border = "2px solid green";
        return true;
    }
}


/* index.html */

// mouse over a box 
function highlightBox(box) {
    box.style.backgroundColor = "rgb(220, 235, 255)";
    box.style.borderColor = "rgb(47, 113, 206)";
}

// mouse leaves the box 
function normalBox(box) {
    box.style.backgroundColor = "rgb(234, 230, 224)";
    box.style.borderColor = "black";
}

// dynamic picture and text
var carNumber = 1;

function nextCar() {
    carNumber++;
    if (carNumber > 3) {
        carNumber = 1;
    }
    showCar();
}

function previousCar() {
    carNumber--;
    if (carNumber < 1) {
        carNumber = 3;
    }
    showCar();
}

function showCar() {
    var image;
    var text;

    switch (carNumber) {
        case 1:
            image = "images/Toyota_Yaris.jpeg";
            text = "Toyota Yaris - Economy Sedan - 100 SAR / day";
            break;
        case 2:
            image = "images/Hyundai_Tucson.jpeg";
            text = "Hyundai Tucson 2026 - Mid-size SUV - 210 SAR / day";
            break;
        case 3:
            image = "images/Chevrolet_Tahoe.jpeg";
            text = "Chevrolet Tahoe 2026 - Full-size SUV - 420 SAR / day";
            break;
    } 

    document.getElementById("carShow").innerHTML =
        "<img id='carImage' src='" + image + "' alt='Car' width='300' height='200'>" +
        "<p><strong>" + text + "</strong></p>";
}

function zoomCar() {
    var image = document.getElementById("carImage");

    if (image.style.width == "450px") {
        image.style.width = "300px";
        image.style.height = "200px";
    }
    else {
        image.style.width = "450px";
        image.style.height = "300px";
    }
}


/* search.html */

function validateSearch() {
    var pickLocation = document.forms["searchForm"]["location"].value;
    var pickDate = document.forms["searchForm"]["pickup-date"].value;
    var pickTime = document.forms["searchForm"]["pickup-time"].value;
    var dropDate = document.forms["searchForm"]["dropoff-date"].value;
    var dropTime = document.forms["searchForm"]["dropoff-time"].value;

    if (pickLocation == "") {
        window.alert("Please enter a pick-up location.");
    }
    else if (pickDate == "" || pickTime == "") {
        window.alert("Please choose the pick-up date and time.");
    }
    else if (dropDate == "" || dropTime == "") {
        window.alert("Please choose the drop-off date and time.");
    }
    else {
        window.alert("Searching available cars in " + pickLocation + "...");
    }
}


/* result.html */

// calculate total price for every car 

function calculateTotal() {
    var days = parseInt(document.getElementById("days").value);

    if (days >= 1 && days <= 30) {
        var list = "<h3>Total price for " + days + " days:</h3><ul>";

        for (var i = 1; i <= 6; i++) {
            var carName = document.getElementById("car" + i).innerHTML;
            var rate = parseInt(document.getElementById("rate" + i).innerHTML);
            var total = rate * days;

            
            var priceType = (rate < 200) ? "Economy price" : "Premium price";

            list += "<li>" + carName + " (" + priceType + "): " + rate + " x " + days +
                    " = <strong>" + total + " SAR</strong></li>";
        } 

        list += "</ul>";

        
        var weeks = 0;
        var remaining = days;

        while (remaining >= 7) {
            weeks++;
            remaining -= 7;
        } 

        
        if (days % 7 == 0) {
            list += "<p>Your rental is exactly " + weeks + " week(s).</p>";
        }
        else if (weeks > 0) {
            list += "<p>Your rental is " + weeks + " week(s) and " + remaining + " day(s).</p>";
        }

        document.getElementById("totals").innerHTML = list;
        document.getElementById("totals").style.color = "black";
    }
    else {
        document.getElementById("totals").innerHTML = "Please enter a number of days from 1 to 30.";
        document.getElementById("totals").style.color = "red";
    }
}


function showPriceSummary() {
    var i = 1;
    var highest = 0;
    var cheapCars = 0;
    var rate;

    do {
        rate = parseFloat(document.getElementById("rate" + i).innerHTML);
            if (rate > highest) {
                highest = rate;
            }

            if (rate < 200) {
                cheapCars++;
            }

            i++;
        } while (i <= 6);

    document.getElementById("summary").innerHTML =
        "<h3>Price Summary</h3>" +
        "<p>Highest daily rate: " + highest + " SAR</p>" +
        "<p>Cars under 200 SAR / day: " + cheapCars + "</p>" +
        "<p>Cars from 200 SAR / day and more: " + (6 - cheapCars) + "</p>";
}


/* policy.html */

// show / hide the refund table
function toggleRefund() {
    var table = document.getElementById("refundTable");

    if (table.style.display == "none") {
        table.style.display = "table";
        document.getElementById("refundBtn").innerHTML = "Hide Refund Table";
    }
    else {
        table.style.display = "none";
        document.getElementById("refundBtn").innerHTML = "Show Refund Table";
    }
}

function acceptTerms() {
    window.alert("Thank you for accepting our Terms and Conditions.");
}


/* contact.html */

function clearFeedback(box) {
    if (box.value == "Your feedback or massage about our service:") {
        box.value = "";
    }
    box.style.color = "black";
}

function validateContact() {
    var fname = document.forms["contactForm"]["fname"].value;
    var lname = document.forms["contactForm"]["lname"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var feedback = document.forms["contactForm"]["feedback"].value;
    var reply;

    if (fname == "" || lname == "") {
        window.alert("Please enter your first and last name.");
    }
    else if (feedback == "" || feedback == "Your feedback or massage about our service:") {
        window.alert("Please write your message before submitting.");
    }
    else {
        switch (subject) {
            case "General Inquiry":
                reply = "We will answer your inquiry within 24 hours.";
                break;
            case "Customer Feedback":
                reply = "Thank you for helping us improve our service.";
                break;
            case "Technical Support":
                reply = "Our technical team will contact you soon.";
                break;
            default:
                reply = "We have received your message.";
        } 

        window.alert("Thank you " + fname + " " + lname + "!\n" + reply);
    }
}

/* about.html */

function toggleLeaders() {
    var list = document.getElementById("leadersList");

    if (list.style.display == "none") {
        list.style.display = "block";
        document.getElementById("leadersBtn").innerHTML = "Hide Leadership Team";
    }
    else {
        list.style.display = "none";
        document.getElementById("leadersBtn").innerHTML = "Show Leadership Team";
    }
}

/* login.html */

function validateLogin() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email == "") {
        window.alert("Please enter your email address.");
    }
    else if (password == "") {
        window.alert("Please enter your password.");
    }
    else {
        window.alert("Welcome back to Masar Car Rental!");
    }
}

/* signup.html */

function validateSignup() {
    var firstName = document.forms["signupForm"]["firstname"].value;
    var lastName = document.forms["signupForm"]["lastname"].value;
    var email = document.forms["signupForm"]["email"].value;

    if (firstName == "" || lastName == "") {
        window.alert("Please enter your first and last name.");
    }
    else if (email == "") {
        window.alert("Please enter your email address.");
    }
    else if (checkPasswords() == true) {
        window.alert("Account created successfully! Welcome " + firstName + ".");
    }
}

/* profile.html */

// update the personal information 
function updateProfile() {
    var newName = document.getElementById("update-name").value;
    var newEmail = document.getElementById("update-phone").value;

    if (newName == "" || newEmail == "") {
        showMessage("profileMsg", "Name and email cannot be empty.", "red");
    }
    else if (checkPasswords() == true) {
        document.getElementById("showName").innerHTML = newName;
        document.getElementById("showEmail").innerHTML = newEmail;
        showMessage("profileMsg", "Your changes have been saved.", "green");
    }
}

/* checkout.html */

var payMethod = "card";

function showCardFields() {
    payMethod = "card";
    document.getElementById("cardFields").style.display = "block";
}

function hideCardFields() {
    payMethod = "pickup";
    document.getElementById("cardFields").style.display = "none";
}

function validateCheckout() {
    var bookingRef = document.forms["checkoutForm"]["booking_ref"].value;
    var totalPrice = document.forms["checkoutForm"]["total_price"].value;
    var email = document.forms["checkoutForm"]["email"].value;
    var cardName = document.forms["checkoutForm"]["card_name"].value;
    var cardNumber = document.forms["checkoutForm"]["card_number"].value;
    var expDate = document.forms["checkoutForm"]["exp_date"].value;
    var cvv = document.forms["checkoutForm"]["cvv"].value;

    if (payMethod == "card" && (cardName == "" || cardNumber == "" || expDate == "" || cvv == "")) {
        window.alert("Please fill in all card details.");
    }
    else if (email == "") {
        window.alert("Please enter your email address.");
    }
    else {
        window.alert("Reservation completed!\nBooking: " + bookingRef +
                     "\nTotal: " + totalPrice + " SAR");
    }
}