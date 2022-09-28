
export default (expenses) => {
    // let total = 0;
    // if(expenses) {
    //     expenses.forEach(ele => {
    //         total += ele.amount;
    //     })
    // }
    // console.log('sssssss eeeeeeeeee ', expenses)
    const total = expenses.
            map(expense => expense.amount).
            reduce((sum, value) => sum + value, 0);
    return total;
}