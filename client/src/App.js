// import logo from './logo.svg';
import './App.css';
import bootstrap from'../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {BrowserRouter ,Route ,Link , Switch, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <BrowserRouter>
  <Routes>
<Route path="/" exact element={<Homescreen/>} />
<Route path="/cart" exact element={<Cartscreen/>} />
<Route path="/register" exact element={<Registerscreen/>} />
<Route path="/login" exact element={<Loginscreen/>} />
  </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
