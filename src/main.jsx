import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import App from './App.jsx'
// import { PokemonApp } from './PokemonApp.jsx'
import './index.css'
import { store } from './store'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
      {/* <App /> */}
      {/* <PokemonApp /> */}
    </Provider>
  </React.StrictMode>,
)
