import { create } from "zustand";
import { userService } from "../services/userService";
import type { User, UserBody, UpdateUserBody } from "../types/user.types";
import UserDetails from "../../../components/ui/UserDetails";

type UserState = {
  users: User[];
  loading: boolean;
  isSubmitting: boolean;
  isOpenDetails: boolean;
  userDetails: User[];
  getDataUsers: () => Promise<void>;
  toCreateUser: (data: UserBody) => Promise<void>;
  toUpdateUser: (data: UpdateUserBody, _id: string) => Promise<void>;
  toDeleteUser: (data: User) => void;
  toConsultUser: (data: User) => Promise<void>;
  openDetails: any;
  closeDetails: any;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  isSubmitting: false,
  isOpenDetails: false,
  userDetails: [],

  getDataUsers: async () => {
    set({ loading: true });

    try {
      const response = await userService.getAllUsers();
      if (response.success) {
        set({ users: response.data });
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

  toDeleteUser: async (data) => {
    try {
      const response = await userService.deleteUser(data);

      if (response.success) {
        set((state) => ({
          users: state.users.filter((user) => user._id !== data._id),
        }));
      }
    } catch (error) {
      console.error("error al eliminar el usuario", error);
    }
  },

  toConsultUser: async (data) => {
    set({ loading: true });

    try {
      const response = await userService.getOneUser(data);

      if (UserDetails.length > 0) {
        set((state) => ({
          userDetails: state.userDetails.filter(
            (user) => user._id === data._id,
          ),
        }));
      }
      if (response.success) {
        set((state) => ({
          userDetails: [...state.userDetails, data],
        }));
      }
    } catch (error) {
      console.error(error, "error al traer al traer los detalles del usuario ");
    } finally {
      set({ loading: false });
    }
  },

  openDetails: () => {
    set((state) => ({
      isOpenDetails: (state.isOpenDetails = true),
    }));
  },

  closeDetails: () => {
    set((state) => ({
      isOpenDetails: (state.isOpenDetails = false),
    }));
  },
}));
