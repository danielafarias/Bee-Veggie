import React from "react";
import Button from "@material-ui/core/Button";
import styles from "../styles/Buttons.module.css";

export default function ConfirmOrderButton() {
  return (
    <div className={styles.accessButton}>
      <Button
        variant="outlined"
        className={styles.button}
      >
        Finalizar Pedido
      </Button>
    </div>
  );
}
