import { Button } from "@headlessui/react";
import { SquarePen, Delete } from "lucide-react";
import { useUserStore } from "../store/useUserStore";
import type { User } from "../types/user.types";

type UserCardBtnsProps = {
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
};

export default function UserCardBtns({
  setIsOpenEdit,
  user,
}: UserCardBtnsProps) {
  const { toDeleteUser } = useUserStore();

  return (
    <>
      <Button
        onClick={() => setIsOpenEdit(true)}
        className="flex bg-blue-600 text-white rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-blue-900"
      >
        Editar <SquarePen />
      </Button>

      <Button
        className="flex bg-red-600 text-white rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-800"
        onClick={() => toDeleteUser(user)}
      >
        Eliminar <Delete />
      </Button>
    </>
  );
}
