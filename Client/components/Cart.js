import React from "react";
import MoneyButton from "./MoneyButton";
import CreditButton from "./CreditButton";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/router";
import { Grid, Typography, TextField, Chip, Divider } from "@material-ui/core";
import styles from "../styles/Cart.module.css";
import FaceIcon from "@material-ui/icons/Face";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { orderPost } from "../api/Api";
import Menu from './Menu';
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const myId = uuidv4;
const cart = Cart.cart;

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
});
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

export default function Cart() {
  
    socket.on("menu.cart", cart);
    socket.emit("menu.cart", {
      id: myId,
      cart,
    });
    socket.off("menu.cart", cart);
  

  const [name, setName] = React.useState("");
  const [table, setTable] = React.useState("");
  const [moneyClick, setMoneyClick] = React.useState(false);
  const [money, setMoney] = React.useState("");
  const [payment, setPayment] = React.useState("");

  
  const router = useRouter();
  const responseData = Array.from(socket);
  console.log(responseData)

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await orderPost(
        name,
        table,
        order1,
        order2,
        order3,
        order4,
        order5,
        payment,
        money,
        payback
      );
      router.push("/order");
    } catch (err) {
      console.log(err);
    }
  };

  const moneyClickHandler = () => {
    setMoneyClick(true);
    setPayment("Dinheiro");
  };

  const creditClickHandler = () => {
    setMoneyClick(false);
    setPayment("Crédito/Débito");
  };

  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={submitHandler}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h6">Insira suas informações</Typography>
            </Grid>
            <Grid item>
              <div className={styles.textField}>
                <TextField
                  label="Nome"
                  classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item>
              <div className={styles.textField}>
                <TextField
                  label="Mesa"
                  classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                  }}
                  type="number"
                  onChange={(e) => setTable(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item>
              <Chip
                icon={<FaceIcon />}
                label={name}
                variant="outlined"
                className={styles.chip}
              />
              <Chip
                icon={<RestaurantIcon />}
                label={table}
                variant="outlined"
                className={styles.chip}
              />
            </Grid>
          </Grid>

          <Divider />

          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h6">Confirme seu pedido</Typography>
            </Grid>
            {responseData.map(data => (
            <Grid item>
              <FastfoodIcon />
              <Typography variant="p" className={styles.spanBold}>
                {" "}
                {data.title}{" "}
              </Typography>
              <Typography variant="p"> R${data.price} </Typography>
              <DeleteButton />
            </Grid>
            ))}
          </Grid>

          <Divider />

          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h6">Forma de Pagamento</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Selecione dinheiro ou cartão</Typography>
            </Grid>
            <Grid item>
              <div className={styles.cartPayment}>
                <MoneyButton onClick={moneyClickHandler} />
                <CreditButton onClick={creditClickHandler} />
              </div>
            </Grid>
          </Grid>

          <Divider />
          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              {moneyClick == true ? (
                <div className={styles.textField}>
                  <TextField
                    label="Valor em dinheiro"
                    classes={{
                      root: styles.inputRoot,
                      input: styles.inputInput,
                    }}
                    type="number"
                    onChange={(e) => setMoney(e.target.value)}
                  />
                </div>
              ) : (
                <div className={styles.textField}>
                  <TextField
                    label="Valor em dinheiro"
                    classes={{
                      root: styles.inputRoot,
                      input: styles.inputInput,
                    }}
                    type="number"
                    onChange={(e) => setMoney(e.target.value)}
                    disabled
                  />
                </div>
              )}
            </Grid>
          </Grid>

          <Grid container justifyContent="center" spacing={3}>
            <Grid item className={styles.spanBold}>
              <Typography variant="p">Forma de Pagamento</Typography>
              <br />
              <Typography variant="p">Total</Typography>
              <br />
              <Typography variant="p">Dinheiro</Typography>
              <br />
              <Typography variant="p">Troco</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">{payment}</Typography>
              <br />
              <Typography variant="p">R$00</Typography>
              <br />
              {money == "" ? (
                <Typography variant="p">R$00</Typography>
              ) : (
                <Typography variant="p">R${money}</Typography>
              )}
              <br />
              <Typography variant="p">R$00</Typography>
            </Grid>
          </Grid>

          <Divider />
        </form>
      </main>
    </div>
  );
}

// export const client = Cart.name;
// export const tableNumber = Cart.table;
