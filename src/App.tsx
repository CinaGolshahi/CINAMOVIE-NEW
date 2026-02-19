import { Route, Routes } from "react-router-dom";
import { Home, Movies, Series } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </>
  );
};

export default App;
