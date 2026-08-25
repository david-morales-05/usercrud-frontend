import { Button } from "@headlessui/react";
import { SquarePen, Delete } from "lucide-react";

export default function UserCardBtns() {
  return (
    <>
      <Button className="flex bg-blue-600 text-white rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-blue-900">
        Editar <SquarePen />
      </Button>

      <Button className="flex bg-red-600 text-white rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-800">
        Eliminar <Delete />
      </Button>
    </>
  );
}
