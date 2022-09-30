import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/lasagna-traditional-italian-pasta-picture-id1252736340?b=1&k=20&m=1252736340&s=170667a&w=0&h=WFeo3UNiTwopDPBr9qrAUnGZuQWLHqQXCrQr__UG7Jo=",
  },
  {
    title: "Tandori Chicken",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$25.50",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
  },
  {
    title: "Chilaquiles",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$15.45",
    image:
      "https://www.thespruceeats.com/thmb/lFrWbdXFUgCJXBuYtPR4pGs0SuU=/1000x1000/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/lasagna-traditional-italian-pasta-picture-id1252736340?b=1&k=20&m=1252736340&s=170667a&w=0&h=WFeo3UNiTwopDPBr9qrAUnGZuQWLHqQXCrQr__UG7Jo=",
  },
  // {
  //   title: "Tandori Chicken",
  //   description: "With butter lettuce, tomato and sauce bechamel",
  //   price: "$25.50",
  //   image:
  //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
  // },
  // {
  //   title: "Chilaquiles",
  //   description: "With butter lettuce, tomato and sauce bechamel",
  //   price: "$15.45",
  //   image:
  //     "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-05-How-To-Chilaquiles%2FJoeLingeman_2019-04-22_PHOTO_Kitchn65454_HT_Chilaquiles",
  // },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;
