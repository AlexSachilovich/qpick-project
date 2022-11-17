import { Component } from "./src/core/Component/Component.js";
import { Navigation } from "./src/components/atom/Navigation.js";
export class App extends Component {
  constructor() {
    super();
    this.brand = [
      "Apple",
      "HTC",
      "HUAWEI",
      "LG",
      "Realme",
      "Samsung",
      "Sony",
      "Vivo",
      "XIAOMI",
      "ZTE",
    ];
  }

  render() {
    return `
          <qpik-nav brand='${JSON.stringify(this.brand)}'">
          </qpik-nav>
          `;
  }
}

customElements.define("my-app", App);
