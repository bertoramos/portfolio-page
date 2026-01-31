
import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import "./TechChip.css";

type TechChipProps = {
  tech: { name: string; icon: string; };
  className?: string;
  style?: React.CSSProperties;
};

const TechChip: React.FC<TechChipProps> = ({ tech, className, style }) => (
  <IonChip className={`tech-chip px-2 mr-2 mb-1 ${className || ''}`} style={style}>
    <IonIcon className="pr-2" icon={tech.icon}></IonIcon>
    <IonLabel className="tech-label">{tech.name}</IonLabel>
  </IonChip>
);

export default TechChip;