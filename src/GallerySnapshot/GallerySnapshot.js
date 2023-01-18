import React, { useState } from "react";
import axios from "axios";
import { Gallery } from "../Gallery";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

export const GallerySnapshot = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
  };
  return (
    <div>
      <center>
        <h1>Gallery Snapshot</h1>
        <br />
        <form onSubmit={submitHandler}>
          <input type={"text"} value={search} onChange={changeHandler} /> <br />
          <br />
          <input type={"submit"} />
        </form>
        {data.length !== 0 ? (
          <Gallery imagesData={data} />
        ) : (
          <h2>Search your favourite Photos Here</h2>
        )}
      </center>
    </div>
  );
};
