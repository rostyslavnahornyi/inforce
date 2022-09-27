import React, { useEffect, useState } from "react";
import "./style.scoped.scss";
import { actionGetProducts } from "../../redux/creators/product";
import { useAppDispatch } from "../../hooks";


const ProductsList: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actionGetProducts());
    }, []);

    return <div className="product-list" />;
};

export default ProductsList;
