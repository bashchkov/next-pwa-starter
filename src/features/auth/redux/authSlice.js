import {createSlice} from "@reduxjs/toolkit";
import StorageUtils from "library/utilities/StorageUtils";
import {authTokenLogin, authTokenLogout} from "modules/auth/redux/authThunk";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: !!StorageUtils.getAuthToken(),
        loginLoading: false,
        loginRequestId: undefined,
        logoutLoading: false,
        logoutRequestId: undefined
    },
    extraReducers: {
        [authTokenLogin.pending]: (state, action) => {
            if (!state.loginLoading) {
                state.loginLoading = true
                state.loginRequestId = action.meta.requestId
            }
        },
        [authTokenLogin.fulfilled]: (state, action) => {
            const {requestId} = action.meta
            if (state.loginLoading && state.loginRequestId === requestId) {
                StorageUtils.setAuthToken(action.payload)
                state.isAuth = true
                state.loginLoading = false
                state.loginRequestId = undefined
            }
        },
        [authTokenLogin.rejected]: (state, action) => {
            const {requestId} = action.meta
            if (state.loginLoading && state.loginRequestId === requestId) {
                state.isAuth = false
                state.loginLoading = false
                state.loginRequestId = undefined
            }
        },
        [authTokenLogout.pending]: (state, action) => {
            if (!state.logoutLoading) {
                state.logoutLoading = true
                state.logoutRequestId = action.meta.requestId
            }
        },
        [authTokenLogout.fulfilled]: (state, action) => {
            const {requestId} = action.meta
            if (state.logoutLoading && state.logoutRequestId === requestId) {
                StorageUtils.setAuthToken(null);
                state.isAuth = false
                state.logoutLoading = false
                state.logoutRequestId = undefined
            }
        },
        [authTokenLogout.rejected]: (state, action) => {
            const {requestId} = action.meta
            if (state.logoutLoading && state.logoutRequestId === requestId) {
                state.logoutLoading = false
                state.logoutRequestId = undefined
            }
        },
    }
});

export {
    authTokenLogin,
    authTokenLogout
}

export default authSlice.reducer;