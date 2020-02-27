import React from 'react'
import './style.css'

export default class ConterConfigurator extends React.Component {
  constructor() {
    super()
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
            <input type="date" id="date"/>
          </label>
        </div>
        <div className="counter-configurator-field">
          <label htmlFor="time">
            Hora: 
            <input type="time" id="time"/>
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