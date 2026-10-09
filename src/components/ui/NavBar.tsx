import { Search } from "lucide-react";
import { Field, Input, Label } from "@headlessui/react";
import SearchList from "./SearchList";
import { useUserStore } from "../../features/users/store/useUserStore";
import { useState } from "react";

export default function NavBar() {
  const { users } = useUserStore();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const isSearching = searchTerm.trim().length > 0;

  return (
    <>
      <nav className="bg-gray-600 py-3 relative">
        <Field className={"flex justify-center items-center gap-x-3"}>
          <Label>
            <Search color="#fffbeb" />
          </Label>

          <Input
            type="text"
            placeholder="Buscar usuario "
            className={
              "bg-transparent text-amber-50 border-2 border-amber-50 rounded-md px-2"
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Field>
      </nav>

      <SearchList isSearching={isSearching} filteredUsers={filteredUsers} />
    </>
  );
}
