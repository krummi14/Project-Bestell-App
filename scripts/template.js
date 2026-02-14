function getDishesTemplate(dishIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[dishIndex].img}">
                    <figcaption class="dish_recipe">
                        <h4>${myDishes[dishIndex].name}</h4>
                        <p class="dish_recipe_text">${myDishes[dishIndex].description}</p>
                    </figcaption>
                </figure>
                <div class="dish_price_and_addButton">
                    <h4>${reFormatPrice(myDishes[dishIndex].price)}</h4>
                    <button id="first_click_on_add_order_button_${dishIndex}" onclick="addDish(${dishIndex})" class="add_order_button">Add to basket</button>
                    <div id="added_dish_button_and_amount${dishIndex}" class="dish_order_buttons_none">
                        <p id="added_information_${dishIndex}" class="add_order_button_none add_oder_button_newColor add_order_button_width"></p>
                        <button id="plus_order_button_${dishIndex}" onclick="addDish(${dishIndex}, 1)" class="add_order_button_none add_oder_button_newColor add_order_button_noWidth plus_order_button_size">+</button>
                    </div>
                </div>
            </article>`;
}

function getOrderDishTemplate(orderIndex) {
    return `<div id="added_dish_content_${orderIndex}" class="ordered_dish_content">
                <span class="dish_headline_and_rubbish">
                    <h4 class="dish_font dish_font_maxWidth" id="ordered_dish_amount_${orderIndex}"></h4>
                    <button id="rubbish_button_onTop_${orderIndex}" onclick="deleteDish(${orderIndex}, 0, 1)" class="dish_font_button_none">&#x1F5D1</button>
                </span>
                <span class="render_amount_and_price">
                    <div class="render_amount">
                        <button id="rubbish_button_${orderIndex}" onclick="deleteDish(${orderIndex}, 0, 1)" class="dish_font_button_none">&#x1F5D1</button>
                        <button id="less_button_${orderIndex}" onclick="addDish(${orderIndex}, 0)" class="dish_font_button">-</button>
                        <p id="dish_amount_${orderIndex}" class="dish_font"></p>
                        <button onclick="addDish(${orderIndex}, 1)" class="dish_font_button">+</button>
                    </div>
                    <p class="dish_font">${reFormatPrice(myDishes[orderIndex].price)}</p>
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
