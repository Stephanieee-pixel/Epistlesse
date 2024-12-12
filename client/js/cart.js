retrieveProducts()

function retrieveData() {
    //Retrieve the library data and populate on page load
    $.ajax({
        url: libraryURL + "/get-cart",
        type:"get",
        success: function(response){
        console.log(response);
        var data = JSON.parse(response);
        displayProductData(data.order_items);
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
