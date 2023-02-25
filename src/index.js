import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import Blog from "./components/pages/blog";
import Navbar from "./components/navbar";
import NoPage from "./components/pages/error";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route index element={<Landing />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Landing />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

              