import styles from "../styles/Header.module.css";

export default function HeaderLogo() {
  return (
    <a href='/'>
      <img src="images/bee-veggie.svg" className={styles.Logo}/>
    </a>
  );
}
