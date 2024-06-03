import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectionDetails from "./pages/ConnectionDetails/ConnectionDetails";
import Connections from "./pages/Connections/Connections";
import ROUTES from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Connections />} />
          <Route path={ROUTES.CONNECTION} element={<ConnectionDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
