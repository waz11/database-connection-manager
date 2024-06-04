import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ConnectionDetails from "./pages/ConnectionDetails/ConnectionDetails";
import Connections from "./pages/Connections/Connections";
import ROUTES from "./routes";

const App = () => {
  return (
    <div className="app">
      <h1>DB Management</h1>
      <div className="page">
        <Routes>
          <Route path={ROUTES.HOME} element={<Connections />} />
          <Route path={ROUTES.CONNECTION} element={<ConnectionDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
