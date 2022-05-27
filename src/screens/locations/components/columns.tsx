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
          <Link href={`/locations/${value}`}>
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
    name: "type",
    label: "Tipo",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "dimension",
    label: "Dimension",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
];
