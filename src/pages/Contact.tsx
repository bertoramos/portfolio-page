import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import "./Contact.css";
import { CVType } from "../model/cv";
import { mailOutline, logoLinkedin, logoGithub, download } from "ionicons/icons";

export default function Contact({ cv, isOpen, onClose }: { cv: CVType | null, isOpen: boolean, onClose?: () => void }) {
    if (!cv) {
        return <p>FATAL ERROR in cv loading</p>
    }

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose} className="contact-modal">
            <IonHeader className="ion-no-border">
                <IonToolbar className="contact-header ion-no-border">
                    <IonButtons slot="end">
                        <IonButton className="p-8" fill="clear" onClick={onClose}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contact-content">
                <IonGrid>
                    <IonRow>
                        <IonCol className="contact-col" sizeMd="7">
                            <h2 className="mb-8 pb-8">Get in touch!</h2>
                            <p className="text-lg">Hey! 🤗 Feel free to send me an email at <a href={`mailto:${cv.contact.email}`}>{cv.contact.email.substring(7)}</a> or contact me on social media.</p>
                            <IonRow className="social-links">
                                <div id="contact-buttons-container">
                                    <IonButton
                                        href={cv.contact.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={mailOutline} />
                                    </IonButton>
                                    <IonButton
                                        href={cv.contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={logoLinkedin} />
                                    </IonButton>
                                    <IonButton
                                        href={cv.contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={logoGithub} />
                                    </IonButton>
                                    <IonButton
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear"
                                        href={"cvurl"}>
                                        <IonIcon size="large" icon={download} />
                                        <span>Resume</span>
                                    </IonButton>
                                </div>
                            </IonRow>
                        </IonCol>
                        <IonCol className="image-col" sizeMd="5">
                            <img src="assets/contact_image.svg" alt="Contact" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
}