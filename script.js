let contentBurger = document.getElementById('burger_content');
let contentPizza = document.getElementById('pizza_content');
let contentSalad = document.getElementById('salad_content');
let contentBasket = document.getElementById('basket_content');

function init() {
    renderDishes();
    addBasket();
}

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

function renderDishes() {
    renderBurgers();
    renderPizza();
    renderSalad();
}

function renderBurgers() {
    contentBurger.innerHTML = "";

    for (let burgerIndex = 0; burgerIndex < 4; burgerIndex++) {
        contentBurger.innerHTML += getBurgerDishTemplate(burgerIndex);
    }
}

function renderPizza() {
    contentPizza.innerHTML = "";

    for (let pizzaIndex = 4; pizzaIndex < 8; pizzaIndex++) {
        contentPizza.innerHTML += getPizzaDishTemplate(pizzaIndex);
    }
}

function renderSalad() {
    contentSalad.innerHTML = "";

    for (let saladIndex = 8; saladIndex < myDishes.length; saladIndex++) {
        contentSalad.innerHTML += getSaladDishTemplate(saladIndex);
    }
}

function addBasket() {
    contentBasket.innerHTML = getBasketTemplate();
}

function addDish(orderIndex) {
    let contentOrder = document.getElementById('order_content');
    if (myDishes[orderIndex].amount == 0) {
        contentOrder.innerHTML += getOrderDishTemplate(orderIndex);
    }

    calculateDishPrice(orderIndex);
    calculateAmount(orderIndex);
    addClass(orderIndex);
}

function calculateAmount(orderIndex) {
    let contentAmount = document.getElementById(`dish_amount_${orderIndex}`);
    let contentOrderedDishAmount = document.getElementById(`ordered_dish_amount_${orderIndex}`);
    let contentButtonAmount = document.getElementById(`added_information_${orderIndex}`);
    
    myDishes[orderIndex].amount++;
    contentAmount.innerText = myDishes[orderIndex].amount;
    contentOrderedDishAmount.innerText = `${myDishes[orderIndex].amount} x ${myDishes[orderIndex].name}`;
    contentButtonAmount.innerText = "Added " + myDishes[orderIndex].amount;
}

function calculateDishPrice(orderIndex) {
    let contentDishPrice = document.getElementById('dish_price');
    let contentTotalPrice = document.getElementById('total_price');
    let contentTableTotalPrice = document.getElementById('total_table_price');

    let currentSubTotal = contentDishPrice.innerText;
    let currentTotalPrice = contentTableTotalPrice.innerText;
    let newDishPrice = 0;
    let newTotalPrice = 0;
    let dishPrice = myDishes[orderIndex].price;

    currentSubTotal = parseFloat(currentSubTotal);
    currentTotalPrice = parseFloat(currentTotalPrice);
    dishPrice = parseFloat(dishPrice);

    newDishPrice = currentSubTotal + dishPrice;
    newTotalPrice = currentTotalPrice + dishPrice;

    contentDishPrice.innerText = formatPrice(newDishPrice);
    contentTotalPrice.innerText = "(" + formatPrice(newTotalPrice) + ")";
    contentTableTotalPrice.innerText = formatPrice(newTotalPrice);
}

function addClass(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let nextClickonButton = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);

    firstClickonButton.classList.remove('add_order_button');
    nextClickonButton.classList.add('add_order_button');
    contentPlusButton.classList.add('add_order_button');

    firstClickonButton.classList.add('add_order_button_none');
    nextClickonButton.classList.remove('add_order_button_none');
    contentPlusButton.classList.remove('add_order_button_none');
}


