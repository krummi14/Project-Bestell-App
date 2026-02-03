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
                    <h4>${formatPrice(myDishes[burgerIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${burgerIndex}" onclick="addDish(${burgerIndex})" class="add_order_button">Add to basket</button>
                    <div class="dish_order_buttons">
                        <p id="added_information_${burgerIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${burgerIndex}" onclick="addDish(${burgerIndex})" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
                    </div>
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
                    <h4>${formatPrice(myDishes[pizzaIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${pizzaIndex}" onclick="addDish(${pizzaIndex})" class="add_order_button">Add to basket</button>
                    <div class="dish_order_buttons">
                        <p id="added_information_${pizzaIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${pizzaIndex}" onclick="addDish(${pizzaIndex})" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
                    </div>
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
                    <h4>${formatPrice(myDishes[saladIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${saladIndex}" onclick="addDish(${saladIndex})" class="add_order_button">Add to basket</button>
                    <div class="dish_order_buttons">
                        <p id="added_information_${saladIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${saladIndex}" onclick="addDish(${saladIndex})" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
                    </div>
                </div>
            </article>`;
}

function getOrderDishTemplate(orderIndex) {
    return `<div class="ordered_dish_content">
                <h4 class="dish_font" id="ordered_dish_amount_${orderIndex}"></h4>
                <span class="render_amount_and_price">
                    <div class="render_amount">
                        <p class="dish_font">&#x1F5D1</p>
                        <p id = "dish_amount_${orderIndex}" class="dish_font"></p>
                        <p class="dish_font">+</p>
                    </div>
                    <p class="dish_font">${formatPrice(myDishes[orderIndex].price)}</p>
                </span>
            </div>`
}

function getBasketTemplate() {
    return `<h3>Your Basket</h3>
            <span id="order_content" class="order_content_gap_and_pad">

            </span>
            <table>
                <tr>
                    <td class="text_left">Subtotal</td>
                    <td class="text_right"><div id="dish_price">0,00€</div></td>
                </tr>
                <tr class="table_padding_bottom">
                    <td class="text_left">Delivery Fee</td>
                    <td class="text_right">4,99€</td>
                </tr>
                <tr class="table_border_top">
                    <th class="text_left">Total</th>
                    <th class="text_right"><div id="total_table_price">4,99€</div></th>
                </tr>
            </table>
            <span class="order_button_content">
                <button class="order_button">Buy now<div id="total_price">(0,00€)</div></button>
            </span>`
}

console.log(myDishes);
