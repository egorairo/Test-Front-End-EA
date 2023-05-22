import React from 'react'

const FormPopup = ({
  message,
  onClose,
}: {
  message: string
  onClose: () => void
}) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="absolute inset-0 bg-main-color opacity-75"></div>
        <div className="relative flex flex-col items-center justify-center w-[320px] h-[370px] z-30 bg-white px-8 rounded-md shadow-lg">
          <button
            className="absolute top-4 right-4 w-6 h-6 duration-200 opacity-50 hover:opacity-100"
            onClick={onClose}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/close.svg'}
              className="fill-main-color w-full "
              alt="close"
            />
          </button>
          <h2 className="text-center text-4xl font-bold text-main-color mb-7">
            {message}
          </h2>
          <p className="text-center mb-7">
            You have successfully subscribed to the email newsletter
          </p>
          <button
            className="inline-flex items-center justify-center px-7 py-4 h-[60px] w-[200px] rounded-[40px] bg-main-color text-lg text-white duration-200 hover:opacity-80"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default FormPopup
