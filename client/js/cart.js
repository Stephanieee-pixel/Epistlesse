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

function displayCartData(productData){
    console.log(productData);
    
    var tableHTML = "";
    for(var i=0; i<productData.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + productData[i].name + "</td>";
        tableHTML += "<td>" + libraryData[i].price + "</td>";
        tableHTML += "</tr>";
    }

    $("#cartTable").html(tableHTML);

    
}
