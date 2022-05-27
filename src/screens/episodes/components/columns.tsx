import { Typography } from "@mui/material";
import Link from "next/link";

export const columnsCustom = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string) => {
        return (
          <Link href={`/episodes/${value}`}>
            <a>
              <Typography sx={{ textDecoration: "underline" }}>
                {value}
              </Typography>
            </a>
          </Link>
        );
      },
    },
  },
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "air_date",
    label: "Fecha de Emision",
    options: {
      filter: true,
      sort: false,
      filterList: [],
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "episode",
    label: "Episodio",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
];
