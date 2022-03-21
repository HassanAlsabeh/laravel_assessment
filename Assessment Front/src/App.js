import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyList from "./pages/Companies/CompanyList";
import Dashboard from "./pages/dashboard/dashboard";
import EmployeesList from "./pages/Employees/EmployeesList";
import Welcome from "./pages/welcome/Welcome";
function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          exact
          element={
              <Welcome />
          }
        />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route
          path="/show-employees"
          exact
          element={
              <EmployeesList />
          }
        />
             <Route
          path="/show-companies"
          exact
          element={
              <CompanyList />
          }
        />

  
      </Routes>
    </Router>
  );
}
export default App;
