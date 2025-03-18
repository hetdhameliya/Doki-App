import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route,  } from 'react-router-dom';
import { IonRouterOutlet, IonTabs } from '@ionic/react';
import HomePage from '../pages/HomePage';
import RadioPage from '../pages/RadioPage';

import Login from '../pages/Login/Login';
import BottomTabBar from './BottomTabBar';
import Register from '../pages/Register/Register';

export default function Router() {

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          <Redirect exact path="/" to="/login" />
          <Route path="/register" render={() => <Register />} exact={true} />
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/login" render={() => <Login />} exact={true} />
        </IonRouterOutlet>

        {/* Move useLocation inside a child component */}
        <BottomTabBar/>
      </IonTabs>
    </IonReactRouter>
  );
}

