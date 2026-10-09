import type { User } from "../../features/users/types/user.types";

type SearchList = {
  isSearching: boolean;
  filteredUsers: User[];
};

export default function SearchList({ isSearching, filteredUsers }: SearchList) {
  return (
    <>
      {isSearching && (
        <ul className="absolute left-1/2  space-x-5 -translate-x-1/2 top-12.7 z-10 w-auto p-5 bg-white text-center ">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <>
                <li
                  className="flex justify-around border-b-2 border-gray-300 w-full p-4"
                  key={user._id}
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="font-semibold">{user.email}</p>
                  <p className="font-semibold">{user.age}</p>
                </li>
              </>
            ))
          ) : (
            <li>No hay coincidencias</li>
          )}
        </ul>
      )}
    </>
  );
}
