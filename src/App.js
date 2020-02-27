import React from 'react'
import './App.css'

import Counter from './components/Counter'
import CounterConfigurator from './components/CounterConfigurator'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      'showCounter': false
    }
  }

  render() {
    return (
      <div className="App">
        <CounterConfigurator />
        <Counter show={ this.state.showCounter }/>
      </div>
    )
  }
}
