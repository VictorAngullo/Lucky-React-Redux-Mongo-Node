import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, register, checkSession } from '../../api/auth.api';

const INITIAL_STATE = {
    user: null,
    error: '',
}

export const registerAsync = createAsyncThunk('auth/register', async (payload) => {
    console.log("enviando esta data",payload)
    return {
        response: await register(payload.form),
        cb: payload.cb
    }
});

export const loginAsync = createAsyncThunk('auth/login', async (payload) => ({
    response: await login(payload.form),
    cb: payload.cb
}));

export const logoutAsync = createAsyncThunk('auth/logout', async (cb) => ({
    response: await logout(),
    cb,
}));

export const checkSessionAsync = createAsyncThunk(
    'auth/check-session',
    async () => await checkSession()
);

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const { response, cb } = action.payload;

                if (response.message) state.error = response.message;
                else {
                    state.user = response;
                    state.error = '';
                    cb();
                };

            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { response, cb } = action.payload;

                if (response.message) state.error = response.message;
                else {
                    state.user = response;
                    state.error = '';
                    cb();
                };

            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                const { response, cb } = action.payload;

                if (response.message !=='Logout successful') state.error = response.message;
                else {
                    state.user = false;
                    state.error = '';
                    cb();
                };

            })
            .addCase(checkSessionAsync.fulfilled, (state, action) => {
                const { message } = action.payload;

                if (!message) state.user = action.payload;
                else state.user = false;
            });
    }
});