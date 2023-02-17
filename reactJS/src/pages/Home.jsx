import React from "react";
import {
  ShellBar,
  StandardListItem,
  Avatar,
  Input,
  Icon,
  Carousel,
  Card,
  CardHeader,
  List,
  Button,
  Badge,
  MediaGalleryItem,
  Title,
} from "@ui5/webcomponents-react";
import REGEX from "regex-awesome";

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
      <hr />
      <Carousel
        style={{ height: 500 }}
        cyclic
        itemsPerPageL={1}
        onNavigate={function noRefCheck() {}}
      >
        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/iPad10-2880-800-1920x533-1.png" />
        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/Airpods-Pro-2880-800-1920x533-1.png" />
        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/Mac-2880-800-1920x533.png" />
        <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/AW8-2880-800-1920x533.png" />
      </Carousel>
      <div className="mx-4 ml-6 mb-6 flex flex-wrap">
        {[...Array(10).keys()].map((item) => {
          return (
            <div className="m-8">
              <Card
                accessibleName=""
                accessibleNameRef=""
                className=""
                header={
                  <CardHeader
                    avatar={<Icon name="nutrition-activity" />}
                    status="còn hàng"
                    subtitleText="Bảo hành 36 tháng"
                    titleText="Tặng củ sạc"
                  />
                }
                style={{
                  width: "300px",
                }}
                waitForDefine
              >
                <List>
                  <StandardListItem className="py-36">
                    <div>
                      <MediaGalleryItem>
                        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg" />
                      </MediaGalleryItem>
                    </div>
                  </StandardListItem>
                  <StandardListItem>
                    <div className="flex">
                      <Badge
                        colorScheme="5"
                        icon={<Icon name="shipping-status" />}
                      >
                        Free ship
                      </Badge>
                      <Badge
                        className="ml-3"
                        colorScheme="8"
                        icon={<Icon name="paid-leave" />}
                      >
                        Trả góp 0%
                      </Badge>
                    </div>
                  </StandardListItem>
                  <StandardListItem>
                    <Title level="H4">Iphone 18 Pro Max ultra</Title>
                  </StandardListItem>
                  <StandardListItem>
                    <div className="flex justify-center items-center">
                      <Title className="text-red-500" level="H3">
                        {REGEX.dotDecimal(23990000)} đ
                      </Title>
                      <Badge className="ml-2" colorScheme="2">
                        -20%
                      </Badge>
                    </div>
                  </StandardListItem>
                  <StandardListItem>
                    <div className="flex justify-center items-center">
                      <span className="line-through text-slate-400 text-lg">
                        {REGEX.dotDecimal(33990000)} đ
                      </span>
                    </div>
                  </StandardListItem>
                  <StandardListItem className="py-8">
                    <div className="flex justify-between">
                      <Button
                        design="Emphasized"
                        icon="cart"
                        onClick={function noRefCheck() {}}
                        tooltip="Thêm vào giỏ hàng"
                      >
                        Add cart
                      </Button>
                      <Button
                        icon="heart-2"
                        onClick={function noRefCheck() {}}
                        tooltip="Thêm vào danh sách yêu thích"
                      >
                        Add wishlist
                      </Button>
                    </div>
                  </StandardListItem>
                </List>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
