import Tooltip from "./Tooltip";

function App() {
  return (
    <>
      <div className="main">
        <h1>Tooltip Test Project</h1>
        <Tooltip position="bottom" text="Thanks for Hovering! I'm a tooltip">
          <button>Hover on me</button>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
