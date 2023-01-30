import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReadyToGo from "./pages/ReadyToGo";
import CmapignSettings from "./pages/CmapignSettings";
import ChooseProduct from "./pages/ChooseProduct";
import WhatYouWantToDo from "./pages/WhatYouWantToDo";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ready-to-go":
        title = "";
        metaDescription = "";
        break;
      case "/cmapign-settings":
        title = "";
        metaDescription = "";
        break;
      case "/choose-product":
        title = "";
        metaDescription = "";
        break;
      case "/what-you-want-to-do":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/ready-to-go" element={<ReadyToGo />} />

      <Route path="/cmapign-settings" element={<CmapignSettings />} />

      <Route path="/choose-product" element={<ChooseProduct />} />

      <Route path="/what-you-want-to-do" element={<WhatYouWantToDo />} />
    </Routes>
  );
}
export default App;
