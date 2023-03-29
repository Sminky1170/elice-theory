import './App.css';
import './App2.css';
import Counter from './Counter';
import { Counter2 } from './Counter2';
function App() {
  return (
    <div className="App">
      <Counter title="카운터" initValue={0}></Counter>
      <Counter2></Counter2>
    </div>
  );
}

export default App;
