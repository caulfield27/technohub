import { create } from "zustand";
import type { IStoragesState } from "./types";

const initialState: IStoragesState = {
  storages: [],
  setStorages: () => {},
};

export const useWarehouseStore = create<IStoragesState>()((set) => ({
  ...initialState,
  storages: [],
  setStorages: (storages) => set({ storages }),
}));
