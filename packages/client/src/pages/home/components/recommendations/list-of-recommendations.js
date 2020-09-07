import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_RECOMMENDATIONS } from "./get-recommendations";

import RecommendationsByKey from "./recommendations-by-key";

export default function ListsOfRecommendations({ currentTrack }) {
  const { loading, error, data, client } = useQuery(GET_RECOMMENDATIONS, {
    variables: { currentTrack: currentTrack }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return Object.values(data.recommendedTracksByKey).map(
    (tracksByKey, index) => {
      return (
        <RecommendationsByKey
          key={index}
          tracksByKey={tracksByKey}
          client={client}
        />
      );
    }
  );
}