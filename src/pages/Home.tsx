
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';
import { loadCV } from '../controller/cv_load';
import type { CVType } from '../model/CV';

const Home: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const [cv, setCV] = useState<CVType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCV = async () => {
      try {
        const cvData = await loadCV(`${baseUrl}cv-alberto.yaml`);
        setCV(cvData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading CV');
      } finally {
        setLoading(false);
      }
    };

    fetchCV();
  }, []);

  return (
    <IonContent fullscreen>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {cv && <p>{cv.about.about_description}</p>}
    </IonContent>
  );
};

export default Home;
