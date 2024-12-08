
//Create a listener that waits for user to enter submit button to log in
$('#login').click(function() {
    var email_address = $('#email_address').val();
    var password = $('#password').val();

    var jsonString = {
        email_address: email_address,
        password: password
    }

    $.ajax({
        url: libraryURL + "/get-account",
        type: "get",
        data: jsonString,
        success:function(response){
            console.log(response);
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                window.localStorage.setItem('userId', data.accounts[0].idAccounts);
                window.localStorage.setItem('userType', data.accounts[0].type);
                window.location.href = "http://localhost:4000/homepage";
            }
            else{
                console.log(data.msg);
            }
        }
        
    });

    return false;

    

});

function check(){
    var email_address = document.getElementById('email_address').value;
    var password = document.getElementById('password').value;

    const accounts = '{ "email_address": ["ikk@gmail.com", "rqm@gmail.com"], "password":["P@ssword123", "password3!"] }';
    const accountObj = JSON.parse(accounts);
    console.log(accountObj);
    let email = "";

    for(let i in accountObj.email){
        email+= accountObj.email_address[i];
    }

    let thePassword = "";
    for(let j in accountObj.password){
        thePassword += accountObj.password[j];
    }
    
    if(email_address == email && password == thePassword){
        window.location.assign = "http://localhost:4000/homepage";
        alert()
    }else{
        alert("Incorrect email or password!");
        return;
    }
}



// retrieveAccount();

// function retrieveAccount(){
//     $.ajax({
//         url: libraryURL + "/get-account",
//         type:"get",
//         success: function(response){
//         console.log(response);
//         var data = JSON.parse(response);
//         loadPage();
//         },
//         error: function(err){
//         alert(err);
//         }
//     });
// }

// function loadPage(){
//     location.location.href("/client/homepage.html");
// }