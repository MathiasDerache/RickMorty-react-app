import './App.css';
import Home from './Components/Home';
import Location from './Components/Location';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Nav from './Components/Nav';
import Episode from './Components/Episode';
import Characters from './Components/Characters';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        {/* <Nav/> */}
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/location' exact component={Location}/>
            <Route path='/character' exact component={Characters}/>
            <Route path='/episode' exact component={Episode}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
