import React from 'react'
import './style.css'

class CounterUnit extends React.Component {
  render() {
    return (
      <div className={ "counter-box-unit " + this.props.unitName }>
        <p className="number">
          { this.props.unitValue }
        </p>
      <p>{ this.props.unitName }</p>
      </div>
    )
  }
}

export default CounterUnit