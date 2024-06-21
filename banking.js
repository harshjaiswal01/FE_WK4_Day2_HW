// Objective: Simulate a simple banking system

// Declare a variable to store the current balance
let balance = 0;

// Task 1: Create a function to handle deposits into a bank account
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposit Successful! New Balance: $${balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal Successful! New Balance: $${balance}`);
        } else {
            console.log("Insufficient balance for the withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

// Task 3: Develop a function to check the current balance of the account
function checkBalance() {
    console.log(`Current Balance: $${balance}`);
}

// Test the functions
console.log("Initial Balance:");
checkBalance();

console.log("\nDepositing $500...");
deposit(500);

console.log("\nWithdrawing $200...");
withdraw(200);

console.log("\nWithdrawing $400...");
withdraw(400);

console.log("\nChecking Balance...");
checkBalance();
