import React from 'react'
import { Logo } from '../../assets/images/Index'

function TrymeCard() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 flex md:flex-row flex-col gap-6">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Try Venus for free now!</h2>
        <p className="text-gray-600 mb-6">
          Enter in this creative world. Venus is the best product for your
          business.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-3xl hover:bg-[#4338ca] transition-colors"
          >
            Try for free
          </button>
          <button
            className="text-gray-600 px-6 py-2 hover:text-gray-900 transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex md:justify-center">
        <img src={Logo.TrySection} alt="TrySection" className='w-full' />
      </div>
    </div>
  )
}

export default TrymeCard
