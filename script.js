function init() {
    renderDishes();
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