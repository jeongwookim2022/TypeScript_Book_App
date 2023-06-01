import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Siginin from "./pages/Siginin";
import NotFound from "./pages/NotFount";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";

// Applied Error boundary from Life Cycle
// react-error-boundary
// - Uses componentDidCatch. Fall backs to error page if error occurs.
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/signin" element={<Siginin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
