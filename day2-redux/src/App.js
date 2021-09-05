import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './action'



function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.islogged)
  const dispatch = useDispatch()

  return (

    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
