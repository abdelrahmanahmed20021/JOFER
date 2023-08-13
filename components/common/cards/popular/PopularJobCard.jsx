import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./popularjobcard.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const PopularJobCard = ({ item, selectedJob, handelCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handelCardPress(item)}
      >
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{ uri: item?.employer_logo }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default PopularJobCard;
