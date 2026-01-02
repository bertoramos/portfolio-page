
import { IonButton } from "@ionic/react";
import "./Menu.css";
import React from "react";

import { Spin as Hamburger } from 'hamburger-react'

export default function Menu() {

    const [menuOpen, setMenuOpen] = React.useState(false);

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/education', label: 'Education' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' }
    ];

    return (
        <>
            <div slot="end" id="menu_button" onClick={() => { setMenuOpen(!menuOpen); }}>
                <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} />
            </div>

            <div className={`main-menu ${menuOpen ? "menu-open" : "menu-closed"}`} id="main_menu">
                {menuItems.map((item, index) => (
                    <IonButton key={index} className="menu-item" routerLink={item.path} onClick={() => setMenuOpen(false)}>
                        {item.label}
                    </IonButton>
                ))}
            </div>
        </>
    );

}
