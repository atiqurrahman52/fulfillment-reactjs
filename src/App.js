import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Faq from "./pages/Faq";
import Contact from "./components/contact/Contact";
import Legal from "./components/legal/Legal";
import About from "./pages/About";
import Home from "./pages/Home";
import Career from "./pages/Career";
import NotFound from "./components/notFound/NotFound";

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
        <Route path="*"  element={<NotFound/>} />
           
        </Route>
      </Routes>
  );
}

export default App;
