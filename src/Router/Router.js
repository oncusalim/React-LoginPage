import Signin from '../pages/Signin'
import Main from '../pages/Main'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function AppRouter() {

  return (
  <Router>
      <Navbar />
      <Switch>
          <Route exact path = "/register" component={Signup}/>
          <Route exact path = "/login" component={Signin}/>
          <Route path = "/" component={Main}/>
      </Switch>
     
  </Router>
  );
}

export default AppRouter;
