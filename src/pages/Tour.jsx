/* **************** Imports **************** */
import { Link, useParams } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Tour = ({ tours }) => {
  const { id } = useParams()
  const tourId = id - 1

  console.log(tourId)

  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img
            src={
              tours[tourId].image
                ? tours[tourId].image
                : 'https://via.placeholder.com/400x200'
            }
          />
        </div>
        <div className='card-header'>
          <h3>{tours[tourId].name}</h3>
          <p>${tours[tourId].price}</p>
        </div>
        <div className='card-body'>
          <p>{tours[tourId].description}</p>
        </div>
        <div className='card-footer'>
          <Link to={`/`} className='btn btn-primary'>
            Back
          </Link>
        </div>
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default Tour
