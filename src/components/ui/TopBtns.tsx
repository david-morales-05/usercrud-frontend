import { Plus, Trash2 } from "lucide-react";
import { Button } from "@headlessui/react";

type TopBtnsProps = {
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TopBtns({ setIsOpenCreate }: TopBtnsProps) {
  return (
    <>
      <div className="flex justify-around my-12">
        <Button
          onClick={() => setIsOpenCreate(true)}
          className="flex bg-green-500 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-green-900"
        >
          Crear Usuario <Plus />
        </Button>

        <Button className="flex bg-red-600 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-800">
          Eliminar Todo <Trash2 />
        </Button>
      </div>
    </>
  );
}
