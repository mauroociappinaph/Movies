import { useEffect } from "react";

import { getMovies } from "./utils/api";
import "./App.css";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    getMovies("movie/popular").then((res) => console.log(res));
  };

  return <div className="App">APP</div>;
}

export default App;
