import "./components/Flat.css"
import "./App.css";
import "./components/Map.css"
import Flat from "./components/Flat"
import { useEffect, useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search"


function App() {
  const [flats, setFlats] = useState([])
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [filteredFlats, setFilteredFlats] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    )
      .then((res) => res.json())
      .then((flats) => {
        setFlats(flats);
        setFilteredFlats(flats) // populate all the flats in filteredFlats as well
      });
  }, []);

  return (
    <div className="App">
      <main>
        <div className="contents">

          <Search flats={flats} setFilteredFlats={setFilteredFlats} />
          <div className="flats-wrapper">
            { filteredFlats.map((flat) => (
              <Flat key={flat.id} flat={flat} setSelectedFlat={setSelectedFlat} />
            ))}
          </div>
        </div>
      </main>

      <div className="map">
        <Map flats={filteredFlats} selectedFlat= {selectedFlat} />
      </div>
    </div>


  );
}

export default App;
