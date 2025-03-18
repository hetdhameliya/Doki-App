import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomePage = () => (

  <IonPage>
    <IonHeader translucent >
      <IonToolbar color='light'>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader> 
    <IonContent fullscreen scrollEvents>
    </IonContent>
  </IonPage>
);

export default HomePage;