import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORD COUNT</h1>
      </header>
      <div className="container">
        <div className="row">
          <div class="col-12 col-sm-6 col-md-8">
            1 of 2 Counts the number of words in a block of text.
            <textarea></textarea>
          </div>
          <div class="col-6 col-md-4">
            2 of 2 Counts the number of words in a block of text.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
