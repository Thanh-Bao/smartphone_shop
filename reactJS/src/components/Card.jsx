import React from "react";
import {
  StandardListItem,
  Icon,
  Card,
  CardHeader,
  List,
  Button,
  Badge,
  MediaGalleryItem,
  Title,
} from "@ui5/webcomponents-react";
import REGEX from "regex-awesome";

const CustomCard = () => {
  return (
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
            <Badge colorScheme="5" icon={<Icon name="shipping-status" />}>
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
  );
};

export default CustomCard;
