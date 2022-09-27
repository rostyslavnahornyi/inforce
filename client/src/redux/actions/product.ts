import { Statuses } from "../../enums/Statuses";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";
import types from "../types/products";

// export const addProduct = (product: IProduct) => ({
//     type: "ADD_PRODUCT",
//     payload: product,
// });

export const getProductsPending = (): IAction => ({
    type: types.getProductsPending,
    status: Statuses.PENDING,
});

export const getProductsSuccess = (products: IProduct[]): IAction => ({
    type: types.getProductsSuccess,
    status: Statuses.SUCCESS,
    payload: products,
});

export const getProductsFailed = (error: string): IAction => ({
    type: types.getProductsFailed,
    error,
    status: Statuses.FAIL,
});
