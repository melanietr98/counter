import { useState } from "react";

function Counter() {
  // let counterState = useState(5);
  // console.log(counterState); // [5, setState]

  // let count = counterState[0]
  // let setCount = counterState[1]

  // useState(5)  -->  [5, setState]

  // array destructuring
  let [count, setCount] = useState(5);

  // let counterState = useState(5);
  // let count = counterState[0]
  // let setCount = counterState[1]

  let [inputValue, setInputValue] = useState("");

  function increment() {
    console.log("plus 1");

    // first method of setting state
    setCount((count) => count + 1);
    // console.log(count) -> 5
    setCount((count) => count + 1);
    // console.log(count) -> 5
    setCount((count) => count + 1);
    // console.log(count) -> 5

    // second method using a callback
    // setCount((prev) => prev + 1);
  }

  function handleChange(evt) {
    // takes current value of input
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target.value);
    // and sets/updates the inputValue state variable
    setInputValue(evt.target.value);
  }

  // method 1
  // function check() {
  //   if (count % 2 == 0) {
  //     return "even"
  //   } else {
  //     return "odd"
  //   }
  // }

  // method 2
  // let check;

  // if (count % 2 == 0) {
  //   check = 'even'
  // } else {
  //   check = 'odd'
  // }

  // method 3 (ternary operator)
  // count % 2 === 0 ? 'even' : 'odd'

  // condition ? what happens if true : what happens if false

  // method 4
  let check =
    count < 0
      ? "negative"
      : count === 0
      ? "zero"
      : count % 2 === 0
      ? "even"
      : "odd";

  let backgroundColor;

  if (count % 2 === 0) {
    backgroundColor = "lavender";
  } else {
    backgroundColor = "pink";
  }

  // if (count === 0) {
  //   return <div>No counter for you!</div>
  // }

  return (
    <article style={{ backgroundColor }}>
      <span>Current Count: {count}</span>
      <p>(This number is {check})</p>
      <section>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={increment}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
    </article>
  );
}

export default Counter;
