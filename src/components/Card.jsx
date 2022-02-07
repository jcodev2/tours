/* **************** Imports **************** */
import { Link } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Card = ({ tour }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={tour.image} alt={tour.name} />
      </div>
      <div className='card-header'>
        <h3>{tour.name}</h3>
        <p>${tour.price}</p>
      </div>
      <div className='card-body'>
        <p>{tour.description}</p>
      </div>
      <div className='card-footer'>
        <Link
          to={`/tours/${tour.id}`}
          className='btn btn-primary'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          Find Out More
        </Link>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default Card
