import NavBar from "./components/ui/NavBar";
import UserList from "./features/users/components/UserList";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <UserList />
      </main>
    </>
  );
}

export default App;
