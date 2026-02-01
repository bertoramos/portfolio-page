import React, { useRef } from "react";
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonRow, IonTitle, IonToolbar } from "@ionic/react";
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
                        <p className="project-component-title font-bold text-base md:text-3xl mx-5 my-1 md:m-5">{props.title}</p>
                    </IonRow>
                    <IonRow className="project-component-description mx-5 mt-1 md:m-5 text-sm md:text-base">
                        {props.short_description}
                    </IonRow>
                    
                    <IonRow className="m-0 mx-2 md:m-5">
                        <DetailsButton
                            title={props.title}
                            image={props.image}
                            description={props.description}
                            url={props.url}
                            technologies={props.technologies}
                        />
                    </IonRow>
                    
                    <IonRow className="mx-2 md:m-5 p-2">
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
