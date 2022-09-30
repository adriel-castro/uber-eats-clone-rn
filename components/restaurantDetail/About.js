import { View, Text, Image } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
//   name: "FarmHouse Kitchen Thai Cuisine",
//   image:
//     "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
//   price: "$$",
//   reviews: "1500",
//   rating: "5",
//   categories: [
//     { title: "Thai" },
//     { title: "Comfort Food" },
//     { title: "Cake" },
//     { title: "Ice Cream" },
//   ],
// };

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } =
    // yelpRestaurantInfo;
    route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  // const image =
  //   "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=";
  // const title = "FarmHouse Kitchen Thai Cuisine";
  // const description = "Thai • Comfort Food • $$ • 🎫 • 4 ⭐ (2913+)";

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      fontSize: 15.5,
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
    }}
  >
    {description}
  </Text>
);
