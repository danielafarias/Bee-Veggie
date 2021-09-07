import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/Search.module.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Search(props) {
  return (
    <div className={styles.search}>
      <TextField
        placeholder="Search here…"
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        InputProps={{ endAdornment: <SearchIcon /> }}
        onChange={props.onChange}
      />
    </div>
  );
}
