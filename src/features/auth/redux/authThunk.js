import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthAPI from 'modules/auth/api/authAPI';


export const authTokenLogin = createAsyncThunk(
    'auth/tokenLogin',
    async ({email, password}, thunkAPI) => {
        const {loginLoading, loginRequestId} = thunkAPI.getState().auth
        if (!loginLoading || thunkAPI.requestId !== loginRequestId) {
            return
        }
        const {authToken} = await AuthAPI.authTokenLogin({email, password})
        if(!authToken){
            return thunkAPI.rejectWithValue('')
        }
        return authToken
    }
)

export const authTokenLogout = createAsyncThunk(
    'auth/tokenLogout',
    async (arg, thunkAPI) => {
        const {logoutLading, logoutRequestId} = thunkAPI.getState().auth
        if (!logoutLading || thunkAPI.requestId !== logoutRequestId) {
            return
        }
        return await AuthAPI.authTokenLogout()
    }
)
