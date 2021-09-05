import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Cart.module.css";

export default function MoneyButton(props) {
  return (
    <IconButton>
      <img src="images/money.svg" className={styles.payment} alt="Dinheiro" onClick={props.onClick}/>
    </IconButton>
  );
}
