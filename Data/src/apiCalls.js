import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5500/api",
  });
  export { api };

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try{
        const res = api.post(`/auth/login`, userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});

        return res
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
}; 