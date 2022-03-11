import * as css from "./index.css";
 
export default class Footer {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem)
      this.elem.innerHTML = `
        <section data-component="footer" class='footer'>
         <div class="footer-left-holder">
          <img class='footer-shop-logo' src='/images/black.png' alt='footer-shop-logo'/>
          <form>
            <label for="email">Sign up for offers and more</label>
            <div>
              <input type='email' disabled=true placeholder='Enter your email here'/>
              <button>-></button>
            </div>
          </form>
          <div class="social-media-icons">
            <a href='#'></a>
            <a href='#'></a>
            <a href='#'></a>
          </div>
          <p class="copyright-holder">© ${new Date().getFullYear()} voucherify</p>
         </div>
         <div class="footer-right-holder">
            <ul>
              <li>Discover</li>
              <li>Bestsellers</li>
              <li>Shop all</li>
              <li>% Sales</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Help Center</li>
              <li>Shipping/Return</li>
              <li>Affiliates</li>
            </ul>
            <ul>
              <li>Legal</li>
              <li>Contact</li>
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
            </ul>
         </div>
        </section>
        `;
  }
}
