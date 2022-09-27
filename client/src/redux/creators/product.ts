import { Action, AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IProduct } from "../../interfaces/IProduct";
import { gql } from "../../utils/gql";
import { getProducts } from "../../utils/GQLqueries";
import {
    getProductsFailed,
    getProductsPending,
    getProductsSuccess,
} from "../actions/product";
import { RootState } from "../store";

export const actionGetProducts = (): ThunkAction<void, RootState, null, AnyAction> => async (
    dispatch
) => {
    dispatch(getProductsPending());

    try {
		const products = await gql(getProducts, { query: "[{}]" });
		return dispatch(getProductsSuccess(products));
	} catch (error: unknown) {
		return dispatch(getProductsFailed(String(error)));
	}
};
