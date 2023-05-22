import React, { useState, useEffect } from 'react'

export function calculateRemainingTime({ targetDate }: { targetDate: Date }) {
  const currentTime = new Date().getTime()
  const remainingTime = targetDate.getTime() - currentTime

  if (remainingTime <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

const Timer = () => {
  const timeVector = process.env.PUBLIC_URL + '/images/time-vector.png'

  const targetDate = new Date('2023-05-31')

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime({ targetDate })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime({ targetDate }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex items-start animate-reveal-timer">
      <div className="flex flex-col items-center max-w-[64px] lg:max-w-[132px]">
        <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
          {remainingTime.days}
        </span>
        <div className="relative w-full">
          <img src={timeVector} alt="Vector" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs lg:text-base text-white">
            {isSmallScreen ? 'DD' : 'Days'}
          </span>
        </div>
      </div>
      <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
        :
      </span>
      <div className="flex flex-col items-center max-w-[64px] lg:max-w-[132px]">
        <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
          {remainingTime.hours}
        </span>
        <div className="relative w-full">
          <img src={timeVector} alt="Vector" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs lg:text-base text-white">
            {isSmallScreen ? 'HH' : 'Hours'}
          </span>
        </div>
      </div>
      <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
        :
      </span>
      <div className="flex flex-col items-center max-w-[64px] lg:max-w-[132px]">
        <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
          {remainingTime.minutes}
        </span>
        <div className="relative w-full">
          <img src={timeVector} alt="Vector" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs lg:text-base text-white">
            {isSmallScreen ? 'MM' : 'Minutes'}
          </span>
        </div>
      </div>
      <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
        :
      </span>
      <div className="flex flex-col items-center max-w-[64px] lg:max-w-[132px]">
        <span className="xs:text-4xl lg:text-7xl font-bold text-main-color">
          {remainingTime.seconds}
        </span>
        <div className="relative w-full">
          <img src={timeVector} alt="Vector" className="w-full" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs lg:text-base text-white">
            {isSmallScreen ? 'SS' : 'Seconds'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Timer
