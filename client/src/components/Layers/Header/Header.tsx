import React from "react";
import { Link } from "react-router-dom";
import "./style.scoped.scss";

const Header: React.FC = () => {
    return (
        <nav className="header">
            <span>INFORCE</span>
			<div className="list">
				<Link to="/">Home</Link>
				<Link to="/">Products</Link>
			</div>
        </nav>
    );
};

export default Header;
