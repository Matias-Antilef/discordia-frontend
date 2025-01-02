"use client";

import { TextField } from "@/components/ui/text-field";
import { PublicRoutes } from "@/routes/routes";
import { useForm } from "react-hook-form";
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
          title="Contraseñas no coinciden"
          description="Intente nuevamente"
        />
      )}
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        title="Registrarse"
        href={PublicRoutes.LOGIN}
        footerMsg="¿Ya tienes cuenta?"
        footerMsgLink="Iniciar sesión"
      >
        <TextField
          {...register("username", {
            required: {
              value: true,
              message: "Nombre de usuario es requerido",
            },
          })}
          label="Nombre de usuario"
          type="username"
          error={errors.username?.message}
        />

        <TextField
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          label="Email"
          type="email"
          error={errors.email?.message}
        />

        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
          })}
          label="Contraseña"
          type="password"
          error={errors.password?.message}
        />

        <TextField
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
          })}
          label="Confirmar contraseña"
          type="password"
          error={errors.confirmPassword?.message}
        />
      </AuthForm>
    </>
  );
}
export default RegisterPage;
