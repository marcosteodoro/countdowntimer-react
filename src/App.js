import React from 'react'
import './App.css'

import Counter from './components/Counter'
import CounterConfigurator from './components/CounterConfigurator'

export default function App() {
  return (
    <div className="App">
      <CounterConfigurator />
      <Counter />
    </div>
  )
}
