import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Fridge from './pages/Fridge';
import Recipe from './pages/Recipe';
import Shopping from './pages/Shopping';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/fridge" element={<Fridge/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App