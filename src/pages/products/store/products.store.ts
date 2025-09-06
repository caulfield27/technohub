import { create } from "zustand";
import type { IProduct } from "../../../shared/types/products";

interface IStates {
    products: IProduct[]
}

type Actions = {
    setChoosedProducs: (products: IProduct[]) => void;
    setUpdateProducs: (productId: number) => void;
    setProductQuantity: (productId: number, value: string) => void;
}

const initialState: IStates = {
    products: []
}



export const useProductsStore = create<IStates & Actions>((set, get) => ({
    ...initialState,
    setChoosedProducs: (products) => {
        // const { choosedproducts } = get();   

        const newProducts = products;
        // 
        set({ products: newProducts })
    },
    setUpdateProducs: (productId) => {
        const { products } = get();

        const newProducts = products;

        set({
            products: newProducts?.map((item) => {
                if (item.ID == productId) {
                    return {
                        ...item,
                        choosed: !item.choosed,
                        sumCount: item.SellPrice * item?.QuantityClient
                    }
                } else {
                    return item
                }
            })
        })
    },
    setProductQuantity: (productId, value) => {
        const { products } = get();
        // 
        set({
            products: products.map((item) => {
                if (item.ID == productId) {
                    return { ...item, QuantityClient: +value }
                } else {
                    return item
                }
            })
        })
    },
}))