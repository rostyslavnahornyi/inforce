import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IProduct } from "../../interfaces/IProduct";
import { gql } from "../../utils/gql";
import { getProducts } from "../../utils/GQLqueries";
import {
    getProductsFailed,
    getProductsPending,
    getProductsSuccess,
} from "../actions/product";
import { AppState, store } from "../store";

export const actionGetProducts = () => (
    dispatch: ThunkDispatch<IProduct, void, AnyAction>
): ThunkAction<void, AppState, unknown, AnyAction> => {
    dispatch(getProductsPending());

    gql(getProducts, { query: "[{}]" })
        .then(products => dispatch(getProductsSuccess(products)))
        .catch(error => dispatch(getProductsFailed(error)));
};
