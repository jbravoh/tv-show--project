import {IEpisode} from "./Episode";


interface DisplayNumberOfEpisodesProps {
    searchEpisodes: JSX.Element[]
    episodeData: IEpisode[]
} 

export default function DisplayNumberOfEpisodes({ searchEpisodes, episodeData }: DisplayNumberOfEpisodesProps): JSX.Element {
    return <p>
    Displaying {searchEpisodes.length}/{episodeData.length} episodes
  </p>
}
