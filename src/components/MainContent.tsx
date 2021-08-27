import Episode from "./Episode";
import { IEpisode } from "./Episode";
import styles from "../css/MainContent.module.css";

function MainContent(props: { episodes: IEpisode[] }): JSX.Element {
  const showEpisodes = props.episodes.map((episode) => (
    <Episode
      key={episode.id}
      id={episode.id}
      url={episode.url}
      name={episode.name}
      season={episode.season}
      number={episode.number}
      airtime={episode.airtime}
      airdate={episode.airdate}
      airstamp={episode.airstamp}
      runtime={episode.runtime}
      type={episode.type}
      image={{
        medium: episode.image.medium,
        original: episode.image.original,
      }}
      summary={episode.summary}
      _links={episode._links}
    />
  ));

  console.log(props);

  return (
    <main>
      <section className={styles.container}>{showEpisodes}</section>
    </main>
  );
}

export default MainContent;
