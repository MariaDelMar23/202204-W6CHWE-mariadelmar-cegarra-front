import { Navigate, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import RobotListPage from "./pages/RobotListPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />}></Route>
        <Route path="/robots" element={<RobotListPage />}></Route>
        <Route path="*" element={<RobotListPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
