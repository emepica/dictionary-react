
import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results,setResults]= useState(null);
  let [loaded,setLoaded]=useState(false);
  let [photos, setPhotos]=useState(null);
  
  useEffect(()=>{

    console.log(props.newWord);
  },[props.newWord]);

  function handleResponse(response){
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response){
  setPhotos(response.data.photos);
  }

  function search(){
    //API doc : https://dictionaryapi.dev/
    let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001a78ffd31ee9f4ab6943329ba466e9ca0";
    let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization:`Bearer ${pexelsApiKey}`};
    axios.get(pexelsURL, {headers:headers}).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  function load(){
    setLoaded(true);
    search();
  }

 if (loaded){
  return (
    <div className="Dictionary">
      <section className="search-bar-section">
      <form onSubmit={handleSubmit}>
        <input type="search" className="Search-Bar" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} />
        <button type="Sumbit" className="element-to-hide">Search</button>
      </form>
      <div className="hint">
        Suggested words: sunset, wine, dance, plants, ... 
      </div>
      </section>
      <Results results={results}/>
      <Photos photos={photos}/>
    </div>
  );} else { 
    load();
    return "Loading";}
}