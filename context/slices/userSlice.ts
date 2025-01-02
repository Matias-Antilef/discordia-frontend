import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "@/models/user.model";

interface userSlice {
  user: UserModel;
}

const initialState: userSlice = {
  user: {
    username: "",
    email: "",
    status: "offline",
    friends: [],
    servers: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<Pick<UserModel, "email" | "username">>
    ) => {
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
