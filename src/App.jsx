import { useState } from "react";
import History from "./History"
import Timer from "./Timer"

function App() {
  const [storageData, setStorageData] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  return (
    <>
      <Timer storageData={storageData} setStorageData={setStorageData}/>
      <History storageData={storageData}/>
    </>
  )
}

export default App
