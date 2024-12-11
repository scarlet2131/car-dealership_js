import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCar from "./AddCar.tsx";
import Layout from "./Layout.tsx";
import CarDetails from "./CarDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="car/:id" element={<CarDetails />} /> {/* Dynamic ID */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
