/* @jsx createElement */
import { createElement, render, Component, useState } from "./react.js";

class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uB098\uB294 \uD0C0\uC774\uD2C0\uC774 \uB418\uACE0\uC2F6\uC740 \uB2F9\uC2E0!");
  }

}

function Title(props) {
  const [test, setTest] = useState("test");
  return createElement("div", null, createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791 \uD560\uAE4C?"), createElement(YourTitle, null), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0 \uC2F6\uB2E4."), createElement("p", null, "test useState: ", test));
}

render(createElement(Title, null), document.querySelector("#root"));