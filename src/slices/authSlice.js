import { createSlice } from "@reduxjs/toolkit";

// Check if token exists in localStorage and parse it, otherwise set it to null
let tokenFromLocalStorage;
try {
    tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
        tokenFromLocalStorage = JSON.parse(tokenFromLocalStorage);
    }
} catch (error) {
    console.error("Error parsing token from localStorage:", error);
    tokenFromLocalStorage = null;
}

const initialState = {
    token: tokenFromLocalStorage,
    signupData: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignupData(state, action) {
            state.signupData = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
    }
});

export const { setToken, setLoading, setSignupData } = authSlice.actions;
export default authSlice.reducer;
