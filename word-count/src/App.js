import TextBlog from "./components/TextBlog";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORD COUNT</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-8">
            <TextBlog />
          </div>
          <div className="col-6 col-md-4">
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
