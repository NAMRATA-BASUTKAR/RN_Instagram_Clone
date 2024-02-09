import dispatchTypes from '../constants';

export const removeUserData = (data :any) => (dispatch:  any) => dispatch({ type: dispatchTypes.removeUserPostData, payload: data })

export const saveUserData = (data: any) => (dispatch:  any)  => dispatch({ type: dispatchTypes.setUserPostData, payload: data })

export const saveUser = (data: any) => (dispatch:  any)  => dispatch({ type: dispatchTypes.setUserData, payload: data })

export const removeUser = () => (dispatch:  any)  => dispatch({ type: dispatchTypes.removeUserData})