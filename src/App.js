import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import Legal from "./components/legal/Legal";

function App() {
  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />} />
    //     {/* <Route exact index element={<Home />} /> */}
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </>

    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
