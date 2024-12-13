var userId = window.localStorage.getItem('userId');

$.ajax({
    url: libraryURL + "/get-orderId",
    type: "get",
    data: {userId: userId},
    success:function(response){
        console.log(response);
        var data = JSON.parse(response);
        if(data.msg == "SUCCESS"){
            if(data.orders.length > 0){
                window.localStorage.setItem('orderId', data.orders[0].idOrders);
            }
            else{
                createCart();

            }
        }
        else{
            console.log(data.msg);
        }
    }
    
});

function createCart() {
    console.log(userId + "userid: ");
    $.ajax({
        url: libraryURL + "/createCart",
        type: "post",
        data: {userId: userId},
        success:function(response){
            console.log(response);
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                    window.localStorage.setItem('orderId', data.orderId);
    
            }
            else{
                console.log(data.msg);
            }
        }
        
    });
}

// to view the selected product from homepage 

$('#selectItem').click(function() {

    var selectedProduct = window.localStorage

    $.ajax({
        url: libraryURL + "/get-product",
        type: "get",
        data: {selectedProduct: selectedProduct},
        success:function(response){
            console.log(response);
            var data = JSON.parse(response);
            var productName = document.getElementsByClassName('card-title');
            console.log(productName);
            createDesc(data.products);
    
            
        }
        
    });
});

function createDesc(productData){
    console.log(productData);
    var productDesc = "";
    for(var i = 0; i < productData.length; i++){
        productDesc += "<div>";
        productDesc += "<h1>" + productData[i].name + "</h1>";
        productDesc += "<p>" + productData[i].price + "</p>";
        productDesc += "<p>" + productData[i].quantity + "</p>";
        productDesc += "<p>" + productData[i].desc + "</p>";
        productDesc += "</div>";

    }

    $("#productDisplay").html(productDesc);


}




function addToCart(productId, item_price){
    var orderId = window.localStorage.getItem('orderId');

    $.ajax({
        url: libraryURL + "/addtoCart",
        type: "post",
        data: {orderId: orderId, productId: productId, item_price: item_price},
        success:function(response){
            console.log(response);
            var data = JSON.parse(response);
            
        }
        
    });
    
}
