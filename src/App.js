import { ScrollingProvider, Section } from "react-scroll-section";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import MySkills from "./components/MySkills/index";
import PageNotFound from "./components/PageNotFound/index";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div>
      <div>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{
            height: "100vh",
            position: "fixed",
            background: "#000",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        />
      </div>

      <Router className="App">
        <Switch>
          <Route exact path="/">
            <ScrollingProvider scrollBehavior="smooth">
              <Navbar />
              <Section id="home">
                <Home />
              </Section>
              <Section id="about">
                <About />
              </Section>
              <Section id="projects">
                <Projects />
                <MySkills />
              </Section>
              <Section id="contacts">
                <Contact />
              </Section>
              <Footer />
            </ScrollingProvider>
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
