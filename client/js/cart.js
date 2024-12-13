
var orderId = window.localStorage.getItem('orderId');
var cart = [];
retrieveProducts()

function retrieveProducts() {
    //Retrieve the library data and populate on page load
    $.ajax({
        url: libraryURL + "/get-cart",
        type:"get",
        data: {orderId: orderId},
        success: function(response){
            console.log(response);
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                displayProductData(data.orders);
                cart = data.orders;
            }
            else{
                console.log(data.msg);
            }

        },
        error: function(err){
            alert(err);
        }
    });
}

function displayCartData(cartData){
    console.log(cartData);
    
    var tableHTML = "";
    for(var i=0; i<cartData.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + cartData[i].name + "</td>";
        tableHTML += "<td>" + cartData[i].price + "</td>";
        tableHTML += "</tr>";
    }

    $("#cartTable").html(tableHTML);

    
}
