import './App.css';
import Dictionary from './Dictionary';

function App(props) {  
  return (
    
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src="./dictionary.jpg" alt="dictionary icon" className="image-fluid"/> 
       Dictionary
      </header>
      <span>Try looking up some word </span>
      <main>
        <Dictionary defaultKeyword="Wave"/>
      </main>
      <footer>This project was built by Emeline Picard and is <a href="https://github.com/emepica/dictionary-react">open-sourced</a></footer>
    </div>
    </div>
  );
}

export default App;
