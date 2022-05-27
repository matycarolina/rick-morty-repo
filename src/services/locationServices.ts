import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import { Location } from "../types/location";

const getLocations = gql`
  query Locations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const getSingleLocation = gql`
  query SingleLocation($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      type
      dimension
    }
  }
`;

export const getLocationsService = async (): Promise<Location> => {
  const data = await client.query({
    query: getLocations,
  });
  console.log(data.loading, "aqui");
  return {
    loading: data.loading,
    data: data.data.locations.results,
  };
};

export const getSingleLocationService = async (
  locationId: string
): Promise<Location> => {
  const data = await client.query({
    query: getSingleLocation,
    variables: { locationId },
  });
  console.log(data.loading, "indivi");
  return {
    loading: data.loading,
    data: data.data.location,
  };
};
