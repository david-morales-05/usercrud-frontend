import NavBar from "./components/ui/NavBar";
import UserList from "./features/users/components/UserList";
import TopBtns from "./components/ui/TopBtns";
import { useState } from "react";
import CreateDialogForm from "./components/ui/CreateDialogForm";

function App() {
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  return (
    <>
      <NavBar />
      <main>
        <TopBtns setIsOpenCreate={setIsOpenCreate} />
        <CreateDialogForm
          isOpenCreate={isOpenCreate}
          setIsOpenCreate={setIsOpenCreate}
        />
        <UserList />
      </main>
    </>
  );
}

export default App;
