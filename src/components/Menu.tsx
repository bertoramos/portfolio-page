
import { IonButton } from "@ionic/react";
import "./Menu.css";
import React from "react";

export default function Menu() {
    
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <IonButton slot="end" id="menu_button" onClick={() => { setMenuOpen(!menuOpen); }}>
                Menu
            </IonButton>
            <div className={menuOpen ? "menu-open" : "menu-closed"} id="main_menu">
                MENU
            </div>
        </>
    );

}
