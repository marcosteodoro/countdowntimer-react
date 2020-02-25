import React from 'react'
import moment from 'moment'
import './style.css'

import CounterUnit from '../CounterUnit'

class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  componentDidMount() {
    setInterval(() => {
      const birthday = moment([2020, 2, 7])

      // TODO: REVIEW
      const days = birthday.diff(moment.now(), 'days')
      const hours = birthday.diff(moment.now(), 'hours') - (24 * days)
      const minutes = birthday.diff(moment.now(), 'minutes') - (days * 24 * 60) - (hours * 60)
      const seconds = birthday.diff(moment.now(), 'seconds') - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
      // TODO: REVIEW

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });

    }, 1000);
  }

  render() {
    return (
      <>
        <div className="counter-box">
          <CounterUnit unitName="days" unitValue={this.state.days} />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="hours" unitValue={this.state.hours} />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="minutes" unitValue={this.state.minutes} />
        </div>

        <div className="counter-box">
          <CounterUnit unitName="seconds" unitValue={this.state.seconds} />
        </div>
      </>
    )
  }
}

export default Counter
