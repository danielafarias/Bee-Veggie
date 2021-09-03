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

export default function HeaderBar(props) {
  return (
    <div className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" noWrap>
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              {props.icon1}
              {props.icon2}
              <IconButton
                href="https://github.com/danielafarias/Bee-Veggie"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
