import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import StatusBar from "./components/StatusBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div className="bg-black absolute top-0 left-0 bottom-0 right-0">
      <div className="flex flex-col max-w-lg mx-auto relative max-h-screen overflow-hidden">
        <StatusBar />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Nav />
      </div>
    </div>
  </BrowserRouter>
);
