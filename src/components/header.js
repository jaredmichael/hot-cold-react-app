import React from 'react';

import Nav from "./nav.js";

import './header.css';

export default function Header(props) {
    return (
        <header>
            <Nav
            />
            <h1>HOT or COLD</h1>
        </header>
    );
}