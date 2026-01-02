import { IonButton } from "@ionic/react";
import "./Menu.css";
import React from "react";
import { useLocation } from "react-router-dom";

import { Spin as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";

export default function Menu({menuOpen, toggleMenu}: {menuOpen: boolean, toggleMenu: () => void}) {
    const location = useLocation();

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/education', label: 'Education' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' }
    ];

    const handleMenuClick = () => {
        setTimeout(() => {
            toggleMenu();
        }, 100); // Ajusta este valor según tu transición CSS
    };

    return (
        <>
            <div className={`main-menu ${menuOpen ? "menu-open" : "menu-closed"}`} id="main_menu">
                <div slot="end" className="menu-nav">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.path} className="p-8">
                                <NavLink
                                    exact
                                    to={item.path}
                                    onClick={handleMenuClick}
                                    className={`!text-white-500 hover:!text-sky-100 hover:font-bold transition-colors duration-300 ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
