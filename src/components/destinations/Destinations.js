import React, { useState, useEffect } from 'react'
import { fetchdata } from '../../apiCalls'

export const Destinations = () => {
  const [destinations, setDestinations] = useState()
  const [error, setError] = useState()

  const getDestinations = () => {
    fetchdata()
    .then(data => setDestinations(data.data))
    .catch(error => setError(error.message))
  }

  useEffect(() => {
    getDestinations()
  }, [])

  
  return (
    <div>
      
    </div>
  )
}
