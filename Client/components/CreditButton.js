import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Cart.module.css";
import CreditCardIcon from '@material-ui/icons/CreditCard';

export default function CreditButton(props) {
  return (
    <IconButton onClick={props.onClick}>
      {/* <img src="images/credit.svg" className={styles.payment} alt="Crédito" onClick={props.onClick}/> */}
      <CreditCardIcon />
    </IconButton>
  );
}
