import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useCharacters } from "../../hooks/useCharacters";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { columnsCustom } from "./components/columns";
import ComboBox from "../../components/ComboBox";
import { speciesOptions, statusOptions } from "./components/optionsCombo";

const Characters = () => {
  const { characters } = useCharacters();
  const [selected, setSelected] = useState();
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [cols, setCols] = useState(columnsCustom);

  const options: MUIDataTableOptions = {
    selectableRows: "none",
    responsive: "standard",
    download: "false",
    filter: "false",
    print: "false",
  };

  const handleSelect: any = (value: any) => {
    setSelected(value);
    console.log(selected, "opcion sleccionada");
  };

  const onFilterSpecies: any = (value: any) => {
    setSelectedSpecies(value);
    const filteredCols = [...cols];
    let filterList: any = [];
    if (value !== "") {
      filterList = [value];
    }
    // Target the column to filter on.
    filteredCols[3].options.filterList = filterList;
    setCols(filteredCols);
  };

  const onFilterStatus: any = (value: any) => {
    setSelectedStatus(value);
    const filteredCols = [...cols];
    let filterList: any = [];
    if (value !== "") {
      filterList = [value];
    }
    // Target the column to filter on.
    filteredCols[2].options.filterList = filterList;
    setCols(filteredCols);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty | Personajes</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>Personajes</h1>
        <ComboBox
          onSelect={handleSelect}
          onFilter={onFilterSpecies}
          options={speciesOptions}
          label="Epecies"
        />
        <br />
        <ComboBox
          onSelect={handleSelect}
          onFilter={onFilterStatus}
          options={statusOptions}
          label="Estado"
        />
        <br />
        <MUIDataTable
          title={"Lista de Personajes"}
          columns={cols}
          data={characters}
          options={options}
        />
      </div>
    </>
  );
};

export default Characters;
