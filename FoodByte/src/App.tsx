import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Fridge from './pages/Fridge';
import Recipe from './pages/Recipe';
import Shopping from './pages/Shopping';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="App">        
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/fridge" element={[<Navbar/>,<Fridge/>]}/>
          <Route path="/recipe" element={[<Navbar/>,<Recipe/>]}/>
          <Route path="/shopping" element={[<Navbar/>,<Shopping/>]}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path = "/login" element ={<LogIn/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App