import IconButton from "@material-ui/core/IconButton";
import styles from "../styles/Cart.module.css";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export default function MoneyButton(props) {
  return (
    <IconButton onClick={props.onClick}>
      {/* <img src="images/money.svg" className={styles.payment} alt="Dinheiro" onClick={props.onClick}/> */}
      <LocalAtmIcon />
    </IconButton>
  );
}
