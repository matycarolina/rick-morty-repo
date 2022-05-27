import { useState, useEffect } from "react";
import {
  getCharactersService,
  getSingleCharacterService,
} from "../services/characterServices";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await getCharactersService();
      console.log(data);
      setCharacters(data);
    };
    getCharacters();
  }, []);
  return { characters };
};

export const useSingleCharacter = (characterId: string) => {
  const [character, setCharacter] = useState<any>([]);

  useEffect(() => {
    const getSingleCharacter = async () => {
      const { data } = await getSingleCharacterService(characterId);
      console.log(data);
      setCharacter(data);
    };
    getSingleCharacter();
  }, []);
  return { character };
};
