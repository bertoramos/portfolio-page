import React, { useRef } from "react";
import { IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonModal, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { mailOutline, logoGithub, logoLinkedin } from "ionicons/icons";
import { TechnologyType } from "../model/cv";

import TechChip from "./TechChip";

import "./ProjectComponent.css";

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
            <IonHeader>
                <IonToolbar>
                    <IonTitle></IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="ion-margin ion-padding" onClick={() => dismiss()}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {/* Contenedor que centra el contenido del modal */}
                <div className="flex items-center justify-center h-full">

                    <IonGrid className="w-full">
                        <IonRow className="items-center">

                            { /* Columna izquierda - Texto */ }
                            <IonCol
                                size="12"
                                size-md="6"
                                className="project-detail-text-column flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4"
                            >
                                <h2 className="text-2xl font-bold md:ml-8">
                                    {props.title}
                                </h2>
                                <p className="text-justify md:ml-8">
                                    {props.description}
                                </p>
                                <a
                                    href={props.url}
                                    target="_blank"
                                    id="more-info-link"
                                    className="font-semibold hover:underline md:ml-8"
                                >
                                    More info here
                                </a>
                            </IonCol>
                            
                            { /* Columna derecha - Imagen */ }
                            <IonCol
                                size="12"
                                size-md="6"
                                className="project-detail-image-column flex justify-center items-center mt-6 md:mt-0"
                            >
                                <img
                                    src={props.image}
                                    alt={props.title}
                                    className="max-w-full h-128 object-contain rounded-lg"
                                />
                            </IonCol>

                        </IonRow>
                    </IonGrid>

                </div>
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
/*
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
                                    <TechChip tech={tech} />
                                ))
                            }
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};
*/

const DetailsButton: React.FC<{
    title: string;
    image: string;
    description: string;
    url: string;
    technologies: TechnologyType[];
}> = (props) => {
    return (
        <>
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
        </>
    );
};

const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {

    return (
        <IonGrid className="project-component-grid">
            <IonRow>
                <IonCol
                    className="project-image-column"
                    size="12"
                    size-md="6"
                >
                    <img
                        src={props.image}
                        alt={props.title}
                    />
                </IonCol>
                <IonCol
                    size="12"
                    size-md="6"
                    className="md:flex md:flex-col md:justify-center"
                >
                    <IonRow>
                        <p className="project-component-title font-bold text-lg md:text-3xl m-5">{props.title}</p>
                    </IonRow>
                    <IonRow className="project-component-description m-5">
                        {props.short_description}
                    </IonRow>
                    
                    <IonRow className="m-5">
                        <DetailsButton
                            title={props.title}
                            image={props.image}
                            description={props.description}
                            url={props.url}
                            technologies={props.technologies}
                        />
                    </IonRow>
                    
                    <IonRow className="m-5 p-2">
                        {props.technologies.map((tech, index) => (
                            <TechChip tech={tech} key={index} />
                        ))}
                    </IonRow>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ProjectComponent;
