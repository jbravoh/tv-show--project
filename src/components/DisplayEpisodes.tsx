import Episode, { IEpisode } from "./Episode";
import styles from "../css/DisplayEpisode.module.css";

interface DisplayEpisodeProps {
  selectEpisode: string;
  searchTerm: string;
  episodeData: IEpisode[];
  handleResetButton: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DisplayEpisodes({
  selectEpisode,
  searchTerm,
  episodeData,
  handleResetButton,
}: DisplayEpisodeProps): JSX.Element {
  const searchEpisodes = episodeData
    .filter(
      (episode) =>
        episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((episode) => (
      <Episode
        key={episode.id}
        id={episode.id}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={{
          medium: episode.image.medium,
        }}
        summary={episode.summary}
      />
    ));

  const selectedEpisode = episodeData
    .filter((episode) => episode.name === selectEpisode)
    .map((episode) => (
      <Episode
        key={episode.id}
        id={episode.id}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={{
          medium: episode.image.medium,
        }}
        summary={episode.summary}
      />
    ));

  return (
    <>
      {selectEpisode !== "default" ? (
        <button onClick={handleResetButton}>Show all Episodes</button>
      ) : (
        <p>
          Displaying {searchEpisodes.length}/{episodeData.length} episodes
        </p>
      )}
      <div className={styles.container}>
        {selectEpisode !== "default" ? selectedEpisode : searchEpisodes}
      </div>
    </>
  );
}
