import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email : "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },  
    },
});

export default userSlice.reducer;
export const { setName, setEmail } = userSlice.actions;