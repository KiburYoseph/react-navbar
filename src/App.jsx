import './App.css'
import Navbar from './Navbar'
import Pricing from './Pages/Pricing'
import AboutUs from './Pages/Aboutus'
import ContactUs from './Pages/Contactus'
import Home from './Pages/Home'

  const App = () => {
    let component;

    switch (window.location.pathname) {
      case "/":
        component = <Home />
      break;
      
      case "/pricing":
        component = <Pricing />
      break;
      
      case "/aboutus":
        component = <AboutUs />
      break;
      
      case "/contactus":
        component = <ContactUs />
      break;
      
      default:
        break;
    }


    return (

      <>
        <Navbar />
        { component }
      </>
    )
  }

  export default App;