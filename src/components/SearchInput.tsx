import style from "../css/SearchInput.module.css";

interface searchInputProps {
  searchTerm: string;
  handleSearchTerm: React.ChangeEventHandler<HTMLInputElement>;
}

export function SearchInput({
  searchTerm,
  handleSearchTerm,
}: searchInputProps): JSX.Element {
  return (
    <>
      <input
        className={style.input}
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="search episode"
      />
    </>
  );
}
