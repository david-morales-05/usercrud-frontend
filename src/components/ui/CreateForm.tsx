import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Button,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { userSchema } from "../../features/users/schemas/user.schema";
import type { CreateUserFormData } from "../../features/users/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "../../features/users/store/useUserStore";
// import { useUserStore } from "../../features/users/store/useUserStore";

type CreateFormProps = {
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateForm({ setIsOpenCreate }: CreateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(userSchema),
  });

  const { toCreateUser } = useUserStore();

  // const { toCreateUser } = useUserStore();

  const cancelCreateUser = () => {
    (reset(), setIsOpenCreate(false));
  };

  const onSubmitForm = (data: CreateUserFormData) => {
    console.log("se mandaron los datos", data);
    toCreateUser(data);
    reset();
    setIsOpenCreate(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Fieldset className="space-y-5">
          <Legend className="text-3xl text-red-600  font-bold text-center">
            Crea un Usuario
          </Legend>

          <Field className="flex flex-col">
            <Label className="font-semibold">Nombre de Usuario</Label>
            <Input
              {...register("name")}
              type="text"
              className="border-3 border-black rounded-xl"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </Field>

          <Field className="flex flex-col">
            <Label className="font-semibold">Edad</Label>
            <Input
              {...register("age", { valueAsNumber: true })}
              type="number"
              className="border-3 border-black rounded-xl"
            />

            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </Field>

          <Field className="flex flex-col">
            <Label className="font-semibold">Email</Label>
            <Input
              {...register("email")}
              type="email"
              className="border-3 border-black rounded-xl"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </Field>

          <Field className="flex flex-col">
            <Label className="font-semibold">Role</Label>
            <Input
              {...register("role")}
              type="text"
              className="border-3 border-black rounded-xl"
            />
            {errors.role && (
              <span className="text-red-500 text-sm">
                {errors.role.message}
              </span>
            )}
          </Field>
        </Fieldset>

        <div className="flex justify-between mt-10">
          <Button
            onClick={() => cancelCreateUser()}
            className="flex bg-red-600 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-800"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            className="flex bg-green-500 text-white font-bold rounded-lg  px-2 py-1 gap-1.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-green-900"
            disabled={isSubmitting}
          >
            Crear Usuario
          </Button>
        </div>
      </form>
    </>
  );
}
