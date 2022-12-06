import "../App/App.css";
import { PeliculasGrid } from "../PeliculasGrid";

function App() {
  return (
    <div>
      <header className="title">Peliculas</header>
      <main>
        <>
          <PeliculasGrid />
        </>
      </main>
    </div>
  );
}

export default App;
