var submitBth = document.getElementById('btnCheck')


$(document).ready(function () {

    //UserID
    function checkUserId(userId) {
        var userIdRegex = /^[a-zA-Z0-9]{5,12}$/
        return userIdRegex.test(userId)
    }

    $("#txtUserId").blur(function () {
        if (checkUserId(this.value)) {
            $("#userError").text("")
            submitBth.disabled = false;
        }
        else {
            $("#userError").text("Must be of length 5-12")
            $("#userError").css("color", "red")
            submitBth.disabled = true;
        }
    })


    //password
    function checkPassword(password) {
        var passwordRegex = /^[a-zA-Z0-9]{7,12}$/
        return passwordRegex.test(password)
    }

    $("#txtPassword").blur(function () {
        if (checkPassword(this.value)) {
            $("#passwordError").text("")
            submitBth.disabled = false;
        }
        else {
            $("#passwordError").text("Must be of length 7-12")
            $("#passwordError").css("color", "red")
            submitBth.disabled = true;
        }
    })

    //Name
    function checkName(name) {
        var nameRegex = /^[A-Za-z]+$/
        return nameRegex.test(name)
    }
    $("#txtName").blur(function () {
        if (checkName(this.value)) {
            $("#nameError").text("")
            submitBth.disabled = false;
        }
        else {
            $("#nameError").text("Alphabates only")
            $("#nameError").css("color", "red")
            submitBth.disabled = true;
        }
    })

    //zipCode
    function checkZipCode(code) {
        var zipCodeRegex = /^[0-9]+$/
        return zipCodeRegex.test(code)
    }
    $("nmbZipCode").blur(function () {
        if (checkZipCode(this.value)) {
            $("#zipCodeError").text("")
            submitBth.disabled = false;
        }
        else {
            $("#zipCodeError").text("Must be numeric only")
            $("#zipCodeError").css("color", "red")
            submitBth.disabled = true;
        }
    })

    //Email
    function checkEmail(email) {
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email)
    }
    $("txtEmail").blur(function () {
        if (checkEmail(this.value)) {
            $("#emailError").text("")
            submitBth.disabled = false;
        }
        else {
            $("#emailError").text("Must be a valid Email")
            $("#emailError").css("color", "red")
            submitBth.disabled = true;
        }
    })

})

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox)
            item.checked = false
    })
}


