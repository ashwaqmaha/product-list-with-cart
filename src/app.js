const addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cartSection = button.closest(".cartSection");
    const image = cartSection.querySelector(".dessertImage");

    // Replace image class
    if (image) {
      image.classList.remove("dessertImage");
      image.classList.add("selectedItemToCartImage");
    }

    // Replace button with selected style
    button.classList.remove("addToCart");
    button.classList.add("selectedItemToCart");

    
    let quantity = 1;

    // Replace innerHTML with increment/decrement layout
    button.innerHTML = `
      <img
        src="assets/images/icon-decrement-quantity.svg"
        class="quantityIcon decrement"
        alt="icon-decrement-quantity"
      />
      <span class="quantityValue">${quantity}</span>
      <img
        src="assets/images/icon-increment-quantity.svg"
        class="quantityIcon increment"
        alt="icon-increment-quantity"
      />
    `;

    // Add event listeners to new icons
    const decrementBtn = button.querySelector(".decrement");
    const incrementBtn = button.querySelector(".increment");
    const quantityDisplay = button.querySelector(".quantityValue");

    incrementBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent clicking the whole button again
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    decrementBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      quantity--;
      if (quantity <= 0) {
        // Reset to original state
        button.classList.remove("selectedItemToCart");
        button.classList.add("addToCart");
        button.innerHTML = `
          <img src="assets/images/icon-add-to-cart.svg" alt="addToCart" />
          Add to Cart
        `;

        image.classList.remove("selectedItemToCartImage");
        image.classList.add("dessertImage");

      } else {
        quantityDisplay.textContent = quantity;
      }
    });
  });
});
