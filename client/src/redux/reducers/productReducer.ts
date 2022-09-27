import { AnyAction } from "redux";
import { Statuses } from "../../enums/Statuses";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";
import types from "../types/products";

interface IState {
    products: IProduct | IProduct[];
    error?: string;
    status?: Statuses;
}

const initialState: IState = {
    products: [],
    error: "",
    status: Statuses.PENDING,
};

export default function productReducer(
    state = initialState,
    action: IAction<IProduct>
): IState {
    switch (action.type) {
        case types.getProductsPending:
            return { ...state, status: Statuses.PENDING };
        case types.getProductsSuccess:
            const { payload } = action;
            return { ...state, status: Statuses.SUCCESS, products: payload! };
        case types.getProductsPending:
            return { ...state, status: Statuses.PENDING };
        default:
            return state;
    }
}
