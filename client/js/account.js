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
         url: libraryURL + "/register",
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
