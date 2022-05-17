import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Navigation from "./components/Navigation/Navigation";
import RobotDetailsPage from "./pages/RobotDetailsPage";
import RobotFormPage from "./pages/RobotFormPage";
import RobotListPage from "./pages/RobotListPage";

function App() {
  return (
    <>
      <Navigation />
      <LoginForm />
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />}></Route>
        <Route path="/robots" element={<RobotListPage />}></Route>
        <Route path="/robots/create" element={<RobotFormPage />}></Route>
        <Route path="/robots/:idRobot" element={<RobotDetailsPage />}></Route>
        <Route path="*" element={<RobotListPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
