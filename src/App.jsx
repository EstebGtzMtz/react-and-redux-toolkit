import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'

function App() {
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(incrementBy(2))}>
          increment by 2
        </button>
      </div>
    </>
  )
}

export default App
