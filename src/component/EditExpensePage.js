
import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
    onEditExpenseHandler = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemoveExpenseHandler = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onEditExpenseHandler}
                />
                <button onClick={this.onRemoveExpenseHandler}>Remove</button>
            </div>
        )
    }
}
// replace with class based component
// const EditExpensePage = (props) => {
//     // get the path variable value from props.match.params or query params from props.location.search and hash value from props.location.hash
//     console.log(props)
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     console.log('update ', expense)
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     props.history.push('/')
//                 }}
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({id: props.expense.id}))
//                 props.history.push('/')
//             }}>Remove</button>
//         </div>
//     )
// }
// access both state and props in the connect (HOC) component
const mapStateToProps = (state, props) => (
    {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
)
const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id: id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);