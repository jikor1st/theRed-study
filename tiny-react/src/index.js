/* @jsx createElement */
import { createElement, render, Component, useState } from "./react.js";

class YourTitle extends Component {
  render() {
    return <p>나는 타이틀이 되고싶은 당신!</p>;
  }
}

function Title(props) {
  const [test, setTest] = useState("test");
  return (
    <div>
      <h2>정말 동작 할까?</h2>
      <YourTitle />
      <p>잘 동작하는지 보고 싶다.</p>
      <p>test useState: {test}</p>
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
