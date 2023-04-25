import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  let [progress, setprogress] = useState(0);

  const setProgress = (progress) => {
    setprogress(progress);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      <Router>
        <NavBar capitalizeFirstLetter={capitalizeFirstLetter} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="newsmonkey"
                pageSize={pageSize}
                country="in"
                category="general"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
