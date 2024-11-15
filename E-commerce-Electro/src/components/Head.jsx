// import React from 'react'

const Head = () => {
  return (
    <div className="hidden sm:flex justify-between p-2  mx-8">
    <p className="text-sm text-gray-600">
      Need help? Call us :(+237) 0234 456 789
    </p>
    <div className="text-sm text-gray-600">
      <span className="capitalize mr-2">
        <i className="fa fa-location-dot m-2"></i>
        our store
      </span>
      <span className="capitalize ml-3">
        <i className="fa fa-truck m-2 "></i>
        track your orders
      </span>
    </div>
  </div>

  )
}

export default Head
