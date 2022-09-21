import React from "react";
import './List.css'

function List ({children}) {
    return (
        <main className="main_report">
            { children }
        </main>
    );
}

export { List };