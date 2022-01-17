import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import List from "./pages/list";
import Message from "./pages/message";
import Layout from "./components/layout";
const App = () => {
  const [records, setRecords] = useState([]);
  const [backupData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            ]
            <Route
              path="/list"
              element={
                <List
                  records={records}
                  setRecords={setRecords}
                  backupData={backupData}
                />
              }
            />
            <Route
              path="/home"
              element={<Home records={records} setRecords={setRecords} />}
            />
            <Route path="/message" element={<Message />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
