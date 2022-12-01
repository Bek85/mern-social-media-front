import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: 'LOGIN_START' });

  try {
    const response = await axios.post(`${backendUrl}/api/auth/login`, userCredentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
  }
};
