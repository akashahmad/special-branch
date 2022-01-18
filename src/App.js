import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import List from "./pages/list";
import Message from "./pages/message";
import Layout from "./components/layout";
const App = () => {
  const [records, setRecords] = useState([]);
  const [backupData , setBackupData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route
            exact path="/"
              element={<Home records={records} setRecords={setRecords} setBackupData={setBackupData} />}
            />
          <Route path="/login" element={<Login />} />
            <Route
             exact path="/list"
              element={
                <List
                  records={records}
                  setRecords={setRecords}
                  backupData={backupData}
                />
              }
            />
            <Route exact path="/message" element={<Message />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
