
import './App.css'
import Products from './Components/Products';
import Users from './Components/Users';


const userPromise = fetch('http://localhost:4000/users').then(res => res.json());
const productsPromise = fetch('http://localhost:4000/products').then(res => res.json());

function App() {


  return (
    <>


      <div className='my-3'>
        <Users userPromise={userPromise}></Users>
      </div>
      <div className='my-5'>
        <Products productsPromise={productsPromise}></Products>
      </div>

    </>
  )
}

export default App
