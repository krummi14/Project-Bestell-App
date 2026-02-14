let contentBurger = document.getElementById('burger_content');
let contentPizza = document.getElementById('pizza_content');
let contentSalad = document.getElementById('salad_content');
let contentBasket = document.getElementById('basket_content');
let contentDialog = document.getElementById('dialog_order_content');
let contentRespoMenu = document.getElementById('responsive_menu');
let contentDishPrice = document.getElementById('dish_price');
let contentTotalPrice = document.getElementById('total_price');
let contentTableTotalPrice = document.getElementById('total_table_price');
let contentDeliveryFee = document.getElementById('delivery_fee');
let contentBasketEmpty = document.getElementById('basket_empty');
let contentBasketFull = document.getElementById('basket_full');
let contentBody = document.body;
let newDishPrice = 0;
let newTotalPrice = 0;
let switchCondition = 0;

function init() {
    renderAllDishes();
    addRespoMenu();
}

function reFormatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

function addAndRemoveClassHelperFunction(contentAdd, idADD, contentRemove, idRemove) {
    contentAdd.classList.add(idADD);
    contentRemove.classList.remove(idRemove);
}

function renderAllDishes() {
    const categories = [
        [contentBurger, 0, 4],
        [contentPizza, 4, 8],   
        [contentSalad, 8, myDishes.length]
    ];

    for (let [content, start, end] of categories) {
        renderDishes(content, start, end);
    }
}


function renderDishes(content, startFor, stopFor) {
    content.innerHTML = "";
    for (let dishIndex = startFor; dishIndex < stopFor; dishIndex++) {
        content.innerHTML += getDishesTemplate(dishIndex);
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
    let totalPrice = contentTableTotalPrice.innerText.replace(",", ".");
    totalPrice = parseFloat(totalPrice);
    if (totalPrice == 0) {
        contentBasketEmpty.classList.remove('basket_empty_to_full');
        contentBasketEmpty.classList.add('basket_empty_info');
        contentBasketFull.classList.add('basket_empty_to_full');
        classShoppingCartResponisveCount();
    } else {
        contentBasketEmpty.classList.add('basket_empty_to_full');
        contentBasketEmpty.classList.remove('basket_empty_info');
        contentBasketFull.classList.remove('basket_empty_to_full');
    }
}

function addDish(orderIndex, condition, rubbish) {
    let contentOrder = document.getElementById('order_content');
    if (myDishes[orderIndex].amount == 0) {
        contentOrder.innerHTML += getOrderDishTemplate(orderIndex);
    } if (condition == 0 && myDishes[orderIndex].amount == 1) {
        addClassRubbish(orderIndex, condition);
    } else {
        addDishHelperFunction(orderIndex, condition, rubbish);
    }
    basketWithDishes(orderIndex);
}

function addDishHelperFunction(orderIndex, condition, rubbish) {
    calculateDishPrice(orderIndex, condition, rubbish);
    calculateAmount(orderIndex, condition);
    addClassRubbish(orderIndex, condition);
    changeClass(orderIndex)
    updateBasketAmount();
    classShoppingCartResponisveCount();
}

function deleteDish(orderIndex, condition, rubbish) {
    let contentAddedDish = document.getElementById(`added_dish_content_${orderIndex}`);
    contentAddedDish.remove();
    calculateDishPrice(orderIndex, condition, rubbish);
    myDishes[orderIndex].amount = 0;
    changeClass(orderIndex);
    updateBasketAmount();
    basketWithDishes(orderIndex);
}

function calculateAmount(orderIndex, condition) {
    let contentAmount = document.getElementById(`dish_amount_${orderIndex}`);
    let contentOrderedDishAmount = document.getElementById(`ordered_dish_amount_${orderIndex}`);
    let contentButtonAmount = document.getElementById(`added_information_${orderIndex}`);
    if (condition == 0) {
        myDishes[orderIndex].amount--;
    } else {
        myDishes[orderIndex].amount++;
    }

    contentAmount.innerText = myDishes[orderIndex].amount;
    contentOrderedDishAmount.innerText = `${myDishes[orderIndex].amount} x ${myDishes[orderIndex].name}`;
    contentButtonAmount.innerText = "Added " + myDishes[orderIndex].amount;
}

function getCurrentPrices() {
    return {
        currentSubTotal: parseFloat(contentDishPrice.innerText.replace(",", ".")),
        currentTotalPrice: parseFloat(contentTableTotalPrice.innerText.replace(",", ".")),
        currentDeliveryFee: parseFloat(contentDeliveryFee.innerText.replace(",", ".")),
    }
}

function getNewPrices(condition, orderIndex, rubbish) {
    let dishPrice = parseFloat(myDishes[orderIndex].price);
    let prices = getCurrentPrices();
    if (condition == 0) {
        newDishPrice = prices.currentSubTotal - dishPrice;
        newTotalPrice = prices.currentTotalPrice - dishPrice;
        if (myDishes[orderIndex].amount >= 1 && rubbish == 1) {
            newDishPrice = prices.currentSubTotal - (dishPrice * myDishes[orderIndex].amount);
            newTotalPrice = prices.currentTotalPrice - (dishPrice * myDishes[orderIndex].amount);
        }
    } else {
        newDishPrice = prices.currentSubTotal + dishPrice;
        newTotalPrice = prices.currentTotalPrice + dishPrice;
    }
}

function writeIntoContent(newDishPriceParam, newTotalPriceParam) {
    contentDishPrice.innerText = reFormatPrice(newDishPriceParam);
    contentTotalPrice.innerText = "(" + reFormatPrice(newTotalPriceParam) + ")";
    contentTableTotalPrice.innerText = reFormatPrice(newTotalPriceParam);
}

function calculateDishPrice(orderIndex, condition, rubbish) {
    getNewPrices(condition, orderIndex, rubbish);
    writeIntoContent(newDishPrice, newTotalPrice);
}

function calculateNewDishPrice() {
    let prices = getCurrentPrices();
    if (prices.currentSubTotal == 0) {
        newTotalPrice = prices.currentTotalPrice + prices.currentDeliveryFee;
        contentDishPrice.innerText = reFormatPrice(newDishPrice);
        if (prices.currentDeliveryFee == 0) {
            newTotalPrice = prices.currentSubTotal + prices.currentDeliveryFee;
        }
    } else {
        newTotalPrice = prices.currentSubTotal + prices.currentDeliveryFee;
        contentDishPrice.innerText = reFormatPrice(prices.currentSubTotal);
    }

    writeIntoContent(newDishPrice, newTotalPrice);
}

function addAndRemoveClassEmpty(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let addedInformation = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);
    let contentAddedDish = document.getElementById(`added_dish_button_and_amount${orderIndex}`);
    addAndRemoveClassHelperFunction(firstClickonButton, 'add_order_button', addedInformation, 'add_order_button_added');
    addAndRemoveClassHelperFunction(addedInformation, 'add_order_button_none', firstClickonButton, 'add_order_button_none');
    addAndRemoveClassHelperFunction(contentAddedDish, 'dish_order_buttons_none', contentPlusButton, 'add_order_button');
    addAndRemoveClassHelperFunction(contentPlusButton, 'add_order_button_none', contentAddedDish, 'dish_order_buttons');
}

function addAndRemoveClassFull(orderIndex) {
    let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${orderIndex}`);
    let addedInformation = document.getElementById(`added_information_${orderIndex}`);
    let contentPlusButton = document.getElementById(`plus_order_button_${orderIndex}`);
    let contentAddedDish = document.getElementById(`added_dish_button_and_amount${orderIndex}`);
    addAndRemoveClassHelperFunction(addedInformation, 'add_order_button_added', firstClickonButton, 'add_order_button');
    addAndRemoveClassHelperFunction(firstClickonButton, 'add_order_button_none', addedInformation, 'add_order_button_none');
    addAndRemoveClassHelperFunction(contentPlusButton, 'add_order_button', contentAddedDish, 'dish_order_buttons_none');
    addAndRemoveClassHelperFunction(contentAddedDish, 'dish_order_buttons', contentPlusButton, 'add_order_button_none');
}

function changeClass(orderIndex) {
    if (myDishes[orderIndex].amount == 0) {
        addAndRemoveClassEmpty(orderIndex);
    } else {
        addAndRemoveClassFull(orderIndex);
    }
}

function resetAllDishButtons() {
    for (let i = 0; i < myDishes.length; i++) {
        let firstClickonButton = document.getElementById(`first_click_on_add_order_button_${i}`);
        let addedInformation = document.getElementById(`added_information_${i}`);
        let contentPlusButton = document.getElementById(`plus_order_button_${i}`);
        let contentAddedDish = document.getElementById(`added_dish_button_and_amount${i}`);
        addAndRemoveClassHelperFunction(firstClickonButton, 'add_order_button', firstClickonButton, 'add_order_button_none');
        addAndRemoveClassHelperFunction(contentAddedDish, 'dish_order_buttons_none', contentAddedDish, 'dish_order_buttons');
        addAndRemoveClassHelperFunction(addedInformation, 'add_order_button_none', addedInformation, 'add_order_button_added');
        addAndRemoveClassHelperFunction(contentPlusButton, 'add_order_button_none', contentPlusButton, 'add_order_button');
        myDishes[i].amount = 0;
    }
}

function addClassRubbish(orderIndex, condition) {
    let contentRubbishButton = document.getElementById(`rubbish_button_${orderIndex}`);
    let contentLessButton = document.getElementById(`less_button_${orderIndex}`);
    let contentRubbishButtonOnTop = document.getElementById(`rubbish_button_onTop_${orderIndex}`);
    if (condition == 0 && myDishes[orderIndex].amount == 1) {
        addAndRemoveClassHelperFunction(contentRubbishButton, 'dish_font_button', contentRubbishButton, 'dish_font_button_none');
        addAndRemoveClassHelperFunction(contentLessButton, 'dish_font_button_non', contentLessButton, 'dish_font_button');
    } else if (condition == 1 && myDishes[orderIndex].amount > 1) {
        addAndRemoveClassHelperFunction(contentRubbishButtonOnTop, 'dish_font_button', contentRubbishButtonOnTop, 'dish_font_button_none');
    }
}

function deliverySwitch() {
    if (switchCondition == 0) {
        contentDeliveryFee.innerText = "4,99€";
        switchCondition = 1;
    } else {
        contentDeliveryFee.innerText = "0,00€";
        switchCondition = 0;
    }
    calculateNewDishPrice();
}

function openDialogOrder() {
    let totalPrice = parseFloat(contentTableTotalPrice.innerText.replace(",", "."));
    totalPrice = 0;

    writeIntoContent(0, 0);
    contentDialog.showModal();
    addAndRemoveClassHelperFunction(contentDialog, 'dialog_opend', contentDialog, 'dialog_closed');
    contentBasket.classList.add("basket_closed");
    setTimeout(function () {
        closeDialogOrder();
    }, 2000)
}

function closeDialogOrder() {
    let totalPrice = parseFloat(contentTableTotalPrice.innerText.replace(",", "."));
    totalPrice = 0;
    resetBasket();
    basketWithDishes();
    resetAllDishButtons();
    closeBasketResponsive();
    setTimeout(function () {
        contentDialog.close();
    }, 125);
}

function resetBasket() {
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');
    let totalAmount = 0
    contentNumberTotalAmount.innerText = totalAmount;
    for (let index = 0; index < myDishes.length; index++) {
        let contentAddedDish = document.getElementById(`added_dish_content_${index}`);
        if (contentAddedDish) {
            contentAddedDish.remove();
        }
    }
    addAndRemoveClassHelperFunction(contentDialog, 'dialog_closed', contentDialog, 'dialog_opend');
    contentBasket.classList.remove("basket_closed");
}

function openBasketResponsive() {
    contentBasket.classList.toggle('responsive_basket_none');
    contentBody.classList.add('scroll_lock');
}

function closeBasketResponsive() {
    contentBasket.classList.add('responsive_basket_none');
    contentBody.classList.remove('scroll_lock');
}

function addAndRemoveClassAmountNull() {
    let contentShoppiCartButton = document.getElementById('shopping_cart_button');
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');
    addAndRemoveClassHelperFunction(contentShoppiCartButton, 'shopping_button_responsive', contentShoppiCartButton, 'shopping_button_responsive_count');
    addAndRemoveClassHelperFunction(contentNumberTotalAmount, 'total_amount_basket_none', contentNumberTotalAmount, 'total_amount_basket');
}

function addAndRemoveClassAmountBiggerNull() {
    let contentShoppiCartButton = document.getElementById('shopping_cart_button');
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');
    addAndRemoveClassHelperFunction(contentShoppiCartButton, 'shopping_button_responsive_count', contentShoppiCartButton, 'shopping_button_responsive');
    addAndRemoveClassHelperFunction(contentNumberTotalAmount, 'total_amount_basket', contentNumberTotalAmount, 'total_amount_basket_none');
}

function classShoppingCartResponisveCount() {
    let contentNumberTotalAmount = document.getElementById('number_total_amount_basket');
    let totalAmount = contentNumberTotalAmount.innerText;
    if (totalAmount == 0) {
        addAndRemoveClassAmountNull()
    } else {
        addAndRemoveClassAmountBiggerNull()
    }
}