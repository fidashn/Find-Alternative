import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route} from "react-router-dom";
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <div className='navbar'> 
    <ul className='navbar-items'>
    <li>About Us</li>
    <li>Our Services</li>
    <li>Contact Us</li>
    </ul>
    <div className='navbar-btns'>
    {/* <button className='sign-inup btn'>Sign Up</button>
    <button className='sign-in btn'>Sign In</button> */}
    </div>
    </div>
     
      <Route path="/home" component={Home} />
      <Route exact path="/contactUs" component={ContactUs} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/ourServices" component={OurServices} />
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
