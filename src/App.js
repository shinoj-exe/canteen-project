import './App.css';
import Home from './Home'
import Breakfast from './Breakfast'
import Login from './Login'
import { Routes, route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Home/> */}
      {/* <Login/> */}
      <Breakfast/>
      
    </div>
  );
}

export default App;
