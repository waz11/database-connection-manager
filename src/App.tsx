import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectionDetails from "./pages/ConnectionDetails/ConnectionDetails";
import Connections from "./pages/Connections/Connections";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Connections />} />
        <Route path="/connection/:id" element={<ConnectionDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
