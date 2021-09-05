import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Cart.module.css";

export default function PaypalButton(props) {
  return (
    <IconButton>
      <img src="images/paypal.svg" className={styles.payment} alt="Paypal" onClick={props.onClick}/>
    </IconButton>
  );
}
