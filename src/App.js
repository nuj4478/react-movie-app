import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/Challenges" element={<Home />}></Route>
      <Route path="/Challenges/movie" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;