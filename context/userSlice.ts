import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "@/models/user.model";
import { setServers } from "dns";

interface userSlice {
  user: UserModel;
}

const initialState: userSlice = {
  user: {
    name: "",
    email: "",
    friends: [],
    servers: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
