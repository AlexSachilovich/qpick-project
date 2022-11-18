import { Component } from "../../core/Component/Component.js";
export class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return `
                <div class="select">
                    <div class="select__icon">
                    </div>
                    <nav class="nav header__nav">
                        <ul class="menu"><p class="menu__choose-model">Выбрать модель телефона</p>
                            <div class="menu__list">
                                ${this.props
                                  .map((item) => {
                                    return `<li class="menu__item">
                                                <a href="#" class="menu__link">${item}</a>
                                            </li>`;
                                  })
                                  .join("")}
                            </div>
                        </ul>
                    </nav> 
                </div>
    `;
  }

  static get observedAttributes() {
    return ["brand"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.props = JSON.parse(this.getAttribute("brand"));
  }
}
customElements.define("qpik-nav", Navigation);
