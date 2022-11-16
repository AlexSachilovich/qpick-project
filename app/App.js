import { Component } from "./src/core/Component/Component.js";
import { Navigation } from "./src/components/atom/Navigation.js";
export class App extends Component {
  render() {
    console.log(435435);
    return `
          <qpik-nav>
          </qpik-nav>
          `;
  }
}

customElements.define("my-app", App);
