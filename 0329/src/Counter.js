import { useState, useEffect } from 'react';
import counterStyle from './Counter.module.css';
export function sum(){

}
export default function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  useEffect(() => {
    fetch('http://localhost:9999/counter').then(function (resp) {
      return resp.json();
    }).then(function (result) {
      setCount(result.value);
    });
  }, []);
  function up() {
    fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count + 1 })
    })
      .then(response => response.json())
      .then(data => setCount(data.value))
      .catch(error => console.error(error));
  }
  const design = {
    border: '5px solid tomato'
  };
  return (
    <div style={design}>
      <h1 className={'title ' + counterStyle.titleRed}>{title}</h1>
      <button onClick={up} className={counterStyle.rightSpace}>+</button> {count}
    </div>
  );
}
