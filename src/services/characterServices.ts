import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import { Character } from "../types/character";

const getCharacters = gql`
  query Characters {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        location {
          name
          dimension
        }
      }
    }
  }
`;

const getSingleCharacter = gql`
  query SingleCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      gender
      image
      location {
        name
        dimension
      }
    }
  }
`;

export const getCharactersService = async (): Promise<Character> => {
  const data = await client.query({
    query: getCharacters,
  });
  console.log(data.loading, "aqui");
  return {
    loading: data.loading,
    data: data.data.characters.results,
  };
};

export const getSingleCharacterService = async (
  characterId: string
): Promise<Character> => {
  const data = await client.query({
    query: getSingleCharacter,
    variables: { characterId },
  });
  console.log(data.loading, "indivi");
  return {
    loading: data.loading,
    data: data.data.character,
  };
};
