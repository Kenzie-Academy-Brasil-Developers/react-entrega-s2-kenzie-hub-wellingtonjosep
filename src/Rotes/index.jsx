import {Switch, Route} from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
function Rotes () {
    return (
        <>
        <Switch>
            <Route path="/">
                <Login/>
            </Route>

            <Route path="/Register">
                <Register/>
            </Route>
            
            <Route path="/Home">
                <Homepage/>
            </Route>
        </Switch>
        </>
    )
}

export default Rotes