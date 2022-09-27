import React, { useEffect, useState } from "react";
import "./style.scoped.scss";
import { useDispatch } from "react-redux";
import { actionGetProducts } from "../../redux/creators/product";

const ProductsList: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetProducts())
    }, []);

    return <div className="product-list">

    </div>;
};

export default ProductsList;
