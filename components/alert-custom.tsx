import { AlertDialog } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

function AlertCustom({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Alert className="fixed bg-red-100 justify-center space-x-3  flex flex-col  border-red-500 border-2 w-[30vw] top-3">
      <AlertTriangle className="stroke-red-500" />
      <AlertTitle className="font-semibold text-black text-sm">
        {title}
      </AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
export default AlertCustom;