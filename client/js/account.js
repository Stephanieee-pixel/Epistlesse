//Create a listener that waits for user to enter submit button to create account
$('#data-submit').click(function() {
    var email_address = $('#email_address').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var password = $('#password').val();

    var jsonString = {
        email_address: email_address, 
        first_name: first_name,
        last_name: last_name,
        password: password
    };
    
     $.ajax({
         url: libraryURL + "/write-account",
         type:"post",
         data: jsonString,
         success: function(response){
            var data = JSON.parse(response);
            if(data.message === "SUCCESS"){
                alert("Data saved!");
            } else{
                console.log(data.msg);
            }
         },
         error: function(err){
            console.log(err);
         }
     });

     return false;

});
    

//Create a listener that waits for user to enter submit button to log in
retrieveAccount();

function retrieveAccount(){
    $.ajax({
        url: libraryURL + "/get-account",
        type:"get",
        success: function(response){
        console.log(response);
        var data = JSON.parse(response);
        loadPage();
        },
        error: function(err){
        alert(err);
        }
    });
}

function loadPage(){
    location.location.href("/client/homepage.html")

}