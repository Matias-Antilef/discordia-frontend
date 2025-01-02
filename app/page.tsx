import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PublicRoutes } from "@/routes/routes";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card>
        <CardHeader>
          <CardTitle>Discordia </CardTitle>
          <CardDescription>(No plagio) ¿Nuevo por aqui? Únete</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-blue-500">
          <Link href={PublicRoutes.REGISTER}>Registrarse</Link>
          <Link href={PublicRoutes.LOGIN}>Iniciar sesion</Link>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
export default HomePage;
