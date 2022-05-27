import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavItem } from "reactstrap";
import { Divider, Typography } from "@mui/material";
import styles from "../../styles/Modules.module.css";

const Sidebar = () => {
  return (
    <>
      <Nav vertical>
        <NavItem className={styles.image}>
          <Image
            src="/rickmorty-logo.png"
            width={213}
            height={82}
            alt="Rick and Morty logo"
          />
        </NavItem>
        <Divider />
        <NavItem className={styles.single}>
          <Link href="/">
            <a>
              {" "}
              <Typography> Home</Typography>
            </a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem className={styles.single}>
          {" "}
          <Link href="/characters">
            <a>
              <Typography> Personajes</Typography>
            </a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem className={styles.single}>
          <Link href="/locations">
            <a>
              <Typography> Ubicaciones</Typography>
            </a>
          </Link>
        </NavItem>
        <Divider />
        <NavItem className={styles.single}>
          <Link href="/episodes">
            <a>
              <Typography> Episodios</Typography>
            </a>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};

export default Sidebar;
