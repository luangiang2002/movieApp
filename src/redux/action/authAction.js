
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

import axios from 'axios';
import { auth, providerGoogle } from '../../firebase/fibefire';

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    // providerGoogle.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

    const res = await signInWithPopup(auth, providerGoogle);
    console.log(res);
    const accessToken = res.user.accessToken

    const response = await axios.post('https://oauth2.googleapis.com/token', {
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_YT_CLIENT_ID,
      client_secret: process.env.REACT_APP_YT_CLIENT_SECRET,
      redirect_uri: process.env.REACT_APP_YT_REDIRECT_URI,
      code: accessToken, 
      scope:'https://www.googleapis.com/auth/youtube.force-ssl'
    });
    console.log(response.error);
    const googleAccessToken = response.data.access_token;
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
      accessToken: googleAccessToken,
    };
    console.log(profile);
    sessionStorage.setItem('watch-user', JSON.stringify(profile));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const LoginEMailPass = (email,pass) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await  signInWithEmailAndPassword(auth, email, pass);
    console.log(res);
    const accessToken = res.user.accessToken
    const googleAccessToken = await getAccessToken(accessToken)
    console.log(googleAccessToken);
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
      accessToken: accessToken,
    };
    console.log(profile);
    sessionStorage.setItem('watch-user', JSON.stringify(profile));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
export const getAccessToken = async (firebaseAccessToken) => {
  try {
    const response = await axios.post(
      'https://oauth2.googleapis.com/token',
      {
        grant_type: 'authorization_code',
        client_id: '154299837098-das90calcklvr2c6iuuuadbho5aijpdp.apps.googleusercontent.com',
        client_secret:'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',
        redirect_uri: 'https://localhost:3000/callback',
        code: firebaseAccessToken,
        scope:'https://www.googleapis.com/auth/youtube.force-ssl'
      }
    );
      console.log(response);
    // Trả về mã thông báo truy cập
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};