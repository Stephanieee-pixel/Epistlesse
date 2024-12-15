
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
        tableHTML += "<td>" + parseFloat(cart[i].item_price).toFixed(2) + "</td>";
        tableHTML += "<td><input class = 'quantity' data-id = '" + cart[i].idOrder_items + "' value = '" + cart[i].quantity + "' ></td>";
        tableHTML += "<td>" + (cart[i].item_price * cart[i].quantity).toFixed(2) + "</td>";
        tableHTML += "</tr>";
    }

    $("#cartTable").html(tableHTML);
    activateListener();

    
}

function activateListener(){

    $('.quantity').change(function(){
        var idOrder_items = this.getAttribute('data-id');
        var quantity = $(this).val();
        console.log(quantity);
    
        $.ajax({
            url: libraryURL + "/update-cart",
            type:"put",
            data: {idOrder_items: idOrder_items, quantity: quantity},
            success: function(response){
                console.log(response);
                var data = JSON.parse(response);
                if(data.msg == "SUCCESS"){
                    retrieveProducts();
    
                }
                else{
                    console.log(data.msg);
                }
    
            },
            error: function(err){
                alert(err);
            }
        });
    });
    
}

$('#checkout-section').toggle();

$('#checkout-btn').click(function(){
    $('#checkout-section').toggle();
    $('#cartTwo').hide();

})

