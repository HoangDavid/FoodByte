import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Fridge from './pages/Fridge';
import Recipe from './pages/Recipe';
import Shopping from './pages/Shopping';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/fridge" element={<Fridge/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path = "/login" element ={<LogIn/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App