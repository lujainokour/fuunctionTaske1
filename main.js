let menu = [
    { name: "Burger", price: 3, category: "Sandwich", available: true },
    { name: "Shawarma", price: 2, category: "Sandwich", available: true },
    { name: "Zinger", price: 3.5, category: "Sandwich", available: true },
    { name: "Pizza", price: 5, category: "Main Dish", available: false },
    { name: "Fries", price: 1, category: "Side Dish", available: true }
];
function showMenu() {
    let message = "Restaurant Menu:\n";

    for (let i = 0; i < menu.length; i++) {
        message += menu[i].name
            + " - " + menu[i].price + " JD"
            + " - " + menu[i].category;

        if (menu[i].available) {
            message += " - Available\n";
        } else {
            message += " - Unavailable\n";
        }
    }

    alert(message);
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function startOrder() {
    let customerName = prompt("Enter your name:");

    if (customerName === null) {
        alert("Order cancelled");
        return;
    }

    let ageInput = prompt("Enter your age:");

    if (ageInput === null) {
        alert("Order cancelled");
        return;
    }

    let age = Number(ageInput);

    if (
        ageInput.trim() === "" ||
        !Number.isInteger(age) ||
        age < 0
    ) {
        alert("Please enter a valid age");
        return;
    }

    let gender = prompt("Enter your gender:");

    if (gender === null) {
        alert("Order cancelled");
        return;
    }

    if (gender == "male") {
        alert("Welcome Mr. " + customerName);
    } else if (gender == "female") {
        alert("Welcome Ms. " + customerName);
    } else {
        alert("Welcome " + customerName);
    }

    if (age < 16) {
        alert("You are not eligible to place an order");
        return;
    }

    showMenu();

    let order;
    let selectedFood = null;
    let isAvailable = false;

    while (!isAvailable) {
        order = prompt("Enter a food name as shown in the menu:");

        if (order === null) {
            alert("Order cancelled");
            return;
        }

        for (let i = 0; i < menu.length; i++) {
            if (!menu[i].available) {
                continue;
            }

            if (order === menu[i].name) {
                selectedFood = menu[i];
                isAvailable = true;
                break;
            }
        }

        if (!isAvailable) {
            alert("Invalid order. Please try again");
        }

        if (age < 18 || !isAvailable) {
            alert("Order requires verification");
        }
    }

    let quantity = 0;

    while (!Number.isInteger(quantity) || quantity <= 0) {
        let quantityInput = prompt("Enter quantity:");

        if (quantityInput === null) {
            alert("Order cancelled");
            return;
        }

        quantity = Number(quantityInput);

        if (!Number.isInteger(quantity) || quantity <= 0) {
            alert("Please enter a positive whole number");
        }
    }

    let totalPrice = selectedFood.price * quantity;
    let orderStatus = "Requires Verification";

    if (isAvailable) {
        alert("Your order is being prepared");
    }

    if (age >= 18 && isAvailable) {
        alert("Order confirmed");
        orderStatus = "Confirmed - Being Prepared";
    }

    console.log("Customer Name: " + customerName);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Order: " + selectedFood.name);
    console.log("Order Status: " + orderStatus);
    console.log("Quantity: " + quantity);
    console.log("Total Price: " + totalPrice + " JD");

    document.write("<h2>Final Order Summary</h2>");
    document.write("Customer Name: " + escapeHTML(customerName) + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("Gender: " + escapeHTML(gender) + "<br>");
    document.write("Order: " + selectedFood.name + "<br>");
    document.write("Order Status: " + orderStatus + "<br>");

    document.write("<h2>Selected Food Details</h2>");

    for (let key in selectedFood) {
        document.write(key + ": " + selectedFood[key] + "<br>");
    }

    document.write("Quantity: " + quantity + "<br>");
    document.write("Total Price: " + totalPrice + " JD<br>");
}

startOrder();