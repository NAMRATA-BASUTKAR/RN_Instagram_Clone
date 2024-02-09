import dispatchTypes from '../constants';

let userInitialState = {
    user: null,
    userData: []
}

export default (state = userInitialState, action:any) => {
    switch (action.type) {
        case dispatchTypes.setUserData:
            return { ...state, user: action.payload };
        case dispatchTypes.removeUserData:
            return { ...state, user: null }
        case dispatchTypes.setUserPostData:
            return { ...state, userData: action.payload}
        case dispatchTypes.removeUserPostData:
            return { ...state, userData: state.userData.filter((item:any) => item?.id !== action.payload) }
        default:
            return state;
    }
}