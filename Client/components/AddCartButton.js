import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Alert, AlertTitle } from "@material-ui/lab";
import { IconButton, Popover } from "@material-ui/core";
import styles from "../styles/Buttons.module.css";

export default function AddCartButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-label="Adicionar pedido ao carrinho."
        className={styles.addCartIcon}
        onClick={handleClick && props.onClick}
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
