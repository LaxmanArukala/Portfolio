import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
// import publicRoutes from "./routes/PublicRoutes";
import TwodModels from "./pages/TwodModels";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="twod-models" element={<TwodModels />} />
          {/* {publicRoutes.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })} */}

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
