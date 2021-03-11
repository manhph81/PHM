import { AUTH } from '../constants/actionTypes';


import * as api from '../api/index.js';

export const signin = ( formData, history ) => async (dispatch) => {
    try {
        var {data} = await api.signin(formData)
        data.isShowAlert = true
        dispatch({type: AUTH, data})
        const role = data?.result?.role
        console.log(data?.result)
        role === "Consumer" ? history.push(`/`) : history.push(`/${role}`)
        window.alert("Login succesfully")
    } catch (error) {
      console.log(error.message);
    }
};
export const signup = ( formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        // dispatch({type: AUTH, data})
        window.alert("Signup succesfully")
        history.push('/')
    } catch (error) {
      console.log(error.message);
    }
};