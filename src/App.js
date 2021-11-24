import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    
    <div className="App">
      <div className="container">
      <header className="App-header">
       Dictionary
      </header>
      <main>
        <Dictionary defaultKeyword="wave"/>
      </main>
      <footer>This project was built by Emeline Picard and is <a href="https://github.com/emepica/dictionary-react">open-sourced</a></footer>
    </div>
    </div>
  );
}

export default App;
