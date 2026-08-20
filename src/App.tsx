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
        {users.map((user) => (
          <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user._id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
