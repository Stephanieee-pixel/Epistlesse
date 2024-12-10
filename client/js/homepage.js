var userId = window.localStorage.getItem('userId');

$.ajax({
    url: libraryURL + "/get-cart",
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

function addToCart(){
    
}