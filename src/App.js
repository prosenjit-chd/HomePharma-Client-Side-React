import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Log from './components/Log/Log';
import Faq from './components/Faq/Faq';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Switch>
        <Route exact path="/">
            <Home> </Home>
          </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
          <Route path="/about">
            <About> </About>
           </Route>
           <Route path="/services">
              <Services> </Services>
           </Route>
           <Route path="/service/:id">
            <ServiceDetails> </ServiceDetails>
          </Route>
          <Route path="/signin">
              <Log> </Log>
            </Route>
          <Route path="/faq">
              <Faq> </Faq>
            </Route>
            <Route path="*">
              <NotFound> </NotFound>
            </Route>
        </Switch>
        <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
