import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderBar from "../components/HeaderBar";
import Search from "../components/Search";
import CartButton from "../components/CartButton";
import OrderButton from "../components/OrderButton";
import AddCartButton from "../components/AddCartButton";
import HeaderLogo from "../components/HeaderLogo";
import AccessButton from "../components/AccessButton";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@material-ui/core";
import { getMenu } from "../api/Api";
import io from "socket.io-client";
import uuid from "uuid/v4";

const myId = uuid();
const socket = io("http://localhost:5000");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

export default function Home() {

  const [includeValue, setIncludeValue] = React.useState("");

  <Search onChange={(e) => setIncludeValue(e.target.value)} />;

  const [menu, setMenu] = React.useState("");

  if (!menu) {
    getMenu().then((res) => setMenu(res));
  }
  const data = Array.from(menu);

  const searched = data.filter(
    (v) => v.title.includes(includeValue) || v.tag.includes(includeValue)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Bee Veggie - Cozinha Vegetariana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <AccessButton />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <HeaderLogo />
        </Grid>
      </Grid>

      <HeaderBar
        title={<Search onChange={(e) => setIncludeValue(e.target.value)} />}
        icon1={<OrderButton />}
        icon2={<CartButton />}
      />

      <main className={styles.main}>
        <div className={styles.root}>
          <ImageList rowHeight={200}>
            <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
              <div className={styles.menuTitle}>
                <Typography variant="h4">Menu</Typography>
              </div>
            </ImageListItem>
            {includeValue == null
              ? data.map((data) => (
                  <ImageListItem key={props.id}>
                    <img src={props.imageUrl} alt={props.title} />
                    <ImageListItemBar
                      title={props.title}
                      subtitle={<span>R${props.price}</span>}
                      actionIcon={<AddCartButton />}
                    />
                  </ImageListItem>
                ))
              : searched.map((data) => (
                  <ImageListItem key={data._id}>
                    <img src={data.imageUrl} alt={data.title} />
                    <ImageListItemBar
                      title={data.title}
                      subtitle={<span>R${data.price}</span>}
                      actionIcon={<AddCartButton />}
                    />
                  </ImageListItem>
                ))}
          </ImageList>
        </div>
      </main>

      <footer className={styles.footer}>
        <Grid container justifyContent="center">
          <Grid item>
            <span>© Daniela Farias</span>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
