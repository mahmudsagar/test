import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import FirebaseAuth from './Firebase/FirebaseAuth';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
            <Switch>
                <Route path="/login">
                    <FirebaseAuth/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
               
            <Route path="*">
                <NoMatch />
            </Route>
            </Switch>
        </Router>
  );
}

export default App;
