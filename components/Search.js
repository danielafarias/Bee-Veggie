import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from '../styles/Search.module.css';
import SearchIcon from "@material-ui/icons/Search";

export default function Search(props) {

const [includeValue, setIncludeValue] = React.useState('')

  return (
    <div className={styles.search}>
      <TextField
        placeholder="Search here…"
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        color='#5A816F'
        InputProps={{ endAdornment: <SearchIcon/> }}
        onChange={props.onChange}
      />
    </div>
  );
}


