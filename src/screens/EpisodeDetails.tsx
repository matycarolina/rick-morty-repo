import React from "react";
import style from "../../styles/Details.module.css";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useSingleEpisode } from "../hooks/useEpisodes";
import { Typography } from "@mui/material";

const EpisodeDetails = () => {
  const router = useRouter();
  const { episodeId } = router.query;

  const { episode } = useSingleEpisode(episodeId as string);

  return (
    <>
      <h1 className={styles.title}>Detalles del Episodio</h1>
      <div className={style.profile_card_container}>
        <div className={style.profile_description}>
          <Typography variant="h4">{episode.name}</Typography>
        </div>
        <div className={style.profile_stats}>
          <div>
            <p>Fecha de Emision: {episode.air_date}</p>
          </div>
          <div>
            <p>Episodio: {episode.episode}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeDetails;
