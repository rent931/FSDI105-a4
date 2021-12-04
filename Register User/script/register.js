console.log("User Register");

class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}



function isValid(user){
    // return false when the user is not valid
    // return true when the user is valid
    let valid = true;

    //We reset the original apperance all inputs
    //  by removing the error class (see style.css) 
    $('input').removeClass("error");
    

    if(user.fname.length == 0){
       //if we get here then the first name has not a valid value
       valid = false;
       //We add this error class (check css file) if the first name is not valid
       $("#userFirst").addClass("error");
    }
    if(user.lname.length == 0){
        //is not a valid value
        $("#userLast").addClass("error");
        valid = false;
    }
    if(user.password.length == 0){
        //is not a valid value
        $("#userPassword").addClass("error");
        valid = false;
     }
     if(user.email.length == 0){
         //is not a valid value
         $("#userEmail").addClass("error");
         valid = false;
    }

    return valid;
}

function registerUser(){
    let email = $("#userEmail").val();
    let password = $("#userPassword").val();
    let fname = $("#userFirst").val();
    let lname = $("#userLast").val();
    let age = $("#userAge").val();
    let address = $("#address").val();
    let phone = $("#userPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#userColor").val();
    let user=new User(email,password,fname,lname,age,address,phone,payment,color)
    if(isValid(user)){
        //$("#usersTable").append(createRow(user));
    }
    console.log(user);
    saveUser(user);
    clearInputs();

}
function clearInputs(){
    $("#userEmail").val("");
    $("#userPassword").val("");
    $("#userFirst").val("");
    $("#userLast").val("");
    $("#userAge").val("");
    $("#address").val("");
    $("#userPhone").val("");
    $("#selPayment").val("");
    $("#userColor").val("");
    

}


function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
}
window.onload=init;