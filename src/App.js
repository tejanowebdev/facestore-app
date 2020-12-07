import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/Contact';
import "./assets/css/custom.css"
import { 
  BrowserRouter,
  Switch, 
  Route, 
} from "react-router-dom"
import OtherServices from './pages/OtherServices';

function App() { 

  return (
    <BrowserRouter >
        <div className="App">
                <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/other-services"> 
                      <OtherServices />
                  </Route>
                  <Route path="/contact1"> 
                      <ContactUs />
                  </Route>
                </Switch>
          
          </div>
    </BrowserRouter >  
  )
}

export default App;
