"use client"
import React from 'react'
import Countdown from 'react-countdown';


const endingDate = new Date("2024-09-14")

const CountDown = () => {

  return (
    <div className='font-bold text-5xl text-yellow-500'>
      <Countdown date={endingDate} />
    </div>
  )
}

export default CountDown
