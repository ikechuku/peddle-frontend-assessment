import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./styles/app.css";
import "./App.scss";
import { ClipLoader } from "react-spinners";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

const ComingSoon = lazy(() => import("./components/ComingSoon"));
const Projects = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));


const App = () => (
  <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex justify-center align-center pt-40 transparent h-screen">
            <ClipLoader size={120} color="aqua" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={ComingSoon} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <Route exact path="/about" component={Projects} />
          <Route exact path="/blog" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
  </BrowserRouter>
);

export default App;
