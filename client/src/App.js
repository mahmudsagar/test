import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import FirebaseAuth from './Firebase/FirebaseAuth';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Order from "./Components/Order/Order";
import ThankYou from './Components/ThankYou/ThankYou';
import OrderList from './Components/OrderList/OrderList';

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
                <PrivateRoute path="/order/:id">
                    <Order />
                </PrivateRoute>
                <PrivateRoute path="/thank-you">
                    <ThankYou />
                </PrivateRoute>
                <PrivateRoute path="/Bookings">
                    <OrderList />
                </PrivateRoute>
                <PrivateRoute path="/Bookings/:uid">
                    <OrderList />
                </PrivateRoute>
                <PrivateRoute path="/addService">
                    <OrderList />
                </PrivateRoute>
                
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
