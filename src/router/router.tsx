import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route,  } from 'react-router-dom';
import { IonRouterOutlet, IonTabs } from '@ionic/react';
import HomePage from '../pages/HomePage';
import RadioPage from '../pages/RadioPage';
import BottomTabBar from './BottomTabBar';
import Login from '../pages/Login/Login';

export default function Router() {

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/login" />
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/login" render={() => <Login />} exact={true} />
        </IonRouterOutlet>

        {/* Move useLocation inside a child component */}
        <BottomTabBar />
      </IonTabs>
    </IonReactRouter>
  );
}

