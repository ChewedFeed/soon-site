import {React, useEffect, useState} from "react"

function calcDiff(year, month, day) {
  const date1 = new Date(year, month - 1, day);
  const date2 = new Date();
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diffHrs = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
  const diffMins = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const diffSecs = Math.floor((timeDiff % (1000 * 60)) / 1000);

  let ret = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  if (timeDiff > 0) {
    ret.days = diffDays
    ret.hours = diffHrs
    ret.minutes = diffMins
    ret.seconds = diffSecs
  }

  return ret
}

export default function Countdown(props) {
  const tl = calcDiff(props.year, props.month, props.day)
  const [timeLeft, setTimeleft] = useState(tl)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeleft(calcDiff(props.year, props.month, props.day))
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <section className="countdown">
      <div id="countdown">
        <span className="countdown_row countdown_show4">
          <span className="countdown_section">
            <span className="countdown_amount">{tl.days}</span>
            <br />
            days
          </span>
          <span className="countdown_section">
            <span className="countdown_amount">{tl.hours}</span>
            <br />
            hours
          </span>
          <span className="countdown_section">
            <span className="countdown_amount">{tl.minutes}</span>
            <br />
            minutes
          </span>
          <span className="countdown_section">
            <span className="countdown_amount">{tl.seconds}</span>
            <br />
            seconds
          </span>
        </span>
      </div>
    </section>
  )
}
