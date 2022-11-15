import "./Search.css";
import { useEffect, useState } from "react";

  const Search = ({flats, setFilteredFlats}) => {

    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
      setValue(e.currentTarget.value);
    };

    useEffect(() => {
      setFilteredFlats(
        flats.filter((flat) => {
          return flat.name.toLowerCase().includes(value);
        })
      );
    }, [value]);

    return (
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for flats.."
          value={value}
          onChange={handleOnChange}
        />
      </div>
    );
  };

  export default Search;
