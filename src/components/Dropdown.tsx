import { IEpisode } from "./Episode";
import styles from "../css/Dropdown.module.css";

interface DropdownProps {
  episodeData: IEpisode[];
  handleSelectEpisode: React.ChangeEventHandler<HTMLSelectElement>;
  selectEpisode: string;
}

export default function Dropdown({
  episodeData,
  handleSelectEpisode,
  selectEpisode,
}: DropdownProps): JSX.Element {
  return (
    <>
      <select
        value={selectEpisode}
        onChange={handleSelectEpisode}
        className={styles.select}
      >
        <option value={"default"}>Select an episode</option>
        {episodeData.map((episode) => (
          <option
            key={episode.id}
            value={episode.name}
            className={styles.option}
          >
            S{String(episode.season).padStart(2, "0")}E
            {String(episode.number).padStart(2, "0")} - {episode.name}
          </option>
        ))}
      </select>
    </>
  );
}
