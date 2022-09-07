import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
       
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create/:height/:width/:type/:vid/:pid/:token" render={(props) => <Create {...props}/>}/>
              
          
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
