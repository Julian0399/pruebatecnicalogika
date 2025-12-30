import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/loginApi";

interface LoginCredentials {
    username: string;
    password: string;
}

interface AuthState {
    user: any;
    token: string | null;
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}
export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials, {rejectWithValue}) => {
        try {
            const { username, password } = credentials;
            const token = await login({ username, password });
            if (token) {
                localStorage.setItem('token', token);
            }
            return token;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    isAuthenticated: !!localStorage.getItem('token'),
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.token = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload as string || 'Error al iniciar sesión';
            });
    }
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;