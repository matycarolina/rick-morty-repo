import React from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { columnsCustom } from './components/columns'
import { useLocations } from "../../hooks/useLocations";

const Locations = () => {
  const { locations } = useLocations();

  const options: MUIDataTableOptions = {
    selectableRows: "none",
    responsive: "standard",
    download: "false",
    filter: "false",
    print: "false",
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Ubicaciones</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Ubicaciones</h1>
      <MUIDataTable
        title={"Lista de Ubicaciones"}
        columns={columnsCustom}
        data={locations}
        options={options}
      />
    </>
  );
};

export default Locations;
