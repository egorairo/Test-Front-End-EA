import React, { useState, useRef } from 'react'

import Timer from '../components/Timer'
import EmailNotificationForm from '../components/EmailNotificationForm'
import AllEvents from '../components/AllEvents'

export default function UnderConstruction() {
  const containerRef = useRef<null | HTMLDivElement>(null)

  const [isOtherEventsSectionActive, setIsOtherEventsSectionActive] =
    useState(false)

  const scrollToBottom = () => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, 500)
  }

  return (
    <div>
      <div className="relative w-full h-screen mx-auto overflow-y-auto overflow-x-hidden">
        <img
          src={process.env.PUBLIC_URL + '/images/vector-top-left.png'}
          className="absolute z-[1] top-[-20%] left-[-180px] xs:top-[-20%] xs:left-[-250px] lg:top-[-30%] lg:left-[-400px] w-[360px] xs:w-[480px] lg:w-auto"
          alt="vector"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/vector-top-right.png'}
          className="absolute z-[1] top-[-35%] right-[-220px] xs:top-[-50%] xs:right-[-450px] w-[530px] xs:w-auto"
          alt="vector"
        />

        <div className="relative z-10 h-full w-full pt-[80px] xs:pt-24 lg:pt-16">
          <div className="flex flex-col items-center w-full px-5 md:px-10">
            <a
              href="#"
              className="text-center mb-16 xs:mb-40 lg:mb-[90px] cursor-pointer"
            >
              <img
                src={process.env.PUBLIC_URL + '/images/lead-logo.svg'}
                className="w-32 xs:w-full animate-reveal-logo"
                alt="Lead Advisor"
              />
            </a>
            <div className="flex flex-col items-center gap-2 mb-8 animate-reveal-description">
              <h1 className="text-[#A4ADBA] text-center text-4xl lg:text-7xl font-bold uppercase">
                Under Construction
              </h1>
              <p className="max-w-[410px] text-base lg:text-lg text-center text-black opacity-80">
                We&apos;re making lots of improvements and will be back soon
              </p>
            </div>

            <Timer />

            <div className="flex flex-col items-center mt-10 xs:mt-[70px] px-5 md:px-10 animate-reveal-button">
              <p className="text-lg text-secondary-black">
                Check our event page when you wait:
              </p>
              <a
                href="https://leadadvisors.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between px-7 py-4 h-[60px] w-[240px] rounded-[40px] bg-main-color text-lg text-white mt-3 duration-200 hover:opacity-80"
              >
                Go to the event
                <img
                  src={process.env.PUBLIC_URL + '/images/arrow-next.svg'}
                  alt="arrow"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 flex flex-col items-center justify-center gap-4 w-full h-40 lg:h-[192px] bg-main-color">
            <EmailNotificationForm />
            <button
              className="lg:absolute top-1/2 right-28 lg:-translate-y-1/2 flex items-center text-[20px] text-white duration-200 hover:opacity-80"
              onClick={() => {
                setIsOtherEventsSectionActive(!isOtherEventsSectionActive)
                scrollToBottom()
              }}
            >
              Other Events{' '}
              <img
                src={process.env.PUBLIC_URL + '/images/arrow-next.svg'}
                alt="arrow"
                className="w-5 h-5 ml-2 rotate-90"
              />
            </button>
          </div>
        </div>
        {isOtherEventsSectionActive && (
          <div ref={containerRef}>
            <AllEvents />
          </div>
        )}
      </div>
    </div>
  )
}
