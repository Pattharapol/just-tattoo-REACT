import "./App.css";

import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        <TattooItem />
        <TattooItem />
        <TattooItem />
        <TattooItem />
      </div>
      {/* <TattooPost /> */}
    </div>
  );
}

export default App;
