import NavBar from "./components/ui/NavBar";
import UserList from "./features/users/components/UserList";
import TopBtns from "./components/ui/TopBtns";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <TopBtns />
        <UserList />
      </main>
    </>
  );
}

export default App;
