import './App.css';
import './public/fonts/fonts.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Other from "./pages/Other";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Index />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
  );
}

export default App;

