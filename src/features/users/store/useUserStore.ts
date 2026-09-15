import { create } from "zustand";
import { userService } from "../services/userService";
import type { User, UserBody, UpdateUserBody } from "../types/user.types";

type UserState = {
  users: User[];
  loading: boolean;
  isSubmitting: boolean;
  getDataUsers: () => Promise<void>;
  toCreateUser: (data: UserBody) => Promise<void>;
  toUpdateUser: (data: UpdateUserBody, _id: string) => Promise<void>;
};

// type FieldValues = {
//   fieldValues: FieldValues;
// };

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  isSubmitting: false,

  getDataUsers: async () => {
    set({ loading: true });

    try {
      const response = await userService.getAllUsers();
      if (response.success) {
        set({ users: response.data });
        console.log("se añade el nuevo usuario en el store");
      }
    } catch (error) {
      console.error("Error al cargar los usuarios", error);
    } finally {
      set({ loading: false });
    }
  },

  toCreateUser: async (data) => {
    set({ isSubmitting: true });

    try {
      const response = await userService.createUser(data);
      if (response.success) {
        set((state) => ({
          users: [...state.users, response.data],
        }));
        console.log("Esta parte esta jalando!");
      }
    } catch (error) {
      console.error("error al crear el usuario en el estore:", error);
    } finally {
      set({ isSubmitting: false });
    }
  },

  toUpdateUser: async (data, _id) => {
    set({ isSubmitting: true });

    try {
      const response = await userService.updateUser(data, _id);

      if (response.success) {
        set((state) => ({
          users: state.users.map((user) =>
            user._id === _id ? response.data : user,
          ),
        }));
      }
    } catch (error) {
      console.error(error, "error al actualizar el usuario");
    } finally {
      set({ isSubmitting: true });
    }
  },
}));
