import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import LoginFailure from "./pages/LoginFailure";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobItemDetails from "./Pages/JobItemDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/failure" element={<LoginFailure />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/job_details" element={<JobItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
