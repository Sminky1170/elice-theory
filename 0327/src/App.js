import React, {useState} from 'react';
function Counter2({title, initValue}){
  const [count, setCount] = useState(initValue);
  function up(){
    setCount(count+1);
  }
  return (<div>
    <h1>{title}</h1>
    <button onClick={up}>+</button> 👉🏻 {count}
  </div>)
}
function Counter({title, initValue}){
  let countState = useState(0);
  let count = countState[0];
  let setCount = countState[1];
  function up(){
    setCount(count+1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button> 👉🏻 {count}
    </div>
  )
}
function App() {
  return (
    <div>
      <Counter2 title="손님수 카운터" initValue={20}></Counter2>
      <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
