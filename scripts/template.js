function getBurgerDishTemplate(burgerIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[burgerIndex].img}">
                    <figcaption>
                        <h3>${myDishes[burgerIndex].name}</h3>
                        <p>${myDishes[burgerIndex].description}</p>
                    </figcaption>
                </figure>
                <p class="dish_price">${myDishes[burgerIndex].price}€</p>
            </article>`;
}

function getPizzaDishTemplate(pizzaIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img dish_img_position_${pizzaIndex}" src="${myDishes[pizzaIndex].img}">
                    <figcaption>
                        <h3>${myDishes[pizzaIndex].name}</h3>
                        <p>${myDishes[pizzaIndex].description}</p>
                    </figcaption>
                </figure>
                <p class="dish_price">${myDishes[pizzaIndex].price}€</p>
            </article>`;
}

function getSaladDishTemplate(saladIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="dish_img" src="${myDishes[saladIndex].img}">
                    <figcaption>
                        <h3>${myDishes[saladIndex].name}</h3>
                        <p>${myDishes[saladIndex].description}</p>
                    </figcaption>
                </figure>
                <p class="dish_price">${myDishes[saladIndex].price}€</p>
            </article>`;
}

console.log(myDishes);
