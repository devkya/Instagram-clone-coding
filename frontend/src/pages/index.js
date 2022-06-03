import React from "react";
import AppLayout from "components/AppLayout";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AccountsRoutes from "./accounts";

function Root() {
    return (
        <AppLayout>
            최상위 컴포넌트
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/accounts" element={<AccountsRoutes />} />
            </Routes>
            
            
        </AppLayout>
    )
}

export default Root;