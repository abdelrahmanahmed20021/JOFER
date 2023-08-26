import React from "react";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { checkImageURL } from "../../../../Utils";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handelCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handelCardPress(item)}
      >
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{
              uri: checkImageURL(item.employer_logo)
                ? item.employer_logo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfWkXDBlmj7o9ugp3PrXmzumRiEms-i08YA10GNgOtA&s",
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName}>{item.employer_name}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)}>
            {item.job_title}
          </Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularJobCard;
