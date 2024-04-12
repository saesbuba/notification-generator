import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import LogHistory from "./components/LogHistory";

function App() {
  const [logs, setLogs] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <LogHistory logs={logs} />
      </div>
    </div>
  );
}

export default App;
