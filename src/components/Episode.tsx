export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function Episode(props: IEpisode): JSX.Element {
  return (
    <div className="show-container" key={props.id}>
      <h1 className="epsiode-name">
        {props.name} - {props.season}
        {props.number}
      </h1>
      <img className="episode-image" src={props.image.medium} alt="" />
      <p>{props.summary}</p>
    </div>
  );
}

export default Episode;
