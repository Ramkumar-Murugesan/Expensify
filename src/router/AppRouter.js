import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "../component/Header";
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import AddExpensePage from "../component/AddExpensePage";
import EditExpensePage from "../component/EditExpensePage";
import HelpPage from "../component/HelpPage";
import NotFoundPage from "../component/NotFoundPage";

const AppRouter = () => (
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
)

export default AppRouter;