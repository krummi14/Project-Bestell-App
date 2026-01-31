function init() {
    renderBurgers();
}

function renderBurgers() {
    let contentBurger = document.getElementById('burger_content');
    contentBurger.innerHTML = "";

    for (let burgerIndex = 0; burgerIndex < 4; burgerIndex++) {
        contentBurger.innerHTML += getBurgerDishTemplate(burgerIndex);
    }
}