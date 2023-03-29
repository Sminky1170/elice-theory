import {useState} from 'react';
import './App.css';
import './App2.css';
import counterStyle from './Counter.module.css';
console.log('counterStyle', counterStyle);
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  console.log('Counter', count);
  function up(){
    setCount(count+1);
    // setCount(function(oldCount){
    //   console.log('oldCount', oldCount);
    //   return oldCount+1;
    // })    
  }
  const design = {
    border:'5px solid tomato',
    backgroundColor:'gray'
  }
  return (
    <div style={design}>
      <h1 className={'title '+counterStyle.titleRed}>{title}</h1>
      <button onClick={up} className={counterStyle.rightSpace}>+</button> {count}
    </div>
  )
}
function Counter2(){
  return <h1 className="title">Counter2</h1>
}
function App() {
  return (
    <div className="App">
      <Counter title="카운터" initValue={10}></Counter>
      <Counter2></Counter2>
    </div>
  );
}

export default App;
