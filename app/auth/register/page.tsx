"use client";

import { TextField } from "@/components/ui/text-field";
import { PublicRoutes } from "@/routes/routes";
import { set, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RegisterModel } from "./register.model";
import AuthForm from "../components/auth-form";
import AlertCustom from "@/components/alert-custom";
import { useState } from "react";

function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterModel>();
  const [showAlert, setShowAlert] = useState(false);

  async function onSubmit(data: RegisterModel) {
    setShowAlert(false);
    if (data.password !== data.confirmPassword) {
      setShowAlert(true);
      return;
    }
    router.push(PublicRoutes.LOGIN);
  }

  return (
    <>
      {showAlert && (
        <AlertCustom
          title="Password does not match"
          description="Please try again"
        />
      )}
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        title="Register"
        href={PublicRoutes.LOGIN}
        footerMsg="Have an account? "
        footerMsgLink="Login"
      >
        <TextField
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          label="username"
          type="username"
          error={errors.username?.message}
        />

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

        <TextField
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password is required",
            },
          })}
          label="confirm password"
          type="password"
          error={errors.confirmPassword?.message}
        />
      </AuthForm>
    </>
  );
}
export default RegisterPage;
