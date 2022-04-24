import {Switch, Route} from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
function Rotes () {
    return (
        <>
        <Switch>
            <Route path="/">
                <Homepage/>
            </Route>

            <Route path="/Register">
                <Login/>
            </Route>
            
            <Route path="/Home">
                <Register/>
            </Route>
        </Switch>
        </>
    )
}

export default Rotes