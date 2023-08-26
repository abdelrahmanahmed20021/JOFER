import React from "react";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { checkImageURL } from "../../../../Utils";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(job.employer_logo)
                ? job.employer_logo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfWkXDBlmj7o9ugp3PrXmzumRiEms-i08YA10GNgOtA&s",
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName}>{job.job_title}</Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NearbyJobCard;
