import { useDispatch, useSelector } from "react-redux";
import { UserModel } from "@/models/user.model";
import { logout, login } from "../slices/userSlice";
import { RootState } from "../store";

export const useUser = () => {
  const dispatch = useDispatch();

  const handleLogin = (user: Pick<UserModel, "email" | "username">) => {
    dispatch(login(user));
    return handleLogin;
  };

  const handleLogout = () => {
    dispatch(logout());
    return handleLogout;
  };
  const handleGetUser = () => {
    const user = useSelector((state: RootState) => state.user.user);
    return user;
  };

  return { handleLogin, handleLogout, handleGetUser };
};
