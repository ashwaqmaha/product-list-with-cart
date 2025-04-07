const addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dessertItem = button.closest(".dessertItem");
    const dessertImage = dessertItem.querySelector(".dessertImage");
    const emptyCart = document.querySelector("#noItems");
    const hasItemsCart = document.querySelector("#hasItems");

    let quantity = 1;

    replaceImageStyle(dessertImage);
    emptyCart.style.display = "none";
    hasItemsCart.style.display = "block";

    /* Info needed for the userCart:
    dessertName
    Quantity - how many
    unitPrice
    Not from dessertItems but needed:
    totalPrice - unitPrice * Quantity
    totalAmount - all the total prices added together
    numberOfItems - all the Quantity of the items added together
    */
   
    replaceButtonWithQuantityUI(button, quantity);
    handleIncrementDecrement(button, dessertImage, quantity);
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
