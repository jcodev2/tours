/* **************** Imports **************** */
import Card from '../components/Card'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Home = ({ tours }) => {
  return (
    <>
      <h1 className='fluid-4 text-center font-w-600 m-2'>Our Tours</h1>
      <div className='tours'>
        {tours.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default Home
