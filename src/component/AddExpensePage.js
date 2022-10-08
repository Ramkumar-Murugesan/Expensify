import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from '../actions/expenses';
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                this is AddExpensePage component
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

// replace with class 
// const AddExpensePage = (props) => (
//     <div>
//     this is AddExpensePage component
//     <ExpenseForm onSubmit={(expense) => {
//         // replace with connect mapDispatchToProps because below code is difficult to write the test cases
//         // props.dispatch(addExpense(expense));

//         // new one with the help of connect
//         props.addExpense(expense)
//         props.history.push('/');
//     }}/>
//     </div>
// )

const mapStateToProps = undefined;
// name should action generator so changing onSubmit name to startAddExpense name
const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);