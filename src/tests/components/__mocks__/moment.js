
// 1. __mocks__ folder name must be same
// 2. create mock for libraries if needed

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp)
}