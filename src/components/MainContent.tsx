import Episode, { IEpisode } from "./Episode";
import styles from "../css/MainContent.module.css";
import { SearchInput } from "./SearchInput";
import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import ShowAllEpisodesButton from "./ShowAllEpisodesButton";
import DisplayNumberOfEpisodes from "./DisplayNumberOfEpisodes";

function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectEpisode, setSelectEpisode] = useState<string>("default");
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);

  const handleSelectEpisode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectEpisode(event.target.value);
    setSearchTerm("");
  };

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectEpisode("default");
  };

  const handleResetButton = () => {
    setSearchTerm("");
    setSelectEpisode("default");
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody: IEpisode[] = await res.json();
      setEpisodeData(jsonBody);
    };

    fetchEpisodes();
  }, []);

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
          medium: episode.image?.medium,
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
          medium: episode.image?.medium,
        }}
        summary={episode.summary}
      />
    ));

  return (
    <>
      <div className={styles.search}>
        <Dropdown
          episodeData={episodeData}
          handleSelectEpisode={handleSelectEpisode}
          selectEpisode={selectEpisode}
        />
        <SearchInput
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        {selectEpisode !== "default" ? (
          <ShowAllEpisodesButton handleResetButton={handleResetButton} />
        ) : (
          <DisplayNumberOfEpisodes
            searchEpisodes={searchEpisodes}
            episodeData={episodeData}
          />
        )}
      </div>
      <div className={styles.container}>
        {selectEpisode !== "default" ? selectedEpisode : searchEpisodes}
      </div>
    </>
  );
}

export default MainContent;
