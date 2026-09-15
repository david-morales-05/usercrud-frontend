import { useState } from "react";
import type { User } from "../types/user.types";
import { motion } from "motion/react";
import UserCardBtns from "./UserCardBtns";
import EditDialogForm from "../../../components/ui/EditDialogForm";

type user = { user: User };

export default function UserCard({ user }: user) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  return (
    <>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div className="bg-white p-5 rounded-lg text-center shadow-2xl space-y-5">
          <h2 className="text-red-700 font-bold text-xl">{user.name}</h2>
          <div>
            <p className="text-blue-800 font-bold">
              Edad: <span className="text-black font-normal">{user.age}</span>
            </p>
            <p className="text-blue-800 font-bold">
              Email:{" "}
              <span className="text-black font-normal">{user.email}</span>
            </p>
            <p className="text-blue-800 font-bold">
              Role: <span className="text-black font-normal">{user.role}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <UserCardBtns setIsOpenEdit={setIsOpenEdit} />
          </div>
        </div>
      </motion.li>

      <EditDialogForm
        isOpenEdit={isOpenEdit}
        setIsOpenEdit={setIsOpenEdit}
        user={user}
      />
    </>
  );
}
