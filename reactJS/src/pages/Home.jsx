import React from "react";
import {
  ShellBar,
  StandardListItem,
  Avatar,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_belize_hcb");

const Home = () => {
  setTheme("sap_horizon");
  return (
    <>
      <ShellBar
        className=""
        logo={
          <img
            alt="SAP Logo"
            src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
          />
        }
        menuItems={
          <>
            <StandardListItem data-key="1">Menu Item 1</StandardListItem>
            <StandardListItem data-key="2">Menu Item 2</StandardListItem>
            <StandardListItem data-key="3">Menu Item 3</StandardListItem>
          </>
        }
        notificationsCount="10"
        onCoPilotClick={function noRefCheck() {}}
        onLogoClick={function noRefCheck() {}}
        onMenuItemClick={function noRefCheck() {}}
        onNotificationsClick={function noRefCheck() {}}
        onProductSwitchClick={function noRefCheck() {}}
        onProfileClick={function noRefCheck() {}}
        primaryTitle="Shell Bar"
        profile={
          <Avatar>
            <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" />
          </Avatar>
        }
        searchField={
          <Input icon={<Icon interactive name="search" />} showClearIcon />
        }
        secondaryTitle="Fiori 3 Shell Bardsd"
        showCoPilot
        showNotifications
        showProductSwitch
        showSearchField
        style={{}}
        waitForDefine
      />
    </>
  );
};

export default Home;
