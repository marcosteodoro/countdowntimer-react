import React from 'react'
import moment from 'moment'
import './style.css'

import CountdownCounter from '../CountdownCounter'

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      'showCountdownCounter': false,
      'date': moment().format('YYYY-MM-DD'),
      'time': moment().add('30', 'minutes').format('h:mm')
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
  }

  handleInput(ev) {
    const { name, value }  = ev.target

    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  render() {
    return (
      <>
        <form className="counter-configurator" onSubmit={ this.handleSubmit }>
          <div className="counter-configurator-field">
            <label htmlFor="date">
              Data: 
              <input type="date" name="date" id="date" value={ this.state.date } onChange={ this.handleInput }/>
            </label>
          </div>
          <div className="counter-configurator-field">
            <label htmlFor="time">
              Hora: 
              <input type="time" name="time" id="time" value={ this.state.time } onChange={ this.handleInput }/>
            </label>
          </div>
          <div className="counter-configurator-field">
            <button>
              Iniciar
            </button>
          </div>
        </form>

        <CountdownCounter show={ this.state.showCountdownCounter }/>
      </>
    )
  }
}