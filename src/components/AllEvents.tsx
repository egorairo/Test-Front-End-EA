import React, { useState } from 'react'

interface Event {
  number: string
  name: string
  date: string
  src: string
}

const events: Event[] = [
  {
    number: '01',
    name: 'Hawaiian party',
    date: '13.02.2023',
    src: '/images/hawaii.png',
  },
  {
    number: '02',
    name: 'Мafia party',
    date: '13.02.2023',
    src: '/images/mafia.png',
  },
  {
    number: '03',
    name: 'Party',
    date: '13.02.2023',
    src: '/images/party.png',
  },
  {
    number: '04',
    name: 'Party on the beach',
    date: '13.02.2023',
    src: '/images/party-on-the-beach.png',
  },
  {
    number: '05',
    name: 'Home Security',
    date: '13.02.2023',
    src: '/images/home-security.png',
  },
  {
    number: '06',
    name: 'Network Design & Implementation',
    date: '13.02.2023',
    src: '/images/network-design.png',
  },
  {
    number: '07',
    name: 'System Design & Engineering',
    date: '13.02.2023',
    src: '/images/system-design.png',
  },
  {
    number: '08',
    name: 'Client Care Plans',
    date: '13.02.2023',
    src: '/images/client-plans.png',
  },
]

const eventImage = (name: string) => {
  if (name === 'Hawaiian party') {
    return `bg-[url('../public/images/hawaii.png')]`
  } else if (name === 'Мafia party') {
    return `bg-[url('../public/images/mafia.png')]`
  } else if (name === 'Party') {
    return `bg-[url('../public/images/party.png')]`
  } else if (name === 'Party on the beach') {
    return `bg-[url('../public/images/party-on-the-beach.png')]`
  } else if (name === 'Home Security') {
    return `bg-[url('../public/images/home-security.png')]`
  } else if (name === 'Network Design & Implementation') {
    return `bg-[url('../public/images/network-design.png')]`
  } else if (name === 'System Design & Engineering') {
    return `bg-[url('../public/images/system-design.png')]`
  } else if (name === 'Client Care Plans') {
    return `bg-[url('../public/images/client-plans.png')]`
  }
}

const ActiveEvent = ({
  event,
  className,
}: {
  event: Event
  className?: string
}) => {
  return (
    <div
      className={`relative h-full w-full overflow-hidden border-b-2 border-red-400 ${className}`}
    >
      <img
        src={process.env.PUBLIC_URL + event.src}
        className="h-full w-full max-h-[600px] xl:max-h-full "
        alt={event.name}
      />
      <span className="absolute -right-5 bottom-14 md:bottom-0 xl:-top-36 xl:-left-40 z-20 text-[80px] md:text-[156px] xl:text-[380px] font-semibold text-white opacity-[0.04]">
        {event.number}
      </span>
      <div className="absolute bottom-0 right-0 xl:right-none xl:top-0 left-0 h-[158px] md:h-[192px] xl:h-full w-full xl:w-[364px] bg-[#12121280] backdrop-blur-2xl">
        <div className="relative z-10 flex flex-col items-start justify-end h-full pl-5 pb-5 md:pl-10 md:pb-10">
          <h3 className="text-base md:text-lg xl:text-2xl text-white font-semibold mb-3">
            {event.name}
          </h3>
          <p className="text-base xl:text-lg text-secondary-white mb-6">
            {event.date}
          </p>
          <a
            href="https://leadadvisors.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-[169px] md:w-60 h-11 xl:w-64 xl:h-[60px] bg-transparent px-6 xl:px-14 py-3 xl:py-5 border border-l-4 border-white text-base xl:text-lg text-white duration-200 whitespace-nowrap hover:opacity-80 hover:border-white"
          >
            More information
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AllEvents() {
  const [activeEvent, setActiveEvent] = useState('Hawaiian party')

  return (
    <div className="relative z-10 h-full w-full pt-[80px] xs:pt-24 lg:pt-28 pb-12 md:pb-24">
      <div className="flex flex-col items-center w-full px-5 md:px-10">
        <h1 className="text-[#A4ADBA] text-center text-4xl lg:text-7xl font-bold uppercase mb-10">
          All Events
        </h1>

        <div className="flex flex-col xl:flex-row w-full xl:w-auto gap-1">
          {events.map((event) => (
            <div
              className="flex flex-col xl:flex-row xl:h-[682px]"
              key={event.number}
            >
              <button
                onClick={() => {
                  activeEvent !== event.name
                    ? setActiveEvent(event.name.trim())
                    : setActiveEvent('')
                }}
                className="h-[85px] xl:h-full mb-[2px] xl:mr-[2px]"
              >
                <div
                  className={`relative inline-block h-full w-full xl:w-[85px] border-b-2 border-red-400 overflow-hidden
                  ${
                    activeEvent === event.name
                      ? 'bg-main-color'
                      : `${eventImage(event.name)}
                        bg-center`
                  }`}
                >
                  <div className="absolute flex flex-row-reverse xl:flex-col items-center xl:items-stretch h-full w-full justify-end bg-gradient-to-r xl:bg-gradient-to-t from-main-color to-transparent">
                    <div className="xl:-rotate-90 text-lg md:text-2xl xl:text-4xl text-left font-semibold text-white md:whitespace-nowrap ml-8 xl:ml-0 xl:mb-10">
                      {event.name}
                    </div>
                    <span className="text-center text-2xl md:text-[32px] xl:text-[40px] text-white font-medium ml-5 xs:ml-10 xl:ml-0 xl:mb-5">
                      {event.number}
                    </span>
                  </div>
                </div>
              </button>
              {activeEvent === event.name && (
                <ActiveEvent
                  event={event}
                  className={
                    activeEvent === event.name
                      ? 'ease-out duration-500 animate-slide-out'
                      : 'ease-out duration-500 animate-slide-in'
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
