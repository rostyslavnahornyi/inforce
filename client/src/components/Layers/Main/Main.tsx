import React from "react";
import './style.scoped.scss'

interface IProps {
    children: React.ReactNode;
}

const Main: React.FC<IProps> = ({children}) => {
    return (
        <main className="main">
			{children}
        </main>
    );
};

export default Main;
