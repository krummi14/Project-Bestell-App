function init() {
    renderDishes();
    addBasket();
}

function renderDishes() {
    renderBurgers();
    renderPizza();
    renderSalad();
}

function renderBurgers() {
    let contentBurger = document.getElementById('burger_content');
    contentBurger.innerHTML = "";

    for (let burgerIndex = 0; burgerIndex < 4; burgerIndex++) {
        contentBurger.innerHTML += getBurgerDishTemplate(burgerIndex);
    }
}

function renderPizza() {
    let contentBurger = document.getElementById('pizza_content');
    contentBurger.innerHTML = "";

    for (let pizzaIndex = 4; pizzaIndex < 8; pizzaIndex++) {
        contentBurger.innerHTML += getPizzaDishTemplate(pizzaIndex);
    }
}

function renderSalad() {
    let contentBurger = document.getElementById('salad_content');
    contentBurger.innerHTML = "";

    for (let saladIndex = 8; saladIndex < myDishes.length; saladIndex++) {
        contentBurger.innerHTML += getSaladDishTemplate(saladIndex);
    }
}

function addBasket() {
    let contentBasket = document.getElementById('basket_content');
    contentBasket.innerHTML = getBasketTemplate();
}

function addDish(orderIndex) {
    let contentOrder = document.getElementById('order_content');
    contentOrder.innerHTML += getOrderDishTemplate(orderIndex);
    calculateDishPrice(orderIndex);
}

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

//function calculateDishPrice(orderIndex) {
//let contentDishPrice = document.getElementById('dish_price');
//let contentTotalPrice = document.getElementById('total_price');
//let contentTableTotalPrice = document.getElementById('total_table_price');
//let currentSubTotal = contentDishPrice;
//currentSubTotal = parseFloat(currentSubTotal.replace(",", "."));

//let deliveryFee = 4.99;
//let newDishPrice = 0;

//let dishPrice = myDishes[orderIndex].price;
//dishPrice = parseFloat(dishPrice.replace(",", "."));

//newDishPrice = currentSubTotal + dishPrice;
//newDishPrice = dishPrice++;
//let subtotalPrice = dishPrice + deliveryFee;
//let totalPrice = subtotalPrice;

//contentDishPrice.innerHTML = formatPrice(newDishPrice);
//contentTotalPrice.innerHTML = "(" + formatPrice(totalPrice) + ")";
//contentTableTotalPrice.innerHTML = formatPrice(totalPrice);
//}

function calculateDishPrice(orderIndex) {
    let contentDishPrice = document.getElementById('dish_price');
    let contentTotalPrice = document.getElementById('total_price');
    let contentTableTotalPrice = document.getElementById('total_table_price');

    let currentSubTotal = contentDishPrice.innerHTML;
    let currentTotalPrice = contentTableTotalPrice.innerHTML;
    let newDishPrice = 0;
    let newTotalPrice = 0;
    let dishPrice = myDishes[orderIndex].price;

    currentSubTotal = parseFloat(currentSubTotal.replace(",", "."));
    currentTotalPrice = parseFloat(currentTotalPrice.replace(",", "."));
    dishPrice = parseFloat(dishPrice.replace(",", "."));

    newDishPrice = currentSubTotal + dishPrice;
    newTotalPrice = currentTotalPrice + dishPrice;

    contentDishPrice.innerHTML = formatPrice(newDishPrice);
    contentTotalPrice.innerHTML = "(" + formatPrice(newTotalPrice) + ")";
    contentTableTotalPrice.innerHTML = formatPrice(newTotalPrice);
}


