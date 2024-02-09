import dispatchTypes from '../constants';

export const removePostData = (data: any) => (dispatch : any) => dispatch({ type: dispatchTypes.removePostData, payload: data })

export const setPostData = (data: any) => (dispatch : any) => dispatch({ type: dispatchTypes.setPostData, payload: data })

export const addPostData = (data: any) => (dispatch : any) => dispatch({ type: dispatchTypes.addPostData, payload: data })