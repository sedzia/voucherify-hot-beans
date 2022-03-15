window.addEventListener("load", () => {
  const cartSummary = document.getElementById("cartSummary");
  let items = [
    {
      productName: "Johan & Nystrom Caravan",
      productDescription: "20 oz bag",
      quantity: 1,
      price: "26.99",
    },
    {
      productName: "Illy Arabica",
      productDescription: "Bestseller 18 oz bag",
      quantity: 1,
      price: "21.02",
    },
    {
      productName: "Hard Beans Etiopia",
      productDescription: "6 oz bag",
      quantity: 1,
      price: "3.88",
    },
    {
      productName: "Johan & Nystrom Bourbon",
      productDescription: "20 oz bag",
      quantity: 2,
      price: "41.98",
    },
  ];
  cartSummary.innerHTML = `<h2>Item summary (4)</h2> ${items
    .map(
      (item, index) =>
        `<div class='item' key=${index}>
                    <img src='/'/>
                    <div class='name-and-description'>
                      <span>${item.productName}</span>
                      <span>${item.productDescription}</span>
                    </div>
                    <div class="form-and-button-holder">
                      <button class='decrement' id="decrementQuantity-${index}">-</button>
                      <form>
                      <input type="number" value="${item.quantity}"/>
                      </form>
                      <button class='increment' id="incrementQuantity-${index}">+</button>
                    </div>
                    <span class="price">$${item.price}</span>
                    <button class="remove-button">Remove</button>
                   </div>`
    )
    .join("")}`;

  const buttonsToAddIncrement = document.getElementsByClassName("increment");
  const buttonsToAddDecrement = document.getElementsByClassName("decrement");
  const buttonToCheckVoucherCode =
    document.getElementsByClassName("checkVoucherCode");
  console.log(buttonsToAddIncrement);
  for (let i = 0; i < buttonsToAddIncrement.length; i++) {
    buttonsToAddIncrement[i].addEventListener("click", () =>
      incrementQuantity(i)
    );
  }
  for (let i = 0; i < buttonsToAddDecrement.length; i++) {
    buttonsToAddDecrement[i].addEventListener("click", () =>
      decrementQuantity(i)
    );
  }
  buttonToCheckVoucherCode[0].addEventListener("click", () =>
    checkVoucher(document.getElementById("voucherCode").value)
  );

  function addProductPrices(items) {
    return items
      .map((item) => {
        return parseFloat(item.price) * parseInt(item.quantity);
      })
      .reduce((partialSum, a) => partialSum + a, 0)
      .toFixed(2);
  }

  function incrementQuantity(inde2) {
    items[inde2].quantity = items[inde2].quantity + 1;
    cartSummary.innerHTML = `<h2>Item summary (4)</h2> ${items
      .map(
        (item, index) =>
          `<div class='item' key=${index}>
                      <img src='/'/>
                      <div class='name-and-description'>
                        <span>${item.productName}</span>
                        <span>${item.productDescription}</span>
                      </div>
                      <div class="form-and-button-holder">
                        <button class='decrement' id="decrementQuantity-${index}">-</button>
                        <form>
                        <input type="number" value="${item.quantity}"/>
                        </form>
                        <button class='increment' id="incrementQuantity-${index}">+</button>
                      </div>
                      <span class="price">$${item.price}</span>
                      <button class="remove-button">Remove</button>
                     </div>`
      )
      .join("")}`;
    const buttonsToAddIncrement = document.getElementsByClassName("increment");
    const buttonsToAddDecrement = document.getElementsByClassName("decrement");
    const buttonToCheckVoucherCode =
      document.getElementsByClassName("checkVoucherCode");
    console.log(buttonsToAddIncrement);
    for (let i = 0; i < buttonsToAddIncrement.length; i++) {
      buttonsToAddIncrement[i].addEventListener("click", () =>
        incrementQuantity(i)
      );
    }
    for (let i = 0; i < buttonsToAddDecrement.length; i++) {
      buttonsToAddDecrement[i].addEventListener("click", () =>
        decrementQuantity(i)
      );
    }
    buttonToCheckVoucherCode[0].addEventListener("click", () =>
      checkVoucher(document.getElementById("voucherCode").value)
    );
  }

  function decrementQuantity(inde2) {
    if (items[inde2].quantity < 1) return;

    items[inde2].quantity = items[inde2].quantity - 1;
    cartSummary.innerHTML = `<h2>Item summary (4)</h2> ${items
      .map(
        (item, index) =>
          `<div class='item' key=${index}>
                      <img src='/'/>
                      <div class='name-and-description'>
                        <span>${item.productName}</span>
                        <span>${item.productDescription}</span>
                      </div>
                      <div class="form-and-button-holder">
                        <button class='decrement' id="decrementQuantity-${index}">-</button>
                        <form>
                        <input type="number" value="${item.quantity}"/>
                        </form>
                        <button class='increment' id="incrementQuantity-${index}">+</button>
                      </div>
                      <span class="price">$${item.price}</span>
                      <button class="remove-button">Remove</button>
                     </div>`
      )
      .join("")}`;
    const buttonsToAddIncrement = document.getElementsByClassName("increment");
    const buttonsToAddDecrement = document.getElementsByClassName("decrement");
    const buttonToCheckVoucherCode =
      document.getElementsByClassName("checkVoucherCode");
    console.log(buttonsToAddIncrement);
    for (let i = 0; i < buttonsToAddIncrement.length; i++) {
      buttonsToAddIncrement[i].addEventListener("click", () =>
        incrementQuantity(i)
      );
    }
    for (let i = 0; i < buttonsToAddDecrement.length; i++) {
      buttonsToAddDecrement[i].addEventListener("click", () =>
        decrementQuantity(i)
      );
    }
    buttonToCheckVoucherCode[0].addEventListener("click", () =>
      checkVoucher(document.getElementById("voucherCode").value)
    );
  }
});
