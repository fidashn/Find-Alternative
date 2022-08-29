import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
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
      <Navbar />
      <BrowserRouter >
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
