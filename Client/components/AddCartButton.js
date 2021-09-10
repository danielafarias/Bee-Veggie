import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Alert, AlertTitle } from "@material-ui/lab";
import { IconButton, Popover } from "@material-ui/core";
import styles from "../styles/Buttons.module.css";

export default function AddCartButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.addCartIcon}>
      <IconButton
        aria-label="Adicionar pedido ao carrinho."
        onClick={props.onClick}
      >
        <AddShoppingCartIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="success">
          <AlertTitle>Adicionado</AlertTitle>
          Adicionado com sucesso — <strong>cheque seu carrinho!</strong>
        </Alert>
      </Popover>
    </div>
  );
}
