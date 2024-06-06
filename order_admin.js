// Sample data representing orders
const ordersData = [
  { id: 1, customer: "John Doe", status: "Pending" },
  { id: 2, customer: "Jane Smith", status: "Processing" },
  { id: 3, customer: "David Johnson", status: "Shipped" },
  { id: 4, customer: "Emma Wilson", status: "Delivered" }
];

// Function to display orders
function displayOrders() {
  const ordersList = document.getElementById("orders-list");

  // Clear previous content
  ordersList.innerHTML = "";

  // Loop through orders data and create HTML elements
  ordersData.forEach(order => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order");

    orderDiv.innerHTML = `
      <div class="order-details">
        <span>ID: ${order.id}</span>
        <span>Customer: ${order.customer}</span>
        <span>Status: ${order.status}</span>
      </div>
      <div class="order-actions">
        <button class="btn btn-view" onclick="viewOrder(${order.id})">View</button>
        <button class="btn btn-update" onclick="updateOrder(${order.id})">Update</button>
        <button class="btn btn-delete" onclick="deleteOrder(${order.id})">Delete</button>
      </div>
    `;

    ordersList.appendChild(orderDiv);
  });
}

// Function to view order details
function viewOrder(orderId) {
  // This is just a sample function, you can implement your own logic
  alert("View Order with ID: " + orderId);
}

// Function to update order status
function updateOrder(orderId) {
  // This is just a sample function, you can implement your own logic
  alert("Update Order with ID: " + orderId);
}

// Function to delete order
function deleteOrder(orderId) {
  // This is just a sample function, you can implement your own logic
  alert("Delete Order with ID: " + orderId);
}

// Call displayOrders function when the page loads
window.onload = displayOrders;
