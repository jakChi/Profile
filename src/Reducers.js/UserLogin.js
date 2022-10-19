import { createSlice } from "@reduxjs/toolkit";

const initialValue = {name: "", email: "", age: null, hobby: ""};

const userSlice = createSlice({
    name: "user",
    initialState: { value: { initialValue }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = { initialValue };
        }
    }
}) 

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;