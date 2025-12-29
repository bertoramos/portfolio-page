import React, { useRef } from "react";
import { IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonModal, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import "./ProjectComponent.css";
import { mailOutline, logoGithub, logoLinkedin } from "ionicons/icons";
import { TechnologyType } from "../model/cv";

interface ProjectDetailProps {
    modal_trigger: string;
    title: string;
    image: string;
    description: string;
    url: string;
    technologies: TechnologyType[];
};

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {

    const modal = useRef<HTMLIonModalElement>(null);
    const dismiss = () => {
        modal.current?.dismiss(null, 'backdrop');
    };
    
    return (
        <IonModal className="project-detail-modal" ref={modal} trigger={props.modal_trigger}>
            <IonHeader style={{ "--background": "#54d61c", "--ion-background-color": "red" }}>
                <IonToolbar>
                    <IonTitle></IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="ion-margin ion-padding" onClick={() => dismiss()}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="project-detail-modal-content ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol className="project-detail-text-column" size="12" size-md="8">
                            <p style= {{textAlign: "center", fontWeight: "bold"}} className="project-detail-justify">
                                {props.title}
                            </p>
                            <p className="project-detail-justify">
                                {props.description}
                            </p>
                            <div className="ion-padding">
                                <a 
                                    href={props.url}
                                    target="_blank"
                                    rel="noopener noreferrer">Click here for more info.
                                </a>
                            </div>
                            <div className="project-technologies-container">
                                {
                                    props.technologies.map((tech, index) => (
                                        <IonChip key={index}>
                                            <IonIcon icon={tech.icon}></IonIcon>
                                            <IonLabel>{tech.name}</IonLabel>
                                        </IonChip>
                                    ))
                                }
                            </div>
                        </IonCol>
                        <IonCol size="12" size-md="4" className="project-detail-image-column ion-text-center">
                            <img style={{height: "70%"}} src={props.image} alt={props.title} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

interface ProjectComponentProps {
    image: string;
    title: string;
    short_description: string;
    url: string;
    description: string;
    technologies: TechnologyType[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {

    return (
        <IonGrid className="project-component-grid">
            <IonRow>
                <IonCol
                    className="project-component-image-column project-component-center-column"
                    size="12"
                    size-md="6"
                >
                    <img src={props.image} alt={props.title} />
                </IonCol>
                <IonCol
                    size="12"
                    size-md="6"
                    className="project-component-text-column project-component-center-column">
                    <p className="project-component-title">{props.title}</p>
                    <div className="project-component-description">
                        <div className="ion-padding-bottom project-component-description-text">{props.short_description}</div>
                        <IonButton
                            id={props.title + "-open-project-detail-modal"}
                            fill="clear"
                            className="project-component-detail-button">
                            Details
                        </IonButton>
                        <ProjectDetail
                            modal_trigger={props.title + "-open-project-detail-modal"}
                            title={props.title}
                            image={props.image}
                            description={props.description}
                            url={props.url}
                            technologies={props.technologies}
                        />
                        <div className="project-technologies-container">
                            {
                                props.technologies.map((tech, index) => (
                                    <IonChip key={index}>
                                        <IonIcon icon={tech.icon}></IonIcon>
                                        <IonLabel>{tech.name}</IonLabel>
                                    </IonChip>
                                ))
                            }
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ProjectComponent;
