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
          <div className="col-12 col-sm-6 col-md-8">
            <form>
              <div className="container">
                <h2>
                  Place your text in the Textarea and submit your request.
                </h2>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="col-6 col-md-4">
            <div>
              <h2>Results will be shown below after your submission.</h2>
              <div className="card">
                <ul className="list-group list-group-flush">
                  <label className="card-header">CHECK RESULT</label>
                  <li className="list-group-item">Words Count: 0</li>
                  <li className="list-group-item">Characters Count: 0</li>
                  <li className="list-group-item">
                    Characters Count without spacing: 0
                  </li>
                  <li className="list-group-item">Sentence Count: 0</li>
                  <li className="list-group-item">Paragraph Count: 0</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
