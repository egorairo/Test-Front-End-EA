import React, { useState } from 'react'

import axios from 'axios'
import FormPopup from './FormPopup'

const EmailNotificationForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const closeModal = () => {
    setIsPopupOpen(false)
  }

  const emailNotificationFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!validateEmail(email)) {
      setMessage('Неверный формат email-адреса')
      return
    }

    try {
      setIsLoading(true)

      const response = await axios.post('https://httpbin.org/post', {
        email,
      })

      if (response.data) {
        setMessage('Success!')
        setIsPopupOpen(true)
        setEmail('')
      }
    } catch (error) {
      setMessage('Error. Try again')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form className="relative" onSubmit={emailNotificationFormSubmit}>
        <input
          type="email"
          placeholder="Enter your Email and get notified"
          className="h-[40px] w-[280px] xs:w-[360px] lg:h-[60px] lg:w-[440px] px-[20px] py-[10px] lg:px-7 lg:py-4 text-sm lg:text-lg bg-white text-input-gray rounded-[40px] outline-none focus:border-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="absolute top-1 right-1 z-10 lg:right-2 lg:top-2 inline-flex items-center justify-center w-[33px] h-[33px] lg:w-[43px] lg:h-[43px] bg-main-red text-white rounded-full duration-200 hover:opacity-80"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <img
              src={process.env.PUBLIC_URL + '/images/loading.svg'}
              alt="loading"
            />
          ) : (
            <>→</>
          )}
        </button>
      </form>
      {isPopupOpen && <FormPopup message={message} onClose={closeModal} />}
    </>
  )
}

export default EmailNotificationForm
