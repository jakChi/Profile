//boilerplate code 
import { createSlice } from "@reduxjs/toolkit";

const initialValue = "";

const colorSlice = createSlice({
    name: "color",
    initialState: { value: initialValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

export default colorSlice.reducer;
export const { changeColor } = colorSlice.actions; 
