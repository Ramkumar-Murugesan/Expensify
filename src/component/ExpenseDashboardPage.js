import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary  from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <div>
        this is ExpenseDashboardPage component
        <ExpenseListFilters />
        <ExpenseList />
        <ExpensesSummary />
    </div>
)

export default ExpenseDashboardPage;