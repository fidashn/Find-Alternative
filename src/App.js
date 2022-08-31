import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';

function App() {
  return (
    <div className="App">
    <Router >
    <div className='navbar'> 
    <ul className='navbar-items'>
    <Link className='navbar-item' to='/about-us'><li>About Us</li></Link>
    <Link className='navbar-item' to='/our-services'><li>Our Services</li></Link>
    <Link className='navbar-item' to='/contact-us'><li>Contact Us</li></Link>
    </ul>
    <div className='navbar-btns'>
    <Link to='/sign-up'><button className='sign-up btn' >Sign Up</button></Link>
    <Link to='/sign-in'><button className='sign-in btn'>Sign In</button></Link>
    </div>
    </div>
    <Routes>
      <Route path="/home" element={Home} />
      <Route  path="/contactUs" element={ContactUs} />
      <Route  path="/aboutUs" element={AboutUs} />
      <Route  path="/ourServices" element={OurServices} />
      <Route path="/sign-up" element={SignUp} />
      <Route  path="/sign-in" element={SignIn} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
