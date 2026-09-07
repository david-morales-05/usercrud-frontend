import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import CreateForm from "./CreateForm";

type CreateDialogFormProps = {
  isOpenCreate: boolean;
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateDialogForm({
  isOpenCreate,
  setIsOpenCreate,
}: CreateDialogFormProps) {
  const cancelCreate = () => {
    setIsOpenCreate(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpenCreate && (
          <Dialog
            static
            open={isOpenCreate}
            onClose={() => cancelCreate()}
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
                  <CreateForm setIsOpenCreate={setIsOpenCreate} />
                </DialogPanel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
