import { Route, Routes } from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import Home from "./components/home/Home";
import Faq from "./components/faq/Faq";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import Legal from "./components/legal/Legal";
import About from "./pages/About";

function App() {
  return (
     <Routes>
        <Route exact path="/" element={<BasicLayout />}>
          <Route exact index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Route>
      </Routes>
  );
}

export default App;
