import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Hero />
            </>
          } >
          </Route>

          {/* <Route path='/channels' element={
            <>
              <Home />
            </>
          }></Route> */}
        </Routes>
      </Router>
  );
}

export default App;
