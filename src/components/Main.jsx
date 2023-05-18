import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </div>
    )
}