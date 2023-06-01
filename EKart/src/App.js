import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/login" element={<><Login /></>}>
          </Route>

          <Route path="/checkout" element={<><Header /><Checkout /></>}> 
          </Route>

          <Route path="/" element={<><Header /><Home /></>}>    
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
