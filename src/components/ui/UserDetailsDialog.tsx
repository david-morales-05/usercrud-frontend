import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import UserDetails from "./UserDetails";

type UserDetailsDialogProps = {
  isOpenDetails: boolean;
  closeDetails: any;
};

export default function UserDetailsDialog({
  isOpenDetails,
  closeDetails,
}: UserDetailsDialogProps) {
  return (
    <>
      <AnimatePresence>
        {isOpenDetails && (
          <Dialog
            static
            open={isOpenDetails}
            onClose={closeDetails}
            className="relative z-10"
            autoFocus={false}
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
                  <UserDetails
                    closeDetails={closeDetails}
                    // toConsultUser={toConsultUser}
                  />
                </DialogPanel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
