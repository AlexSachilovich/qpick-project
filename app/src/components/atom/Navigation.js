import { Component } from "../../core/Component/Component.js";
export class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(234234);
    return `
            <wrapper>
                <nav class="menu">
                    <ul class="menu__list">
                        <li>
                            <a href="#" class="menu__link">первый уровень</a>
                            <ul class="sub-menu__list">
                                <li>
                                    <a href="#" class="sub-menu__link">2 level</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>            
            </wrapper>
    `;
  }
}
customElements.define("qpik-nav", Navigation);
