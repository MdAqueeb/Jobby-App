import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import LoginFailure from "./pages/LoginFailure";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/failure" element={<LoginFailure />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}

export default App;
