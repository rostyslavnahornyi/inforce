import { AnyAction } from "redux";
import { Statuses } from "../../enums/Statuses";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";
import {
    ProductActionTypes,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCCESS,
    IGetProducts,
} from "../types/products";

interface IState {
    products: IProduct[];
    error: string;
    status: Statuses;
}

const initialState: IState = {
    products: [],
    error: "",
    status: Statuses.PENDING,
};

export default function productReducer(
    state: IState = initialState,
    action: ProductActionTypes
): IGetProducts {
    switch (action.type) {
        case GET_PRODUCTS_PENDING:
            return {...state, status: Statuses.PENDING}
            // return { ...state, status: Statuses.PENDING };
        case GET_PRODUCTS_SUCCESS:
            const { products } = action;
            return { ...state, status: Statuses.SUCCESS, products };
        case GET_PRODUCTS_FAILED:
            return { ...state, status: Statuses.PENDING };
        default:
            return state;
    }
}
