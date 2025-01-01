"use client";

import { TextField } from "@/components/ui/text-field";
import { useForm } from "react-hook-form";
import { PrivateRoutes, PublicRoutes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { LoginModel } from "./login.model";
import AuthForm from "../components/auth-form";
import { useUser } from "@/context/hooks/useUser";

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();
  const { handleLogin } = useUser();
  async function onSubmit(data: LoginModel) {
    console.log(data);
    handleLogin({ email: data.email, username: "matias" });

    router.push(`${PrivateRoutes.CHAT}/${"1"}`);
  }

  return (
    <AuthForm
      footerMsgLink="Register"
      footerMsg="Don't have an account?"
      href={PublicRoutes.REGISTER}
      onSubmit={handleSubmit(onSubmit)}
      title="Login"
    >
      <TextField
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
        })}
        label="email"
        type="email"
        error={errors.email?.message}
      />

      <TextField
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })}
        label="password"
        type="password"
        error={errors.password?.message}
      />
    </AuthForm>
  );
}
export default LoginPage;
