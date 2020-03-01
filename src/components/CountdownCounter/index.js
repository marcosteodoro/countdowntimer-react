import React from 'react'
import moment from 'moment'
import './style.css'

import CounterUnit from '../CounterUnit'

export default class CountdownCounter extends React.Component {
  constructor() {
    super()

    this.state = {
      intervalID: null,
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  componentDidMount() {
    const intervalID = setInterval(() => {
      const counterFinish = moment(this.props.date + ' ' + this.props.time, 'YYYY-MM-DD h:mm')

      // TODO: REVIEW
      const days = counterFinish.diff(moment.now(), 'days')
      const hours = counterFinish.diff(moment.now(), 'hours') - (24 * days)
      const minutes = counterFinish.diff(moment.now(), 'minutes') - (days * 24 * 60) - (hours * 60)
      const seconds = counterFinish.diff(moment.now(), 'seconds') - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
      // TODO: REVIEW
      
      this.setState((prevState) => {
        return {
          ...prevState,
          days,
          hours,
          minutes,
          seconds
        }
      })

      if (
        days <= 0 &&
        hours <= 0 &&
        minutes <= 0 &&
        seconds <= 0
      ) {
        this.stopCountdownCounter()
      }
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalID
      }
    })
  }

  stopCountdownCounter() {
    clearInterval(this.state.intervalID)
  }

  render() {
    let componentClassName = 'counter-box'
    if (!this.props.show) componentClassName = componentClassName.concat(' hidden')

    return (
      <div className={componentClassName} >
        <CounterUnit unitName="days" unitValue={this.state.days} />
        <CounterUnit unitName="hours" unitValue={this.state.hours} />
        <CounterUnit unitName="minutes" unitValue={this.state.minutes} />
        <CounterUnit unitName="seconds" unitValue={this.state.seconds} />
      </div>
    )
  }
}