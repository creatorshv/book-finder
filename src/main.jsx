import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BookProvider } from "./components/BookContext";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>
);
