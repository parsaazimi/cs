import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import MembershipCard from "./components/MembershipCard";
import UserDataPage from "./components/UserDataPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/membershipcard' element={<MembershipCard />} />
        <Route path='/userdatapage' element={<UserDataPage />} />
      </Routes>
            
        
    </div>
  );
}

export default App;
