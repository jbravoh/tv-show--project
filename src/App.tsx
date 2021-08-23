import MainContent from "./components/MainContent";
import AppHeader from "./components/AppHeader";
import episodes from "./episodes.json";
import "./css/App.css";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <MainContent episodes={episodes} />
    </>
  );
}

export default App;
