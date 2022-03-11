import * as css from "./index.css";

export default class Navbar {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem)
      this.elem.innerHTML = `
        <section data-component="navbar" class='navbar'>
          <img class='shop-logo' alt='your shop logo' src='/images/black.png'/>
          <ul class='navbar-list-holder'>
            <li class='list-item'>Bestsellers</li>
            <li class='list-item'>Shop all</li>
            <li class='list-item'>% Sales</li>
            <li class='list-item'>Hi Mary</li>
            <li class='list-item'>Shopping cart icon</li>
          </ul>
        </section>
        `;
  }
}
