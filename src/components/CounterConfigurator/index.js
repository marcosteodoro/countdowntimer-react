import React from 'react'
import moment from 'moment'
import './style.css'

export default class ConterConfigurator extends React.Component {
  constructor() {
    super()

    this.state = {
      'date': moment().format('YYYY-MM-DD'),
      'time': moment().add('30', 'minutes').format('h:mm')
    }
  }

  handleSubmit(ev) {
    ev.preventDefault()
  }

  render() {
    return (
      <form className="counter-configurator" onSubmit={ this.handleSubmit }>
        <div className="counter-configurator-field">
          <label htmlFor="date">
            Data: 
            <input type="date" id="date" value={ this.state.date }/>
          </label>
        </div>
        <div className="counter-configurator-field">
          <label htmlFor="time">
            Hora: 
            <input type="time" id="time" value={ this.state.time }/>
          </label>
        </div>
        <div className="counter-configurator-field">
          <button>
            Iniciar
          </button>
        </div>
      </form>
    )
  }
}