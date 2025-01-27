import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomePage = () => (

  <IonPage>
    <IonHeader translucent >
      
      <IonToolbar>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen scrollEvents>
      <p className='text-[30px]'>hello</p>
    </IonContent>
  </IonPage>
);

export default HomePage;