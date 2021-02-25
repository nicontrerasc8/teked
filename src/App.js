import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import { CategoryContainer } from './Containers/CategoryContainer/CategoryContainer';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import ScienceAreaContainer from './Containers/ScienceArticles/AreaContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeContainer/>
        </Route>
        <Route exact path='/categoria/:cat'>
          <CategoryContainer/>
        </Route>
        <Route exact path='/categoria/ciencias/:area'>
          <ScienceAreaContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;