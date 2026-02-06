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

function addDish(orderIndex, condition) {
    let contentOrder = document.getElementById('order_content');
    if (myDishes[orderIndex].amount == 0) {
        contentOrder.innerHTML += getOrderDishTemplate(orderIndex);
    }
    if (condition == 0 && myDishes[orderIndex].amount == 1) {
        addClassRubish(orderIndex);
    }

    else {
        calculateDishPrice(orderIndex, condition);
        calculateAmount(orderIndex, condition);
        addClass(orderIndex);
    }
}

function deleteDish(orderIndex, condition) {
    let contentAddedDish = document.getElementById(`added_dish_content_${orderIndex}`);
    contentAddedDish.remove();

    calculateDishPrice(orderIndex, condition)
    removeClass(orderIndex);
}

function calculateAmount(orderIndex, condition) {
    let contentAmount = document.getElementById(`dish_amount_${orderIndex}`);
    let contentOrderedDishAmount = document.getElementById(`ordered_dish_amount_${orderIndex}`);
    let contentButtonAmount = document.getElementById(`added_information_${orderIndex}`);

    if (condition == 0) {
        myDishes[orderIndex].amount--;
    }

    else {
        myDishes[orderIndex].amount++;
    }

    contentAmount.innerText = myDishes[orderIndex].amount;
    contentOrderedDishAmount.innerText = `${myDishes[orderIndex].amount} x ${myDishes[orderIndex].name}`;
    contentButtonAmount.innerText = "Added " + myDishes[orderIndex].amount;
}

function calculateDishPrice(orderIndex, condition) {
    let contentDishPrice = document.getElementById('dish_price');
    let contentTotalPrice = document.getElementById('total_price');
    let contentTableTotalPrice = document.getElementById('total_table_price');

    let currentSubTotal = contentDishPrice.innerText.replace(",", ".");
    let currentTotalPrice = contentTableTotalPrice.innerText.replace(",", ".");
    let newDishPrice = 0;
    let newTotalPrice = 0;
    let dishPrice = myDishes[orderIndex].price;

    currentSubTotal = parseFloat(currentSubTotal);
    currentTotalPrice = parseFloat(currentTotalPrice);
    dishPrice = parseFloat(dishPrice);

    if (condition == 0) {
        newDishPrice = currentSubTotal - dishPrice;
        newTotalPrice = currentTotalPrice - dishPrice;
    }

    else {
        newDishPrice = currentSubTotal + dishPrice;
        newTotalPrice = currentTotalPrice + dishPrice;
    }

    contentDishPrice.innerText = formatPrice(newDishPrice);
    contentTotalPrice.innerText = "(" + formatPrice(newTotalPrice) + ")";
    contentTableTotalPrice.innerText = formatPrice(newTotalPrice);
}

function addClass(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let addedInformation = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);

    firstClickonButton.classList.remove('add_order_button');
    addedInformation.classList.add('add_order_button_added');
    contentPlusButton.classList.add('add_order_button');

    firstClickonButton.classList.add('add_order_button_none');
    addedInformation.classList.remove('add_order_button_none');
    contentPlusButton.classList.remove('add_order_button_none');
}

function removeClass(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let addedInformation = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);

    firstClickonButton.classList.add('add_order_button');
    addedInformation.classList.remove('add_order_button_added');
    contentPlusButton.classList.remove('add_order_button');

    firstClickonButton.classList.remove('add_order_button_none');
    addedInformation.classList.add('add_order_button_none');
    contentPlusButton.classList.add('add_order_button_none');
}

function addClassRubish(orderIndex) {
    let contentRubishButton = document.getElementById(`rubbish_button_${orderIndex}`);
    let contentLessButton = document.getElementById(`less_button_${orderIndex}`);

    if (myDishes[orderIndex].amount == 1) {
        contentRubishButton.classList.remove('dish_font_button_none');
        contentRubishButton.classList.add('dish_font_button');

        contentLessButton.classList.remove('dish_font_button');
        contentLessButton.classList.add('dish_font_button_none');
    }

    else {
        contentRubishButton.classList.add('dish_font_button_none');
        contentRubishButton.classList.remove('dish_font_button');

        contentLessButton.classList.add('dish_font_button');
        contentLessButton.classList.remove('dish_font_button_none');
    }
}


