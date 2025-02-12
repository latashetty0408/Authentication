import React from 'react'

function Loader() {
  return (
    // <div className="flex justify-center items-center h-full w-full">
    //   <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    // </div>
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
    <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
  </div>
  )
}

export default Loader
