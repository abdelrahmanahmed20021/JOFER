/* cSpell:disable */
import React from "react";

import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, error, refetch, isLoading } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        )}
        {error && <Text>Somthing Went Wrong !</Text>}
        {!isLoading &&
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
