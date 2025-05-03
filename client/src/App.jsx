import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TerminalPage from "./pages/TerminalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
