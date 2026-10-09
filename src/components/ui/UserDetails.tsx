// import type { User } from "../../features/users/types/user.types";
import { useUserStore } from "../../features/users/store/useUserStore";

type UserDetailsProps = {
  closeDetails: any;
  // toConsultUser: (data: User) => Promise<void>;
};

export default function UserDetails({ closeDetails }: UserDetailsProps) {
  const { userDetails } = useUserStore();

  console.log(userDetails);

  const [{ _id, name, age, email, role, createdAt, updatedAt }] = userDetails;

  return (
    <>
      <h2 className="text-red-700 text-2xl font-bold text-center mb-8">
        Detalles del Usuario
      </h2>

      <p className="font-bold text-blue-800 text-lg">
        Nombre: <span className="text-black font-semibold text-lg">{name}</span>
      </p>

      <p className="font-bold text-blue-800 text-lg">
        Edad: <span className="text-black font-semibold text-lg">{age}</span>
      </p>

      <p className="font-bold text-blue-800 text-lg">
        Correo:{" "}
        <span className="text-black font-semibold text-lg">{email}</span>
      </p>
      <p className="font-bold text-blue-800 text-lg">
        Rol: <span className="text-black font-semibold text-lg">{role}</span>
      </p>
      <p className="font-bold text-blue-800 text-lg">
        Id: <span className="text-black font-semibold text-lg">{_id}</span>
      </p>
      <p className="font-bold text-blue-800 text-lg">
        Fecha de cracion:{" "}
        <span className="text-black font-semibold text-lg">{createdAt}</span>
      </p>
      <p className="font-bold text-blue-800 text-lg">
        Ultima fecha de edicion:{" "}
        <span className="text-black font-semibold text-lg">{updatedAt}</span>
      </p>

      <div className="flex justify-end">
        <button
          className="justify-start border-2 rounded-lg px-3 p-1 bg-red-500 text-white font-bold hover:cursor-pointer hover:bg-red-800"
          onClick={closeDetails}
        >
          Cerrar
        </button>
      </div>
    </>
  );
}
