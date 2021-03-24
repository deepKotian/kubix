import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import TechnicalTraining from './pages/TechnicalTraining';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import BlockchainConsulting from './pages/BlockchainConsulting';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/events' component={Events} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/technicaltraining' component={TechnicalTraining} />
          <Route path='/websitedevelopment' component={WebsiteDevelopment} />
          <Route path='/blockchainconsulting' component={BlockchainConsulting} />
          <Route path='/softwaredevelopment' component={SoftwareDevelopment} />
        </Switch>
       <Footer/>
     </Router>
     </div>
     
  );
}



export default App;
