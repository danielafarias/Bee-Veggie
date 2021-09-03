import React from 'react';
import Button from '@material-ui/core/Button';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import styles from '../styles/Buttons.module.css';


export default function AccessButton() {

  return (
    <div className={styles.accessButton}>
     <Button
        variant="outlined"
        className={styles.button}
        endIcon={<RestaurantMenuIcon/>}
        href='/restricted-access'
      >
        Restrito
      </Button>
    </div> 
  
  );
}