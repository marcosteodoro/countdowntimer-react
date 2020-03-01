import React from 'react'
import './App.css'

import Counter from './components/Counter'

export default class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}
