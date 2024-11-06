import react from "react";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

function Header(){
    const styles = {
        "text-align": "center",
        "align-content": "center",
        "background-color": "aqua",
    }
    return(
        <header style={styles} class="head">
            <nav>
                <h1>Weather Site</h1>
            </nav>
        </header>
    );
    
}

export default Header;