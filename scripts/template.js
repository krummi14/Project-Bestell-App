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
                    <div class="dish_order_buttons">
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
                    <div class="dish_order_buttons">
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
                    <div class="dish_order_buttons">
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

function getBasketTemplate() {
    return `<div class="close_button_content">
                <button class="close_basket_button_responsive close_button_none" onclick="closeBasketResponsive()">X</button>
            </div>
            <h3>Your Basket</h3>
            <div id="basket_empty" class="basket_empty_info">
                <p class="basket_nothing_text">Nothing here yet.<br> Go ahead and choose something delicious!</p>
                <img src="./assets/icon/basket.png" alt="image of shopping cart" class="basket_icon">
            </div>
            <div id="basket_full" class="basket_full_info basket_empty_to_full">
                <div class="delivery_or_pickUp_label">
                    <p class="delivery_or_pickUp_label_font">Pick Up</p>
                        <label class="switch">
                            <input onclick="deliverySwitch()" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    <p class="delivery_or_pickUp_label_font">Delivery</p>
                </div>
            
                <span id="order_content" class="order_content_gap_and_pad order_list">

                </span>
        
                <table>
                    <tr>
                        <td class="text_left">Subtotal</td>
                        <td class="text_right"><div id="dish_price">0,00€</div></td>
                    </tr>
                    <tr class="table_padding_bottom">
                        <td class="text_left">Delivery Fee</td>
                        <td class="text_right"><div id="delivery_fee">0,00€</div></td>
                    </tr>
                    <tr class="table_border_top">
                        <th class="text_left">Total</th>
                        <th class="text_right"><div id="total_table_price">0,00€</div></th>
                    </tr>
                </table>
                <span class="order_button_content">
                <button onclick="openDialogOrder()" class="order_button">Buy now<div id="total_price">(0,00€)</div></button>
                </span>
            </div>`
}

console.log(myDishes);
