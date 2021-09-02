import styles from "../css/ShowAllEpisodes.module.css";

interface ShowAllEpisodeButtonProps {
  handleResetButton: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ShowAllEpisodesButton({
  handleResetButton,
}: ShowAllEpisodeButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={handleResetButton}>
      Show all Episodes
    </button>
  );
}
