import { Component } from "./src/core/Component/Component.js";
export class App extends Component {
  render() {
    return `
          <p>
           hello
          </p>
          `;
  }
}

customElements.define("my-app", App);
