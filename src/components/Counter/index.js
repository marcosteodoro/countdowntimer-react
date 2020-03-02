import React from 'react'
import moment from 'moment'
import './style.css'

import CountdownCounter from '../CountdownCounter'
import CountdownSwitchButton from '../CountdownSwitchButton'

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      showCountdownCounter: false,
      date: moment().format('YYYY-MM-DD'),
      time: moment().add('30', 'minutes').format('h:mm')
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    if (this.state.date && this.state.date) {
      this.setState((prevState) => {
        return {
          ...prevState,
          'showCountdownCounter': !prevState.showCountdownCounter
        }
      })
    }
  }

  handleInput(ev) {
    const { name, value } = ev.target

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
        <form className="counter-configurator" onSubmit={this.handleSubmit}>
          <div className="counter-configurator-field">
            <label htmlFor="date">
              Date:
              <input type="date" name="date" id="date" value={this.state.date} onChange={this.handleInput} />
            </label>
          </div>
          <div className="counter-configurator-field">
            <label htmlFor="time">
              Hour:
              <input type="time" name="time" id="time" value={this.state.time} onChange={this.handleInput} />
            </label>
          </div>
          <div className="counter-configurator-field">
          <CountdownSwitchButton text={ (this.state.showCountdownCounter) ? 'Stop' : 'Start' }/>
          </div>
        </form>

        <CountdownCounter 
          show={ this.state.showCountdownCounter } 
          date={ this.state.date }
          time={ this.state.time }
        />
      </>
    )
  }
}