import React from "react";
import {Router, Switch, Route} from 'react-router-dom';
// import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import AddExpensePage from "../component/AddExpensePage";
import EditExpensePage from "../component/EditExpensePage";
import HelpPage from "../component/HelpPage";
import NotFoundPage from "../component/NotFoundPage";
import LoginPage from "../component/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
        <Router history={history}>
        <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </Router>
)

export default AppRouter;