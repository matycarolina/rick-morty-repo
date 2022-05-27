import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import { Episode } from "../types/episodes";

const getEpisodes = gql`
  query Episodes {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const getSingleEpisode = gql`
  query SingleEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      air_date
      episode
    }
  }
`;

const getDates = gql `
query Dates {
  episodes {
    results {
      air_date
    }
  }
}
`

export const getEpisodesService = async (): Promise<Episode> => {
  const data = await client.query({
    query: getEpisodes,
  });
  return {
    loading: data.loading,
    data: data.data.episodes.results,
  };
};

export const getSingleEpisodeService = async (
    episodeId: string
): Promise<Episode> => {
  const data = await client.query({
    query: getSingleEpisode,
    variables: { episodeId },
  });
  return {
    loading: data.loading,
    data: data.data.episode,
  };
};

export const getDatesService = async (): Promise<Episode> => {
  const data = await client.query({
    query: getDates,
  });
  return {
    loading: data.loading,
    data: data.data.episodes.results,
  };
};
