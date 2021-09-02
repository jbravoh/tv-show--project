import styles from "../css/AppHeader.module.css";

function AppHeader(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}> TV Shows</h1>
    </header>
  );
}

export default AppHeader;
