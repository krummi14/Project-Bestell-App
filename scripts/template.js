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
                    <h4>${myDishes[burgerIndex].price}€</h4>
                    <button onclick="addDish(${burgerIndex})" class="add_order_button">Add to basket</button>
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
                    <h4>${myDishes[pizzaIndex].price}€</h4>
                    <button onclick="addDish(${pizzaIndex})" class="add_order_button">Add to basket</button>
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
                    <h4>${myDishes[saladIndex].price}€</h4>
                    <button onclick="addDish(${saladIndex})" class="add_order_button">Add to basket</button>
                </div>
            </article>`;
}

function getOrderDishTemplate(orderIndex) {
    return `<div class="ordered_dish_content">
                <h4 class="dish_font">${myDishes[orderIndex].amount} x ${myDishes[orderIndex].name}</h4>
                <span class="render_amount_and_price">
                    <div class="render_amount">
                        <p class="dish_font">&#x1F5D1</p>
                        <p class="dish_font">${myDishes[orderIndex].amount}</p>
                        <p class="dish_font">+</p>
                    </div>
                    <p class="dish_font">${myDishes[orderIndex].price}€</p>
                </span>
            </div>`
}
console.log(myDishes);
