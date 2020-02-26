import React from 'react'
import './App.css'

import Counter from './components/Counter'
import CounterConfigurator from './components/CounterConfigurator'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <CounterConfigurator />
        <Counter />
      </div>
    )
  }
}
