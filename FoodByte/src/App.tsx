import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Fridge from './pages/Fridge';
import Recipe from './pages/Recipe';
import Shopping from './pages/Shopping';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Navbar from './components/navbar';
import Topbar from './components/topbar';

function App() {
  return (
    <>
      <div className="App">        
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/fridge" element={[<Navbar/>,<Topbar/>,<Fridge/>]}/>
          <Route path="/recipe" element={[<Navbar/>,<Topbar/>,<Recipe/>]}/>
          <Route path="/shopping" element={[<Navbar/>,<Topbar/>,<Shopping/>]}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path = "/login" element ={<LogIn/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App