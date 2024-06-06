
// order.js

// Function to handle adding products to the order
function addProductToOrder(productName) {
  // Here you can implement logic to add the product to the order
  console.log("Adding product to order:", productName);
  // Example: You can update UI to reflect the added product
}

// Event listener for adding a product to the order
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class "add-to-order"
  var addToOrderButtons = document.querySelectorAll(".add-to-order");

  // Add click event listener to each button
  addToOrderButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the product name from the data-product attribute
      var productName = this.getAttribute("data-product");
      // Call function to add product to order
      addProductToOrder(productName);
    });
  });
});