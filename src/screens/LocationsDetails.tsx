import React from "react";
import style from "../../styles/Details.module.css";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useSingleLocation } from "../hooks/useLocations";
import { Typography } from "@mui/material";

const LocationDetails = () => {
  const router = useRouter();
  const { locationId } = router.query;

  const { location } = useSingleLocation(locationId as string);

  return (
    <>
      <h1 className={styles.title}>Detalles de la Ubicacion</h1>
      <div className={style.profile_card_container}>
        <div className={style.profile_description}>
          <Typography variant="h4">{location.name}</Typography>
        </div>
        <div className={style.profile_stats}>
          <div>
            <p>Tipo: {location.type}</p>
          </div>
          <div>
            <p>Dimension: {location.dimension}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
