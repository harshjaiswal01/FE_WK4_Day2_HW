// Objective: Simulate a simple online shopping experience

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
let isLoggedIn = true; // Change this to false to simulate a user not logged in

if (!isLoggedIn) {
    console.log("Please log in to add items to your cart.");
} else {
    // Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

    // List of available products
    let products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 },
        { id: 3, name: 'Tablet', price: 300 }
    ];

    // Display available products
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].id}. ${products[i].name} - $${products[i].price}`);
    }

    // Simulate user adding products to the cart
    let cart = [];
    function addToCart(productId) {
        let product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            console.log(`${product.name} has been added to your cart.`);
        } else {
            console.log("Product not found.");
        }
    }

    // Adding products to the cart
    addToCart(1); // Adding Laptop
    addToCart(2); // Adding Phone
    addToCart(3); // Adding Tablet

    // Task 3: Calculate the total cost of the items in the cart and display it to the user.

    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += cart[i].price;
    }

    console.log("Total Cost of items in the cart: $" + totalCost);
}
