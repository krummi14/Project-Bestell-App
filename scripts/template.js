function getBurgerDishTemplate(burgerIndex) {
    return `<article class="dish">
                <figure class="dish_img_and_description">
                    <img class="burger_dish_img" src="${myDishes[burgerIndex].img}">
                    <figcaption>
                        <h3>${myDishes[burgerIndex].name}</h3>
                        <p>${myDishes[burgerIndex].description}</p>
                    </figcaption>
                </figure>
                <p class="dish_price">${myDishes[burgerIndex].price}€</p>
            </article>`;
}

console.log(myDishes);
