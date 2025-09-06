import { create } from "zustand";
import type { IProduct } from "../../../shared/types/products";

interface IStates {
    choosedproducts: IProduct[]
}

type Actions = {
    setChoosedProducs: (products: IProduct) => void
}

const initialState: IStates = {
    choosedproducts: []
}



export const useProductsStore = create<IStates & Actions>((set) => ({
    ...initialState,
    setChoosedProducs: (product) => {
        const newProducts = null;
        // 
        set({choosedproducts: newProducts})
    }
}))