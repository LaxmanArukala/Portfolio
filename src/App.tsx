import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
