import { create } from "zustand";
import { userService } from "../services/userService";
import type { User } from "../types/user.types";

type UserState = {
  users: User[];
  loading: boolean;
  getDataUsers: () => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,

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
}));
