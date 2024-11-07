import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals.ts";

// This function will handle the performance data
const handlePerformanceData = (metric: { name: string; value: number }) => {
  console.log(metric); // Log the performance metric
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Call reportWebVitals with your callback function to track the metrics
reportWebVitals(handlePerformanceData);
