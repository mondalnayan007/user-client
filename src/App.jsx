
import './App.css'
import Products from './Components/Products';
import Users from './Components/Users';


const userPromise = fetch('http://localhost:4000/users').then(res => res.json());
const productsPromise = fetch('http://localhost:4000/products').then(res=>res.json());

function App() {
  

  return (
    <>
     

     {/* <Users userPromise={userPromise}></Users> */}
   <Products productsPromise={productsPromise}></Products>
      
    </>
  )
}

export default App
