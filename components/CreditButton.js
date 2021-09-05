import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Cart.module.css";

export default function CreditButton(props) {
  return (
    <IconButton>
      <img src="images/credit.svg" className={styles.payment} alt="Crédito" onClick={props.onClick}/>
    </IconButton>
  );
}
