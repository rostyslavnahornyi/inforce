import { Statuses } from "../../enums/Statuses";
import { IProduct } from "../../interfaces/IProduct";

export const GET_PRODUCTS_PENDING = "GET_PRODUCTS_PENDING";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";

export interface IGetProducts {
    products?: IProduct[];
    error?: string;
    status: Statuses;
}

interface getProductsPendingType {
    type: typeof GET_PRODUCTS_PENDING;
    status: Statuses;
}

interface getProductsSuccessType {
    type: typeof GET_PRODUCTS_SUCCESS;
    status: Statuses;
    products: IProduct[];
}

interface getProductsFailedType {
    type: typeof GET_PRODUCTS_FAILED;
    error: string;
    status: Statuses;
}

export type ProductActionTypes =
    | getProductsFailedType
    | getProductsSuccessType
    | getProductsPendingType;
