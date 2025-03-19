import React from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { playCircle, radio, library, search } from "ionicons/icons";
import { useLocation } from "react-router-dom";

const tabItems = [
  {
    tab: "home",
    href: "/home",
    label: "Listen Now",
    icon: playCircle
  },
  {
    tab: "radio",
    href: "/radio",
    label: "Radio",
    icon: radio
  },
  {
    tab: "library",
    href: "/library",
    label: "Library",
    icon: library
  },
  {
    tab: "search",
    href: "/search",
    label: "Search",
    icon: search
  }
];

const hideTabsRoutes = ["/login", "/register","/email-verification"];

const BottomTabBar: React.FC = () => {
  const location = useLocation();
  const hideTabs = hideTabsRoutes.includes(location.pathname);

  if (hideTabs) return null; 

  return (
    <IonTabBar slot="bottom"color="light" >
      {tabItems.map((item) => (
        <IonTabButton 
          key={item.tab}
          tab={item.tab} 
          href={item.href}
        >
          <IonIcon 
            icon={item.icon} 
            style={{ color: location.pathname === item.href ? '#8A79FD' : undefined }}
          />
        </IonTabButton>
      ))}
    </IonTabBar>
  );
}

export default BottomTabBar;