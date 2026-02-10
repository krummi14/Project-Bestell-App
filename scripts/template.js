function getBurgerDishTemplate(burgerIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[burgerIndex].img}">
                    <figcaption class="dish_recipe">
                        <h4>${myDishes[burgerIndex].name}</h4>
                        <p class="dish_recipe_text">${myDishes[burgerIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <h4>${formatPrice(myDishes[burgerIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${burgerIndex}" onclick="addDish(${burgerIndex})" class="add_order_button">Add to basket</button>
                    <div id="added_dish_button_and_amount${burgerIndex}" class="dish_order_buttons_none">
                        <p id="added_information_${burgerIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${burgerIndex}" onclick="addDish(${burgerIndex}, 1)" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
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
                        <p class="dish_recipe_text">${myDishes[pizzaIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <h4>${formatPrice(myDishes[pizzaIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${pizzaIndex}" onclick="addDish(${pizzaIndex})" class="add_order_button">Add to basket</button>
                    <div id="added_dish_button_and_amount${pizzaIndex}" class="dish_order_buttons_none">
                        <p id="added_information_${pizzaIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${pizzaIndex}" onclick="addDish(${pizzaIndex}, 1)" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
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
                        <p class="dish_recipe_text">${myDishes[saladIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <h4>${formatPrice(myDishes[saladIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${saladIndex}" onclick="addDish(${saladIndex})" class="add_order_button">Add to basket</button>
                    <div id="added_dish_button_and_amount${saladIndex}" class="dish_order_buttons_none">
                        <p id="added_information_${saladIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${saladIndex}" onclick="addDish(${saladIndex}, 1)" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth">+</button>
                    </div>
                </div>
            </article>`;
}

function getOrderDishTemplate(orderIndex) {
    return `<div id="added_dish_content_${orderIndex}" class="ordered_dish_content">
                <span class="dish_headline_and_rubbish">
                    <h4 class="dish_font" id="ordered_dish_amount_${orderIndex}"></h4>
                    <button id="rubbish_button_onTop_${orderIndex}" onclick="deleteDish(${orderIndex}, 0)" class="dish_font_button_none">&#x1F5D1</button>
                </span>
                <span class="render_amount_and_price">
                    <div class="render_amount">
                        <button id="rubbish_button_${orderIndex}" onclick="deleteDish(${orderIndex}, 0)" class="dish_font_button_none">&#x1F5D1</button>
                        <button id="less_button_${orderIndex}" onclick="addDish(${orderIndex}, 0)" class="dish_font_button">-</button>
                        <p id="dish_amount_${orderIndex}" class="dish_font"></p>
                        <button onclick="addDish(${orderIndex}, 1)" class="dish_font_button">+</button>
                    </div>
                    <p class="dish_font">${formatPrice(myDishes[orderIndex].price)}</p>
                </span>
            </div>`
}

function getTemplateRespoMenu(totalAmount) {
    return `
            <button class="basket_responsive_button home_button_responsive"></button>
            <button class="basket_responsive_button profile_button_responsive"></button>
            <button class="basket_responsive_button default_button_responsive"></button>
            <button id="shopping_cart_button" class="basket_responsive_button shopping_button_responsive"
                onclick="openBasketResponsive()">
                <p id="number_total_amount_basket" class="total_amount_basket total_amount_basket_none">${totalAmount}</p>
            </button>
            `
}
