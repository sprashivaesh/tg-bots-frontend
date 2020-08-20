import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from './pages/Dashboard';
// import Bots from "./pages/Bots";
// import BotEdit from "./pages/BotEdit";
// import Answers from "./pages/Answers";
// import AnswerEdit from "./pages/AnswerEdit";
import NotFound from "./pages/NotFound"


import DefaultRoute from "./utils/hoc/DefaultRoute";
import PrivateRoute from "./utils/hoc/PrivateRoute";
import GuestRoute from "./utils/hoc/GuestRoute";


function App() {
  return (
    <Switch>
        <DefaultRoute exact path="/" component={Home} />
        <DefaultRoute exact path="/index.html" component={Home} />
        <GuestRoute exact path="/sign_in" component={SignIn} />
        <GuestRoute exact path="/sign_up" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/*<PrivateRoute exact path="/bots" component={Bots} />*/}
        {/*<PrivateRoute exact path="/bots/:botId" component={BotEdit} />*/}
        {/*<PrivateRoute exact path="/bots/:botId/answers" component={Answers} />*/}
        {/*<PrivateRoute exact path="/bots/:botId/answers/:answerId" component={AnswerEdit} />*/}
        <Route component={NotFound} />
    </Switch>
  )
}

export default App;