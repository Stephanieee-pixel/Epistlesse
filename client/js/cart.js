retrieveProducts()

function retrieveData() {
    //Retrieve the library data and populate on page load
    $.ajax({
        url: libraryURL + "/get-products",
        type:"get",
        success: function(response){
        console.log(response);
        var data = JSON.parse(response);
        createLibraryTable(data.products);
        },
        error: function(err){
        alert(err);
        }
    });
}

function displayProductData(productData){
    console.log(productData);
    
}
