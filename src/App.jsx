import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import History from "./History";
import Timer from "./Timer";

function App() {
  const [storageData, setStorageData] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Timer storageData={storageData} setStorageData={setStorageData}/>} />
        <Route path="/history" element={<History storageData={storageData}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
