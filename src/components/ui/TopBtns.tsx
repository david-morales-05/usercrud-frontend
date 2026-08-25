import { Plus, Trash2 } from "lucide-react";
import { Button } from "@headlessui/react";

export default function TopBtns() {
  return (
    <>
      <div className="flex justify-around my-12">
        <Button className="flex bg-blue-600 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-blue-900">
          Crear Usuario <Plus />
        </Button>

        <Button className="flex bg-red-600 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-800">
          Eliminar Todo <Trash2 />
        </Button>
      </div>
    </>
  );
}
