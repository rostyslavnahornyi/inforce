import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ProductItem from "./pages/ProductItem/ProductItem";
import Products from "./pages/Products/Products";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/product/:id" element={<ProductItem />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
