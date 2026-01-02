
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import "./Contact.css";

export default function Contact({ isOpen, onClose }: { isOpen: boolean, onClose?: () => void }) {
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader className="ion-no-border">
                <IonToolbar className="contact-header ion-no-border">
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contact-content">
                <p>Feel free to reach out!</p>
            </IonContent>
        </IonModal>
    );
}