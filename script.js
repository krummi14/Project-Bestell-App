let contentBurger = document.getElementById('burger_content');
let contentPizza = document.getElementById('pizza_content');
let contentSalad = document.getElementById('salad_content');
let contentBasket = document.getElementById('basket_content');
let contentDialog = document.getElementById('dialog_order_content');
let contentRespoMenu = document.getElementById('responsive_menu');
let switchCondition = 0;

function init() {
    renderDishes();
    addRespoMenu();
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

function addRespoMenu() {
    let totalAmount = calculateAmountBasket();
    contentRespoMenu.innerHTML = getTemplateRespoMenu(totalAmount);
}

function updateBasketAmount() {
    let totalAmount = calculateAmountBasket();
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');

    if (contentNumberTotalAmount) {
        contentNumberTotalAmount.innerText = totalAmount;
    }
}

function calculateAmountBasket() {
    let totalAmount = 0
    for (let amountIndex = 0; amountIndex < myDishes.length; amountIndex++) {
        totalAmount = totalAmount + myDishes[amountIndex].amount;
    }

    return totalAmount;
}

function basketWithDishes() {
    let contentBasketEmpty = document.getElementById('basket_empty');
    let contentBasketFull = document.getElementById('basket_full');
    let contantTotalPrice = document.getElementById('total_table_price');

    let totalPrice = contantTotalPrice.innerText.replace(",", ".");

    totalPrice = parseFloat(totalPrice);

    if (totalPrice == 0) {
        contentBasketEmpty.classList.remove('basket_empty_to_full');
        contentBasketEmpty.classList.add('basket_empty_info');
        contentBasketFull.classList.add('basket_empty_to_full');
        classShoppingCartResponisveCount();
    }

    else {
        contentBasketEmpty.classList.add('basket_empty_to_full');
        contentBasketEmpty.classList.remove('basket_empty_info');
        contentBasketFull.classList.remove('basket_empty_to_full');
    }
}

function addDish(orderIndex, condition) {
    let contentOrder = document.getElementById('order_content');
    if (myDishes[orderIndex].amount == 0) {
        contentOrder.innerHTML += getOrderDishTemplate(orderIndex);
    }

    if (condition == 0 && myDishes[orderIndex].amount == 1) {
        addClassRubbish(orderIndex, condition);
    }

    else {
        calculateDishPrice(orderIndex, condition);
        calculateAmount(orderIndex, condition);
        addClassRubbish(orderIndex, condition);
        addClass(orderIndex);
        updateBasketAmount();
        classShoppingCartResponisveCount();
    }
    basketWithDishes(orderIndex);

}

function deleteDish(orderIndex, condition) {
    let contentAddedDish = document.getElementById(`added_dish_content_${orderIndex}`);
    contentAddedDish.remove();

    calculateDishPrice(orderIndex, condition);
    removeClass(orderIndex);
    myDishes[orderIndex].amount = 0;
    updateBasketAmount();
    basketWithDishes(orderIndex);
    
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
    let contentDeliveryFee = document.getElementById('delivery_fee');

    let currentSubTotal = contentDishPrice.innerText.replace(",", ".");
    let currentTotalPrice = contentTableTotalPrice.innerText.replace(",", ".");
    let currentDeliveryFee = contentDeliveryFee.innerText.replace(",", ".");
    let newDishPrice = 0;
    let newTotalPrice = 0;
    let dishPrice = myDishes[orderIndex].price;

    currentSubTotal = parseFloat(currentSubTotal);
    currentTotalPrice = parseFloat(currentTotalPrice);
    currentDeliveryFee = parseFloat(currentDeliveryFee);
    dishPrice = parseFloat(dishPrice);

    if (condition == 0) {
        newDishPrice = currentSubTotal - dishPrice;
        newTotalPrice = currentTotalPrice - dishPrice;

        if (myDishes[orderIndex].amount >= 1) {
            newDishPrice = currentSubTotal - (dishPrice * myDishes[orderIndex].amount);
            newTotalPrice = currentTotalPrice - (dishPrice * myDishes[orderIndex].amount);
        }
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
    let contentAddedDish = document.getElementById(`added_dish_button_and_amount${orderIndex}`);

    firstClickonButton.classList.remove('add_order_button');
    contentAddedDish.classList.remove('dish_order_buttons_none');
    addedInformation.classList.add('add_order_button_added');
    contentPlusButton.classList.add('add_order_button');

    firstClickonButton.classList.add('add_order_button_none');
    contentAddedDish.classList.add('dish_order_buttons');
    addedInformation.classList.remove('add_order_button_none');
    contentPlusButton.classList.remove('add_order_button_none');
}

function removeClass(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let addedInformation = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);
    let contentAddedDish = document.getElementById(`added_dish_button_and_amount${orderIndex}`);

    firstClickonButton.classList.add('add_order_button');
    contentAddedDish.classList.add('dish_order_buttons_none');
    addedInformation.classList.remove('add_order_button_added');
    contentPlusButton.classList.remove('add_order_button');

    firstClickonButton.classList.remove('add_order_button_none');
    contentAddedDish.classList.remove('dish_order_buttons');
    addedInformation.classList.add('add_order_button_none');
    contentPlusButton.classList.add('add_order_button_none');
}

function addClassRubbish(orderIndex, condition) {
    let contentRubbishButton = document.getElementById(`rubbish_button_${orderIndex}`);
    let contentLessButton = document.getElementById(`less_button_${orderIndex}`);
    let contentRubbishButtonOnTop = document.getElementById(`rubbish_button_onTop_${orderIndex}`);

    if (condition == 0 && myDishes[orderIndex].amount == 1) {
        contentRubbishButton.classList.remove('dish_font_button_none');
        contentRubbishButton.classList.add('dish_font_button');

        contentLessButton.classList.remove('dish_font_button');
        contentLessButton.classList.add('dish_font_button_none');
    }

    else if (condition == 1 && myDishes[orderIndex].amount > 1) {
        contentRubbishButtonOnTop.classList.remove('dish_font_button_none');
        contentRubbishButtonOnTop.classList.add('dish_font_button');
    }
}

function deliverySwitch() {
    let contentDeliveryFee = document.getElementById('delivery_fee');

    if (switchCondition == 0) {
        contentDeliveryFee.innerText = "4,99€";
        switchCondition = 1;
    }


    else {
        contentDeliveryFee.innerText = "0,00€";
        switchCondition = 0;
    }

    calculatNewDishPrice();
}

function calculatNewDishPrice() {
    let contentDishPrice = document.getElementById('dish_price');
    let contentTotalPrice = document.getElementById('total_price');
    let contentTableTotalPrice = document.getElementById('total_table_price');
    let contentDeliveryFee = document.getElementById('delivery_fee');

    let currentSubTotal = contentDishPrice.innerText.replace(",", ".");
    let currentTotalPrice = contentTableTotalPrice.innerText.replace(",", ".");
    let currentDeliveryFee = contentDeliveryFee.innerText.replace(",", ".");
    let newDishPrice = 0;
    let newTotalPrice = 0;

    currentSubTotal = parseFloat(currentSubTotal);
    currentTotalPrice = parseFloat(currentTotalPrice);
    currentDeliveryFee = parseFloat(currentDeliveryFee);

    if (currentSubTotal == 0) {
        newTotalPrice = currentTotalPrice + currentDeliveryFee;
        contentDishPrice.innerText = formatPrice(newDishPrice);

        if (currentDeliveryFee == 0) {
            newTotalPrice = currentSubTotal + currentDeliveryFee;
        }
    }

    else {
        newTotalPrice = currentSubTotal + currentDeliveryFee;
        contentDishPrice.innerText = formatPrice(currentSubTotal);
    }

    contentTotalPrice.innerText = "(" + formatPrice(newTotalPrice) + ")";
    contentTableTotalPrice.innerText = formatPrice(newTotalPrice);
}

function openDialogOrder() {
    contentDialog.showModal();
    contentDialog.classList.add("dialog_opend");
    contentDialog.classList.remove("dialog_closed");
    contentBasket.classList.add("basket_closed");

    setTimeout(function () {
        contentDialog.remove();
    }, 10000)
}

function closeDialogOrder() {
    contentDialog.classList.remove("dialog_opend");
    contentDialog.classList.add("dialog_closed");

    setTimeout(function () {
        contentDialog.close();
    }, 125);
}

function openBasketResponsive() {
    contentBasket.classList.toggle('responsive_basket_none');
}

function closeBasketResponsive() {
    contentBasket.classList.add('responsive_basket_none');
}

function classShoppingCartResponisveCount() {
    let contentShoppiCartButton = document.getElementById('shopping_cart_button');
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');
    let totalAmount = contentNumberTotalAmount.innerText;

    if (totalAmount == 0) {
        contentShoppiCartButton.classList.add('shopping_button_responsive');
        contentShoppiCartButton.classList.remove('shopping_button_responsive_count');
        contentNumberTotalAmount.classList.remove('total_amount_basket');
        contentNumberTotalAmount.classList.add('total_amount_basket_none');
    }

    else {
        contentShoppiCartButton.classList.remove('shopping_button_responsive');
        contentShoppiCartButton.classList.add('shopping_button_responsive_count');
        contentNumberTotalAmount.classList.add('total_amount_basket');
        contentNumberTotalAmount.classList.remove('total_amount_basket_none');
    }
}

