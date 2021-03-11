import { Link, Route, Switch} from 'react-router-dom';

import './App.css';
import  Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      {/* Navbar start */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Navbar end */}

      <Switch>
        {/* Routes are loaded inside these tags */}
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
