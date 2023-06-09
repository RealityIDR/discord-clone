import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        ></Route>

        <Route
          exact
          path="/channels"
          element={
            <>
              <Home />
            </>
          }
        ></Route>

        <Route
          exact
          path="/channels/:id"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
