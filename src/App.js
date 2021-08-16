import './App.css';
import Home from './Components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Characters from './Components/Characters';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/character' exact component={Characters}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
