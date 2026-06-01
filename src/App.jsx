
import './App.css'
import Users from './Components/Users';


const userPromise = fetch('http://localhost:4000/users').then(res => res.json());

function App() {
  

  return (
    <>
     

     <Users userPromise={userPromise}></Users>

      
    </>
  )
}

export default App
