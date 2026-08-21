import { Search } from "lucide-react";
import { Field, Input, Label } from "@headlessui/react";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-600 py-3 ">
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
          />
        </Field>
      </nav>
    </>
  );
}
