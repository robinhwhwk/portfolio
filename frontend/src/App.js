import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import Projects component
import Projects from "./components/Projects";

function App() {
  return (
      <>
          {/* This is the alias of BrowserRouter i.e. Router */}
          <Router>
              <Routes>
                  {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
                  <Route
                      exact
                      path="/"
                      element={<Home />}
                  />

                  <Route
                      exact
                      path="/Home"
                      element={<Home />}
                  />

                  {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
                  <Route
                      path="/Projects"
                      element={<Projects />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;