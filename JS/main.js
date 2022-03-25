var userId = document.querySelector(".userId__placeholder")
var userError = document.getElementById("userError")
var password = document.querySelector(".password__placeholder")
var passwordError = document.getElementById("passwordError")
var Name = document.querySelector(".name__placeholder")
var nameError = document.getElementById("nameError")
var zipCode = document.querySelector(".zipCode__placeholder")
var zipCodeError = document.getElementById("zipCodeError")
var Email = document.querySelector(".email__placeholder")
var emailError = document.getElementById("emailError")
//change same blur

//UserID
    function checkUserId(userId){
        var userIdRegex = /^[a-zA-Z0-9]{5,12}$/  
        return userIdRegex.test(userId)
    }
    
    userId.addEventListener("change",function(){
            if(checkUserId(userId.value)){
                userError.textContent = " "
            }
            else{
                userError.textContent = "Must be of length 5-12"
                userError.style.color = "red"
            }
            
        })

//password
function checkPassword(password){
    var passwordRegex = /^[a-zA-Z0-9]{7,12}$/ 
    return passwordRegex.test(password)
}

password.addEventListener("change",function(){
    if(checkPassword(password.value)){
        passwordError.textContent = " "
    }
    else{
        passwordError.textContent = "Must be of length 7-12"
        passwordError.style.color = "red"
    }
    
})
//Name

function checkName(name){
    var nameRegex = /^[A-Za-z]+$/
    return nameRegex.test(name)
}

Name.addEventListener("change",function(){
    if(checkName(Name.value)){
        nameError.textContent = " "
    }
    else{
        nameError.textContent = "alphabates only"
        nameError.style.color = "red"
    }
    
})
//zipCode

function checkZipCode(code){
    var zipCodeRegex = /^[0-9]+$/
    return zipCodeRegex.test(code)
}

zipCode.addEventListener("change",function(){
    if(checkZipCode(zipCode.value)){
        zipCodeError.textContent = " "
    }
    else{
        zipCodeError.textContent = "Must be numeric only"
        zipCodeError.style.color = "red"
    }
    
})

//Email
function checkEmail(email){
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    return emailRegex.test(email)
}

Email.addEventListener("change",function(){
    if(checkEmail(Email.value)){
        emailError.textContent = ""
    }
    else{
        emailError.textContent = "Must be a valid Email"
        emailError.style.color = "red"
    }
    
})


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) 
        item.checked = false
    })
}