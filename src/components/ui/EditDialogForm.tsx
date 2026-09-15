import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import EditForm from "./EditForm";
import type { User } from "../../features/users/types/user.types";

type EditDialogFormProps = {
  isOpenEdit: boolean;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
};

export default function EditDialogForm({
  isOpenEdit,
  setIsOpenEdit,
  user,
}: EditDialogFormProps) {
  const cancelEdit = () => {
    setIsOpenEdit(false);
  };
  return (
    <>
      <AnimatePresence>
        {isOpenEdit && (
          <Dialog
            static
            open={isOpenEdit}
            onClose={() => cancelEdit()}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            >
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-lg space-y-4 bg-white p-12 rounded-2xl "
                >
                  <EditForm setIsOpenEdit={setIsOpenEdit} user={user} />
                </DialogPanel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
