import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function AppRouter() {

  return (
  <Router>
      <Navbar />
      <Switch>
          <Route path = "/register" component={Signup}/>
          <Route path = "/login" component={Signin}/>
      </Switch>
     
  </Router>
  );
}

export default AppRouter;
