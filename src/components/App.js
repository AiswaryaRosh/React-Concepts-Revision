import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Header from './Header';
import Body from './Body';

const AppLayoutComponent = () => {
    return (
        <div className="layout-container">
            <Header/>
            <Body />
            {/* <div>Footer component</div> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayoutComponent />)