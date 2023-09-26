import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TimerProvider } from "./contexts/TimerContext";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import History from "./History";
import Timer from "./Timer";

function App() {
  return (
    <TimerProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </TimerProvider>
  );
}

export default App;
