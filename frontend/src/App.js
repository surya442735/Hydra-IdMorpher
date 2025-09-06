import "./App.css";
import FetchConfig from "./components/FetchConfig";
import UpdateRemark from "./components/UpdateRemark";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack Developer Assignment</h1>
        <p>CodeRower Software Pvt Ltd.</p>
      </header>

      <main className="container">
        <div className="task-container">
          <FetchConfig />
        </div>

        <hr className="separator" />

        <div className="task-container">
          <UpdateRemark />
        </div>
      </main>

      <footer className="App-footer">
        <p>Built with React & Node.js</p>
      </footer>
    </div>
  );
}

export default App;
