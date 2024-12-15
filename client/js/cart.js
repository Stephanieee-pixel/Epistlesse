
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
                displayCartData(data.orders);
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

function displayCartData(cart){
    console.log(cart);
    
    var tableHTML = "";
    for(var i=0; i<cart.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + cart[i].name + "</td>";
        tableHTML += "<td>" + cart[i].item_price + "</td>";
        tableHTML += "<td><input class = 'quantity' onchange = updateQuantity('" + cart[i].idOrder_items + "') value = '" + cart[i].quantity + "' ></td>";

        tableHTML += "</tr>";
    }

    $("#cartTable").html(tableHTML);

    
}

function updateQuantity(){

}

function calculateCartTotal(){
    
}

