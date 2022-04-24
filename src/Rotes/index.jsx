import {Switch, Route} from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function Rotes () {
    return (
        <Switch>
          <Route path="/Home">
            <Homepage />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    )
}

export default Rotes