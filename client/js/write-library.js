//Create a listener that waits for user to enter submit button
    //Submit product details
    $('#data-submit').click(function() {
        var name = $('#name').val();
        var desc = $('#desc').val();
        var price = $('#price').val();
        var quantity = $('#quantity').val();
    
        var jsonString = {
            name: name, 
            desc: desc,
            price: price,
            quantity: quantity
        };
        
         $.ajax({
             url: libraryURL + "/write-record",
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
        
    