import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PrivateRoutes } from "@/routes/routes";
import Link from "next/link";

function NavAccount() {
  return (
    <ScrollArea className="max h-screen">
      <div className=" flex flex-col  pl-52 justify-center   gap-2 text-white h-screen ">
        <Link
          href={PrivateRoutes.ACCOUNT}
          className="hover:bg-slate-500 w-full rounded-lg py-2 px-3 transition-colors"
        >
          Mi perfil
        </Link>
        <Link
          href={PrivateRoutes.SETTINGS}
          className="hover:bg-slate-500 w-full rounded-lg py-2 px-3 p-1 transition-colors"
        >
          Configuración avanzada
        </Link>
        <Link
          href={PrivateRoutes.NITRO}
          className="hover:bg-slate-500 w-full rounded-lg py-2 px-3 p-1 text-violet-400 font-semibold transition-colors"
        >
          Nitro ++
        </Link>
        <Button variant={"destructive"} className="font-semibold">
          Cerrar sesión
        </Button>
      </div>
    </ScrollArea>
  );
}
export default NavAccount;
