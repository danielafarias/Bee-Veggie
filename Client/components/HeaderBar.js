import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "../styles/Header.module.css";
import { AccessButton } from "./AccessButton";

export default function HeaderBar(props) {
  return (
    <div className={styles.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justifyContent="flex-end" alignItems="center">
         
            <Grid item>
              <IconButton
                href="https://github.com/danielafarias/Bee-Veggie"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
              <AccessButton />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
