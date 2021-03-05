import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Gallery from 'pages/Gallery';
import Details from 'pages/Details';
import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/details" component={Details} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
