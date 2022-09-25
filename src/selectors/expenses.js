import moment from 'moment'

//get visible expenses based on filter value
export default (expenses, {text, sortBy, startDate, endDate}) => {
    console.log('selector expenses '+text +" "+sortBy +" "+startDate +" "+endDate +" ")
    return expenses.filter((expense) => {
        // without momentumjs
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        // with momentumjs
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}