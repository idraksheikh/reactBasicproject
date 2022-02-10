
import '../css/App.css';

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
      
      
        <Routes>
          <Route  exact path="/" element={<Post />} />
          <Route  exact path="aboutus" element={<AboutUs />} />
          <Route  exact path="contactus" element={<ContactUs />} />
        </Routes>
      </Router>  
      
      
      <Footer />  
    </>
  );
}

export default App;
