import { Route, Switch} from 'react-router-dom';

import './App.css';
import  Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {/* Routes are loaded inside these tags */}
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
