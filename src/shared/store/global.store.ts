import { create } from "zustand";
import type { User } from "../types/user";

interface IGlobalStates {
    user: User | null
}

type Actions = {
    setUser: (user: User) => void;
}

const initialStates: IGlobalStates = {
    user: null
}

export const useGlobalStore = create<Actions & IGlobalStates>((set) => ({
    ...initialStates,
    setUser: (user) => set({ user: user })
}))