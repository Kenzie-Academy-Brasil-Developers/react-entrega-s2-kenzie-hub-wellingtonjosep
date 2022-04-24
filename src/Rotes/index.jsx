import {Switch, Route} from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
function Rotes () {
    return (
        <Switch>
            <Route path="/">
                <Register/>
            </Route>
            <Route path="/register">
                <Login/>
            </Route>
            <Route path="/home">
                <Homepage/>
            </Route>
        </Switch>
    )
}

export default Rotes