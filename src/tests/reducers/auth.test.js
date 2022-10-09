import authReducer from '../../reducers/auth';


test('should setup default filter values', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({})
})

test('should set uid for Login', () => {
    const action = {
        type: 'LOGIN',
        uid: '12345'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid)
})

test('should clear uid for Logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: '2313'}, action);
    expect(state).toEqual({});
})