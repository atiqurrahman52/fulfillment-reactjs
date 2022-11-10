import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/home/Home";

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
   
    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>
</Routes>
</>
  );
}

export default App;
