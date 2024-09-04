import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const loginAuth = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.status === 400) {
        return rejectWithValue(data.error);
      }
      localStorage.setItem("token", data.token);
      return data.token;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerAuth = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
       if (response.status === 400) {
        console.log(data.error);
         return rejectWithValue(data.error);
       }
      console.log(data.token)
      localStorage.setItem("token", data.token);
      return data.token;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    registerstatus: "",
    loginstatus: "",
    registererror: "",
    loginerror: "",
    userloaded: false,
    _id: "",
  },

  reducers: {
    loaduser : (state) => {
      if(state.token){
        const user = jwtDecode(state.token);
        state.name = user.name;
        state.email = user.email;
        state._id = user._id;
        state.userloaded = true;
      }
    },
    logoutuser : (state) => {
      state.token = null;
      state.name = "";
      state.email = "";
      state._id = "";
      state.userloaded = false;
      localStorage.removeItem("token");
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginAuth.pending, (state, action) => {
      return { ...state, loginstatus: "loading" };
    });

    builder.addCase(registerAuth.pending, (state, action) => {
      return { ...state, registerstatus: "loading" };
    });

    builder.addCase(loginAuth.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        state.name = user.name;
        state.email = user.email;
        state._id = user._id;
        state.token = action.payload;
        state.loginstatus = "success";
        state.loginerror = "";
        return state;
      } else {
        return state;
      }
    });

    builder.addCase(loginAuth.rejected, (state, action) => {
      state.loginstatus = "failed";
      state.loginerror = action.payload;
      return state;
    });

    builder.addCase(registerAuth.fulfilled, (state, action) => {
        if(action.payload){
            const user = jwtDecode(action.payload);
            state.name = user.name;
            state.email = user.email;
            state._id = user._id;
            state.token = action.payload;
            state.registerstatus = "success";
            state.registererror = "";
            return state;
        }else{ 
            return state;
        }
    });

    builder.addCase(registerAuth.rejected, (state, action) => {
      state.registerstatus = "failed";
      state.registererror = action.payload;
      return state;
    });
  },
});

export default userSlice.reducer;
export const { loaduser , logoutuser } = userSlice.actions;
