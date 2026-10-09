import { useState } from "react";
import type { User } from "../types/user.types";
import { motion } from "motion/react";
import UserCardBtns from "./UserCardBtns";
import EditDialogForm from "../../../components/ui/EditDialogForm";
import UserDetailsDialog from "../../../components/ui/UserDetailsDialog";
import { useUserStore } from "../store/useUserStore";

type UserCardProps = {
  user: User;
  // isOpenDetails: boolean;
  // setIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserCard({ user }: UserCardProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { isOpenDetails, openDetails, closeDetails, toConsultUser } =
    useUserStore();

  const openUDetails = () => {
    toConsultUser(user);
    openDetails();
  };

  return (
    <>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div className="bg-white p-5 rounded-lg  shadow-2xl ">
          <div
            className="text-center space-y-5 mb-3"
            onClick={() => openUDetails()}
          >
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
                Role:{" "}
                <span className="text-black font-normal">{user.role}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <UserCardBtns setIsOpenEdit={setIsOpenEdit} user={user} />
          </div>
        </div>
      </motion.li>

      <UserDetailsDialog
        isOpenDetails={isOpenDetails}
        closeDetails={closeDetails}
      />

      <EditDialogForm
        isOpenEdit={isOpenEdit}
        setIsOpenEdit={setIsOpenEdit}
        user={user}
      />
    </>
  );
}
