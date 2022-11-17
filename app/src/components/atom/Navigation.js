import { Component } from "../../core/Component/Component.js";
export class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return `
            <wrapper>
                <nav class="menu">
                    <ul class="menu__list">
                        <li>
                            <a href="#" class="menu__link"></a>
                            <ul class="sub-menu__list">
                            ${this.props
                              .map((item) => {
                                return `<li>${item}</li>`;
                              })
                              .join("")}
                            </ul>
                        </li>
                    </ul>
                </nav>            
            </wrapper>
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
