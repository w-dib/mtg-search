import './App.css';
import MTGLogo from "./images/MTG-Logo.png";
import SearchCard from './SearchCard';


function App() {
  return (
    <div className="container">
      <h1 className="title">
        <img
          src={MTGLogo}
          style={{
            width: "100px",
            verticalAlign: "middle",
            margin: "0 0.5rem 0",
          }}
        ></img>
        Search Engine
      </h1>
      <SearchCard />
    </div>
  );
}

export default App;
