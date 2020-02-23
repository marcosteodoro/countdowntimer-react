import React from 'react'
import moment from 'moment'
import './style.css'

import CounterUnit from '../CounterUnit'

class Counter extends React.Component {
  render() {
    return (
      <>
        <div className="counter-box">
          <CounterUnit unitName="days" unitValue="10" />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="hours" unitValue="09" />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="minutes" unitValue="08" />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="seconds" unitValue="07" />
        </div>
      </>
    )
  }
}

export default Counter
