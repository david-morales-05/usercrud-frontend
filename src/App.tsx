import NavBar from "./components/ui/NavBar";
import { useUserStore } from "./features/users/store/useUserStore";
import { useEffect } from "react";

function App() {
  const { users, getDataUsers } = useUserStore();

  useEffect(() => {
    getDataUsers();
  }, [getDataUsers]);

  console.log(users);

  return (
    <>
      <div>
        <NavBar />
      </div>
    </>
  );
}

export default App;
