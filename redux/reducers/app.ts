
import dispatchTypes from '../constants';

let initialState = {
    postData: []
}

export default (state = initialState, action : any) => {
    switch (action.type) {
        case dispatchTypes.setPostData:
            return { ...state, postData: action.payload}
        case dispatchTypes.addPostData:
            return { ...state, postData: [ action.payload, ...state.postData ]}
        case dispatchTypes.removePostData:
            return { ...state, postData: state.postData.filter((item: any) => item?.id !== action.payload) }
        default:
            break;
    }
    return state;
}