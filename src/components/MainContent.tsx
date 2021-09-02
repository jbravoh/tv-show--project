import { IEpisode } from "./Episode";
import styles from "../css/MainContent.module.css";
import { SearchInput } from "./SearchInput";
import React, { useState, useEffect } from "react";
import DisplayEpisodes from "./DisplayEpisodes";
import Dropdown from "./Dropdown";

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
      </div>

      <DisplayEpisodes
        searchTerm={searchTerm}
        selectEpisode={selectEpisode}
        episodeData={episodeData}
        handleResetButton={handleResetButton}
      />
    </>
  );
}

export default MainContent;
