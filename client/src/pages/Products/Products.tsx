import React from "react";
import Header from "../../components/Layers/Header/Header";
import Main from "../../components/Layers/Main/Main";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./style.scoped.scss";

const Products: React.FC = () => {
    return (
        <>
            <Header />
            <Main>
                <ProductsList/>
            </Main>
        </>
    );
};

export default Products;
