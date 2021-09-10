import React from "react";
import styles from "../styles/Menu.module.css";
import Search from "./Search";
import AddCartButton from "./AddCartButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Badge,
} from "@material-ui/core";
import { getMenu } from "../api/Api";

export default function Menu() {
  const [count, setCount] = React.useState(0);
  const [cart, setCart] = React.useState([]);

  console.log(cart);

  const [includeValue, setIncludeValue] = React.useState("");

  <Search onChange={(e) => setIncludeValue(e.target.value)} />;

  const [menu, setMenu] = React.useState("");

  if (!menu) {
    getMenu().then((res) => setMenu(res));
  }
  const responseData = Array.from(menu);

  const data = responseData.filter((data) => Boolean(data.price));

  const searched = data.filter(
    (v) => v.title.includes(includeValue) || v.tag.includes(includeValue)
  );

  const saveOrder = (props) => {
    if (cart === []) {
      setCart({
        id: props.id,
        title: props.title,
        price: props.price,
      });
    } else {
      setCart((last) => [
        ...last,
        {
          id: props.id,
          title: props.title,
          price: props.price,
        },
      ]);
    }
  };

  const clickHandler = (props) => {
    saveOrder({
      id: props.id,
      title: props.title,
      price: props.price,
    });
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <ImageList rowHeight={200}>
          <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <div className={styles.menuTitle}>
              <Search onChange={(e) => setIncludeValue(e.target.value)} />
              <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </div>
          </ImageListItem>

          {includeValue == null
            ? data.map((data) => (
                <ImageListItem key={props.id}>
                  <img src={props.imageUrl} alt={props.title} />
                  <ImageListItemBar
                    title={props.title}
                    subtitle={<span>R${props.price}</span>}
                    actionIcon={
                      <AddCartButton
                        onClick={() =>
                          clickHandler({
                            id: data._id,
                            title: data.title,
                            price: data.price,
                          })
                        }
                      />
                    }
                  />
                </ImageListItem>
              ))
            : searched.map((data) => (
                <ImageListItem key={data._id}>
                  <img src={data.imageUrl} alt={data.title} />
                  <ImageListItemBar
                    title={data.title}
                    subtitle={<span>R${data.price}</span>}
                    actionIcon={
                      <AddCartButton
                        onClick={() =>
                          clickHandler({
                            id: data._id,
                            title: data.title,
                            price: data.price,
                          })
                        }
                      />
                    }
                  />
                </ImageListItem>
              ))}
        </ImageList>
      </div>
    </div>
  );
}