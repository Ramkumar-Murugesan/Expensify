import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectorExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
    <div className="list-header">
    <div className="show-for-mobile">Expenses</div>
    <div className="show-for-desktop">Expense</div>
    <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
        props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
            <span>No expenses</span>
            </div>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        )
    }
    </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpenses(state.expenses, state.filters)
    }
}
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
 export default ConnectedExpenseList;











 // step 1

//  const ExpenseList = (props) => (
//     <div>
//     <h1>Expense List</h1>
//     <p>name is {props.name}</p>
//     </div>
// )
// const ConnectedExpenseList = connect((state) => {
//     return {
//         name: 'Ramkumar'
//     }
// })(ExpenseList);
//  export default ConnectedExpenseList;



// step 2

// const ExpenseList = (props) => (
//     <div>
//     <h1>Expense List</h1>
//     <p>filter Text is {props.filters.text}</p>
//     <p>length is {props.expenses.length}</p>
//     </div>
// )
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// })(ExpenseList);
//  export default ConnectedExpenseList;


// step 3

// const ExpenseList = (props) => (
//     <div>
//     <h1>Expense List</h1>
//     {
//         props.expenses.map((expense) => {
//             return <ExpenseListItem key={expense.id} {...expense} />
//         })
//     }
//     </div>
// )

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// }
// const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
//  export default ConnectedExpenseList;

