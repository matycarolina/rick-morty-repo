import React from "react";
import style from "../../styles/Details.module.css";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useSingleCharacter } from "../hooks/useCharacters";
import { Typography } from "@mui/material";

const CharacterDetails = () => {
  const router = useRouter();
  const { characterId } = router.query;

  const { character } = useSingleCharacter(characterId as string);

  return (
    <>
      <h1 className={styles.title}>Detalles del Personaje</h1>
      <div className={style.profile_card_container}>
        <div className={style.profile_image_container}>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
        <div className={style.profile_description}>
          <Typography variant="h4">{character.name}</Typography>
          <p>
            {character.location?.name} |{" "}
            <span>{character.location?.dimension}</span>
          </p>
        </div>
        <div className={style.profile_stats}>
          <div>
            <p>Estado: {character.status}</p>
          </div>
          <div>
            <p>Especie: {character.species}</p>
          </div>
          <div>
            <p>Genero: {character.gender}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
