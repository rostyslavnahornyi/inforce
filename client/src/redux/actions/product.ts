import { Statuses } from "../../enums/Statuses";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";
import {GET_PRODUCTS_FAILED,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_PENDING} from "../types/products";

export const getProductsPending = (): IAction<IProduct> => ({
    type: GET_PRODUCTS_PENDING,
    status: Statuses.PENDING,
});

export const getProductsSuccess = (products: IProduct[]): IAction<IProduct> => ({
    type: GET_PRODUCTS_SUCCESS,
    status: Statuses.SUCCESS,
    payload: products,
});

export const getProductsFailed = (error: string): IAction<IProduct> => ({
    type: GET_PRODUCTS_FAILED,
    error,
    status: Statuses.FAIL,
});


