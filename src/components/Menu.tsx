import { IonButton } from "@ionic/react";
import "./Menu.css";
import React from "react";
import { useLocation } from "react-router-dom";

import { Spin as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";

export default function Menu({ menuOpen, toggleMenu }: { menuOpen: boolean, toggleMenu: () => void }) {
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
        }, 100);
    };

    return (
        <>
            <div className={`main-menu
                            bg-gray-900 
                            ${menuOpen ? "menu-active" : "menu-inactive"}`
                } id="main_menu">
                <ul className="link-container">
                    {menuItems.map((item, idx) => (
                        <li key={item.path} className="text-container p-4">
                            <NavLink
                                exact
                                to={item.path}
                                onClick={handleMenuClick}
                                className={`text group ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                <span className="menu-num text-2xl">{`0${idx + 1}`}</span>
                                <span className="menu-item text-4xl md:text-7xl">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
