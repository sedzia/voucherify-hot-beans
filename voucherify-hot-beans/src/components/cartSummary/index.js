import * as css from "./index.css";

export const items = [
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
export default class CartSummary {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  addProductPrices(items) {
    return items
      .map((item) => {
        return parseFloat(item.price) * parseInt(item.quantity);
      })
      .reduce((partialSum, a) => partialSum + a, 0)
      .toFixed(2);
  }

  incrementQuantity(index) {
    return (e) => {
      items[index].quantity++;
      this.render();
    };
  }

  decrementQuantity(index) {
    if (items[index].quantity < 1) return;

    return (e) => {
      items[index].quantity--;
      this.render();
    };
  }

  //async function to fetch and check voucher code

  async checkVoucher(voucherCode) {
    console.log(voucherCode);
    const response = await fetch(`http://localhost:3000/check-voucher`, {
      method: "POST",
      headers: {
        //prettier-ignore
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ voucherCode }),
    });
    const data = await response.json();
    console.log(data);
  }

  // checkVoucher = async (e) => {
  //   e.preventDefault();
  //   const voucherCode = document.getElementById("voucherCode").value;
  //   const response = await fetch(
  //     `https://api.voucherify.io/v1/campaigns/voucherify-test-campaign/vouchers/${voucherCode}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Client-Application-Id": "011240bf-d5fc-4ef1-9e82-11eb68c43bf5",
  //         "X-Client-Token": "9e2230c5-71fb-460a-91c6-fbee64707a20",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.data.status === "redeemed") {
  //     alert("Voucher code is redeemed");
  //   } else {
  //     alert("Voucher code is not valid");
  //   }
  // };

  render() {
    if (this.elem)
      this.elem.innerHTML = `
      <div class="cart-and-summary-holder">
        <section class="cartSummary" data-component="cartSummary">
          <h2>Item summary (4)</h2>
          ${items
            .map(
              (item, index) =>
                `<div class='item' key=${index}>
                  <img src='/'/>
                  <div class='name-and-description'>
                    <span>${item.productName}</span>
                    <span>${item.productDescription}</span>
                  </div>
                  <button class='decrement' id="decrementQuantity-${index}">-</button>
                  <form>
                    <input type="number" value="${item.quantity}"/>
                  </form>
                  <button class='increment' id="incrementQuantity-${index}">+</button>
                  <span class="price">$${item.price}</span>
                  <button>Remove</button>
                 </div>`
            )
            //removing trailing comma after map in template literal
            .join("")}
        </section>
        <section class="orderSummary" data-component="orderSummary">
          <h2>Order summary</h2>
          <div class='total-order-holder'>  
            <h4>Subtotal<span>$${this.addProductPrices(items)}</span></h4>
            <h4>Shipping<span>Calculated at next step</span></h4>
            <h4>Coupon Codes:</h4>
            <form>
              <input id="voucherCode" type="text" placeholder="Enter code your" />
            </form>
            <button class="checkVoucherCode">-></button>
            <h4>Promotions:<span>test</span></h4></h4>
            <h4>All Your Discounts:<span>test</span></h4></h4>
            <h4>Grand total:<span>test</span></h4></h4>
            <button>Checkout</button>
          </div>
        </section>
      </div>
        `;

    const buttonsToAddIncrement = document.getElementsByClassName("increment");
    const buttonsToAddDecrement = document.getElementsByClassName("decrement");
    const buttonToCheckVoucherCode =
      document.getElementsByClassName("checkVoucherCode");

    for (let i = 0; i < buttonsToAddIncrement.length; i++) {
      buttonsToAddIncrement[i].addEventListener(
        "click",
        this.incrementQuantity(i)
      );
    }
    for (let i = 0; i < buttonsToAddDecrement.length; i++) {
      buttonsToAddDecrement[i].addEventListener(
        "click",
        this.decrementQuantity(i)
      );
    }
    buttonToCheckVoucherCode[0].addEventListener("click", () =>
      this.checkVoucher(document.getElementById("voucherCode").value)
    );
  }
}
