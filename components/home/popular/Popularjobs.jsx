/* cSpell:disable */
import React from "react";

import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();

  const { data, error, refetch, isLoading } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        )}
        {error && <Text>Somthing Went Wrong !</Text>}
        {!isLoading && (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
