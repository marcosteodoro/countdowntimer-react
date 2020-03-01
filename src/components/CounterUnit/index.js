import React from 'react'
import './style.css'

export default class CounterUnit extends React.Component {
  render() {
    return (
      <div className={ "counter-box-unit " + this.props.unitName }>
        <p className="number">
          { (this.props.unitValue > 0) ? this.props.unitValue : this.handleNegativeDate() }
        </p>
      <p>{ this.props.unitName }</p>
      </div>
    )
  }

  handleNegativeDate() {
    switch (this.props.unitName) {
      case 'days':
        return 'D'
      case 'hours':
        return 'O'
      case 'minutes':
        return 'N'
      case 'seconds':
        return 'E'
      default:
    }
  }
}