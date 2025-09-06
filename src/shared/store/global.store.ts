import { create } from "zustand";
import type { User } from "../types/user";
import type { ToastOptions } from "./model/types";

interface IGlobalStates {
  user: User | null;
  toast: {
    show: boolean;
    options?: ToastOptions;
    title: string | null;
    action?: () => void;
    actionTitle?: string;
  };
}

type Actions = {
  setUser: (user: User) => void;
  setToast: (toast: IGlobalStates["toast"]) => void;
};

const initialStates: IGlobalStates = {
  user: null,
  toast: {
    show: false,
    title: null,
    action: undefined,
    actionTitle: undefined,
  },
};

export const useGlobalStore = create<Actions & IGlobalStates>((set) => ({
  ...initialStates,
  setUser: (user) => set({ user: user }),
  setToast: (toast) => set({ toast }),
}));
