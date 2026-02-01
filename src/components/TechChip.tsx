import { IonChip, IonLabel } from "@ionic/react";
import "./TechChip.css";

type TechChipProps = {
  tech: { name: string; icon: string; };
  className?: string;
  style?: React.CSSProperties;
};

const TechChip: React.FC<TechChipProps> = ({ tech, className, style }) => (
  <IonChip className={`tech-chip px-2 mr-2 mb-1 ${className || ''}`} style={style}>
    <img src={tech.icon} alt={tech.name} className="tech-icon pr-2" />
    <IonLabel className="tech-label">{tech.name}</IonLabel>
  </IonChip>
);

export default TechChip;