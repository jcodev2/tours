/* **************** Imports **************** */
import { useEffect, useState } from 'react'

/* **************** Variables **************** */
const intialState = {
  tours: []
}

/* **************** Functions **************** */
const useTours = () => {
  const [tours, setTours] = useState(intialState.tours)

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch('/src/api/tours.json')
      const tours = await response.json()
      setTours(tours.toursData)
    }
    fetchTours()
  }, [])

  return tours
}
/* **************** Code Execution **************** */
export default useTours
