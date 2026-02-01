function getBurgerDishTemplate(burgerIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[burgerIndex].img}">
                    <figcaption class="dish_recipe">
                        <h4>${myDishes[burgerIndex].name}</h4>
                        <p>${myDishes[burgerIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <p class="dish_price">${myDishes[burgerIndex].price}€</p>
                    <button onclick="addDish()" class="add_order_button">Add to basket</button>
                </div>
            </article>`;
}

function getPizzaDishTemplate(pizzaIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img dish_img_position_${pizzaIndex}" src="${myDishes[pizzaIndex].img}">
                    <figcaption class="dish_recipe">
                        <h4>${myDishes[pizzaIndex].name}</h4>
                        <p>${myDishes[pizzaIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <p class="dish_price">${myDishes[pizzaIndex].price}€</p>
                    <button class="add_order_button">Add to basket</button>
                </div>
            </article>`;
}

function getSaladDishTemplate(saladIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[saladIndex].img}">
                    <figcaption class="dish_recipe">
                        <h4>${myDishes[saladIndex].name}</h4>
                        <p>${myDishes[saladIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <p class="dish_price">${myDishes[saladIndex].price}€</p>
                    <button class="add_order_button">Add to basket</button>
                </div>
            </article>`;
}

function getOrderDishTemplate() {
    return `<p>${myDishes[0].amount} x ${myDishes[0].name}</p>`
}
console.log(myDishes);
