const addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cartSection = button.closest(".cartSection");
    const image = cartSection.querySelector(".dessertImage");

    let quantity = 1;

    replaceImageStyle(image);
    replaceButtonWithQuantityUI(button, quantity);
    handleIncrementDecrement(button, image, quantity);
  });
});

// Replace image class for selected item
function replaceImageStyle(image) {
  if (image) {
    image.classList.remove("dessertImage");
    image.classList.add("selectedItemToCartImage");
  }
}

// Update button with quantity controls
function replaceButtonWithQuantityUI(button, quantity) {
  button.classList.remove("addToCart");
  button.classList.add("selectedItemToCart");

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
}

// Handle increment/decrement logic
function handleIncrementDecrement(button, image, quantity) {
  const decrementBtn = button.querySelector(".decrement");
  const incrementBtn = button.querySelector(".increment");
  const quantityDisplay = button.querySelector(".quantityValue");

  incrementBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  decrementBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    quantity--;
    if (quantity <= 0) {
      resetToOriginalButton(button, image);
    } else {
      quantityDisplay.textContent = quantity;
    }
  });
}

// Reset button and image to original state
function resetToOriginalButton(button, image) {
  button.classList.remove("selectedItemToCart");
  button.classList.add("addToCart");

  button.innerHTML = `
    <img src="assets/images/icon-add-to-cart.svg" alt="addToCart" />
    Add to Cart
  `;

  image.classList.remove("selectedItemToCartImage");
  image.classList.add("dessertImage");
}
