import { IonChip, IonIcon, IonLabel } from "@ionic/react";

type TechChipProps = {
  tech: { name: string; icon: string; };
  className?: string;
};

const TechChip: React.FC<TechChipProps> = ({ tech, className }) => (
  <IonChip className={`px-2 mr-2 ${className || ''}`}>
    <IonIcon className="pr-2" icon={tech.icon}></IonIcon>
    <IonLabel>{tech.name}</IonLabel>
  </IonChip>
);

export default TechChip;