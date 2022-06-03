import React from "react";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";

function AccountsRoutes({ match}) {
    return (
        <>
        <Routes>
            <Route exact path="profile" element={<Profile/>}></Route>    
            <Route exact path="login" element={<Login/>}></Route>
        </Routes>
        </>
    )
}

export default AccountsRoutes