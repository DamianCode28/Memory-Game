import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/MemoryGame";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
    </Routes>
  );
}

export default App;
