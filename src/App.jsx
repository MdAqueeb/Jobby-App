import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import LoginFailure from "./pages/LoginFailure";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/failure" element={<LoginFailure />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
