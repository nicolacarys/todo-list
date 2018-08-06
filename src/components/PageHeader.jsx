import React from "react";
import { Link } from "react-router-dom";

export default ({ children }) => (
    <div className="page-header">
        <h1>
            <Link to="/">{ children }</Link>
        </h1>
    </div>
);
