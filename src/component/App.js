
import '../css/App.css';
import Banner from './Banner';
import Post from './Post';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (<>
      <Router>
      <Header />   
      <Banner />  
      
        <Routes>
          <Route  exact path="/" element={<Post />} />
          <Route  exact path="aboutus" element={<AboutUs />} />
          <Route  exact path="contactus" element={<ContactUs />} />
        </Routes>
      </Router>  
      
      <Banner /> 
      <Footer />  
    </>
  );
}

export default App;
