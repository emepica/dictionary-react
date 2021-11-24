
import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results,setResults]= useState(null);
  let [loaded,setLoaded]=useState(false);

  function handleResponse(response){
    setResults(response.data[0]);
  }
  
  
  function search(){
    //API doc : https://dictionaryapi.dev/
    let apiURL =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
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
      <section>
      <form onSubmit={handleSubmit}>
        <input type="search" className="Search-Bar" placeholder="Type a word" onChange={handleKeywordChange} />
        <button type="Sumbit">Search</button>
      </form>
      <div className="hint">
        Suggested words: sunset, wine, dance, plants, ... 
      </div>
      </section>
      <Results results={results}/>
    </div>
  );} else { 
    load();
    return "Loading";}
}