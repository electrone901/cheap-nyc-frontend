/******************************************************************************
Title           : authReducer.js
Description     : A file that contains all actions for authentication which has different functs that combine state & actios 
******************************************************************************/

// import isEmpty from '.'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        // case 'SET_CURRENT_USER':
        //     return {
        //         ...state,
        //         isAuthenticated:!isEpmty(action.payload),
        //         user: action.payload
        //     };
        default:
            return state;
    }
}