import styles from "../css/Episode.module.css";

export interface IEpisode {
  id?: number;
  url?: string;
  name: string;
  season: number;
  number: number;
  type?: string;
  airdate?: string;
  airtime?: string;
  airstamp?: string;
  runtime?: number;
  image?: {
    medium?: string;
    original?: string;
  };
  summary: string;
  _links?: { self: { href: string } };
}

function Episode(props: IEpisode): JSX.Element {
  return (
    <div className={styles.showContainer} key={props.id}>
      <h1 className={styles.episodeName}>
        {props.name} - S{String(props.season).padStart(2, "0")}E
        {String(props.number).padStart(2, "0")}
      </h1>
      {props.image && (
        <img className={styles.episodeImage} src={props.image.medium} alt="" />
      )}
      <p className={styles.summary}>
        {props.summary.replace(/(<([^>]+)>)/gi, "")}
      </p>
    </div>
  );
}

export default Episode;
